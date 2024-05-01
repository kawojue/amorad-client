import React from 'react';
import PropTypes from 'prop-types';

const TradeCardShape = ({ color, width, height, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 198 113"
        fill="none"
        className={className}
    >
        <g filter="url(#filter0_d_472_17263)">
            <g clipPath="url(#clip0_472_17263)">
                <rect width="109.462" height="152.054" rx="12" transform="matrix(0.978148 -0.207912 0 1 128 22.7583)" fill={color} />
                <g filter="url(#filter1_f_472_17263)">
                    <path d="M35.2699 567.544C26.4219 486.201 33.476 464.163 87.0151 387.136C124.683 332.944 186.609 257.127 271.892 194.426C342.31 142.652 382.919 40.5078 357.417 24.5941C374.615 -18.2525 374.875 -50.0638 363.402 -91.2633" stroke="url(#paint0_linear_472_17263)" stroke-width="48.7545" stroke-linecap="round" />
                </g>
            </g>
        </g>
        <defs>
            <filter id="filter0_d_472_17263" x="0" y="0" width="235.07" height="302.812" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="-64" dy="64" />
                <feGaussianBlur stdDeviation="32" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 0.08 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_472_17263" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_472_17263" result="shape" />
            </filter>
            <filter id="filter1_f_472_17263" x="-80.5265" y="-204.908" width="564.401" height="886.099" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="44.3707" result="effect1_foregroundBlur_472_17263" />
            </filter>
            <linearGradient id="paint0_linear_472_17263" x1="114.478" y1="426.961" x2="353.562" y2="-113.939" gradientUnits="userSpaceOnUse">
                <stop stop-color="#8E48EF" />
                <stop offset="0.711458" stop-color="#D7E3E1" stopOpacity="0" />
            </linearGradient>
            <clipPath id="clip0_472_17263">
                <rect width="109.462" height="152.054" rx="12" transform="matrix(0.978148 -0.207912 0 1 128 22.7583)" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

TradeCardShape.propTypes = {
    color: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
};

TradeCardShape.defaultProps = {
    color: "#202046",
    width: "198",
    height: "113",
};

export default TradeCardShape;
