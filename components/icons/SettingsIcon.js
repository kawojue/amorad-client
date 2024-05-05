import React from 'react';
import PropTypes from 'prop-types';

const SettingsIcon = ({ color, width, height, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 16 17"
        fill='none'
        className={className}
    >
        <path d="M8 10.4863C8.53043 10.4863 9.03914 10.2756 9.41421 9.90054C9.78929 9.52547 10 9.01676 10 8.48633C10 7.9559 9.78929 7.44719 9.41421 7.07211C9.03914 6.69704 8.53043 6.48633 8 6.48633C7.46957 6.48633 6.96086 6.69704 6.58579 7.07211C6.21071 7.44719 6 7.9559 6 8.48633C6 9.01676 6.21071 9.52547 6.58579 9.90054C6.96086 10.2756 7.46957 10.4863 8 10.4863Z" stroke={color} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M1.33301 9.07312V7.89978C1.33301 7.20645 1.89967 6.63312 2.59967 6.63312C3.80634 6.63312 4.29967 5.77978 3.69301 4.73312C3.34634 4.13312 3.55301 3.35312 4.15967 3.00645L5.31301 2.34645C5.83967 2.03312 6.51967 2.21978 6.83301 2.74645L6.90634 2.87312C7.50634 3.91978 8.49301 3.91978 9.09967 2.87312L9.17301 2.74645C9.48634 2.21978 10.1663 2.03312 10.693 2.34645L11.8463 3.00645C12.453 3.35312 12.6597 4.13312 12.313 4.73312C11.7063 5.77978 12.1997 6.63312 13.4063 6.63312C14.0997 6.63312 14.673 7.19978 14.673 7.89978V9.07312C14.673 9.76645 14.1063 10.3398 13.4063 10.3398C12.1997 10.3398 11.7063 11.1931 12.313 12.2398C12.6597 12.8464 12.453 13.6198 11.8463 13.9664L10.693 14.6264C10.1663 14.9398 9.48634 14.7531 9.17301 14.2264L9.09967 14.0998C8.49967 13.0531 7.51301 13.0531 6.90634 14.0998L6.83301 14.2264C6.51967 14.7531 5.83967 14.9398 5.31301 14.6264L4.15967 13.9664C3.86907 13.7991 3.65673 13.5233 3.56924 13.1996C3.48175 12.8759 3.52626 12.5307 3.69301 12.2398C4.29967 11.1931 3.80634 10.3398 2.59967 10.3398C1.89967 10.3398 1.33301 9.76645 1.33301 9.07312Z" stroke={color} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />

    </svg>
);



SettingsIcon.propTypes = {
    color: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SettingsIcon.defaultProps = {
    color: "#FFF",
    width: "16",
    height: "17",
};

export default SettingsIcon;