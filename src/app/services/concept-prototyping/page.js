import TopDesignSection from '../../../components/services/design-experience/top-section'
import RoadMap from '../../../components/services/design-experience/roadmap'
import DesignFeatures from '../../../components/services/design-experience/features'
import ClientSliderHead from '../../../components/services/design-experience/client-slider-header'
import OtherService from '../../../components/services/design-experience/other-services'
import ClientSliderWrapper from '../../../components/home/clientSliderWrapper'
import BodyWrapper from '../../../components/wrappers/bodyWrapper'
import Cursor from '../../../components/common/cursor'
import ContainerWrap from '../../../components/wrappers/containerWrap'
import Header from '../../../components/common/header'
import MyComponent from '../../../components/common/smoothscrollgsap-test'
import FooterBar from '../../../shared/layout/footer'
export default function ConceptPrototyping() {

  const topSectionData = {
    title: {
      part1: 'Proof of Concept &',
      part2: 'Prototyping',
    },
    desc: {
      part1: 'On the road to validating big ideas, before turning them into tangible, market-ready products, the proof of concept / MVP not only makes business-sense; it is a must-stop destination.',
      part2: 'Whether you’re a startup seeking to prove viability, prove product-market fit and raise capital -- or an established company seeking to create and test new apps, products and features, we offer a journey of structured creativity and proven methodologies.'
    },
    videoDetail: {
      src1: 'https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/prototyping-ani.mov',
      src2: 'https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/prototyping-ani.webm',
    }
  }
  const roadMapData = {
    title: {
      part1: 'Our',
      part2: '(Road)map',
    },
    feature: [
      {
        "title": "A journey of structured creativity",
        "description": "A non-linear, iterative process that involves five phases: Empathise, Define, Ideate, Prototype and Test geared at helping us better understand users, challenge assumptions, redefine problems and come up with innovative solutions that solve real-world pains and challenges."
      },
    ],
    videoDetail: {
      src1: 'https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/videos/roadmap-video.mov',
      src2: 'https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/videos/roadmap-video.webm',
    }
  }
  const designFeatures = {
    title: {
      part1: 'Areas of',
      part2: 'expertise',
    },
    features: [
      'Rapid ideation',
      'Prototyping',
      'MVP’s',
      'User testing',
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
            <RoadMap data={roadMapData} />
            <DesignFeatures data={designFeatures} />
            {/* <ClientSliderHead/> */}
            <ClientSliderWrapper />
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
