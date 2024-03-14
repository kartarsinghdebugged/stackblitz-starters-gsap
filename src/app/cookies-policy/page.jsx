import React from "react";
import BodyWrapper from '../../components/wrappers/bodyWrapper';
import Cursor from '../../components/common/cursor';
import ContainerWrap from '../../components/wrappers/containerWrap';
import Header from '../../components/common/header';
import MyComponent from '../../components/common/smoothscrollgsap-test';
import FooterBar from '../../shared/layout/footer';
export default function CookiesPolicy() {


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
                    <span>Cookie Policy</span>
                  </h1>
                  <div className="">
                    <p className="fj-text-lg fj-mt-50  intro-title-8">
                    on our website thefusionjourney.com, we use cookies and similar technologies on our website to enhance your browsing experience and improve our services. This Cookie Policy provides you with information about our use of cookies and your choices regarding them.
                    </p>
                  </div>
                </div>
              </section>
              <section className="fj-container">
                <div className="fj-y-120">
                  <div className="fj-container2">
                      <div className="fj-mb-60">
                        <h2 className="fj-h4  ">What Are Cookies?</h2>
                        <p className="fj-text-r">Cookies are small text files placed on your device when you visit a website. They are used to remember your preferences, improve site functionality, and provide personalized content.</p>
                        <div className="list">
                            <h2 className="fj-h4">Use of Cookies</h2>
                            <h2 className="fj-h4 list-header">We use cookies to:</h2>
                          <ul className=" fj-mb-20 ">
                              <li className="fj-text-r">Ensure our website functions correctly.</li>
                              <li className="fj-text-r">Analyze how visitors use our site to improve it.</li>
                              <li className="fj-text-r">Remember your preferences for a better browsing experience.</li>
                          </ul>
                          <h2 className="fj-h4 list-header">Types of Cookies We Use:</h2>
                          <ul>
                              <li className="fj-text-r"><b>Essential Cookies:</b> Necessary for the website to function and cannot be switched off.</li>
                              <li className="fj-text-r"><b>Analytics Cookies:</b> Help us understand how the site is used, allowing us to improve user experience.</li>
                              <li className="fj-text-r"><b>Managing Cookies:</b>You have the right to decide whether to accept or reject cookies. Most web browsers automatically accept cookies but provide controls to block or delete them. Check your browserr&apos;s help menu for more information on managing cookie settings.</li>
                          </ul>
                        </div>
                        <h2 className="fj-h4  ">Changes to Our Cookie Policy</h2>
                        <p className="fj-text-r fj-mb-20">We may update this policy from time to time to reflect changes in our practices or legal requirements. Please review this policy periodically for updates.</p>
                        <h2 className="fj-h4  ">Contact Us</h2>
                        <p className="fj-text-r">If you have any questions about our use of cookies, please contact us at <a href="mailto:hello@thefusionjourney.com" className="fj-decoration-underline">hello@thefusionjourney.com</a>.</p>
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
