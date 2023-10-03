
import React from 'react'

const Footer = ({links}) => {
  
  return (
    <div>
    {links.map((link, index) => (
      <a
        key={index}
        href={`/${link}`}
        className='my-1 text-sm text-[#6c6c6c]'>
        {link}
      </a>
    ))}
  </div>
  )
}

export default Footer