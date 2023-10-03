import React from 'react'
import Feutardata from "../../content/features.json"
import Feautare from './Feautare'

console.log(Feutardata)
const Feautares = () => {
  return (
    <div>

        {
            Feutardata.map((data) => <Feautare key={data.id}  {...data}/>)
        }
    </div>
  )
}

export default Feautares