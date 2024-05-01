import React from 'react';
import Image from 'next/image'; 
import { ArrowRightIcon } from '@heroicons/react/24/solid';


const SocialButton = ({ logo, text, onClick, disabled }) => {
    return (
        <button
            className="btn flex items-center text-xs justify-between rounded-full border border-gray-300 w-full"
            onClick={onClick}
            disabled={disabled}
        >
            <div className="flex items-center gap-x-3 text-dark/80 tracking-tighter">
                <Image
                    src={logo}
                    width={20}
                    height={20}
                    alt={text}
                />
                <span>{text}</span>
            </div>
            <ArrowRightIcon className="h-5 w-5 text-dark/80" />
        </button>
    );
};

export default SocialButton;
