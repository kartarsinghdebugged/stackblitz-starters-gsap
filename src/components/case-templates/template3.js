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

const Template3 = ({ data }) => {
    return (
        <div className='case-page temp-3'>
            <CaseBanner
                title={data?.title}
                subtitle={data?.subTitle}
                category={data?.caseStudyCategories}
                desc={data?.desc}
                coverImg={data?.mainImg}
                tempId={data?.templateId}
            />
            <Challenge desc={data?.challengeDesc} challengeImg={data?.challengeImg} 
             tempId={data?.templateId}
            />
            <Quotes
                challengeMainQuote={data?.challengeMainQuote}
                challengeSubQuote={data?.challengeSubQuote}
                challengeMainQuoteImg={data?.challengeMainQuoteImg}
                tempId={data?.templateId}
                challangeSliderImgs={data?.conceptIdeationImgs}
               
            />
            <Research
                researchProcessTitle={data?.researchProcessTitle}
                researchProcessDesc={data?.researchProcessDesc}
                researchProcessImg={data?.researchProcessImg}
                tempId={data?.templateId}
            />
            <Process  
            imageOption={data?.imageOption}
            processDescription1={data?.processDescription1}
            processDescription2={data?.processDescription2}
            tempId={data?.templateId}
            />
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

export default Template3;