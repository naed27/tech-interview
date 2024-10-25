import React, { useEffect, useRef } from 'react'

interface AutoResizingTextAreaProps {
  value?: string
  className?: string
  maxHeight?: string
  minHeight?: string
  placeholder?: string
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  label?: string
  labelPosition?: 
    | 'top-left' 
    | 'bottom-left' 
    | 'top-right' 
    | 'bottom-right' 
    | 'center-top' 
    | 'center-left' 
    | 'center-right' 
    | 'center-bottom' 
    | 'center'
}

const AutoResizingTextArea: React.FC<AutoResizingTextAreaProps> = ({
  label,
  value = '',
  className = '',
  placeholder = '',
  maxHeight = '200px',
  minHeight = '2.1rem', 
  onChange = () => {},
  labelPosition = 'top-left',
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto'
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`
    }
  }, [value])

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

        <textarea
        rows={1}
        value={value}
        ref={textAreaRef}
        onChange={onChange}
        placeholder={placeholder}
        style={{ maxHeight, minHeight }}
        className={`text-black w-full flex-grow min-w-0 p-1 border rounded-sm outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        />
    </div>
  )
}

export default AutoResizingTextArea;
