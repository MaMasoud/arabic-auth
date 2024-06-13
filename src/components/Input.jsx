import React from 'react';

export default function Input({ label, type, placeholder, error, field, form, className }) {
    return (
        <div className={className}>
            <div className='flex justify-between px-3'>
                <label className='block text-base text-primary'>{label}</label>
                {error && <p className="text-error">{error}</p>}
            </div>
            <input
                {...field}
                type={type}
                placeholder={placeholder}
                className={`w-full border ${error ? 'border-error' : 'border-border'} rounded-lg p-2 mt-2 bg-bgColor h-12 outline-none pr-4`}
            />
        </div>
    );
}
