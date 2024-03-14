import React from "react";
import Link from "next/link";
const AnchorDarkBtn = () => {
    return (
        <>
             <Link href={`case-study/${handleTitle(item.title)}_${item.id}`}  className="fj-anchor-circle">
            <span className="fj-anchor-style fj-anchor-style-2 dark-anchor ">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.75" y="35.25" width="34.5" height="34.5" rx="17.25" transform="rotate(-90 0.75 35.25)" fill="#2D2D2D" />
                <rect x="0.75" y="35.25" width="34.5" height="34.5" rx="17.25" transform="rotate(-90 0.75 35.25)" stroke="#2D2D2D" strokeWidth="1.5" />
                <path d="M14.6436 21.4419L21.2433 14.8423M21.2433 14.8423L14.6436 14.8422M21.2433 14.8423L21.2432 21.4419" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

            </span>
          </Link>
        </>
    );
};

export default AnchorDarkBtn;