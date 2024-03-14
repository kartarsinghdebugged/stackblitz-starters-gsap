'use client'
import React, { useEffect, useRef, useState } from 'react'
import gsap from "gsap";
import { useLottie } from "lottie-react";
import logoFJ1 from "../../assets/images/json/logo.json";
import logoFJ2 from "../../assets/images/json/Logo_color_palette.json";
import logoFJ3 from "../../assets/images/json/Logo_pin.json";
import logoFJ4 from "../../assets/images/json/Logo_puzzle.json";
import logoFJ5 from "../../assets/images/json/Logo_trees.json";
import logoFJ6 from "../../assets/images/json/Logo_yin_yang.json";

const Loader = () => {

  // introTimeline
  // .from(".element1", { opacity: 0, duration: 1 })
  // .from(".element2", { opacity: 0, x: -50, duration: 1 })
  // .from(".element3", { opacity: 0, y: 50, duration: 1 });
  const overlayRef = useRef(null)
  useEffect(() => {
    const introTimeline = gsap.timeline();
    introTimeline.to(overlayRef.current, 1, {
        y: "-100%",
        display: "none"
      })
  
    // Play the timeline
    introTimeline.play();

  },[])


   // Lottie Animation
   const [hoveredIndex, setHoveredIndex] = useState(1);

   const animations = {
     1: logoFJ1,
     2: logoFJ2,
     3: logoFJ3,
     4: logoFJ4,
     5: logoFJ5,
     6: logoFJ6,
   };
 
   const options = {
     animationData: animations[hoveredIndex],
     loop: false,
   };
 
   const { View, play, stop } = useLottie(options);
 
   const handleMouseEnter = () => {
     // Increment index cyclically
     const nextIndex = (hoveredIndex % 6) + 1;
     setHoveredIndex(nextIndex);
     play();
   };
   const handleMouseLeave = () => {
     // Reverse the animation on mouse leave
     play({ direction: -1});
     play();
 
   };

  return (
    <div className="overlay" ref={overlayRef}>
      <div
              className="logo-container"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="animated-logo">{View}</div>
              <span>
                <svg
                  width="78"
                  height="40"
                  viewBox="0 0 78 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.22 0.939453H11.44V3.57945H4.38V7.25945H11.32V9.89945H4.38V16.1395H1.22V0.939453Z"
                    fill="#2D2D2D"
                  />
                  <path
                    d="M16.9 16.3795C15.7 16.3795 14.8 15.9995 14.2 15.2395C13.6133 14.4661 13.32 13.4395 13.32 12.1595V5.27945H16.38V11.4995C16.38 13.3261 17.0333 14.2395 18.34 14.2395C19.6333 14.2395 20.28 13.3128 20.28 11.4595V5.27945H23.34V16.1395H20.32V13.9995C20.04 14.7195 19.62 15.2995 19.06 15.7395C18.5133 16.1661 17.7933 16.3795 16.9 16.3795Z"
                    fill="#2D2D2D"
                  />
                  <path
                    d="M30.3 16.3795C28.9133 16.3795 27.7667 16.0861 26.86 15.4995C25.9667 14.8995 25.4267 14.0195 25.24 12.8595H28.32C28.4267 13.3661 28.6667 13.7328 29.04 13.9595C29.4267 14.1861 29.8867 14.2995 30.42 14.2995C31.0867 14.2995 31.5933 14.1995 31.94 13.9995C32.3 13.7995 32.48 13.5195 32.48 13.1595C32.48 12.9328 32.42 12.7461 32.3 12.5995C32.1933 12.4395 32 12.3061 31.72 12.1995C31.44 12.0795 31.0533 11.9595 30.56 11.8395L28.64 11.4195C27.5867 11.1928 26.7933 10.8328 26.26 10.3395C25.7267 9.84612 25.46 9.19945 25.46 8.39945C25.46 7.73279 25.6667 7.14612 26.08 6.63945C26.5067 6.11945 27.08 5.72612 27.8 5.45945C28.52 5.17945 29.3133 5.03945 30.18 5.03945C31.02 5.03945 31.7867 5.15945 32.48 5.39945C33.1733 5.62612 33.7533 5.97279 34.22 6.43945C34.7 6.90612 35.02 7.47945 35.18 8.15945H32.1C31.98 7.82612 31.7467 7.57279 31.4 7.39945C31.0533 7.21279 30.6533 7.11945 30.2 7.11945C29.68 7.11945 29.2467 7.21279 28.9 7.39945C28.5533 7.58612 28.38 7.83945 28.38 8.15945C28.38 8.45279 28.5133 8.67945 28.78 8.83945C29.06 8.98612 29.5067 9.12612 30.12 9.25945L32.04 9.67945C33.1867 9.93279 34.0333 10.3195 34.58 10.8395C35.1267 11.3595 35.4 12.0528 35.4 12.9195C35.4 13.6395 35.18 14.2595 34.74 14.7795C34.3 15.2995 33.6933 15.6995 32.92 15.9795C32.1467 16.2461 31.2733 16.3795 30.3 16.3795Z"
                    fill="#2D2D2D"
                  />
                  <path
                    d="M37.3458 5.27945H40.4058V16.1395H37.3458V5.27945ZM37.3058 0.939453H40.4658V3.81945H37.3058V0.939453Z"
                    fill="#2D2D2D"
                  />
                  <path
                    d="M48.0703 16.3795C46.9236 16.3795 45.9236 16.1395 45.0703 15.6595C44.217 15.1795 43.557 14.5128 43.0903 13.6595C42.637 12.8061 42.4103 11.8261 42.4103 10.7195C42.4103 9.61279 42.637 8.63279 43.0903 7.77945C43.557 6.91279 44.217 6.23945 45.0703 5.75945C45.9236 5.27945 46.9236 5.03945 48.0703 5.03945C49.217 5.03945 50.217 5.27945 51.0703 5.75945C51.9236 6.23945 52.577 6.91279 53.0303 7.77945C53.497 8.63279 53.7303 9.61279 53.7303 10.7195C53.7303 11.8261 53.497 12.8061 53.0303 13.6595C52.577 14.5128 51.9236 15.1795 51.0703 15.6595C50.217 16.1395 49.217 16.3795 48.0703 16.3795ZM45.5303 10.7195C45.5303 11.8395 45.7503 12.7195 46.1903 13.3595C46.6303 13.9861 47.257 14.2995 48.0703 14.2995C48.8836 14.2995 49.5103 13.9861 49.9503 13.3595C50.3903 12.7195 50.6103 11.8395 50.6103 10.7195C50.6103 9.59945 50.3903 8.71945 49.9503 8.07945C49.5103 7.43945 48.8836 7.11945 48.0703 7.11945C47.257 7.11945 46.6303 7.43945 46.1903 8.07945C45.7503 8.71945 45.5303 9.59945 45.5303 10.7195Z"
                    fill="#2D2D2D"
                  />
                  <path
                    d="M55.7052 5.27945H58.7452V7.49945C59.0118 6.75279 59.4318 6.15945 60.0052 5.71945C60.5785 5.26612 61.3118 5.03945 62.2052 5.03945C63.0185 5.03945 63.6918 5.21945 64.2252 5.57945C64.7718 5.93945 65.1718 6.43945 65.4252 7.07945C65.6918 7.70612 65.8252 8.43279 65.8252 9.25945V16.1395H62.7652V9.91945C62.7652 8.99945 62.5918 8.31279 62.2452 7.85945C61.9118 7.40612 61.4185 7.17945 60.7652 7.17945C60.1252 7.17945 59.6318 7.41279 59.2852 7.87945C58.9385 8.33279 58.7652 9.02612 58.7652 9.95945V16.1395H55.7052V5.27945Z"
                    fill="#2D2D2D"
                  />
                  <path
                    d="M0 32.4995H1.6C2.14667 32.4995 2.53333 32.3928 2.76 32.1795C2.98667 31.9528 3.1 31.5795 3.1 31.0595V19.9395H6.26V31.6395C6.26 32.7995 5.92667 33.6728 5.26 34.2595C4.60667 34.8461 3.62667 35.1395 2.32 35.1395H0V32.4995Z"
                    fill="#2D2D2D"
                  />
                  <path
                    d="M13.9688 35.3795C12.8221 35.3795 11.8221 35.1395 10.9688 34.6595C10.1154 34.1795 9.45542 33.5128 8.98875 32.6595C8.53542 31.8061 8.30875 30.8261 8.30875 29.7195C8.30875 28.6128 8.53542 27.6328 8.98875 26.7795C9.45542 25.9128 10.1154 25.2395 10.9688 24.7595C11.8221 24.2795 12.8221 24.0395 13.9688 24.0395C15.1154 24.0395 16.1154 24.2795 16.9688 24.7595C17.8221 25.2395 18.4754 25.9128 18.9288 26.7795C19.3954 27.6328 19.6287 28.6128 19.6287 29.7195C19.6287 30.8261 19.3954 31.8061 18.9288 32.6595C18.4754 33.5128 17.8221 34.1795 16.9688 34.6595C16.1154 35.1395 15.1154 35.3795 13.9688 35.3795ZM11.4288 29.7195C11.4288 30.8395 11.6488 31.7195 12.0887 32.3595C12.5287 32.9861 13.1554 33.2995 13.9688 33.2995C14.7821 33.2995 15.4087 32.9861 15.8488 32.3595C16.2887 31.7195 16.5088 30.8395 16.5088 29.7195C16.5088 28.5995 16.2887 27.7195 15.8488 27.0795C15.4087 26.4395 14.7821 26.1195 13.9688 26.1195C13.1554 26.1195 12.5287 26.4395 12.0887 27.0795C11.6488 27.7195 11.4288 28.5995 11.4288 29.7195Z"
                    fill="#2D2D2D"
                  />
                  <path
                    d="M25.0836 35.3795C23.8836 35.3795 22.9836 34.9995 22.3836 34.2395C21.7969 33.4661 21.5036 32.4395 21.5036 31.1595V24.2795H24.5636V30.4995C24.5636 32.3261 25.2169 33.2395 26.5236 33.2395C27.8169 33.2395 28.4636 32.3128 28.4636 30.4595V24.2795H31.5236V35.1395H28.5036V32.9995C28.2236 33.7195 27.8036 34.2995 27.2436 34.7395C26.6969 35.1661 25.9769 35.3795 25.0836 35.3795Z"
                    fill="#2D2D2D"
                  />
                  <path
                    d="M34.1036 24.2795H37.1436V27.1195C37.3703 26.1995 37.7836 25.4595 38.3836 24.8995C38.9836 24.3261 39.7769 24.0395 40.7636 24.0395V27.0395H39.9836C39.0103 27.0395 38.2969 27.2328 37.8436 27.6195C37.3903 27.9928 37.1636 28.6261 37.1636 29.5195V35.1395H34.1036V24.2795Z"
                    fill="#2D2D2D"
                  />
                  <path
                    d="M42.4044 24.2795H45.4444V26.4995C45.711 25.7528 46.131 25.1595 46.7044 24.7195C47.2777 24.2661 48.011 24.0395 48.9044 24.0395C49.7177 24.0395 50.391 24.2195 50.9244 24.5795C51.471 24.9395 51.871 25.4395 52.1244 26.0795C52.391 26.7061 52.5244 27.4328 52.5244 28.2595V35.1395H49.4644V28.9195C49.4644 27.9995 49.291 27.3128 48.9444 26.8595C48.611 26.4061 48.1177 26.1795 47.4644 26.1795C46.8244 26.1795 46.331 26.4128 45.9844 26.8795C45.6377 27.3328 45.4644 28.0261 45.4644 28.9595V35.1395H42.4044V24.2795Z"
                    fill="#2D2D2D"
                  />
                  <path
                    d="M59.9225 35.3795C58.8158 35.3795 57.8425 35.1395 57.0025 34.6595C56.1758 34.1795 55.5358 33.5128 55.0825 32.6595C54.6292 31.7928 54.4025 30.8061 54.4025 29.6995C54.4025 28.5928 54.6292 27.6128 55.0825 26.7595C55.5492 25.9061 56.2025 25.2395 57.0425 24.7595C57.8825 24.2795 58.8425 24.0395 59.9225 24.0395C61.0292 24.0395 61.9958 24.2795 62.8225 24.7595C63.6492 25.2261 64.2825 25.8928 64.7225 26.7595C65.1758 27.6261 65.4025 28.6261 65.4025 29.7595C65.4025 30.0261 65.3825 30.3128 65.3425 30.6195H57.5225C57.6292 31.4995 57.8958 32.1661 58.3225 32.6195C58.7492 33.0728 59.2892 33.2995 59.9425 33.2995C60.5025 33.2995 60.9492 33.1861 61.2825 32.9595C61.6158 32.7328 61.8825 32.3861 62.0825 31.9195H65.1625C64.8025 33.0528 64.1692 33.9128 63.2625 34.4995C62.3558 35.0861 61.2425 35.3795 59.9225 35.3795ZM62.2825 28.5795C62.2025 27.8195 61.9492 27.2195 61.5225 26.7795C61.0958 26.3395 60.5625 26.1195 59.9225 26.1195C59.2958 26.1195 58.7692 26.3261 58.3425 26.7395C57.9292 27.1395 57.6625 27.7528 57.5425 28.5795H62.2825Z"
                    fill="#2D2D2D"
                  />
                  <path
                    d="M71.7691 34.0195H69.1891L65.9891 24.2795H69.0691L71.9291 33.3995L74.5291 24.2795H77.7491L73.4691 39.0595H70.3291L71.7691 34.0195Z"
                    fill="#2D2D2D"
                  />
                </svg>
              </span>
            </div>
    </div>
  )
}

export default Loader