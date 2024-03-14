import React from "react";
import LineAnimation6 from './line-animation-temp1/line-6'
import ConceptsSlider from "./concepts-slider";
const Concepts = ({ conceptIdeationDesc, conceptIdeationImgs }) => {

    return (
        <>
            <section className='banner fj-container fj-relative '>
                <div className="">
                <div className='fj-inner fj-container2'>
                    <h3 className="fj-h3 fj-w-64 mb-2 ">
                        Concepts &amp; Ideation
                    </h3>
                    {/* <p className="fj-text-r fj-w-64">
                    We developed 3 distinct concepts which we presented to the client from which we eventually developed the final direction
                        </p> */}
                    <div className="regular-text"
                        dangerouslySetInnerHTML={{ __html: conceptIdeationDesc }}
                    >
                    </div>
                </div>
                <figure className="fj-mt-50">
                    <ConceptsSlider conceptIdeationImgs={conceptIdeationImgs} />
                </figure>
                </div>
             <div className="fj-text-center line-06">

                <LineAnimation6 className="line-6"/>
             </div>
            </section>
           
        </>
    );
};

export default Concepts;