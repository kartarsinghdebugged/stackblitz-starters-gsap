'use client'
import React, {useState  } from "react";
import Link from "next/link";
import HeaderBar from '../../shared/layout/headerbar'
import ContactUsLeads  from '../../components/contactUsleads/contactUsLeads'
const TabFooter = () => {
    const [ContactUsModal, setContactUsModal] = useState(false);
    const [modalClass, setModalClass] = useState('');

  const handleContactUsModal = (modalClass) => {
    setModalClass(modalClass);
  };
    const currentYear = new Date().getFullYear();
    const websiteName = 'The Fusion Journey'
    return (
        <>
            <footer className='footer tab-footer fj-container'>
                <div className="fj-inline">
                    <div className="left-col">
                        <div className="bg-grey p-20 grey-box relative ">
                            <div className="">
                                <h6 className="fj-h5">Wanna go on a trip? <br />
                                    Let&apos;s talk.</h6>
                                <a href="mailto:Hello@thefusionjourney.com" className="fj-text-r fj-a-link">Hello@thefusionjourney.com</a>

                            </div>
                            <div className="arrow-fill" onClick={() => handleContactUsModal('classOne')}>
                            <div href='#' className="fj-anchor-circle">
                                    <span className="fj-anchor-style fj-anchor-style-2 dark-anchor ">
                                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.75" y="35.25" width="34.5" height="34.5" rx="17.25" transform="rotate(-90 0.75 35.25)" fill="#2D2D2D" />
                                            <rect x="0.75" y="35.25" width="34.5" height="34.5" rx="17.25" transform="rotate(-90 0.75 35.25)" stroke="#2D2D2D" strokeWidth="1.5" />
                                            <path d="M14.6436 21.4419L21.2433 14.8423M21.2433 14.8423L14.6436 14.8422M21.2433 14.8423L21.2432 21.4419" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>

                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-col">
                        <div className="social-box">
                            <h6 className="fj-sub-h2">Follow us</h6>
                            <ul className="p-0">
                                <li>
                                    <a href="#" className="fj-text-sm fj-a-link">Linkedin</a>
                                </li>
                                <li>
                                    <a href="#" className="fj-text-sm fj-a-link">Medium</a>
                                </li>
                                <li>
                                    <a href="#" className="fj-text-sm fj-a-link">Instagram</a>
                                </li>
                                <li>
                                    <a href="#" className="fj-text-sm fj-a-link">Dribble</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="fj-inline fj-mt-50 div-2">
                    <div className="footer-logo left-col">
                    <Link href="/">
                        <video
                            width="325"
                            height="200"
                            className="video"
                            playsInline={true}
                            webkit-playsinline="true"
                            preload="auto"
                            autoPlay={true}
                            muted={true}
                            loop={true}>
                                <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/footervideo1.mov" type='video/mp4; codecs="hvc1"' />
                            <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/footervideo1.webm" type="video/webm" />
                        </video>
                        </Link>
                    </div>
                    <div className="f-right-col right-col">

                        <Link href='/' className="fj-a-link">
                        <HeaderBar/>
                        </Link>
                        <Link href='/terms-conditions' className="fj-text-sm fj-a-link">Terms & Conditions</Link>
                        <Link href='/legal-notice' className="fj-text-sm fj-a-link">Legal Notice</Link>
                        <p className="fj-text-sm">
                            © {currentYear} <Link href='#' className="fj-a-link">{websiteName}</Link>. All rights reserved.
                        </p>

                    </div>
                </div>
            </footer>
            <ContactUsLeads show={modalClass !== ''} handleClose={() => setModalClass('')} modalClass={modalClass} />
        </>
    );
};

export default TabFooter;
