import React from "react";
import Image from "next/image";
import MinistrySlider from '../case/sliders/ministry-slider'
import LineAnimation47 from './line-animation-temp4/line7'
// import LineAnimation4 from '../case/line-animation/line-4'
const PersonalDashboard =({ myPersonalDashboardDescription, myPersonalDashboardImg, tempId }) => {
    const myPersonalImgData = JSON.parse(myPersonalDashboardImg)
    return (
        <>
     
      
            <section className='banner fj-container  fj-relative research-section '>
                <div className="animation-div ">
                {tempId === 4 ? <LineAnimation47 className="fj-y-120"/> : ''}
                </div>
            {/* <LineAnimation4 className="line-4"/> */}
                <div className="">
                    <div className="fj-inner fj-container2">
                        <h3 className="fj-h3 fj-w-64 mb-2">
                        My personal dashboard
                        </h3>
                        <div className="regular-text" dangerouslySetInnerHTML={{__html: myPersonalDashboardDescription}}></div>
                    </div>
                    <div className="fj-inner fj-inline fj-mt-50">
                    <figure className="custom-width">
                                {myPersonalImgData.link ? <Image src={myPersonalImgData.link} width={1480} height={944} alt="process" className="fj-img-fluid" /> : <Image src={noImg} alt="process" className="fj-img-fluid" />}
                                <figcaption className="fj-text-sm-md fj-uppercase fj-mt-10">{myPersonalImgData.name}</figcaption>
                            </figure>
                    </div>
                </div>
                {/* <LineAnimation5 className="line-5"/> */}
            </section>
           
        </>
    );
};

export default PersonalDashboard;