import TopStorySection from '../../components/our-story/section-1'
import SecondStorySection from '../../components/our-story/section-2'
import ThirdStorySection from '../../components/our-story/section-3'
import ContactUsLeads from '../../components/contactUsleads/contactUsLeads';
import BodyWrapper from '../../components/wrappers/bodyWrapper';
import Cursor from '../../components/common/cursor';
import ContainerWrap from '../../components/wrappers/containerWrap';
import Header from '../../components/common/header';
import MyComponent from '../../components/common/smoothscrollgsap-test';
import FooterBar from '../../shared/layout/footer'

export default function OurStory() {
  return (
    <BodyWrapper>
      {/* <body suppressHydrationWarning={true}>*/}
      <Cursor />
      {/* <Loading /> */}
      <ContainerWrap>
        <Header />
        <MyComponent>
          {/* <main>{children}</main> */}
          <div className="our-story">
            <TopStorySection />
            {/* <ContactUsLeads /> */}
            <SecondStorySection />
            <ThirdStorySection />
          </div>
          {/* <Footer />
          <TabFooter />
          <MobileFooter /> */}
          <FooterBar/>
        </MyComponent>
      </ContainerWrap>
    </BodyWrapper>
  )
}
