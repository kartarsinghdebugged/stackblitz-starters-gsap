import BannerSection from '../components/home/banner'
import ModrenDays from '../components/home/modren-days'
import Testimonials from '../components/home/testimonials'
import JoinUs from '../components/home/explorer'
import ClientSliderWrapper from '../components/home/clientSliderWrapper';
import TestBodyWrapper from '../components/wrappers/testBodyWrapper'
import BodyWrapper from '../components/wrappers/bodyWrapper';
import Cursor from '../components/common/cursor';
import ContainerWrap from '../components/wrappers/containerWrap';
import Header from '../components/common/header';
import MyComponent from '../components/common/smoothscrollgsap-test';
import Footer from '../components/common/footer';
import TabFooter from '../components/common/tab-footer';
import Loading from '../components/common/loader'
import MobileFooter from '../components/common/mobile-footer';
import FooterBar from '../shared/layout/footer';

export default function Home() {
  return (
    <>
      <BodyWrapper>
        <Cursor />
        <Loading />
        <ContainerWrap>
          <Header />
          <MyComponent>
            <div className='home' >
              <BannerSection />
              <ModrenDays />
              <ClientSliderWrapper />
              <Testimonials />
              <JoinUs />
            </div>
            <FooterBar />
          </MyComponent>
        </ContainerWrap>
      </BodyWrapper>
    </>
  )
}
