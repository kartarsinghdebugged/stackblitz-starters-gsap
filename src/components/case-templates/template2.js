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
import MinistryHealth from "../../components/case/ministry-health";

const Template2 = ({ data }) => {
    return (
        <div className='case-page temp-2'>
            <CaseBanner
                title={data?.title}
                subtitle={data?.subTitle}
                category={data?.caseStudyCategories}
                desc={data?.desc}
                coverImg={data?.mainImg}
                tempId={data?.templateId}
            />
            <Challenge 
            desc={data?.challengeDesc} 
            challengeImg={data?.challengeImg}
            tempId={data?.templateId} 
            />
            <Quotes
                challengeMainQuote={data?.challengeMainQuote}
                challengeMainQuoteImg={data?.challengeMainQuoteImg}
                tempId={data?.templateId}
                challengeSubQuote={data?.challengeSubQuote}
               
            />
            <Research
                researchProcessTitle={data?.researchProcessTitle}
                researchProcessDesc={data?.researchProcessDesc}
                researchProcessImg={data?.researchProcessImg}
                tempId={data?.templateId}
                reserchsliderImgs={data?.conceptIdeationImgs}
            />
            {/* <Process/> */}
            {/* <MinistryHealth/> */}
            {/* <Concepts
                conceptIdeationDesc={data?.conceptIdeationDesc}
                conceptIdeationImgs={data?.conceptIdeationImgs}
            /> */}
            <Features featuredImg={data?.featuredImg} />
            <Deliverables
                deliverableDesc={data?.deliverableDesc}
                keyFeatures={data?.keyFeatures}
                tempId={data?.templateId}
            />
            <Impact ourImpactDesc={data?.ourImpactDesc} 
            nextCaseStudy={data?.nextCaseStudy}
            prevCaseStudy={data?.prevCaseStudy}
            />
        </div>
    )
}

export default Template2;