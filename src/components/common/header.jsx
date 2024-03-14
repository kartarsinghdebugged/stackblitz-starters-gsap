"use client";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import MenuDrawer from "./menudrawer";
import Link from "next/link";
import ScrollTrigger from "gsap/ScrollTrigger";
import HeaderBar from '../../shared/layout/headerbar'
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsHeaderFixed(scrollY < lastScrollTop);
      setLastScrollTop(scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);
  const headerClass = isHeaderFixed ? "outer-header-box header-fixed " : " outer-header-box header";
  useEffect(() => {
    const darkSections = document.querySelectorAll(".dark-section, .selected-intineraries1");

    darkSections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        onToggle: (self) => {
          const fjMainWrapper = document.querySelector(".fj-main-wrapper");
          fjMainWrapper?.classList.toggle("dark", self.isActive);
        },
      });
    });
  }, []);

  return (
    <>
      <MenuDrawer />
      <div className={headerClass}>
        <header className='fj-container'>
          <Link href="/">
            <HeaderBar/>
          </Link>
        </header>

      </div>

    </>
  );
};

export default Header;
