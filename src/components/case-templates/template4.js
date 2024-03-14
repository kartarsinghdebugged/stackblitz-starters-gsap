import React from 'react';
import CaseBanner from "../../components/case/banner";
import Challenge from "../../components/case/challenge";
import Deliverables from "../../components/case/deliverables";
import Impact from "../../components/case/impact";
import Quotes from "../../components/case/quotes";
import Process from "../../components/case/process";
import HealthDesignSystem from "../../components/case/design-health";
import PersonalDashboard from "../../components/case/personal-dashboard";
import MinistryHealth from "../../components/case/ministry-health";

const Template4 = ({ data }) => {
    return (
        <div className='case-page temp-4'>
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
            />
            <Process
            imageOption={data?.imageOption}
            processDescription= {data?.processDescription}
            processDescription1={data?.processDescription1}
            processDescription2={data?.processDescription2}
            researchProcessTitle={data?.researchProcessTitle}
              tempId={data?.templateId}
            />
            <MinistryHealth
            ministryHealthDescription1={data?.ministryHealthDescription1}
            ministryImgOptionSection2Img={data?.ministryImgOptionSection2Img}
            ministrySliderImgs={data?.ministrySliderImgs}
            tempId={data?.templateId}
            />
            <PersonalDashboard
            myPersonalDashboardDescription={data?.myPersonalDashboardDescription}
            myPersonalDashboardImg={data?. myPersonalDashboardDescriptionImg}
            tempId={data?.templateId}
            />
            <HealthDesignSystem
            ministryHealthDesignSystemDescription={data?.ministryHealthDesignSystemDescription}
            designSysSliderImgs={data?.conceptIdeationImgs}
            tempId={data?.templateId}
            />
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

export default Template4;