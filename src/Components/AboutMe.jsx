import React from 'react'
import Basit from "../assets/Basit1.jpg";
import "./aboutMe.css"
import gsap from "gsap"
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

const AboutMe = () => {

    useGSAP(() => {
        const tl3 = gsap.timeline({
            scrollTrigger:{
                trigger:".AboutMe",
                // markers:true,
                start:"top 45%",
                end:"30% 80%",
                        scrub:3
            }
            
        })  

        tl3.from(".AboutMe",{
            opacity: 0,
            duration:1,
              
        }).from(".AboutMEHeading",{
            opacity:0,
            duration:1,
            y: 40,

        }).from(".MyPicture > .Basit ",{
            opacity: 0,
            duration:1,
            x: -50,
        }).from(".MyAbout > .Explanation",{
            opacity: 0,
            duration:1,
            y: 50
        })
    })


  return (

<>

    <div className="AboutMe lg:h-full sm:h-full">

        <div className="headline flex justify-center" id='about'>
            <h1 className='AboutMEHeading sm:text-center sm:mr-10 text-4xl uppercase font-bold text-[#FD6F00]'>About Me</h1>
        </div>

        <div className="Me grid lg:grid-cols-2  sm:grid-cols-1">

            <div className="MyPicture lg:p-24 sm:p-16 ">
                <img src={Basit} alt="Me" className='Basit  grayscale-[100] rounded-[20%] lg:size-80 sm:size-60'/>
            </div>
            <div className=" MyAbout lg:p-24 sm:p-8 sm:pb-32 ">
                <p className='Explanation text-[#e6d2d2] text-lg sm:text-center font-bold '>Hi! I am Basit Jawad, a passionate Full-Stack Developer with expertise in ReactJs, ExpressJS, MongoDb and NodeJS. With a strong educational background and a degree from AWKUM with honours, I possess a solid foundation in Computer Science. <br />
                I am dedicated, hardworking and focused on delivering and developing high quality web applications that meet the highest standards. My expertise extends to other frameworks like TailwindCSS, BootStrap, and GSAP, ensuring I'm always up-to-date with industry trends. <br />
                I'm excited to collaborate with like-minded people individuals and contribute to innovative projects that make a meaningful impact. <br />
                <span className=' flex justify-center'>Lets connect 🤝 and bring your vision to life😉.</span>
                </p>
            </div>
        </div>

    </div>

</>
)
}

export default AboutMe