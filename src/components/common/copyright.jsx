import React from "react";
import Link from "next/link";
import HeaderBar from '../../shared/layout/headerbar'
const CopyRight = () => {
    const currentYear = new Date().getFullYear();
    const websiteName = 'The Fusion Journey'
    return (
        <>
            <div className="fj-inline copyright-div">
                <div className="f-left-col">
                    <p className="fj-text-sm">
                        © {currentYear} <Link href='/' className="fj-a-link">{websiteName}</Link>. All rights reserved.
                    </p>
                    <Link href='/terms-conditions' className="fj-text-sm fj-a-link mr-5">Terms & Conditions</Link>
                    <Link href='/legal-notice' className="fj-text-sm fj-a-link">Legal Notice</Link>
                    <Link href='/cookies-policy' className="fj-text-sm fj-a-link">Cookies Policy</Link>
                    <Link href='/privacy-notice' className="fj-text-sm fj-a-link">Privacy Notice</Link>
                </div>

                <div>
                    <Link href='/' className="fj-a-link">
                    <HeaderBar/>
                    </Link>

                </div>

            </div>
        </>
    );
};

export default CopyRight;