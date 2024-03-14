'use client'
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const JourneyMob = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const initCanvas = () => {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      const resizeCanvas = () => {
        let canvasWidth, canvasHeight;
        if (window.innerWidth < 489) {
          canvasWidth = 300;
          canvasHeight = 180;
        } else {
          canvasWidth = 500;
          canvasHeight = 500;
        }
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        render();
      };

      window.addEventListener("resize", resizeCanvas);

      const imagePath = "https://res.cloudinary.com/dca7qbjyl/image/upload/v1710247902/Our-Journey_illustration1_iphone_qtv4s2.png";
      const img = new Image();
      img.src = imagePath;
      let loadedImages = 0;

      const render = () => {
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

      img.onload = () => {
        loadedImages++;
        if (loadedImages === 1) {
          render();
        }
      };

      gsap.to(canvas, {
        opacity: 1,
        scrollTrigger: {
          start: "top 40%",
          end: "top 1%",
          trigger: "#JourneyMob",
          scrub: true,
        },
      });

      // Initial setup
      resizeCanvas();
    };

    initCanvas();
  }, []);

  return <canvas id="JourneyMob" ref={canvasRef}></canvas>;
};

export default JourneyMob;
