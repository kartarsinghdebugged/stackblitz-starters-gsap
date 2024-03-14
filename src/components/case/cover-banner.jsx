import React from "react";
import Image from "next/image";
import noImg from '../../assets/images/no-img.jpg'
const CoverBanner = ({ coverImg }) => {

    return (
        <>
            <section className='banner-img'>
                    <figure className="fj-inner coverimg-sec1">
                        {coverImg ? <Image src={coverImg} alt="cover" width={1480} height={736} className="fj-img-fluid" /> : <Image src={noImg} alt="cover" className="fj-img-fluid" />}
                    </figure>
            </section>
        </>
    );
};

export default CoverBanner;