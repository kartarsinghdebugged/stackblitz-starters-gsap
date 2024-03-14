import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const HomeExplorersAnimation = () => {
  const canvasRef = useRef(null);
  
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const initCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas) return; // Ensure canvas exists
      const context = canvas.getContext("2d");

      const resizeCanvas = () => {
        canvas.width = 600;
        canvas.height = 600;
        render();
      };

      window.addEventListener("resize", resizeCanvas);

      const frameCount = 58;
      const currentFrame = (index) => {
        const imagePath = `https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/home-explorers/home-of-the-explorers_${(index + 1)
          .toString()
          .padStart(2, "0")}.png`;

        return imagePath;
      };

      const images = [];
      const sequence = {
        frame: 0,
      };

      let loadedImages = 0;

      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        img.onload = () => {
          loadedImages++;
          if (loadedImages === frameCount) {
            // All images have loaded, trigger render
            render();
          }
        };
        images.push(img);
      }

      gsap.to(sequence, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "power1.inOut",
        scrollTrigger: {
          scrub: true,
          start: "top 50%",
          end: "+=100%",
          reverse:true,
          trigger: canvas,
          markers: false,
          onEnter: () => { resizeCanvas(); },
          onEnterBack: () => { resizeCanvas(); },
        },
        onUpdate: render,
      });

      function render() {
        if (loadedImages === frameCount) {
          const frameIndex = Math.max(0, Math.min(sequence.frame, frameCount - 1));
          scaleImage(images[frameIndex], context);
        }
      }

      function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.max(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
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
      }
    };

    initCanvas();

    // Cleanup function to prevent memory leaks and issues on route changes
    return () => {
      // window.removeEventListener("resize", resizeCanvas);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [canvasRef]);

  return <canvas id="page11" ref={canvasRef}></canvas>;
};

export default HomeExplorersAnimation;
