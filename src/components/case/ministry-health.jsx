import React from "react";
import Image from "next/image";
import MinistrySlider from '../case/sliders/ministry-slider'
import LineAnimation46 from './line-animation-temp4/line6'
const MinistryHealth = ({ ministryHealthDescription1, ministrySliderImgs, ministryImgOptionSection2Img, tempId}) => {
    const ministerImageOptionData = JSON.parse(ministryImgOptionSection2Img)
    return (
        <>
            <section className='banner fj-container  fj-relative research-section '>
                {/* <LineAnimation4 className="line-4"/> */}
                <div className="">
                    <div className="fj-inner fj-container2">
                        <h3 className="fj-h3 fj-w-64 mb-2">
                            Ministry of health umbrella website
                        </h3>
                        {/* <p className="fj-text-r fj-w-64">It&apos;s always tempting to think your product is meant for everyone, but the key to a successful product-market fit is knowing who to focus on.</p> */}
                        <div className="regular-text" dangerouslySetInnerHTML={{ __html: ministryHealthDescription1 }}>

                        </div>
                    </div>

                    <div className="fj-inner fj-inline fj-mt-50 ">
                        <MinistrySlider ministrySliderImgs={ministrySliderImgs}/>
                    </div>
                </div>
                <div className=" section 2">

                    <div className="fj-inner fj-inline fj-align-end fj-mt-50">
                        <div className="fj-w-36 research-txt">
                            <div className="plain-text text-348" dangerouslySetInnerHTML={{ __html: ministryHealthDescription1 }}>
                            </div>
                        </div>
                        <div className="fj-w-64">
                            <div className="animation-div fj-text-right">
                                {tempId === 4 ? <LineAnimation46/> : ''}
                            </div>
                        <figure className="">
                                {ministerImageOptionData.link ? <Image src={ministerImageOptionData.link} width={1480} height={944} alt="process" className="fj-img-fluid" /> : <Image src={noImg} alt="process" className="fj-img-fluid" />}
                                <figcaption className="fj-text-sm-md fj-uppercase fj-mt-10">{ministerImageOptionData.name}</figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
               
            </section>

        </>
    );
};

export default MinistryHealth;