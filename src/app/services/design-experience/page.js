import TopDesignSection from '../../../components/services/design-experience/top-section'
import RoadMap from '../../../components/services/design-experience/roadmap'
import DesignFeatures from '../../../components/services/design-experience/features'
import OtherService from '../../../components/services/design-experience/other-services'
import ClientSliderWrapper from '../../../components/home/clientSliderWrapper'
import Header from '../../../components/common/header'
import BodyWrapper from '../../../components/wrappers/bodyWrapper'
import Cursor from '../../../components/common/cursor'
import ContainerWrap from '../../../components/wrappers/containerWrap'
import MyComponent from '../../../components/common/smoothscrollgsap-test'
import FooterBar from '../../../shared/layout/footer'
export default function DesignExperience() {

  const topSectionData = {
    title: {
      part1: 'Design &',
      part2: 'Experience',
    },
    desc: {
      part1: 'From ideation to execution and beyond, we design a wide range of digital products and immersive experiences.',
      part2: 'On this all-inclusive journey, all hands are on deck to solve complex problems and deliver state-of-the-art products. From prototypes to fully scalable market-ready digital deliverables.      '
    },
    videoDetail: {
      src1: 'https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/design-exp-ani.mov',
      src2: 'https://d18ftjc6wexpf2.cloudfront.net/fusion-animations/new-videos/design-exp-ani.webm',
    }
  }
  const roadMapData = {
    title: {
      part1: 'Our',
      part2: '(Road)map',
    },
    feature: [
      {
        "title": "Ask",
        "description": "We take our clients on a non-linear journey to deeply understand their users, challenge any assumptions and define problems"
      },
      {
        "title": "Explore",
        "description": "We discover everything we can about the competitive landscape of the product, benchmarks, industry trends, user motivators and make unexpected stops."
      },
      {
        "title": "Design",
        "description": "From ideation to visual concepts, we craft interfaces, experiences and prototypes to make our client’s visions come true."
      },
      {
        "title": "Test",
        "description": "Iterative user testing, back to the drawing board, modifications, optimizations. Repeat as necessary."
      }
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
      'UX/UI',
      'End-to-End design and product',
      'Customer research & insights',
      'User testing',
      'Scalable design systems',
      'Art direction',
      'Visual identity',
      'Web design',
    ]
  }

  return (
    <>

      <BodyWrapper>
        {/* <body suppressHydrationWarning={true}>*/}
        <Cursor />
        {/* <Loading /> */}
        <ContainerWrap>
          <Header />
          <MyComponent>
            {/* <main>{children}</main> */}
            <div className='design-experience-services'>
              <TopDesignSection
                data={topSectionData}
              />
              <RoadMap data={roadMapData} />
              <DesignFeatures data={designFeatures} />
              {/* <ClientSliderHead/> */}
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
    </>

  )
}
