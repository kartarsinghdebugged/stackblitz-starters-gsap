'use client'
import React, { useState, useEffect, useLayoutEffect } from 'react'
import HeroAnimationA from '../../components/common/hero-animation-a';
import HeroTab1 from '../../components/common/herotab1';
import HeroMobile1 from '../../components/common/heromobile1';
const Heroanibar = () => {
  const [isClient, setIsClient] = useState(false)
  const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    debugger
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    setIsClient(true)

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  let componentToRender;

  if (screenWidth > 1024) {
    componentToRender = <HeroAnimationA />;
  } else if (screenWidth > 767) {
    componentToRender = <HeroTab1 />;
  } else {
    componentToRender = <HeroMobile1 />;
  }
  return (
    <>
    <HeroAnimationA />
    <HeroTab1 />
    <HeroMobile1 />
     {/* {isClient ? componentToRender : null} */}
    </>
  )
}

export default Heroanibar