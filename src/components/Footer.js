import React from "react"
import Image from "next/image";
import Logo from '../../public/img/logo.png'
import BlockRendererClient from "../app/BlockContentClient";
import NewletterForm from "./molecules/NewletterForm";
const Footer = async () => {
  async function getdata() {
    let res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/Footer?populate[FooterLinks][populate]=*`, {
      headers: {
        'Authorization': "Bearer 8eec51f7f8bb98d277f49e44633c5b7b221a0b3c44a712f2c462497f46539e4ab7392c43c1b6d19a37ecaf329e7f8ae1d63b39a99d912ec4c7ee7abd85bf11cc1fe2817eb105626d365cb135427e935d34e1832799e15b670015251e5f02da902195dc08b679ce92fb00be2647c9289ddb1714324f8e4182fae5e46f1ded6507",
      }
    });
    let data = await res.json(); // Lire les données une seule fois
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return data;
  }
  let res = await getdata();
  const { FooterLinks } = res.data;
  const content = res.data.ContactUs;


  return (
    <div className='footer'>

      <div className='footer__top'>
      {/* <Image src="http://localhost:1337/uploads/Screenshot_2025_02_14_at_12_18_41_PM_5a71e8648d.png" width={219} height={100} alt='image' /> */}

        <ul>
          {FooterLinks.map((item,index) => (
            <li key={index}>
              <a> {item.title}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className='footer__content'>

        <div className='footer__left'>
  
            <BlockRendererClient  content={content}/>
        </div>
          
        <div className='footer__right'>
      
           </div>
      </div>
      <div className="footer_bottom">
      &copy 2025 nimvex  tous droit reservé
      </div>
    </div>
  )
}

export default Footer;