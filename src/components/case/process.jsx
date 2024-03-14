import React from "react";
import Image from "next/image";
import noImg from '../../assets/images/no-img.jpg'
import LineAnimation5 from './line-animation-temp1/line-5'
import LineAnimation45 from './line-animation-temp4/line5'
import LineAnimation37 from './line-animation-temp3/line7'

const Process = ({ processDescription, processDescription1, processDescription2, imageOption, tempId }) => {
    const imageOptionData = JSON.parse(imageOption)
    return (
        <>


            <section className='banner fj-container  fj-relative process-section'>
                {/* <LineAnimation4 className="line-4" /> */}
                <div className="fj-pt-120">

                    <div className="fj-inner fj-container2">
                        <h3 className="fj-h3 fj-w-64 mb-2">
                            The Process
                        </h3>

                    </div>
                    {tempId === 4 ? (
                        <div className="fj-inner fj-container2">
                            <div className="regular-text" dangerouslySetInnerHTML={{ __html: processDescription }}></div>
                        </div>
                    ) : (
                        <>
                            <div className="fj-inner fj-container2">
                                <div className="regular-text" dangerouslySetInnerHTML={{ __html: processDescription1 }}></div>
                                <div className=" research-txt tab-view">
                                    <div className="plain-text" dangerouslySetInnerHTML={{ __html: processDescription2 }}></div>
                                </div>
                            </div>
                            <div className="fj-inner fj-inline fj-mt-50 tab-mt-0">
                                <div className="fj-w-36 research-txt desk-view">
                                    <div className="plain-text" dangerouslySetInnerHTML={{ __html: processDescription2 }}></div>
                                </div>
                                <div className="fj-w-64">
                                 
                                    <figure className="">
                                        {imageOptionData.link ? (
                                            <Image src={imageOptionData.link} width={1480} height={944} alt="process" className="fj-img-fluid" />
                                        ) : (
                                            <Image src={noImg} alt="process" className="fj-img-fluid" />
                                        )}
                                        <figcaption className="fj-text-sm-md fj-uppercase fj-mt-10">{imageOptionData.name}</figcaption>
                                    </figure>
                                </div>
                            </div>
                        </>
                    )}




                </div>
                {/* <LineAnimation5 className="line-5" /> */}
                {tempId === 4 ?
                    <LineAnimation45 className="line-5" /> : (tempId === 3 ? <div className="fj-text-center">
<LineAnimation37/> 
                    </div> : <LineAnimation5 />) 
                }
            </section>

        </>
    );
};

export default Process;