
import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io';
import { BiPlus } from 'react-icons/bi';
import { useSearchParams } from 'react-router-dom';

const Faq = ({title,description}) => {
    const [showDescription, setShowDescription] = useState(true);

  return (
    <div className='flex flex-col mx-auto px-2 py-2 sm: max-w-screen-md'>
      <div className='my-2 flex justify-between bg-[#303030] py-4 px-2 sm:py-5 sm:px-6' >
        <h1 className='text-lg sm:text-2xl'>{title}</h1>
        {showDescription ? (
					<IoMdClose 	className='h-8 w-8 cursor-pointer'  onClick={() => setShowDescription(false)}/>
					
					
				) : (
					<BiPlus
						className='h-8 w-8 cursor-pointer'
                        onClick={(e) => setShowDescription(true)}
					
					/>
				)}
      </div>
      <div className='bg-[#303030]'>
        { showDescription && (  <p  className='px-2 py-4 text-lg sm:py-6 sm:px-6 sm:text-2xl'>{description}</p>)
       
}
      </div>
    </div>
  )
}

export default Faq