import React from 'react'
import Header from '../components/browser/Header'
import Baner from '../components/browser/Baner'
import Faqs from '../components/faq/Faqs'
import Row from '../components/browser/Row'
import requests from '../request'

const Broqser = () => {
  
  return (
    <div className='relative'>
 
 <Header/>
 
 <main className='relative'>
 <Baner/>


<Row title="Tranding Now" url={requests.fetchTrending} />
<Row title="Tranding Now" url={requests.fetchTrending} />
<Row title="Tranding Now" url={requests.fetchTrending} />
<Row title="Tranding Now" url={requests.fetchTrending} />

</main>

 
    


  
    </div>
  )
}

export default Broqser