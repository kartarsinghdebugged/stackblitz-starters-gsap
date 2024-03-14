import React from "react";
import Image from "next/image";
import noImg from '../../assets/images/no-img.jpg'
const Features = ({ featuredImg }) => {
    const featuredImgData = JSON.parse(featuredImg)
    // const imageName = featuredImgData.name;
    return (
        <>
            <section className='banner fj-container'>
                <div className='fj-inner fj-container2'>
                    <figure className="fj-mt-50">
                        {featuredImgData.link ? <Image src={featuredImgData.link} width={1480} height={1223} alt="feature" className="fj-img-fluid feature-img" /> : <Image src={noImg} alt="feature" className="fj-img-fluid" />}
                    
                    </figure>
                    <figcaption className="fj-text-sm-md fj-uppercase fj-mt-10 fj-uppercase"> {featuredImgData.name}</figcaption>

                </div>

            </section>
        </>
    );
};

export default Features;