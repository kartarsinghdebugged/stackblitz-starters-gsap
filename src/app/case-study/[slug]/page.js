import React from "react";
import Template1 from '../../../components/case-templates/template1';
import Template2 from '../../../components/case-templates/template2';
import Template3 from '../../../components/case-templates/template3';
import Template4 from '../../../components/case-templates/template4';
import Cursor from '../../../components/common/cursor';
import ContainerWrap from '../../../components/wrappers/containerWrap';
import Header from '../../../components/common/header';
import MyComponent from '../../../components/common/smoothscrollgsap-test';
import Footer from '../../../components/common/footer';
import TabFooter from '../../../components/common/tab-footer';
import MobileFooter from '../../../components/common/mobile-footer';

import { getData } from "../../../lib/getData"
import BodyWrapper from "../../../components/wrappers/bodyWrapper";
import FooterBar from '../../../shared/layout/footer'

export async function generateMetadata({ params }) {
  const caseStudyId = reteriveCaseStudyId(params);
  const result = await getData(`/user/get-public-single-case-study/${caseStudyId}`);
  const { data } = result;
  if (!data) return {
    title: 'Not found',
    description: "This page is not found"
  }

  return {
    title: data.title,
    description: data?.desc,
    openGraph: {
      title: 'test opengraph',
      description: 'Test desc opengraph',
    },
  }
}

function reteriveCaseStudyId(params) {
  const { slug } = params;
  const slugArr = slug.split("_");
  const id = slugArr[slugArr.length - 1];
  return id;
}

const CaseStudy = async ({ params }) => {
  const caseStudyId = reteriveCaseStudyId(params)
  const result = await getData(`/user/get-public-single-case-study/${caseStudyId}`);
  const { data } = result;

  switch (data.templateId) {
    case 1:
      return (
        <BodyWrapper>
          <Cursor />
          <ContainerWrap>
            <Header />
            <MyComponent>
              {/* <main>{children}</main> */}
              <Template1 data={data} />
              <FooterBar/>
              {/* <Footer />
              <TabFooter />
              <MobileFooter /> */}
            </MyComponent>
          </ContainerWrap>
        </BodyWrapper>
      )
    case 2:
      return (
        <BodyWrapper>
          <Cursor />
          <ContainerWrap>
            <Header />
            <MyComponent>
              {/* <main>{children}</main> */}
              <Template2 data={data} />
              <FooterBar/>
              {/* <Footer />
              <TabFooter />
              <MobileFooter /> */}
            </MyComponent>
          </ContainerWrap>
        </BodyWrapper>
      )
    case 3:
      return (
        <BodyWrapper>
          <Cursor />
          <ContainerWrap>
            <Header />
            <MyComponent>
              {/* <main>{children}</main> */}
              <Template3 data={data} />
              {/* <Footer />
              <TabFooter />
              <MobileFooter /> */}
              <FooterBar/>
            </MyComponent>
          </ContainerWrap>
        </BodyWrapper>

      )
    case 4:
      return (
        <BodyWrapper>
          <Cursor />
          <ContainerWrap>
            <Header />
            <MyComponent>
              {/* <main>{children}</main> */}
              <Template4 data={data} />
              {/* <Footer />
              <TabFooter />
              <MobileFooter /> */}
              <FooterBar/>
            </MyComponent>
          </ContainerWrap>
        </BodyWrapper>
      )
    default:
      return (
        <BodyWrapper>
          <Cursor />
          <ContainerWrap>
            <Header />
            <MyComponent>
              {/* <main>{children}</main> */}
              <Template1 data={data} />
              {/* <Footer />
              <TabFooter />
              <MobileFooter /> */}
              <FooterBar/>
            </MyComponent>
          </ContainerWrap>
        </BodyWrapper>
      )
  }
};

export default CaseStudy;
