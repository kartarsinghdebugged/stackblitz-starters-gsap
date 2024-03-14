'use client'
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Link from "next/link";
import Image from "next/image";
import whiteLogo from '../../assets/images/white-logo.png'
import CardRow1 from '../sidebar/card-row-1'
import CardRow2 from '../sidebar/card-row-2'
import CardRow3 from '../sidebar/card-row-3'

const BurgerMenu = () => {
  
  const burgerTop = useRef(null);
  const burgerBot = useRef(null);
  const burgerMid = useRef(null);
  const burgerSidebar = useRef(null);
  const sideText = useRef(null);
  const burgerWhole = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({ paused: true, reversed: true });
    tl.timeScale(1);
  
    tl
      .to(burgerTop.current, { duration: 0.7, y: 6, yoyo: true, ease: 'power1.inOut' })
      .to(burgerBot.current, { duration: 0.7, y: -7, yoyo: true, ease: 'power1.inOut' }, '-=0.7')
      .to(burgerTop.current, { duration: 1, rotation: 45 })
      .to(burgerMid.current, { duration: 1, rotation: 45 }, '-=1')
      .to(burgerBot.current, { duration: 1, rotation: 135 }, '-=1')
      .set(burgerWhole.current, { borderColor: '#000' })
      .to(burgerSidebar.current, { duration: 1, x: '0%', ease: 'power2.out' }, '-=1');
  
    // Use gsap.utils.toArray and map function for stagger animation
    gsap.utils.toArray(sideText.current).forEach((item, index) => {
      tl.to(item, { duration: 0.5, opacity: 0, y: 25, ease: 'power1.out' }, `-=${0.1 + 0.1 * index}`);
    });
  
    tl.to(sideText.current, { duration: 0.2, color: '#000' });
  }, []);
  const haminate = () => {
    tl.reversed() ? tl.play() : tl.reverse();
  };

  return (
    <div className="wrapper">
      <div className="burger-menu">
        <div className="burger-click-region" onClick={haminate}>
            <div>
            <span ref={burgerTop} className="burger-menu-piece top"></span>
          <span ref={burgerMid} className="burger-menu-piece middle"></span>
          <span ref={burgerBot} className="burger-menu-piece bottom"></span>
            </div>
        
        </div>
      </div>

      <div ref={burgerSidebar} className="sidebar">
        <div className="sidemenu">
        <div className="main-menu-drawer fj-white">
          <header className="fj-container">
            <Link href="/" className="logo-box">
              <Image src={whiteLogo} alt="logo" className="normal-logo" />

            </Link>
          </header>
          <div className="grid-container design-services">
          <CardRow1/>
          <CardRow2 />
          <CardRow3 />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;


