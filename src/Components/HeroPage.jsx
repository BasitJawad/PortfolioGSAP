import React from 'react'
import "../Components/hero.css"
import dev from "../assets/dev.svg";
import github from "../assets/github.svg";
import link from "../assets/link.svg";
import insta from "../assets/insta.svg";
import Basit from "../assets/WhatsApp Image 2025-02-25 at 11.14.44 AM.jpeg";
import CV from "../assets/Basit Jawad (Software Developer).pdf";

import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import {TextPlugin} from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin)

const HeroPage = () => {



  const handleDownloadCV = (e) => {
    e.preventDefault();
    // Replace the URL with the actual path to your CV file
    window.open(CV); // This will open the CV in a new tab for download
  };

  useGSAP(()=>{



    const tl = gsap.timeline();
    tl.from(".Hi",{
      y:40,
      duration:0.6,
      // delay:0.1,
      ease:"power2",
      opacity:0,
    }).from(".Name",{
      y:40,
      duration:0.6,
      // delay:0.12,
      ease:"power2",
      opacity:0,
    })
    .from(".MyPic",{
      x:100,
      opacity:0,
      duration:1,
      // delay:0.13,
      ease:"power1",
    })
    .from(".Color",{
      y:40,
      duration:0.5,
      // delay:0.13,
      ease:"power2",
      opacity:0,
    }).from(".left >span > ul .visit",{
      y:40,
      duration:0.7,
      // delay:0.14,
      ease:"power1",
      opacity:0,
      stagger:0.2
    }).from(".Hire",{
      y:40,
      duration:0.6,
      // delay:0.1,
      ease:"power2",
      opacity:0,
    }).from(".Download",{
      y:40,
      duration:0.3,
      // delay:0,
      ease:"power2",
      opacity:0,
    })

    const tl2 = gsap.timeline({repeat:-1,yoyo:true,repeatRefresh:true});

    tl2.to(".Color",{
      delay:2,
      duration:2,
      text: "Front End Developer",
      //  fontFamily:"Anurati"
      // yoyo:true,
      // repeat:true
    }).to(".Color",{
      duration:2,
      delay:2,
      text: "BackEnd Developer",
     
      // yoyo:true
    }).to(".Color",{
      duration:2,
      delay:3,
      text: "MERN Stack Developer",
      // yoyo:true
    }).to(".Color",{
      delay:2,
      duration:2,
      text:"UI/UX Designer"
    }).to(".Color",{
      duration:2,
      delay:2,
      text:"Project Management",
    })
     

  })

  return (
   <>
   <div className="hero-page lg:grid lg:grid-cols-2 sm:grid-cols-1  bg-slate-950 lg:h-full sm:h-full w-[100%] p-6 font-bold" id='home'>
        <div className="left mx-6 xxl:mt-[50px] lg:text-start sm:text-left ">
            <div className='Hi text-[#707070] lg:text-5xl sm:text-5xl  lg:mt-20 xl:mt-4 lg:px-6'>Hi! I am</div>
            <div className='Name text-[#959595] lg:text-left sm:text-left lg:px-6 lg:text-[70px] sm:text-[60px] '>Basit Jawad</div>
            <div className='Color lg:px-5 lg:py-2 lg:w-full lg:text-[3.70rem]  sm:text-5xl sm:mt-20 lg:mt-8 sm:text-left sm:text-wrap sm:p-0 sm:m-0 bg-gradient-to-br  from-[#FA6F00] to-[#E60026] bg-clip-text text-transparent font-extrabold lg:text-nowrap '>MERN Stack Developer</div>
            <span className=''>
            <ul className='list lg:px-8 lg:mt-4 sm:px-0 md:py-4 flex lg:gap-20 sm:gap-4 sm:mt-14 sm:mb-16 lg:mb-6 '>
            <li className='visit linkg  '><a href="https://www.linkedin.com/in/basit-jawad"       target='_blank'> <img src={link} alt="Linkedln Logo" className='link  ' /></a></li>
            <li className='visit instag '><a href="https://www.instagram.com/basitmico/" target='_blank'> <img src={insta} alt="Insta Logo" className='insta     '/></a></li>
            <li className='visit dailyg '><a href="https://app.daily.dev/basitjawad"     target='_blank'> <img src={dev} alt="Daily.dev logo" className='daily    ' /></a></li>
            <li className='visit githubg '><a href="https://github.com/BasitJawad"       target='_blank'> <img src={github} alt="Github logo" className='github   ' /></a></li>
            </ul>
            </span>
          <button className='Hire lg:px-6 py-2 text-white border rounded-lg bg-[#Fa6F00] lg:mx-6 sm:mx-0 lg:w-32 sm:w-20 sm:mb-3'><a href="https://www.linkedin.com/in/basit-jawad" target='_blank'> Hire Me</a></button>
          <button className='Download  lg:px-6 lg:py-2 sm:p-2  text-[#959595] border border-[#959595] hover:border-[#989898] sm:w-32 rounded-lg  lg:mx-2 sm:mx-2 lg:w-40 ' onClick={handleDownloadCV} >Download CV</button>
        </div>
       
        <div className="right flex justify-center items-center  ">
          <div className="backCircle w-[1/2vw] h-[1/2vh]">
           <img className='MyPic w-60 h-60 sm:w-40 sm:h-40 rounded-3xl' src={Basit} alt="MyPhoto" />
          </div>
        </div>
   </div>
  

   </>
  )
}

export default HeroPage
