"use client";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Cursor = () => {
  gsap.registerPlugin(ScrollTrigger);
  // set up Scrolltrigger for cursor

  useEffect(() => {
    const dot = document.querySelector(".dot");
    const circle = document.querySelector(".dot .circle");
    const nextarrow = document.querySelector(".dot .nextarrow");
    const prevarrow = document.querySelector(".dot .prevarrow");
    const outerCircle = document.querySelector(".dot .outer-circle-cursor");
    const text = document.querySelector(".dot .text");
    const links = document.querySelectorAll(".arrow-link");
    const anchorlinks = document.querySelectorAll(".fj-anchor-circle");
    const fjaLinks = document.querySelectorAll(".fj-a-link");
    const fjTextAll = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p , a, ul, .cookies-page ul li , span, figcaption, .dot-text, .fj-slide, .research-txt, ul, .fj-btn-outline, video, .service-card, .close-btn, .fj-text-right, .no-cursor , .card-arrow, .slick-dots li button:before, .outer-header-box header");
    const fjNext = document.querySelectorAll(".slick-next");
    const fjPrev = document.querySelectorAll(".slick-prev");
    const ProjectNext = document.querySelectorAll(".next-proj-div");
    const ProjectPrev = document.querySelectorAll(".prev-proj-div");

    let mouse = {
      x: 0,
      y: 0,
    };
    let mouseStored = { ...mouse };

    gsap.set(circle, { transformOrigin: "50% 50%" });

    const setMouseCoords = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const animateDot = () => {
      if (mouseStored.x === mouse.x && mouseStored.y === mouse.y) return;

      gsap.to(dot, {
        x: mouse.x,
        y: mouse.y,
        ease: "Power3.easeOut",
        duration: 0.5,
        delay: 0,
      });

      // Store the mouse position for the next tick
      mouseStored.x = mouse.x;
      mouseStored.y = mouse.y;
    };

    // Set event listeners
    window.addEventListener("mousemove", (e) => {
      setMouseCoords(e);
    });

    // And use the ticker to update the rotation accordingly
    gsap.ticker.add(animateDot);

    // "load in" the dot
    gsap.to(dot, {
      duration: 1,
      opacity: 1,
      ease: "Power3.easeInOut",
    });

    // Set up additional effects for when links are hovered
    links.forEach((link) => {
      link.addEventListener("mouseenter", (e) => {
        gsap.to(link, {
          duration: 0.4,
          ease: "Power3.easeInOut",
        });
        gsap.to(circle, {
          duration: 0.4,
          fill: "#fafafa",
          opacity: 0,
          ease: "Power3.easeInOut",
        });
        gsap.to(
          text,
          {
            duration: 0.3,
            delay: 0.1,
            opacity: 1,
            ease: "Power3.easeInOut",
          },
          "<"
        );
      });
    });

    links.forEach((link) => {
      link.addEventListener("mouseleave", (e) => {
        gsap.to(link, {
          duration: 0.3,
          ease: "Power3.easeOut",
        });
        gsap.to(circle, {
          duration: 0.3,
          opacity: 1,
          fill: "#fafafa",
          ease: "Power3.easeOut",
        });
        gsap.to(
          text,
          {
            duration: 0.25,
            opacity: 0,
            ease: "Power3.easeOut",
          },
          "<"
        );
      });
    });
    // Set up additional effects for when links are hovered
    anchorlinks.forEach((alink) => {
      alink.addEventListener("mouseenter", (e) => {
        gsap.to(circle, {
          duration: 0.4,
          fill: "#fafafa",
          opacity: 1,
          ease: "Power3.easeInOut",
        });
      });
    });

    anchorlinks.forEach((alink) => {
      alink.addEventListener("mouseleave", (e) => {
        gsap.to(circle, {
          duration: 0.3,
          opacity: 1,
          fill: "#fafafa",
          ease: "Power3.easeOut",
        });
      });
    });
     // universal text Cursor
     fjTextAll.forEach((fjTextAll) => {
      fjTextAll.addEventListener("mouseenter", (e) => {
        gsap.to(outerCircle, {
          duration: 0.4,
          opacity: 0,
          ease: "Power3.easeInOut",
        });
      });
    });
    fjTextAll.forEach((fjTextAll) => {
      fjTextAll.addEventListener("mouseleave", (e) => {
        gsap.to(outerCircle, {
          duration: 0.4,
          opacity: 1,
          ease: "Power3.easeInOut",
        });
      });
    });

    // universal Links Cursor
    fjaLinks.forEach((fjalink) => {
      fjalink.addEventListener("mouseenter", (e) => {
        gsap.to(outerCircle, {
          duration: 0.4,
          opacity: 0,
          ease: "Power3.easeInOut",
        });
      });
    });
    fjaLinks.forEach((fjalink) => {
      fjalink.addEventListener("mouseleave", (e) => {
        gsap.to(outerCircle, {
          duration: 0.4,
          opacity: 1,
          ease: "Power3.easeInOut",
        });
      });
    });
    // fjNext
    fjNext.forEach((fjNex) => {
      fjNex.addEventListener("mouseenter", (e) => {
        gsap.to(circle, {
          duration: 0.4,
          opacity: 0,
          ease: "Power3.easeInOut",
        });
        // gsap.to(text, {
        //   duration: 0.4,
        //   opacity: 0,
        //   ease: "Power3.easeInOut",
        // });
        gsap.to(nextarrow, {
          duration: 0.4,
          opacity: 1,
          ease: "Power3.easeInOut",
        });
      });
    });
    fjNext.forEach((fjNex) => {
      fjNex.addEventListener("mouseleave", (e) => {
        gsap.to(circle, {
          duration: 0.4,
          opacity: 1,
          ease: "Power3.easeInOut",
        });
        // gsap.to(text, {
        //   duration: 0.4,
        //   opacity: 1,
        //   ease: "Power3.easeInOut",
        // });
        gsap.to(nextarrow, {
          duration: 0.4,
          opacity: 0,
          ease: "Power3.easeInOut",
        });
      });
    });
//fjprev

fjPrev.forEach((fjPre) => {
  fjPre.addEventListener("mouseenter", (e) => {
    gsap.to(circle, {
      duration: 0.4,
      opacity: 0,
      ease: "Power3.easeInOut",
    });
    // gsap.to(text, {
    //   duration: 0.4,
    //   opacity: 0,
    //   ease: "Power3.easeInOut",
    // });
    gsap.to(prevarrow, {
      duration: 0.4,
      opacity: 1,
      ease: "Power3.easeInOut",
    });
  });
});
fjPrev.forEach((fjPre) => {
  fjPre.addEventListener("mouseleave", (e) => {
    gsap.to(circle, {
      duration: 0.4,
      opacity: 1,
      ease: "Power3.easeInOut",
    });
    // gsap.to(text, {
    //   duration: 0.4,
    //   opacity: 1,
    //   ease: "Power3.easeInOut",
    // });
    gsap.to(prevarrow, {
      duration: 0.4,
      opacity: 0,
      ease: "Power3.easeInOut",
    });
  });
});



  // projectNext
  ProjectNext.forEach((ProjectNex) => {
    ProjectNex.addEventListener("mouseenter", (e) => {
      gsap.to(circle, {
        duration: 0.4,
        opacity: 0,
        ease: "Power3.easeInOut",
      });
      // gsap.to(text, {
      //   duration: 0.4,
      //   opacity: 0,
      //   ease: "Power3.easeInOut",
      // });
      gsap.to(nextarrow, {
        duration: 0.4,
        opacity: 1,
        ease: "Power3.easeInOut",
      });
    });
  });
  ProjectNext.forEach((ProjectNex) => {
    ProjectNex.addEventListener("mouseleave", (e) => {
      gsap.to(circle, {
        duration: 0.4,
        opacity: 1,
        ease: "Power3.easeInOut",
      });
      gsap.to(nextarrow, {
        duration: 0.4,
        opacity: 0,
        ease: "Power3.easeInOut",
      });
    });
  });
//fjprev

ProjectPrev.forEach((ProjectPre) => {
  ProjectPre.addEventListener("mouseenter", (e) => {
  gsap.to(circle, {
    duration: 0.4,
    opacity: 0,
    ease: "Power3.easeInOut",
  });
  // gsap.to(text, {
  //   duration: 0.4,
  //   opacity: 0,
  //   ease: "Power3.easeInOut",
  // });
  gsap.to(prevarrow, {
    duration: 0.4,
    opacity: 1,
    ease: "Power3.easeInOut",
  });
});
});
ProjectPrev.forEach((ProjectPre) => {
  ProjectPre.addEventListener("mouseleave", (e) => {
  gsap.to(circle, {
    duration: 0.4,
    opacity: 1,
    ease: "Power3.easeInOut",
  });
  // gsap.to(text, {
  //   duration: 0.4,
  //   opacity: 1,
  //   ease: "Power3.easeInOut",
  // });
  gsap.to(prevarrow, {
    duration: 0.4,
    opacity: 0,
    ease: "Power3.easeInOut",
  });
});
});

    return () => {
      // Remove event listeners or perform cleanup if needed
      window.removeEventListener("mousemove", setMouseCoords);
      gsap.ticker.remove(animateDot);
    };
  }, []);
  return (
    <>
      <div className="fj-main-cursor">
        <svg
          className="dot"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
          width="52"
          height="52"
          viewBox="0 0 52 52"
        >
          <g className="circle">
            <rect
              x="0.5"
              y="0.5"
              width="51"
              height="51"
              rx="25.5"
              stroke="#2D2D2D"
              fill="#FAFAFA"
              className="outer-circle-cursor"
            />
            <rect x="20" y="20" width="12" height="12" rx="6" fill="#2D2D2D" 
            className="inner-circle-cursor"/>
          </g>
          <g className="text opacity-0">
            <rect
              x="0.5"
              y="0.5"
              width="51"
              height="51"
              rx="25.5"
              stroke="#2D2D2D"
              fill="#FAFAFA"
            />
            <path
              d="M16.666 25.9995H35.3327M35.3327 25.9995L25.9993 16.666M35.3327 25.9995L25.9993 35.3327"
              stroke="#2D2D2D"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g className="nextarrow opacity-0">
            <rect x="0.5" y="0.5" width="51" height="51" rx="25.5" fill="#2D2D2D"/>
            <rect x="0.5" y="0.5" width="51" height="51" rx="25.5" stroke="#2D2D2D"/>
            <path d="M16.6641 26H35.3307M35.3307 26L25.9974 16.6665M35.3307 26L25.9974 35.3332" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <g className="prevarrow opacity-0">
            <rect x="51.5" y="51.5" width="51" height="51" rx="25.5" transform="rotate(-180 51.5 51.5)" fill="#2D2D2D"/>
            <rect x="51.5" y="51.5" width="51" height="51" rx="25.5" transform="rotate(-180 51.5 51.5)" stroke="#2D2D2D"/>
            <path d="M35.3359 26L16.6693 26M16.6693 26L26.0026 35.3335M16.6693 26L26.0026 16.6668" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
        </svg>
      </div>
    </>
  );
};
export default Cursor;
