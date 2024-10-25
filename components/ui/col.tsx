import React from 'react'

interface ColProps {
    size?: number
    className?: string
    children?: React.ReactNode
}

const Col: React.FC<ColProps> = ({ className = '', size = 12, children }) => {
    const widthClass = size ? `w-${(size / 12) * 100}` : 'w-full'; // Fractional width

    return (
        <div className={`${widthClass} ${className}`}>
            {children}
        </div>
    )
}

export default Col
