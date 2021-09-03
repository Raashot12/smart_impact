import React from "react";

// "#C4C4C4" - light
const FacebookIcon = ({ fillColor = '#1C1D1A' }) => {
    return (
        <svg width={17} height={16} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0)">
                <path d="M14.438 0H3.12549C1.83325 0 0.781738 1.05151 0.781738 2.34375V13.6562C0.781738 14.9485 1.83325 16 3.12549 16H7.84424V10.3438H5.96924V7.53125H7.84424V5.625C7.84424 4.0741 9.10583 2.8125 10.6567 2.8125H13.5005V5.625H10.6567V7.53125H13.5005L13.0317 10.3438H10.6567V16H14.438C15.7302 16 16.7817 14.9485 16.7817 13.6562V2.34375C16.7817 1.05151 15.7302 0 14.438 0Z" fill={fillColor} />
            </g>
            <defs>
                <clipPath id="clip0">
                    <rect width={16} height={16} fill="white" transform="translate(0.781738)" />
                </clipPath>
            </defs>
        </svg>

    );
}

export default FacebookIcon;