import React from 'react'
import Card from "./Card"
import Data from "./Data"
import "./card.css"
import "./Services.css"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
const Services = () => {

  useGSAP(()=>{
    const tl2 = gsap.timeline({
      scrollTrigger:{
        trigger:".AboutBody",
        // markers:true,
        start:"top 35%",
        end:"30% 60%",
        scrub:3
      }
    })
    tl2.from(".ServicesHead,.AboutBody",{
      opacity:0,
      // perspective:1000,
      y:80,
      // rotateY:180,
      duration:1,  
     
    }).
    from((".services >.cards > *"),{
      opacity:0,
      rotateY:180,
      y:80,
      // scale:0.8,
      // duration:1,
      ease:"power1",
      // delay:0.3,
      stagger:0.4
    },"-=1")  
  })


  return (
  <>
  <div className="AboutBody lg:p-10 sm:py-10 lg:h-full sm:h-full sm:mb-10 bg-slate-950 ">

    <div className="headline lg:flex lg:justify-center  lg:h-20 sm:h-10 sm:mb-10 "  id='services'>
      <h1 className='ServicesHead lg:text-4xl sm:text-4xl sm:text-center uppercase font-bold text-[#FD6F00] sm:mr-8'>Services</h1>
      </div>
      
    <div className="services lg:w-full sm:w-full grid lg:grid-cols-3 lg:mx-12 sm:mx-0 sm:px-0 sm:grid-cols-1 lg:gap-3 lg:p-7 sm:gap-10 sm:m-10 sm:place-content-center  sm:pb-4 sm:h-full">
      {
        Data.map((data,index)=>{
          console.log(data);
            return(
                
              <div key={index} className="cards  bg-gray-800 sm:m-[20px] ">
                
            <Card logo={data.Logo}  heading={data.Heading} desc={data.Description} />
          </div>
                  )

        })
      }
    </div>

  </div>
  </>
  )
}

export default Services