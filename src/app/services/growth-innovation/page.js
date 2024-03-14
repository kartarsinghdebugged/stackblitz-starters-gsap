import TopDesignSection from '../../../components/services/design-experience/top-section'
import RoadMap from '../../../components/services/design-experience/roadmap'
import DesignFeatures from '../../../components/services/design-experience/features'
import OtherService from '../../../components/services/design-experience/other-services'
import ClientSliderWrapper from '../../../components/home/clientSliderWrapper'
import BodyWrapper from '../../../components/wrappers/bodyWrapper'
import Cursor from '../../../components/common/cursor'
import ContainerWrap from '../../../components/wrappers/containerWrap'
import Header from '../../../components/common/header'
import MyComponent from '../../../components/common/smoothscrollgsap-test'
import FooterBar from '../../../shared/layout/footer'
export default function GrowthInnovation() {

  const topSectionData = {

    title: {
      part1: 'Growth &',
      part2: 'Innovation',
    },
    desc: {
      part1: 'In today’s interconnected digital world, the lines between brand, product, marketing and business teams are often blurred. With extensive, interdisciplinary experience that ranges from corporate to startup, we devise clever growth and innovation strategies that not only help tackle the challenges of this ever-changing landscape, but also unearth untapped opportunities. ',
      part2: 'Whether as a standalone service or as an on-going thinking partner, there are 3 business scenarios where you most often need an injection of strategic creativity.'
    },
    videoDetail: {
      src1: 'https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/growth-ani.mov',
      src2: 'https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/growth-ani.webm',
    }
  }
  const roadMapData = {
    title: {
      part1: 'Optimal',
      part2: 'itineraries',
    },
    feature: [
      {
        "title": "Product, brand & business alignment",
        "description": "With a truly holistic approach we analyse the different moving parts of your brand, business and product, prioritising areas to improve and optimise, while addressing critical blindspots."
      },
      {
        "title": "From idea to funding",
        "description": "Many entrepreneurs have a great idea. We take that idea to the next level with powerful POC's, prototypes and business presentations that make the most compelling case possible."
      },
      {
        "title": "From start up to scale up",
        "description": "What got you here won't take you there. Balancing between design, technology and speed, we provide a  rapid roadmap for sustainable growth."
      },
    ],
    videoDetail: {
      src1: 'https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/videos/itineraries.mov',
      src2: 'https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/videos/itineraries.webm',
    }
  }
  const designFeatures = {
    title: {
      part1: 'Areas of',
      part2: 'expertise',
    },
    features: [
      'Growth strategy',
      'Innovation strategy',
      'Content strategy',
      'Loyalty & Engagement',
      'Service Design'
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
          <div className='design-experience-services growth-services'>
            <TopDesignSection data={topSectionData} />
            <RoadMap data={roadMapData} />
            <DesignFeatures data={designFeatures} />
            <ClientSliderWrapper />
            <OtherService />
          </div>
          <FooterBar/>
          {/* <Footer />
          <TabFooter />
          <MobileFooter /> */}
        </MyComponent>
      </ContainerWrap>
    </BodyWrapper>


  )
}
