'use client';
import React, { useEffect, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const HeroAnimationA = () => {
  const canvasRef = useRef(null);

  useLayoutEffect(() => {

    const initCanvasTop = () => {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      const renderTop = () => {
        if (loadedImages === frameCount) {
          const frameIndex = Math.max(0, Math.min(sequence.frame, frameCount - 1));
          scaleImageTop(images[frameIndex], context);
        }
      };

      const resizeCanvasTop = () => {
        if (window.innerWidth < 768) {
          canvas.width = 400;
          canvas.height = 700;
        } 
        else if (window.innerWidth < 879) {
          canvas.width = 700;
          canvas.height = 1000;
        }
        else if (window.innerWidth < 992) {
          canvas.width = window.innerWidth * 2;
          canvas.height = window.innerHeight* 3;
        }
        else if (window.innerWidth < 1024) {
          canvas.width = window.innerWidth * 1.4;
          canvas.height = window.innerHeight* 2;
        }else if (window.innerWidth < 1300) {
          canvas.width = window.innerWidth * 1.3;
          canvas.height = window.innerHeight* 2;
        } else {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight * 2;
        }

        renderTop();
      };

      window.addEventListener("resize", resizeCanvasTop);

      const frameCount = 53;
      const currentFrame = (index) => {
        const imagePath = `https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/Hero_scroll_animation/Homepage_animation_${(index + 1)
          .toString()
          .padStart(2, "0")}.png`;
        return imagePath;
      };

      const images = [];
      const sequence = {
        frame: 0,
      };

      let loadedImages = 0;

      const loadImagesTop = () => {
        for (let i = 0; i < frameCount; i++) {
          const img = new Image();
          img.src = currentFrame(i);
          img.onload = () => {
            loadedImages++;
            if (loadedImages === frameCount) {
              renderTop();
            }
          };
          images.push(img);
        }
      };

      gsap.to(sequence, {
        frame: frameCount + 1,
        snap: "frame",
        ease: "power1.inOut",
        // duration: 6,
        scrollTrigger: {
          scrub: true,
          start: "top 60%",
          end: "bottom -200%",
          trigger: ".banner",
          // markers: true
        },
        onUpdate: renderTop,
      });

      const scaleImageTop = (img, ctx) => {
        const canvas = ctx.canvas;
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          centerShift_x,
          centerShift_y,
          img.width * ratio,
          img.height * ratio
        );
      };

      // Initial setup
      loadImagesTop();
      resizeCanvasTop();
    };

    initCanvasTop();
  }, [canvasRef]);

  return <canvas id="page1" className="box"  ref={canvasRef}></canvas>;
};

export default HeroAnimationA;

