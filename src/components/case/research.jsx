import React from "react";
import Image from "next/image";
import ResearchSlider from '../case/sliders/research-slider'
import noImg from '../../assets/images/no-img.jpg'
import LineAnimation5 from './line-animation-temp1/line-5'
import LineAnimation4 from './line-animation-temp1/line-4'
import LineAnimation14 from './line-animation-temp2/line4'
import LineAnimation15 from './line-animation-temp2/line5'
import LineAnimation35 from './line-animation-temp3/line5'
import LineAnimation36 from './line-animation-temp3/line6'
const Research = ({ researchProcessDesc, researchProcessImg, researchProcessTitle, tempId, reserchsliderImgs }) => {
    const researchProcessImgData = JSON.parse(researchProcessImg)

    return (
        <>
            <section className='banner fj-container  fj-relative research-section '>
                {tempId === 2 ?  <LineAnimation14 className="line-4" /> : (tempId === 3 ? <div className="fj-text-center">
                <LineAnimation35/>
                </div> : 
                <div className="line-04">

                    <LineAnimation4 className="line-4" />
                </div>
                )
                }
                <div className="fj-y-120 research-process">
                    <div className="fj-inner fj-container2">
                        <h3 className="fj-h3 fj-w-64 mb-2">
                            Research & Process
                        </h3>
                        {/* <p className="fj-text-r fj-w-64">It&apos;s always tempting to think your product is meant for everyone, but the key to a successful product-market fit is knowing who to focus on.</p> */}
                        <div className="regular-text"
                            dangerouslySetInnerHTML={{ __html: researchProcessTitle }}
                        >
                        </div>
                    </div>

                    <div className="fj-inner fj-inline fj-item-end fj-mt-50">
                        <div className="fj-w-64">
                            {tempId === 2 ?
                                <ResearchSlider 
                                reserchsliderImgs={reserchsliderImgs}
                                />
                                :
                                <figure className="">
                                    {researchProcessImgData.link ? <Image src={researchProcessImgData.link} alt="research" width={900} height={900} className="fj-img-fluid" /> : <Image src={noImg} alt="research" className="fj-img-fluid" />}
                                    <figcaption className="fj-text-sm-md fj-uppercase fj-mt-10">{researchProcessImgData.name}</figcaption>
                                </figure>
                            }


                        </div>

                        <div className="fj-w-36 research-txt">
                            <div
                                dangerouslySetInnerHTML={{ __html: researchProcessDesc }}
                            >
                            </div>
                            {/* <p className="fj-text-r">
                                Based on extensive online research combined with focused surveys and interviews, we found that it&apos;s best to focus on 3 core target groups: young professionals, the working mom, and the middle aged manager. While each group has their own specific characteristics, they are all extremely busy and constantly on-the-go.
                                <br /><br />
                                That means that any digital product needs to seamlessly fit into their hectic lifestyles and address their pains and needs.
                                <br /><br />
                                As a trusted thinking partner of the Lab, we had the rare opportunity to not only come up with the solution, but define the key questions of what we even wanted to create.
                            </p> */}
                        </div>
                    </div>
                </div>
                {tempId === 2 ?  
                <div className="line-15">
  <LineAnimation15 className="line-5" />
                </div>
                : (tempId === 3 ? <div className="fj-text-right">
                    <LineAnimation36/>
                    </div>:
                    <div className="fj-text-right line-05">

                        <LineAnimation5 className="line-5" />
                    </div>
                    )
                }
            </section>

        </>
    );
};

export default Research;