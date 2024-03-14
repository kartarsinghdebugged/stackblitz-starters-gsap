import React from "react";
import BodyWrapper from '../../components/wrappers/bodyWrapper';
import Cursor from '../../components/common/cursor';
import ContainerWrap from '../../components/wrappers/containerWrap';
import Header from '../../components/common/header';
import MyComponent from '../../components/common/smoothscrollgsap-test';
import FooterBar from '../../shared/layout/footer';
export default function PrivacyNotice() {


  return (
    <>
      <BodyWrapper>
        <Cursor />
        <ContainerWrap>
          <Header />
          <MyComponent>
            <div className="cookies-page static-pages">
              <div className="fj-spacer01"></div>
              <section className='banner fj-container'>
                <div className='fj-container2'>
                  <h1 className='fj-h0 fj-dark lg:fj-h0-lg intro-title-7'>
                    <span>Privacy Notice</span>
                  </h1>
                  <div className="">
                    <p className="fj-text-lg fj-mt-50  intro-title-8">
                    At Fusion Journey, we prioritize your privacy. This Privacy Notice explains our practices regarding the collection, use, and safeguarding of your data when you interact with our website.
                    </p>
                  </div>
                </div>
              </section>
              <section className="fj-container">
                <div className="fj-y-120">
                  <div className="fj-container2">
                      <div className="fj-mb-60">
                        <h2 className="fj-h4  ">Data Collection and Use</h2>
                        <p className="fj-text-r fj-mb-20">Website Interaction: Our primary method of collecting personal data is through our "Want to Work with Us" and "Join Us" forms available on our website. When you fill out these forms, you voluntarily provide us with your name, contact information, and any other details relevant to your inquiry or application. We use this information exclusively to process your requests, engage in potential collaborations, or consider your employment application. The processing of this information is grounded in our legitimate interests to respond to your inquiries and to recruit new talent for our team.</p>
                        <h2 className="fj-h4  ">Cookies and Site Analytics:</h2>
                        <p className="fj-text-r fj-mb-20">To enhance your browsing experience and to gather insights into how our site is used, we employ cookies and similar technologies. These tools help us understand user behavior on our site, allowing us to improve our services and content. For more detailed information on the cookies we use and your choices regarding them, please consult our Cookie Policy.</p>
                        <div className="list">
                            <h2 className="fj-h4">Data Sharing and Transfers</h2>
                          <ul>
                              <li className="fj-text-r"><b>Service Providers:</b> We work with trusted service providers who perform functions on our behalf, such as website hosting and analytics. These partners are contractually obligated to protect your data and are only given access to personal information necessary for their specific tasks.</li>
                              <li className="fj-text-r"><b>Legal Obligations and Rights:</b> We may disclose your information if required by law or if we believe in good faith that such action is necessary to protect our rights, the public, or to comply with a legal proceeding.</li>
                              <li className="fj-text-r"><b>International Data Transfers:</b>Your personal data may be transferred to, and processed in, countries outside of the European Economic Area (EEA). We ensure that all such transfers are carried out with appropriate safeguards in place, such as standard contractual clauses, to protect your privacy rights.</li>
                          </ul>
                        </div>
                        <h2 className="fj-h4  ">Your Rights</h2>
                        <p className="fj-text-r fj-mb-20">You have several rights under data protection laws, including the right to access, correct, delete, or limit the use of your personal data. Furthermore, you have the right to object to certain processing activities and, where our processing is based on consent, the right to withdraw consent at any time. If you wish to exercise any of these rights, please contact us using the details provided below.</p>
                        <h2 className="fj-h4  ">Updates to This Notice</h2>
                        <p className="fj-text-r fj-mb-20">We may update this Privacy Notice from time to time to reflect changes in our practices or legal requirements. We encourage you to review this notice periodically to stay informed about how we are protecting your data.</p>
                        <h2 className="fj-h4  ">Contact</h2>
                        <p className="fj-text-r">If you have any questions about this Privacy Notice or our data protection practices, please contact us at <a href="mailto:hello@thefusionjourney.com" className="fj-decoration-underline">hello@thefusionjourney.com</a>. We welcome your inquiries and feedback.</p>
                      </div>
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
