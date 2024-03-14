'use client'
import React, { useState, useEffect } from 'react'
import AnimatedLogo from '../../components/common/logo';
import AnimatedLogoMob from '../../components/common/logo-mobile';


const HeaderBar = () => {
  const [isClient, setIsClient] = useState(false)
  const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
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
    componentToRender =<AnimatedLogo/>;
  } else {
    componentToRender =  <AnimatedLogoMob/>;
  }
  return (
    <>
     {isClient ? componentToRender : null}
    </>
  )
}

export default HeaderBar;