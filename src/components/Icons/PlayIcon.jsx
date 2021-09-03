import React from "react";

const PlayIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width={86} height={86} fill="none" viewBox="0 0 86 86">
  <g filter="url(#filter0_b)">
    <rect width={86} height={86} fill="#3DDC84" fillOpacity=".43" rx={24} />
    <path fill="#fff" fillRule="evenodd" d="M29.5 29.5l27 13.5-27 13.5v-27z" clipRule="evenodd" />
  </g>
  <defs>
    <filter id="filter0_b" width={106} height={106} x={-10} y={-10} colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
      <feFlood floodOpacity={0} result="BackgroundImageFix" />
      <feGaussianBlur in="BackgroundImage" stdDeviation={5} />
      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur" />
      <feBlend in="SourceGraphic" in2="effect1_backgroundBlur" result="shape" />
    </filter>
  </defs>
</svg>
);

export default PlayIcon;