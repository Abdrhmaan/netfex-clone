
import React from 'react'
import footerdat from "../../content/footerLinks.json"
import Footer from './Footer'

const Footerlinks = () => {
  return (
    <div className='mt-10 mb-16 sm:mx-auto sm:max-w-screen-lg'>
    <h1 className='text-[#6c6c6c]'>Question Contact Us </h1>
    <div className='grid grid-cols-2 sm:grid-cols-4'>
    
      {footerdat.columns.map((links, index) => (
        <Footer key={index} links={links} />
      ))}
    
    </div>
    </div>
  )
}

export default Footerlinks