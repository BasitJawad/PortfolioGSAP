import React, { useState, useEffect } from 'react';
import "../Components/header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount and cleans up on unmount

  useEffect(() => {
    // Update showMenu based on screenWidth
    setShowMenu(screenWidth < 720);
  }, [screenWidth]); // Re-run effect when screenWidth changes

  const toggleMenu = () => {
    setShowMenu(!showMenu); // Toggle the showMenu state
  };

  const scrollIntoView = (id)=>{
    const page = document.getElementById(id);
    page.scrollIntoView({ behavior: 'smooth' });

  }

  useGSAP(()=>{
    const tl1 = gsap.timeline();
    tl1.from(".headernav",{
      y:40,
      opacity: 0,
      duration: 0.8,
     ease: 'linear', 
    }).from(".headernav > .nav > ul li ",{
      y:40,
      opacity: 0,
      duration: 0.8,
     ease: 'power2.inOut', 
      stagger:0.1
    })
  })

  return (
    <>
      <div className=" m-0 p-0 bg-slate-950  ">
        <div className="headernav grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 px-6 py-3 sm:text-center ">

          {screenWidth < 720 && (
            <button className="text-white sm:text-start text-2xl hover:w-10 hover:rounded-xl cursor-pointer " onClick={toggleMenu}>
              <FontAwesomeIcon icon={showMenu ? faBars : faTimes} />
            </button>
          )}

          {!showMenu && (
            <>
              <div className={`${screenWidth <720 ? "hidden":"block"} logo sm:text-start mx-6 mb-5 bg-gradient-to-br text-4xl font-extrabold text-transparent from-[#FA6F00] w-28 to-[#E60026] bg-clip-text`}>
                BJ
              </div>
              <div className="nav">
                <ul className='text-xl text-center flex lg:flex-row md:flex-row sm:flex-col justify-between text-[#959595] md:gap-4 sm:gap-2'>
                  <li className='font-bold text-[#FA6F00] active:font-bold  hover:underline-offset-2  md:hover:border-transparent lg:hover:border-transparent  sm:hover:border-gray-900  hover:border hover:rounded-lg                            '><a href="#" onClick={()=>scrollIntoView('home')}    >       HOME</a></li>
                  <li className='active:text-[#FA6F00] active:font-bold hover:text-[#464545]  md:hover:border-transparent lg:hover:border-transparent  sm:hover:border-gray-900  hover:border  hover:rounded-lg                                 '><a href="#" onClick={()=>scrollIntoView('services')}>   SERVICES</a></li>
                  <li className='active:text-[#FA6F00] active:font-bold hover:text-[#464545]  md:hover:border-transparent lg:hover:border-transparent  sm:hover:border-gray-900  hover:border  hover:rounded-lg   text-nowrap                   '><a href="#" onClick={()=>scrollIntoView('about')}   >      ABOUT ME</a></li>
                  <li className='active:text-[#FA6F00] active:font-bold hover:text-[#464545]  md:hover:border-transparent lg:hover:border-transparent  sm:hover:border-gray-900  hover:border  hover:rounded-lg                                 '><a href="#" onClick={()=>scrollIntoView('projects')}>    PROJECTS</a></li>
                  {/* <li className='active:text-[#FA6F00] active:font-bold sm:text-nowrap md:hover:border-transparent hover:text-[#464545] lg:hover:border-transparent  sm:hover:border-gray-900  hover:border hover:rounded-lg                    '><a href="#">CONTACT ME</a></li> */}
                </ul>
              </div>

              <div className="button flex lg:justify-end md:justify-end sm:justify-center sm:mt-3 lg:mt-0 md:mt-0">
                 <a href="mailto:muhbasit235@gmail.com">
                <button className='border lg:w-32 md:w-32 sm:w-24 sm:h-10 rounded-lg bg-gradient-to-br from-[#FA6F00] to-[#c15d10] text-white font-bold'>Hire Me</button>
                 </a>
                 </div>
            </>
          )}

        </div>
      </div>
    </>
  );
}

export default Header;
