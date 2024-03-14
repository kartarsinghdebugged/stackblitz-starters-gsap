import TopDesignSection from '../../../components/services/design-experience/top-section'
import RoadMap from '../../../components/services/design-experience/roadmap'
import DesignFeatures from '../../../components/services/design-experience/features'
import ClientSliderHead from '../../../components/services/design-experience/client-slider-header'
import OtherService from '../../../components/services/design-experience/other-services'
import Testimonials from "../../../components/home/testimonials"
import BodyWrapper from '../../../components/wrappers/bodyWrapper'
import Cursor from '../../../components/common/cursor'
import ContainerWrap from '../../../components/wrappers/containerWrap'
import MyComponent from '../../../components/common/smoothscrollgsap-test'
import Header from '../../../components/common/header'
import FooterBar from '../../../shared/layout/footer'
export default function TrainingTeams() {

  const topSectionData = {

    title: {
      part1: 'Training &',
      part2: 'Teams',
    },
    desc: {
      part1: 'One of the biggest challenges both startups and established organizations face is making the move from outsourced to in-house. ',
      part2: 'Over the years we have faced this challenge and helped numerous clients make the transition. From sourcing to training talent to providing clear guidelines on how to implement complex design systems, we are one of the only global design agencies who understand that the journey must go on even after we’re out of the picture.'
    },
    videoDetail: {
      src1: 'https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/traning-ani.mov',
      src2: 'https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/traning-ani.webm',
    }
  }
  const designFeatures = {
    title: {
      part1: 'Areas of',
      part2: 'expertise',
    },
    features: [
      'Client & team collaboration practices',
      'Help recruit & build your design team',
      'Mentorship of designers across different stages',
    ]
  }
  return (
    <BodyWrapper>
      {/* <body suppressHydrationWarning={true}>*/}
      <Cursor />
      {/* <Loading /> */}
      <ContainerWrap>
        <Header />
        <MyComponent>
          {/* <main>{children}</main> */}
          <div className='design-experience-services'>
            <TopDesignSection data={topSectionData} />
            <DesignFeatures data={designFeatures} />
            <Testimonials />
            <OtherService />
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
