import React from 'react'

interface BigButtonProps {
  label?: string
  className?: string
  onClick?: () => void
}

const BigButton: React.FC<BigButtonProps> = ({
  className = '',
  onClick = () => {},
  label = 'Click me!',
}) => {
    return (
        <div className={`p-2 flex flex-col items-center flex-grow`}>
            <button
            onClick={onClick}
            className={`w-full flex-grow p-2 border border-transparent rounded-sm bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${className}`}>
                {label}
            </button>
        </div>
    )
}

export default BigButton
