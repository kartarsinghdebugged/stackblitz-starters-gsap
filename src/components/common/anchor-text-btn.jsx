import React from "react";
import Link from "next/link";
const AnchorTextBtn = () => {
    return (
        <>
            <Link href='#' className="fj-inline fj-link1 link  fj-anchor-circle">
                <span >Join our team</span>
                <span className="fj-anchor-style">
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0514 21.9498L21.9509 12.0503M21.9509 12.0503L12.0513 12.0503M21.9509 12.0503L21.9508 21.9498" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
            </Link>
        </>
    );
};

export default AnchorTextBtn;