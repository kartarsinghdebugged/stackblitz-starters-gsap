import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const SelectedItinerariesAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  //video animation//
  const videoRef = useRef(null);
  const playedOnce = useRef(false);

  useEffect(() => {
    const coolVideo = videoRef.current;

    gsap.timeline({
      scrollTrigger: {
        trigger: coolVideo,
        start: "top 60%",
        end: "top -100%",
        scrub: true,
        // markers: true,
        onUpdate: ({ progress, direction }) => {
          if (progress > 0) {
            if (!playedOnce.current) {
              coolVideo.play();
              playedOnce.current = true;
            }
          } else {
            // Pause only if scrolling forwards
          
              coolVideo.pause();
          
          }
        },
      },
    });

    // function isTouchDevice() {
    //   return (
    //     "ontouchstart" in window ||
    //     navigator.maxTouchPoints > 0 ||
    //     navigator.msMaxTouchPoints > 0
    //   );
    // }

    // if (isTouchDevice()) {
    //   coolVideo.play();
    //   coolVideo.pause();
    // }

    // return () => {
    //   coolVideo.pause();
    // };
  }, []);

  return (
    

    <video width="500"
    height="100%"
    className="video selected-itinerations-video"
    playsInline={true}
    webkit-playsinline="true"
    preload="auto"
    muted={true}
    loop={false}
    ref={videoRef}>
        <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/videos/homevideo1.mov" type='video/mp4; codecs="hvc1"'/>
        <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/videos/homevideo1.webm" type="video/webm"/>
       
  </video>
  );
};

export default SelectedItinerariesAnimation;
