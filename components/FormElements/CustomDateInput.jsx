import React from 'react';
import { useField, useFormikContext } from 'formik';

const CustomDateInput = ({ label, className, formGroupClass, ...props }) => {
    const [field, meta] = useField(props);
    const { setFieldValue } = useFormikContext();

    const handleChange = (event) => {
        const dateValue = event.target.value;
        const isoDate = new Date(dateValue).toISOString();
        setFieldValue(props.name, isoDate);
    };

    return (
        <div className={`form-group ${formGroupClass || 'mb-3.5'}`}>
            <label className="form-label text-xs mb-1">{label}</label>
            <input
                type="date"
                className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'} ${className || ''}`}
                {...field}
                {...props}
                value={field.value ? field.value.split('T')[0] : ''}
                onChange={handleChange}
            />
            {meta.touched && meta.error ? (
                <div className="text-red-600 text-xs font-light mt-1">{meta.error}</div>
            ) : null}
        </div>
    );
};

export default CustomDateInput;
