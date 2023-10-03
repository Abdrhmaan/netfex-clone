
import React from 'react'
import Faqdata from "../../content/faq.json"
import Faq from './Faq'

const Faqs = () => {
  return (
    <div>
        <h1 className='text-center text-lg font-bold'>Frequently asked Question </h1>
        {
            Faqdata.map((faq) => <Faq  key={faq.id} {...faq}/> )
        }
    </div>
  )
}

export default Faqs
