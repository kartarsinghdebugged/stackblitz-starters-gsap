'use client'
import React, { useState, useRef } from "react";
import Image from "next/image";
import FormFields from '../formFields/formFields';
import { postData } from '../../api/apiConfig';
import { Modal, Button } from 'react-bootstrap';
import Link from 'next/link';
import HeaderBar from "../../shared/layout/headerbar";
const ContactUsLeads = ({ show, show2, handleClose, handleClose2, modalClass }) => {
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  //video animation//
  const videoRef1 = useRef();
  const videoRef2 = useRef();

  const handleMouseEnter = (videoRef) => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.play();
    } else {
    }
  };

  const handleMouseLeave = (videoRef) => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.pause();
      videoElement.currentTime = 0;
    } else {
    }
  };
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
    heading: ""
  })

  const [addJobFields, setAddJobFields] = useState({
    name: "",
    email: "",
    message: "",
    portfolioLink: "",
    attachment: "",
  });
  const [selectedHeading, setSelectedHeading] = useState({ value: '', label: 'Where you heading ?' });

  const [selectedAttachment, setSelectedAttachments] = useState(null);

  // handle change contact us leads
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  // handle change add job lead
  const handleChangeJobLead = (e) => {
    setAddJobFields({ ...addJobFields, [e.target.name]: e.target.value })
  }

  // handleSelect Attachment 
  const handleSelectFile = (e) => {
    setSelectedAttachments(e.target.files[0])
    setAddJobFields({ ...addJobFields, [e.target.name]: e.target.files[0].name })
  }

  const headings = [
    // { id: 1, value: 'Where you heading?', label: 'Where you heading?' },
    { id: 1, value: 'Launch a new product', label: 'Launch a new product' },
    { id: 2, value: 'Explore design solutions for a specific challenge', label: 'Explore design solutions for a specific challenge' },
    { id: 3, value: 'Pitch and get my idea funded', label: 'Pitch and get my idea funded' },
    { id: 4, value: 'Expand my market share', label: 'Expand my market share' },
    { id: 5, value: 'Improve our existing design', label: 'Improve our existing design' },
    { id: 6, value: 'Train our design team', label: 'Train our design team' },
    { id: 7, value: 'Help with hiring designers', label: 'Help with hiring designers' },
  ]

  // Conatct lead form
  const inputFieldsArr = [
    {
      id: 1,
      type: 'text',
      name: 'name',
      placeholder: 'Name',
      label: 'Name',
      classes: 'border-rrrr',
      Labelclasses: 'no-label',
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
    },
    {
      id: 2,
      type: 'email',
      name: 'email',
      placeholder: 'Email',
      label: 'Email',
      classes: '',
      Labelclasses: 'no-label',
      errorMessage: "It should be a valid email address!",
      required: true,
    },
    {
      id: 3,
      type: 'select',
      name: 'heading',
      placeholder: 'Name',
      label: 'Heading',
      Labelclasses: 'no-label',
      options: headings,
      classes: ''
    },
    {
      id: 4,
      type: 'textarea',
      Labelclasses: 'no-label',
      name: 'message',
      placeholder: 'Start typing here...',
      label: 'Messages',
      classes: ''
    },
  ]

  // Conatct lead form
  const inputFieldAddJob = [
    {
      id: 1,
      type: 'text',
      name: 'name',
      placeholder: 'Your Name',
      label: 'Name',
      classes: 'border-rrrr',
      Labelclasses: 'no-label',
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
    },
    {
      id: 2,
      type: 'email',
      name: 'email',
      Labelclasses: 'no-label',
      placeholder: 'Your Email',
      label: 'Email',
      classes: '',
      errorMessage: "It should be a valid email address!",
      required: true,
    },
    {
      id: 3,
      type: 'text',
      name: 'portfolioLink',
      placeholder: 'Your Portfolio website Link',
      label: 'Portfolio link',
      classes: '',
      Labelclasses: 'no-label',
    },
    {
      id: 4,
      type: 'file',
      name: 'attachment',
      placeholder: 'Add a file',
      label: 'Add a file',
      classes: '',
      Labelclasses: 'no-label',
      onSelectAttachment: handleSelectFile
    },
    {
      id: 5,
      type: 'textarea',
      Labelclasses: 'no-label',
      name: 'message',
      placeholder: 'Message',
      label: 'Message',
      classes: ''
    },
  ]

  // Handle Submit 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await postData('/user/add-contactUsLeads', formValues);
      if (result.status === 200) {
        setFormValues({
          name: "",
          email: "",
          message: "",
          heading: ""
        })
        setSelectedHeading(null)
      }
    } catch (error) {
    }
  }

  // Handle Submit add job
  const handleSubmitJobLead = async (e) => {
    e.preventDefault();
    try {
      const result = await postData('/user/add-job-leads', addJobFields)
      if (result.status === 200) {
        setAddJobFields({
          name: "",
          email: "",
          message: "",
          portfolioLink: "",
          attachment: "",
        })

      }
    } catch (error) {
    }
  }
  
  return (
    <>
      <Modal show={show} onHide={handleClose} className={`contact-modal fj-main-wrapper ${modalClass}`}>
        <div className='fj-container'>
          <header className="">
            <Link href="/" className="logo-box" onClick={toggleMenu}>

            <HeaderBar/>
            </Link>

          </header>
          <div className=" fj-pl-123">
            <Modal.Body className=''>

              <div className='fj-inline fj-y-120'>
                <div className='inner-box'>
                  <Modal.Header closeButton>

                    <Modal.Title className='fj-h0'>Say Hello !</Modal.Title>
                  </Modal.Header>
                  <div>
                    <p className='fj-text-lg'> Drop us a line, and let us know where we&apos;re heading</p>
                    <div className='tab-img' onMouseEnter={() => handleMouseEnter(videoRef1)}
                      onMouseLeave={() => handleMouseLeave(videoRef1)}>
                      <video
                        width="100%"
                        height="100%"
                        className="video get-touch-video"
                        playsInline={true}
                        webkit-playsinline="true"
                        preload="auto"
                        muted={true}
                        loop={false}
                        autoPlay={true}
                        ref={videoRef1}
                      >
                        <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/get-touch-ani.mov" type='video/mp4; codecs="hvc1"' />
                        <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/get-touch-ani.webm" type="video/webm" />
                      </video>
                    </div>
                    <form className='form' onSubmit={handleSubmit}>
                      {inputFieldsArr.map((field) => (
                        <div key={field.id}>
                          <FormFields
                            {...field}
                            value={formValues[field.name]}
                            handleChange={handleChange}
                            selectedHeading={selectedHeading}
                            setSelectedHeading={setSelectedHeading}
                          />
                        </div>
                      ))}
                      <button type='submit' className='submit-btn' >
                        Send
                        <a className="fj-anchor-circle" href="#"><span className="fj-anchor-style fj-anchor-style-2 dark-anchor "><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.75" y="35.25" width="34.5" height="34.5" rx="17.25" transform="rotate(-90 0.75 35.25)" fill="#2D2D2D"></rect><rect x="0.75" y="35.25" width="34.5" height="34.5" rx="17.25" transform="rotate(-90 0.75 35.25)" stroke="#2D2D2D" strokeWidth="1.5"></rect><path d="M14.6436 21.4419L21.2433 14.8423M21.2433 14.8423L14.6436 14.8422M21.2433 14.8423L21.2432 21.4419" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></span></a>
                      </button>
                    </form>
                  </div>
                </div>

                <div className='desktop-img' onMouseEnter={() => handleMouseEnter(videoRef1)}
                  onMouseLeave={() => handleMouseLeave(videoRef1)}>
                  <video
                    width="600"
                    height="400"
                    className="video get-touch-video"
                    playsInline={true}
                    webkit-playsinline="true"
                    preload="auto"
                    muted={true}
                    loop={false}
                    autoPlay={true}
                    ref={videoRef1}
                  >
                    <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/get-touch-ani.mov" type='video/mp4; codecs="hvc1"' />
                    <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/get-touch-ani.webm" type="video/webm" />
                  </video>
                </div>
              </div>

            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose} className='modal-close-btn'>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="35" height="35" rx="17.5" fill="white" />
                  <rect x="0.5" y="0.5" width="35" height="35" rx="17.5" stroke="#2D2D2D" />
                  <path d="M24 12L12 24M12 12L24 24" stroke="#2D2D2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

              </Button>
            </Modal.Footer>
          </div>

        </div>

      </Modal>
      <Modal show={show2} onHide={handleClose2} className='contact-modal contact-modal2'>
        <div className="fj-container">
          <header className="">
            <Link href="/" className="logo-box" onClick={toggleMenu}>

            <HeaderBar/>
            </Link>
          </header>
          <div className="fj-pl-123">
            <Modal.Body className="">
              <div className='modal2 fj-y-120'>
                <div className="fj-inline">
                  <div className="leftdiv">
                    <Modal.Header closeButton>
                      <Modal.Title className='fj-h0'>Not looking <br />for just a job?</Modal.Title>
                    </Modal.Header>
                    <p className='fj-text-lg'> If you&apos;re looking to join us on our journey, drop us a line and attach your best works. We&apos;ll get back to you<br /> ASAP!</p>
                    <div className='tab-img' onMouseEnter={() => handleMouseEnter(videoRef2)}
                      onMouseLeave={() => handleMouseLeave(videoRef2)}>
                      <video
                        width="100%"
                        height="100%"
                        className="video join-video"
                        playsInline={true}
                        webkit-playsinline="true"
                        preload="auto"
                        muted={true}
                        autoPlay={true}
                        loop={false}
                        ref={videoRef2}
                      >
                        <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/join-ani.mov" type='video/mp4; codecs="hvc1"' />
                        <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/join-ani.webm" type="video/webm" />
                      </video>
                    </div>
                    <form className='form' onSubmit={handleSubmitJobLead}>
                      {inputFieldAddJob.map((field) => (
                        <div key={field.id}>
                          <div key={field.id}>
                            <FormFields
                              {...field}
                              value={addJobFields[field.name]}
                              handleChange={handleChangeJobLead}
                            />
                          </div>
                        </div>
                      ))}
                      <button type='submit' className='submit-btn' >
                        Send
                        <a className="fj-anchor-circle" href="#"><span className="fj-anchor-style fj-anchor-style-2 dark-anchor "><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.75" y="35.25" width="34.5" height="34.5" rx="17.25" transform="rotate(-90 0.75 35.25)" fill="#2D2D2D"></rect><rect x="0.75" y="35.25" width="34.5" height="34.5" rx="17.25" transform="rotate(-90 0.75 35.25)" stroke="#2D2D2D" strokeWidth="1.5"></rect><path d="M14.6436 21.4419L21.2433 14.8423M21.2433 14.8423L14.6436 14.8422M21.2433 14.8423L21.2432 21.4419" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></span></a>
                      </button>
                    </form>
                  </div>

                  <div className=" rightdiv">



                    <div className='desktop-img' onMouseEnter={() => handleMouseEnter(videoRef2)}
                      onMouseLeave={() => handleMouseLeave(videoRef2)}>
                      <video
                        width="588"
                        height="349"
                        className="video joinus-video"
                        playsInline={true}
                        webkit-playsinline="true"
                        preload="auto"
                        muted={true}
                        autoPlay={true}
                        loop={false}
                        ref={videoRef2}
                      >
                        <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/join-ani.mov" type='video/mp4; codecs="hvc1"' />
                        <source src="https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/join-ani.webm" type="video/webm" />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose2} className='modal-close-btn'>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="35" height="35" rx="17.5" fill="white" />
                  <rect x="0.5" y="0.5" width="35" height="35" rx="17.5" stroke="#2D2D2D" />
                  <path d="M24 12L12 24M12 12L24 24" stroke="#2D2D2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Button>
            </Modal.Footer>
          </div>
        </div>
      </Modal>
    
    </>
  )
}

export default ContactUsLeads;