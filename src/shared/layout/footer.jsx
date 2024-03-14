'use client'
import React, { useState, useEffect } from 'react'
import Footer from '../../components/common/footer';
import TabFooter from '../../components/common/tab-footer';
import MobileFooter from '../../components/common/mobile-footer';


const FooterBar = () => {
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
    componentToRender = <Footer />;
  } else if (screenWidth > 768) {
    componentToRender = <TabFooter />;
  } else {
    componentToRender = <MobileFooter />;
  }
  return (
    <>
     {isClient ? componentToRender : null}
    </>
  )
}

export default FooterBar