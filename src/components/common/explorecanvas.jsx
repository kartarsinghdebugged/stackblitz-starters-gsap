import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ExploreCanvas = () => {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const initCanvas = (section, canvas) => {
      let context = canvas.getContext("2d");
      canvas.width = 1000;
      canvas.height = 500;
      let frameCount = 58;
    const currentFrame = (index) => {
        const newIndex = index + 1;
        if(index<9){
            const imagePath = require(`../../assets/images/home-explorers/home-of-the-explorers_0${newIndex}.png`);
            return imagePath.default.src;
        } else {
            const imagePath = require(`../../assets/images/home-explorers/home-of-the-explorers_${newIndex}.png`);
            return imagePath.default.src; 
        }
      };
      let images = [];
      

      for (let i = 0; i < frameCount; i++) {
        let img = new Image();
        img.src = currentFrame(i);
        images.push(img);
      }
      gsap
        .timeline({
          onUpdate: render,
          scrollTrigger: {
            trigger: '.canvas-container-box',
            pin: false,
            scrub: true,
            start: "-60%",
            end: "+=200%",
            markers: false,
          },
        });

      images[0].onload = render;

      function render() {
        context.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    initCanvas(sectionRef.current, canvasRef.current);
  }, []);

  return (
    <div className="animation-explore-container">
      <canvas className="explore-canvas" ref={canvasRef}></canvas>
      <div className="canvas-container-box" ref={sectionRef}>
        <h2>Test text text</h2>
        <h2>Test text text</h2>
        <h2>Test text text</h2>
        <h2>Test text text</h2>
        <h2>Test text text</h2>
        <h2>Test text text</h2>
        <h2>Test text text</h2>
        <h2>Test text text</h2>
        <h2>Test text text</h2>
        <h2>Test text text</h2>
        <h2>Test text text</h2>
        <h2>Test text text</h2>
        <h2>Test text text</h2>
        <h2>Test text text</h2>
        <h2>Test text text</h2>
        <h2>Test text text</h2>
        <h2>Test text text</h2>
        <h2>Test text text</h2>
      </div>
    </div>
  );
};

export default ExploreCanvas;