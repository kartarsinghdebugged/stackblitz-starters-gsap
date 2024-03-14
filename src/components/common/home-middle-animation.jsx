import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const HomeExplorersAnimation = () => {
  const canvasMedRef = useRef(null);
  
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const initMedCanvas = () => {
      const canvas = canvasMedRef.current;
      if (!canvas) return; // Ensure canvas exists
      const context = canvas.getContext("2d");

      const resizeMedCanvas = () => {
        canvas.width = 900;
        canvas.height = 800;
        render();
      };

      window.addEventListener("resize", resizeMedCanvas);

      const frameCount = 68;
      const currentFrameMed = (index) => {
        const imagePath = `https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/our_journey_animation/our-journey_animation_${(index + 1)
          .toString()
          .padStart(2, "0")}.png`;

        return imagePath;
      };

      const images = [];
      const sequenceMed = {
        frame: 0,
      };

      let loadedImages = 0;

      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrameMed(i);
        img.onload = () => {
          loadedImages++;
          if (loadedImages === frameCount) {
            // All images have loaded, trigger render
            render();
          }
        };
        images.push(img);
      }

      gsap.to(sequenceMed, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "power1.inOut",
        scrollTrigger: {
          scrub: true,
          start: "top 70%",
          reverse:true,
          end: "top 10%",
          trigger: canvas,
          onEnter: () => { resizeMedCanvas(); },
          onEnterBack: () => { resizeMedCanvas(); },
        },
        onUpdate: render,
      });

      function render() {
        if (loadedImages === frameCount) {
          const frameIndex = Math.max(0, Math.min(sequenceMed.frame, frameCount - 1));
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

    initMedCanvas();

    // Cleanup function to prevent memory leaks and issues on route changes
    return () => {
      // window.removeEventListener("resize", resizeMedCanvas);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [canvasMedRef]);

  return <canvas id="page11" ref={canvasMedRef}></canvas>;
};

export default HomeExplorersAnimation;
