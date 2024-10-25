import React, { useEffect, useRef, useState } from 'react'
/* eslint-disable @typescript-eslint/no-explicit-any */
interface CollapsibleItemProps {
    value: any
    label: string
}

interface ObjectDisplayerProps {
    object: any
}

const CollapsibleItem: React.FC<CollapsibleItemProps> = ({ label, value }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);

    const isObject = typeof value === 'object' && value !== null;

    return (
        <div className="mb-2 my-4">
            <div 
            onClick={isObject ? toggleOpen : undefined} 
            className={`text-nowrap text-black ${isObject ? 'font-bold cursor-pointer hover:underline ' : ''}`}>
                {isObject ? (isOpen ? '- ' : '+ ') : ''}
                {label}: 
                {isObject ? '' : (()=>{
                    if(typeof value === 'string' && value !== '')
                        return <span className="ml-2 rounded-lg px-3 p-1 bg-blue-500 text-white">{value}</span>
                    return <span className="ml-2">{value}</span>
                })()}
                {(!isOpen && isObject) && <span className="ml-2">{`{...}`}</span>}
            </div>
            {(isOpen && isObject) && (
                <div className="ml-7">
                    <ObjectDisplayer object={value} />
                </div>
            )}
        </div>
    );
};

const ObjectDisplayer: React.FC<ObjectDisplayerProps> = ({ object }) => {
    return (
        <div>
            {Object.entries(object?? {}).map(([key, value]) => (
                <CollapsibleItem key={key} label={key} value={value} />
            ))}
        </div>
    )
}


interface ObjectDisplayFieldProps {
    object?: any
    value?: string
    className?: string
    maxHeight?: string
    minHeight?: string
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


const ObjectDisplayField: React.FC<ObjectDisplayFieldProps> = ({
    label,
    object,
    value = '',
    className = '',
    maxHeight = '200px',
    minHeight = '2.1rem', 
    labelPosition = 'top-left',
}) => {

    const textAreaRef = useRef<HTMLTextAreaElement | null>(null)

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

          <div
          style={{ maxHeight, minHeight }}
          className={` overflow-auto text-black w-full flex-grow min-w-0 p-1 border rounded-sm outline-none focus:ring-2 focus:ring-blue-500 ${className}`}>
            <ObjectDisplayer object={object}/>
          </div>
  
      </div>
    )
}

export default ObjectDisplayField