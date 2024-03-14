'use client'
import React, { useState, useRef } from "react";
import Link from "next/link";
import ContactUsLeads from '../../components/contactUsleads/contactUsLeads'
const CardRow3 = ({ closeMenu }) => {
    const [showModal, setShowModal] = useState(false);
    const [buttonId, setButtonId] = useState('');

    const handleShowModal = (id) => {
        const buttonElement = document.getElementById(id);
        if (buttonElement) {
            setButtonId(id);
            setShowModal(true);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };


    const [showModal2, setShowModal2] = useState(false);
    const [buttonId2, setButtonId2] = useState('');

    const handleShowModal2 = (id) => {
        const buttonElement2 = document.getElementById(id);
        if (buttonElement2) {
            setButtonId2(id);
            setShowModal2(true);
        }
    };

    const handleCloseModal2 = () => {
        setShowModal2(false);
    };
    //video animation//
    const videoRef1 = useRef();
    const videoRef2 = useRef();
    const videoRef3 = useRef();
    const videoRef4 = useRef();
    const videoRef5 = useRef();

    const handleMouseEnter = (videoRef) => {
        const videoElement = videoRef.current;
        videoElement.play();
    };

    const handleMouseLeave = (videoRef) => {
        const videoElement = videoRef.current;
        videoElement.pause();
        videoElement.currentTime = 0; // Reset video to the beginning
    };
    return (
        <>
        <div className="fj-relative row-3">
        <div className='card-arrow'>
                        <span className="fj-anchor-circle">
                            <span className="fj-anchor-style">
                                <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.64266 7.44191L8.24233 0.84225M8.24233 0.84225L1.6426 0.842201M8.24233 0.84225L8.24226 7.44186" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </span>
                    </div>
                    <div className="fj-relative fj-w-226 service-card other-services row-1" onMouseEnter={() => handleMouseEnter(videoRef1)}
                onMouseLeave={() => handleMouseLeave(videoRef1)}>
                <Link href='/services/growth-innovation' onClick={closeMenu}>
                    <div className="text-container">
                        <video
                            width="100%"
                            height="100%"
                            className="video desktop-video"
                            playsInline={true}
                            webkit-playsinline="true"
                            preload="auto"
                            muted={true}
                            ref={videoRef1}
                        >
                            <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/growth-ani.mov" type='video/mp4; codecs="hvc1"' />
                <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/growth-ani.webm" type="video/webm" />
                        </video>
                        <video
                            width="100%"
                            height="100%"
                            className="video  mobile-video"
                            playsInline={true}
                            webkit-playsinline="true"
                            preload="auto"
                            muted={true}
                            loop={true}
                            autoPlay={true}
                        >
                            <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/growth-ani.mov" type='video/mp4; codecs="hvc1"' />
                <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/growth-ani.webm" type="video/webm" />
                        </video>
                        <h4 className='fj-textr-md fj-dark'>Growth &amp; <br />Innovation </h4>
                    </div>
                 
                </Link>
            </div>
        </div>
        <div className="fj-relative row-3">
        <div className='card-arrow'>
                        <span className="fj-anchor-circle">
                            <span className="fj-anchor-style">
                                <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.64266 7.44191L8.24233 0.84225M8.24233 0.84225L1.6426 0.842201M8.24233 0.84225L8.24226 7.44186" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </span>
                    </div>
                    <div className="fj-relative fj-w-226 service-card other-services row-1" onMouseEnter={() => handleMouseEnter(videoRef2)}
                onMouseLeave={() => handleMouseLeave(videoRef2)}>
                <Link href='/services/training-teams' onClick={closeMenu}>
                    <div className="text-container">
                        <video
                            width="100%"
                            height="100%"
                            className="video desktop-video"
                            playsInline={true}
                            webkit-playsinline="true"
                            preload="auto"
                            muted={true}
                            ref={videoRef2}
                        >
                              <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/traning-ani.mov" type='video/mp4; codecs="hvc1"' />
                <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/traning-ani.webm" type="video/webm" />
                        </video>
                        <video
                            width="100%"
                            height="100%"
                            className="video  mobile-video"
                            playsInline={true}
                            webkit-playsinline="true"
                            preload="auto"
                            muted={true}
                            loop={true}
                            autoPlay={true}
                        >
                              <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/traning-ani.mov" type='video/mp4; codecs="hvc1"' />
                <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/traning-ani.webm" type="video/webm" />
                        </video>
                        <h4 className='fj-textr-md fj-dark'>Training &amp; <br />Teams </h4>
                    </div>

                
                </Link>
            </div>
        </div>
        <div className="fj-relative row-3">
        <div className='card-arrow'>
                        <span className="fj-anchor-circle">
                            <span className="fj-anchor-style">
                                <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.64266 7.44191L8.24233 0.84225M8.24233 0.84225L1.6426 0.842201M8.24233 0.84225L8.24226 7.44186" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </span>
                    </div>
                    <div className="fj-relative fj-w-226 service-card other-services row-1" onMouseEnter={() => handleMouseEnter(videoRef3)}
                onMouseLeave={() => handleMouseLeave(videoRef3)}>
                <Link href='/services/workshops' onClick={closeMenu}>
                    <div className="text-container">
                        <video
                            width="100%"
                            height="100%"
                            className="video desktop-video"
                            playsInline={true}
                            webkit-playsinline="true"
                            preload="auto"
                            muted={true}
                            ref={videoRef3}
                        >
                            <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/workshop-ani.mov" type='video/mp4; codecs="hvc1"' />
                            <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/workshop-ani.webm" type="video/webm" />
                        </video>
                        <video
                            width="100%"
                            height="100%"
                            className="video  mobile-video"
                            playsInline={true}
                            webkit-playsinline="true"
                            preload="auto"
                            muted={true}
                            loop={true}
                            autoPlay={true}
                        >
                            <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/workshop-ani.mov" type='video/mp4; codecs="hvc1"' />
                            <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/workshop-ani.webm" type="video/webm" />
                        </video>
                        <h4 className='fj-textr-md fj-dark'>Workshops</h4>
                    </div>

                 
                </Link>
            </div>
        </div>
          
            <div className="frame">
                <div className="fj-relative row-3">
                <div className='card-arrow'>
                            <span className="fj-anchor-circle">
                                <span className="fj-anchor-style">
                                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.64266 7.44191L8.24233 0.84225M8.24233 0.84225L1.6426 0.842201M8.24233 0.84225L8.24226 7.44186" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </span>
                        </div>
                <div className="card fj-block fj-pt-0" id="contactUs" onMouseEnter={() => handleMouseEnter(videoRef4)}
                onMouseLeave={() => handleMouseLeave(videoRef4)} >
                    <div className="frames" onClick={() => { handleShowModal('contactUs'); }}>
                        <div>
                        <video
                            width="100%"
                            height="76"
                            className="video get-touch-video desktop-video"
                            playsInline={true}
                            webkit-playsinline="true"
                            preload="auto"
                            muted={true}
                            ref={videoRef4}
                        >
                            <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/get-touch-ani.mov" type='video/mp4; codecs="hvc1"' />
                            <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/get-touch-ani.webm" type="video/webm" />
                        </video>
                        <video
                            width="100%"
                            height="76"
                            className="video get-touch-video  mobile-video"
                            playsInline={true}
                            webkit-playsinline="true"
                            preload="auto"
                            muted={true}
                            loop={true}
                            autoPlay={true}
                        >
                            <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/get-touch-ani.mov" type='video/mp4; codecs="hvc1"' />
                            <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/get-touch-ani.webm" type="video/webm" />
                        </video>
                        </div>

                        <h6 className="fj-textr-md fj-dark fix-text">Get In Touch</h6>
                    
                    </div>
                </div>
                </div>
                <div className="fj-relative row-3">
                <div className='card-arrow'>
                            <span className="fj-anchor-circle">
                                <span className="fj-anchor-style">
                                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.64266 7.44191L8.24233 0.84225M8.24233 0.84225L1.6426 0.842201M8.24233 0.84225L8.24226 7.44186" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </span>
                        </div>
                <div className="card fj-block" id="joinUs" onMouseEnter={() => handleMouseEnter(videoRef5)}
                onMouseLeave={() => handleMouseLeave(videoRef5)} >

                    <div className="frames" onClick={() => { handleShowModal2('joinUs');}}>
                        <div>
                        <video
                            width="100%"
                            height="76"
                            className="video joinus-video desktop-video"
                            playsInline={true}
                            webkit-playsinline="true"
                            preload="auto"
                            muted={true}
                            ref={videoRef5}
                        >
                            <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/join-ani.mov" type='video/mp4; codecs="hvc1"' />
                            <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/join-ani.webm" type="video/webm" />
                        </video>
                        <video
                            width="100%"
                            height="76"
                            className="video joinus-video  mobile-video"
                            playsInline={true}
                            webkit-playsinline="true"
                            preload="auto"
                            muted={true}
                            loop={true}
                            autoPlay={true}
                        >
                            <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/join-ani.mov" type='video/mp4; codecs="hvc1"' />
                            <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/join-ani.webm" type="video/webm" />
                        </video>
                        </div>
                            <div className="white-spacer"></div>
                        <div className="fj-textr-md fj-dark fix-text">Join Us</div>
                      
                    </div>
                </div>
                </div>
              
            </div>
            <ContactUsLeads show={showModal} handleClose={handleCloseModal} buttonId={buttonId} />
            <ContactUsLeads show2={showModal2} handleClose2={handleCloseModal2} buttonId2={buttonId2} />
        </>
    );
};

export default CardRow3;