import React from 'react';
import { useField } from 'formik';
import Link from 'next/link';

function TermsCheck({ label, className, ...props }) {

    const [field, meta] = useField(props);

    return (
        <div className='pt-5'>

            <div className="flex items-start gap-x-2">

                <input
                    type='checkbox'
                    className={`p-2 focus:outline-none focus:ring-0 block outline-none border tracking-tight border-gray-300 rounded cursor-pointer shadow-none ${meta.touched && meta.error ? 'is-invalid' : ''} ${className || ''}`}
                    id={props.id || 'check'}
                    {...field}
                    {...props}
                    checked={field.value}
                />

                <label htmlFor={props.id || 'check'} className='text-xs font-medium text-dark tracking-tight'>
                    By clicking “Get Started”, you agree to our <Link href='' className='text-primary'>Terms & Conditions</Link> & acknowledge that you have read our <Link className='text-primary' href=''> Code of Conduct & Privacy Policy</Link> .
                </label>

            </div>

            {meta.touched && meta.error && (
                <div className="text-danger text-xs mt-2">{meta.error}</div>
            )}

        </div>
    );
}

export default TermsCheck;
