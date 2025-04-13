
'use client';
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from "next/link";

import React from 'react'
import img from '../../../public/img/logo.png'

import handPhone from '../../../public/img/workplace-mobile-app-hands.jpg'
import WebClient from '../../../public/img/webClient.jpg'
import seoPhoto from '../../../public/img/seo.jpeg'
import { useRouter } from "next/router";
import franceFlag from "../../../public/img/france.png"
import London from "../../../public/img/united-kingdom-flag.png"
export default function Nav() {
  const [submenuOpen, setOpenSubmenus] = useState({
    services: false,
    UseCase: false,
    hamMenu:true,
  })




  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      setShowNavbar(false);
    } else {
      // Scrolling up
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const toggleSubmenu = (menu) => {
    debugger;
    setOpenSubmenus((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu], // Basculer l'état du sous-menu sélectionné
    }));
  };
  return (
    <div className={`nav ${showNavbar ? 'visible' : 'hidden'}`}>
      <div className='nav__logo'>
        <a href='/'>
        <Image src="http://localhost:1337/uploads/Screenshot_2025_02_14_at_12_18_41_PM_5a71e8648d.png" width={219} height={36} alt='image' />
        </a>
      </div>
      <div className='nav__toogle'  onClick={()=>toggleSubmenu('hamMenu')}>
        <span>

        </span>
        <span>

        </span>
        <span>

        </span>
      </div>
      <div  className={`nav__menu ${submenuOpen.hamMenu ? 'visible' : 'hidden'}`}>
        <ul className='nav__bar'>
          <li> <a href='/about'>About us</a></li>
          <li><a href='#' onClick={() => toggleSubmenu('services')}>Service</a>
            {submenuOpen.services && (
              <ul className='nav__sub-menu' >
                <li>
                  <Image width={250} src={WebClient} alt='img' />

                  <a href='/services'>Web developpement</a></li>
                <li>
                  <Image width={250} src={handPhone} alt='web' />


                  <a href='/services' >Mobile developpement</a></li>
                <li>
                  <Image width={250} src={seoPhoto} alt='wevb' />


                  <a> SEO </a>
                </li>

              </ul>)}
          </li>
          <li><a href='#'>Use Cases</a></li>
       
          <li><a href='/blog'>Blog</a></li>
         
        
        </ul>

  <div className="nav__lang">
            {/* <p>{locale === 'fr' ? 'Bienvenue' : 'Welcome'}</p> */}
            <Image onClick={() => switchLanguage('en')} src={London} alt='en' />
            <Image onClick={() => switchLanguage('fr')} src={franceFlag} alt='fr' />
          </div>
      </div>

    </div>
  )
}
