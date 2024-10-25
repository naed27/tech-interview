'use client'

import React from 'react';

interface TextFieldProps {
    value?: string;
    className?: string;
    placeholder?: string;
    type?: 'text' | 'password' | 'email' | 'number';
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    labelPosition?: 
        | 'top-left' 
        | 'bottom-left' 
        | 'top-right' 
        | 'bottom-right' 
        | 'center-top' 
        | 'center-left' 
        | 'center-right' 
        | 'center-bottom' 
        | 'center';
}

const TextField: React.FC<TextFieldProps> = ({
    value = '',
    type = 'text',
    className = '',
    placeholder = '',
    onChange = () => {},
    label,
    labelPosition = 'top-left', // Default position
}) => {
    
    const labelClass = {
        'top-left': 'mb-1 text-left',
        'bottom-left': 'mt-1 text-left',
        'top-right': 'mb-1 text-right',
        'bottom-right': 'mt-1 text-right',
        'center': 'mb-1 text-center',
        'center-top': 'mb-1 text-center',
        'center-bottom': 'mt-1 text-center',
        'center-left': 'mr-2 text-left',
        'center-right': 'ml-2 text-right',
    };

    return (
        <div className={`p-2 flex flex-col ${label ? 'items-start' : ''} ${labelPosition.startsWith('center') ? 'items-center' : ''} flex-grow`}>
            {label && (
                <label className={`${labelClass[labelPosition]} text-gray-700`}>
                    {label}
                </label>
            )}
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`text-black w-full flex-grow min-w-0 p-1 border rounded-sm outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
            />
        </div>
    );
};

export default TextField;
