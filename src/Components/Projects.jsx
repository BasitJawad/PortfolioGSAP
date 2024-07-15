import React from "react";
import "./project.css";
import CSS from "../assets/CSS.jpg";
import JS from "../assets/JS.jpg";
import Bootstrap from "../assets/Bootst.jpg";
import GSAP from "../assets/GSAP.jpg";
import HTML from "../assets/Html.jpg";
import Mongo from "../assets/Mongo.jpg";
import Node from "../assets/Node.jpg";
import PHP from "../assets/PHP.jpg";
import tcs from "../assets/tailwindcss.svg";
import reactjs from "../assets/reactjs.svg";
import Ex from "../assets/EX.jpg";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {

  useGSAP(()=>{
    const tl4 = gsap.timeline({
      scrollTrigger:{
        trigger:".Tasks",
        // markers:true,
        start:"top 35%",
        end:"30% 60%",
        scrub:3
      }
    })
    tl4.from(".proj",{
      opacity:0,
      y:80,
      duration:1,
   
    })
    tl4.from(".wrapper > .projCards",{
      y:40,
      opacity: 0,
      duration: 0.8,
     ease: 'power2.inOut', 
      scrollBehavior: "ease"
      ,stagger:0.1
    })
  })

  return (
    <>
    <div className="Tasks h-full mb-[30vh]">
      <div className="Project" id="projects">
        <div className="Headline flex justify-center">
          <h1 className="proj text-4xl uppercase font-bold text-[#FD6F00]">
            Projects
          </h1>
        </div>

        <div className="wrapper lg:flex lg:flex-row lg:justify-center sm:flex sm:flex-col sm:justify-center sm:place-items-center gap-20 mt-32 mx-5">
             <div className="projCards rounded-3xl sm:size-80">
                <div className="projheadline">
                  <h1 className="text-2xl font-extrabold m-4 text-center">Personal Portfolio Website</h1>
                  </div>
                  <h1 className="text-center text-2xl font-extrabold">Personal Project</h1>

                <div className="projectSkills">
                <h1 className="text-center text-2xl lg:mt-10 sm:mt-6 font-extrabold">Tools </h1>
                  <span className="SkillImages flex justify-center mt-20 gap-10 sm:mt-8 sm:mx-4">
                
                      <img src={reactjs} alt="" />
                      <img src={tcs} alt="" />
                      <img src={CSS} alt="" />
                      <img src={GSAP} alt="" />
                  </span>
                </div>
              </div>

             <div className="projCards rounded-3xl sm:size-80 relative">
                <div className="projheadline">
                <h1 className="text-2xl font-extrabold m-4 text-center">Ecommerce Store Using MERN Stack</h1>
                </div>
                <h1 className="text-center text-2xl font-extrabold">FYP</h1>
                <div className="projectSkills">
                <h1 className="text-center text-2xl mt-10 font-extrabold">Tools </h1>
                <span className="SkillImages flex justify-center sm:mt-8 sm:mx-4 sm:gap-x-10 grid sm:grid-cols-4  sm:absolute">
                      <img src={reactjs} alt="" />
                      <img src={Mongo}alt="" /> 
                      <img src={Node} alt="" />
                      <img src={Bootstrap} alt="" />
                      <img src={Ex} alt="" />
                      <img src={CSS} alt="" />
                  </span>

                </div>
              </div> 
             <div className="projCards rounded-3xl sm:size-80">
                <div className="projheadline">
                <h1 className="text-2xl font-extrabold m-4 text-center">Library Management System</h1>
                </div>
                <h1 className="text-center text-2xl font-extrabold">Semester Project</h1>

                <div className="projectSkills">
                <h1 className="text-center text-2xl mt-10 font-extrabold">Tools </h1>
                <span className="SkillImages flex justify-center mt-20 gap-10 sm:mt-8 sm:mx-4">
                      <img src={PHP} alt="" />
                      <img src={JS}alt="" /> 
                      <img src={HTML} alt="" />
                      <img src={CSS} alt="" />
                  </span>

                </div>
              </div> 

        </div>



      </div>
      </div>
    </>
  );
};

export default Projects;
