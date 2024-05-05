import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DatePickerComponent = ({ onSelectDate, title }) => {

    const [date, setDate] = useState(null);

    const handleDateChange = (date) => {
        setDate(date);
        const formattedDate = date ? date.toISOString().split('T')[0] : null;
        onSelectDate(formattedDate);
    };

    return (
        <div className="relative cursor-pointer text-textColor w-full">
            <DatePicker
                placeholderText={title || 'Select Dates'}
                className="text-textColor border-0 outline-0 cursor-pointer text-[12px] z-[200] pl-9 w-full sm:w-[115px]"
                selected={date}
                onChange={handleDateChange}
            />
            <div className="absolute top-2.5 left-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 18 18" fill="none">
                    <path d="M6 4.3125C5.6925 4.3125 5.4375 4.0575 5.4375 3.75V1.5C5.4375 1.1925 5.6925 0.9375 6 0.9375C6.3075 0.9375 6.5625 1.1925 6.5625 1.5V3.75C6.5625 4.0575 6.3075 4.3125 6 4.3125Z" fill="#2B3674" />
                    <path d="M12 4.3125C11.6925 4.3125 11.4375 4.0575 11.4375 3.75V1.5C11.4375 1.1925 11.6925 0.9375 12 0.9375C12.3075 0.9375 12.5625 1.1925 12.5625 1.5V3.75C12.5625 4.0575 12.3075 4.3125 12 4.3125Z" fill="#2B3674" />
                    <path d="M11.25 10.3125H5.25C4.9425 10.3125 4.6875 10.0575 4.6875 9.75C4.6875 9.4425 4.9425 9.1875 5.25 9.1875H11.25C11.5575 9.1875 11.8125 9.4425 11.8125 9.75C11.8125 10.0575 11.5575 10.3125 11.25 10.3125Z" fill="#2B3674" />
                    <path d="M9 13.3125H5.25C4.9425 13.3125 4.6875 13.0575 4.6875 12.75C4.6875 12.4425 4.9425 12.1875 5.25 12.1875H9C9.3075 12.1875 9.5625 12.4425 9.5625 12.75C9.5625 13.0575 9.3075 13.3125 9 13.3125Z" fill="#2B3674" />
                    <path d="M11.25 17.0625H6.75C2.535 17.0625 1.6875 15.075 1.6875 11.865V7.2375C1.6875 3.6825 2.8875 2.235 5.97 2.0625H12C12.0075 2.0625 12.0225 2.0625 12.03 2.0625C15.1125 2.235 16.3125 3.6825 16.3125 7.2375V11.865C16.3125 15.075 15.465 17.0625 11.25 17.0625ZM6 3.1875C3.9 3.3075 2.8125 3.9675 2.8125 7.2375V11.865C2.8125 14.7375 3.36 15.9375 6.75 15.9375H11.25C14.64 15.9375 15.1875 14.7375 15.1875 11.865V7.2375C15.1875 3.975 14.1075 3.3075 11.985 3.1875H6Z" fill="#2B3674" />
                </svg>
            </div>
        </div>
    );
};

export default DatePickerComponent;
