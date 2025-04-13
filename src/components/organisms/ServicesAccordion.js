'use client'
import react from 'react'
import { useState } from 'react'



export default function ServicesAccordion({ title, content }) {

    const [isActive, setActive] = useState(false)

    const HandleActive = () => {
        setActive(!isActive)
    }
    return (<div className='service_accordion'>

        <div className='service_accordion__top' onClick={()=>HandleActive()}>
           <h3> {title}</h3>

        </div>
        {isActive &&  <div className='service_accordion__content'>
          <p>  {content}</p>
        </div>}

    </div>)
}