'use client'
import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const JourneyAnimation = () => {
  const canvasMedRef = useRef(null);
  // const sequence = gsap.timeline();
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const initMedCanvas = () => {
      const canvas = canvasMedRef.current;
      if (!canvas) return; // Ensure canvas exists
      const context = canvas.getContext("2d");

      const renderMed = () => {
        if (loadedImages === frameCount) {
          const frameIndex = Math.max(0, Math.min(sequence.frame, frameCount - 1));
          scaleImageMed(images[frameIndex], context);
        }
      };

      const resizeMedCanvas = () => {
        const setCanvasSize = () => {
          if (window.innerWidth < 500) {
            return { width: 300, height: 300 };
          } else if (window.innerWidth < 767) {
            return { width: 500, height: 454 };
          } else if (window.innerWidth < 1024) {
            return { width: 600, height: 500 };
          } else if (window.innerWidth < 1400) {
            return { width: 800, height: 700 };
          } else {
            return { width: 900, height: 800 };
          }
        };
        const { width, height } = setCanvasSize();
        canvas.width = width;
        canvas.height = height;

        renderMed();
      };

      window.addEventListener("resize", resizeMedCanvas);
      // Cleanup to prevent memory leaks
      const cleanup = () => {
        window.removeEventListener("resize", resizeMedCanvas);
      };

      const frameCount = 68;
      const currentFrameMed = index =>
        `https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/our_journey_animation/our-journey_animation_${(index + 1)
          .toString()
          .padStart(2, "0")}.png`;

      const images = [];
      const sequence = {
        frame: 1,
      };

      let loadedImages = 0;

      const loadImagesMed = () => {
        for (let i = 0; i < frameCount; i++) {
          const img = new Image();
          img.src = currentFrameMed(i);
          img.onload = () => {
            loadedImages++;
            if (loadedImages === frameCount) {
              renderMed();
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
          start: "top 70%",
          end: "+=100%",
          trigger: canvas,
          markers: true,
          // pin: true,
          // markers: false,
          // pinSpacing: true,
          reverse: true,
          scrub: 3,
          onEnter: () => { loadImagesMed(); },
          onEnterBack: () => { loadImagesMed(); },
          onLeave: cleanup,
          onLeaveBack: cleanup,
        },
        onUpdate: renderMed,
      });

      const scaleImageMed = (img, ctx) => {
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
      resizeMedCanvas();
    };

    initMedCanvas();
    // Cleanup function to prevent memory leaks
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [canvasMedRef]);
  return <canvas id="page4" ref={canvasMedRef}></canvas>;
};
export default JourneyAnimation;
