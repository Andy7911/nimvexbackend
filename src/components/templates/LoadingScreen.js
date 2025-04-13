import React,{CSSProperties} from 'react'

import Image from 'next/image'
import gsap from 'gsap';


import bonjour from '../../../public/img/logo.gif'


export default function LoadingScreen() {
    const override  = {
        position:"absolute",
        top:'50%',
        left:'50%',
        display: "block",
        margin: "auto auto",
        borderColor: "blue",
      };
    return (
        <div className='loadingScreen'>


            <Image src={bonjour} width={400} height={400}/>
        </div>
    )
}
