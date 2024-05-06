import React from 'react';
import PropTypes from 'prop-types';

const EditIcon = ({ color, width, height, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 16 16"
        fill='none'
        className={className}
    >
        <path d="M8.00033 8.00016C9.84127 8.00016 11.3337 6.50778 11.3337 4.66683C11.3337 2.82588 9.84127 1.3335 8.00033 1.3335C6.15938 1.3335 4.66699 2.82588 4.66699 4.66683C4.66699 6.50778 6.15938 8.00016 8.00033 8.00016Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.807 10.4933L10.447 12.8534C10.3537 12.9467 10.267 13.12 10.247 13.2467L10.1203 14.1467C10.0737 14.4733 10.3004 14.7 10.627 14.6533L11.527 14.5267C11.6537 14.5067 11.8337 14.42 11.9204 14.3267L14.2803 11.9667C14.687 11.56 14.8803 11.0867 14.2803 10.4867C13.687 9.89334 13.2137 10.0867 12.807 10.4933Z" stroke={color} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.4668 10.8335C12.6668 11.5535 13.2268 12.1135 13.9468 12.3135" stroke={color} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.27344 14.6667C2.27344 12.0867 4.84012 10 8.00012 10C8.69346 10 9.3601 10.1 9.9801 10.2867" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    </svg>

);



EditIcon.propTypes = {
    color: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

EditIcon.defaultProps = {
    color: "#FFF",
    width: "16",
    height: "16",
};

export default EditIcon;
