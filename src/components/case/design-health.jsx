import React from "react";
import Image from "next/image";
import MinistrySlider from '../case/sliders/ministry-slider'
import DesignSysSlider from '../case/sliders/design-system-slider'
import LineAnimation48 from '../case/line-animation-temp4/line8'
import LineAnimation49 from '../case/line-animation-temp4/line9'
// import LineAnimation4 from '../case/line-animation/line-4'
const HealthDesignSystem =({ministryHealthDesignSystemDescription, designSysSliderImgs, tempId}) => {
    // const myPersonalImgData = JSON.parse(myPersonalDashboardImg)
    return (
        <>
     
      
            <section className='banner fj-container  fj-relative research-section '>
                <div className="animation-div fj-text-right animation-div-48">

                {tempId === 4 ? <LineAnimation48/> : ''}
                </div>
                <div className="">
                    <div className="fj-inner fj-container2">
                        <h3 className="fj-h3 fj-w-64 mb-2">
                        Ministry of health Design System
                        </h3>
                        <div className="regular-text" dangerouslySetInnerHTML={{__html: ministryHealthDesignSystemDescription}}>
                        </div>
                    </div>
                    <div className="fj-inner fj-inline fj-mt-50">
                    <DesignSysSlider designSysSliderImgs={designSysSliderImgs}/>
                    </div>
                </div>
                {/* {tempId === 4 ? <LineAnimation49/> : ''} */}
            </section>
           
        </>
    );
};

export default HealthDesignSystem;