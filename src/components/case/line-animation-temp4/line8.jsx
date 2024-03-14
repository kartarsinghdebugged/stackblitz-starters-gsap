'use client';
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const LineAnimation48 = () => {

  const canvasRef = useRef(null);



  useEffect(() => {

    const initCanvas = () => {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      const render = () => {
        if (loadedImages === frameCount) {
          const frameIndex = Math.max(0, Math.min(sequence.frame, frameCount - 1));
          scaleImage(images[frameIndex], context);
        }
      };

      const resizeCanvas = () => {
        if (window.innerWidth < 576) {
          canvas.width = 302;
          canvas.height = 359;
        } 
        else if (window.innerWidth < 767) {
          canvas.width = 302;
          canvas.height = 359;
        }else if (window.innerWidth < 1024) {
          canvas.width = 302;
          canvas.height = 359;
        } else {
          canvas.width = 302;
          canvas.height = 359;
        }

        render();
      };

      window.addEventListener("resize", resizeCanvas);

      const frameCount = 15;
      const currentFrame = (index) => {
        const imagePath = `https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/lineaniupadted4/8/Line_${(index + 0)
          .toString()
          .padStart(2, "0")}.png`;
        return imagePath;
      };
      const images = [];
      const sequence = {
        frame: 0,
      };

      let loadedImages = 0;

      const loadImages = () => {
        for (let i = 0; i < frameCount; i++) {
          const img = new Image();
          img.src = currentFrame(i);
          img.onload = () => {
            loadedImages++;
            if (loadedImages === frameCount) {
              render();
            }
          };
          images.push(img);
        }
      };

      gsap.to(sequence, {
        frame: frameCount + 1,
        snap: "frame",
        ease: "power1.inOut",
        scrollTrigger: {
          start: "top 90%",
          end: "top 1%",
          trigger: "#page_48",
          scrub: 3,
          // markers: true
        },
        onUpdate: render,
      });

      const scaleImage = (img, ctx) => {
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
      loadImages();
      resizeCanvas();
    };

    initCanvas();
  }, []);

  return <canvas id="page_48" className=""  ref={canvasRef}></canvas>;
};

export default LineAnimation48;
