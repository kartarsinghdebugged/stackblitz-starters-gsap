import React from "react";
import BodyWrapper from '../../components/wrappers/bodyWrapper';
import Cursor from '../../components/common/cursor';
import ContainerWrap from '../../components/wrappers/containerWrap';
import Header from '../../components/common/header';
import MyComponent from '../../components/common/smoothscrollgsap-test';
import FooterBar from '../../shared/layout/footer'
export default function LegalNotice() {
  const content = [
    {
      title: 'Haftungsausschluss (Disclaimer):',
      description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industries standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
      title: 'Haftung für Links (Liability for links):',
      description: 'Our offer contains links to external websites of third parties, on whose contents we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the contents of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal contents were not recognizable at the time of linking. However, a permanent control of the contents of the linked pages is not reasonable without concrete evidence of a violation of the law. If we become aware of any infringements, we will remove such links immediately.'
    },
    {
      title: 'Urheberrecht (Copyright):',
      description: 'The content and works created by the site operators on these pages are subject to German copyright law. The duplication, processing, distribution, or any kind of exploitation outside the limits of copyright law require the written consent of the respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use. Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is identified as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. If we become aware of any infringements, we will remove such contents immediately.'
    },
    {
      title: 'Datenschutz (Data protection):',
      description: 'Our website can usually be used without providing personal data. Insofar as personal data (e.g., name, address, or e-mail addresses) is collected on our pages, this is always done on a voluntary basis, as far as possible. This data will not be passed on to third parties without your express consent. We would like to point out that data transmission over the Internet (e.g., communication by e-mail) can have security gaps. A complete protection of data against access by third parties is not possible. We hereby expressly object to the use of contact data published within the scope of the imprint obligation by third parties for sending unsolicited advertising and information materials. The operators of these pages expressly reserve the right to take legal action in the event of unsolicited advertising information, such as spam e-mails.'
    },

  ]
  return (
    <>
      <BodyWrapper>
        <Cursor />
        <ContainerWrap>
          <Header />
          <MyComponent>
            <div className="terms-conditions static-pages">
              <div className="fj-spacer01"></div>
              <section className='banner fj-container'>
                <div className='fj-container2'>
                  <h1 className='fj-h0 fj-dark lg:fj-h0-lg intro-title-7' >
                    <span>Legal Notice</span>
                  </h1>
                  <div className="">
                    <p className="fj-text-lg fj-mt-50  intro-title-8 " >
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  </div>

                </div>
              </section>
              <section className="fj-container">
                <div className="fj-y-120">
                  <div className="fj-container2">

                    {content.map((content, index) => (
                      <div className="fj-mb-60" key={index}>
                        <h2 className="fj-h4 fj-mb-20">{content.title}</h2>
                        <p className="fj-text-r"> {content.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
            <FooterBar />
          </MyComponent>
        </ContainerWrap>
      </BodyWrapper>

    </>
  )
}


