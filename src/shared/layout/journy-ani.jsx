'use client'
import React, { useState, useEffect, useLayoutEffect } from 'react'
import JourneyAnimation from '../../components/common/journey-animation';
import HomeMiddleAnimation from '../../components/common/home-middle-animation';
import JourneyMob from '../../components/common/journey-animation-mob';
const JourneyAniBar = () => {
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

  if (screenWidth > 768) {
    componentToRender =  <JourneyAnimation/>;
  } else {
    componentToRender = <JourneyMob />;
  }
  return (
    <>
    {/* <JourneyAnimation /> */}
    <HomeMiddleAnimation />
    <JourneyMob />
     {/* {isClient ? componentToRender : null} */}
    </>
  )
}

export default JourneyAniBar