'use client'
import React, { useState, useEffect, useLayoutEffect } from 'react'
import HomeExplorersAnimation from '../../components/common/home-explorers-animation';
import ExploreMob from '../../components/common/explore-animation-mob';
const ExploreAniBar = () => {
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

  if (screenWidth < 768) {
    componentToRender =  <ExploreMob />;
  } else {
    componentToRender = <HomeExplorersAnimation />;
  }
  return (
    <>
    <HomeExplorersAnimation />
    <ExploreMob />
     {/* {isClient ? componentToRender : null} */}
    </>
  )
}

export default ExploreAniBar