import React from 'react';
import CaseBanner from "../../components/case/banner";
import Challenge from "../../components/case/challenge";
import Concepts from "../../components/case/concepts";
import Deliverables from "../../components/case/deliverables";
import Features from "../../components/case/features";
import Impact from "../../components/case/impact";
import Quotes from "../../components/case/quotes";
import Research from "../../components/case/research";
import Process from "../../components/case/process";
import LineAnimation1 from "../case/line-animation-temp1/line-1"
import MinistryHealth from "../../components/case/ministry-health";

const Template1 = ({ data }) => {
    return (
        <div className='case-page temp-1'>
            <CaseBanner
                title={data?.title}
                subtitle={data?.subTitle}
                category={data?.caseStudyCategories}
                desc={data?.desc}
                coverImg={data?.mainImg}
            />
              
            <Challenge desc={data?.challengeDesc} challengeImg={data?.challengeImg} />
            <Quotes
                challengeMainQuote={data?.challengeMainQuote}
               
                challengeMainQuoteImg={data?.challengeMainQuoteImg}
                tempId={data?.templateId}
            />
            <Research
                researchProcessTitle={data?.researchProcessTitle}
                researchProcessDesc={data?.researchProcessDesc}
                researchProcessImg={data?.researchProcessImg}
            />

            <Concepts
                conceptIdeationDesc={data?.conceptIdeationDesc}
                conceptIdeationImgs={data?.conceptIdeationImgs}
            />
            <Features featuredImg={data?.featuredImg} />
            <Deliverables
                deliverableDesc={data?.deliverableDesc}
                keyFeatures={data?.keyFeatures}
            />
            <Impact 
                ourImpactDesc={data?.ourImpactDesc}
                tempId = {data?.templateId} 
                nextCaseStudy={data?.nextCaseStudy}
                prevCaseStudy={data?.prevCaseStudy}
            />
        </div>
    )
}

export default Template1;