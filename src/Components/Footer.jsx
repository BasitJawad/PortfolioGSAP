import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons'
import "./footer.css"

const Footer = () => {

    const scrollIntoView =(id)=>{
            // e.preventDefault();

            const page  = document.getElementsByClassName(id);
            page.scrollIntoView({behavior: 'smooth'})
    }

  return (
    <div className="footer1 flex flex-col mt-auto">

    <div className='footer flex justify-center flex-col  text-center bg-[#3e3d3d]'>
        <div className="logo">
        <h1 className='mt-3 font-bold drop-shadow text-3xl bg-gradient-to-r from-[#FA6E00] to-[#E60026] text-transparent bg-clip-text'>BJ</h1>
        </div>
        <div className="nav">
            <ul className='flex justify-center gap-8 mt-5 xl:flex-row md:flex-row sm:flex-col text-white'>
                <li className=' hover:text-gray-400 hover:underline'  onClick={()=>scrollIntoView('home')}  >    <a href="#">Home   </a> </li>
                <li className=' hover:text-gray-400 hover:underline'  onClick={()=>scrollIntoView('services')}  ><a href="#">Services   </a> </li>
                <li className=' hover:text-gray-400 hover:underline'  onClick={()=>scrollIntoView('Tasks')}  ><a href="#">Projects   </a> </li>
                <li className=' hover:text-gray-400 hover:underline'  onClick={()=>scrollIntoView('AboutBody')}  >    <a href="#">About me   </a> </li>
            </ul>
        </div>
            
    <div className="name mt-5 flex justify-evenly text-center text-white">
        <i><FontAwesomeIcon icon={faEnvelope}/> muhbasit235@gmail.com</i> 
        <i><FontAwesomeIcon icon={faPhone}/> +92 3035243493</i>
    </div>
    <div className="divider flex  justify-center">
        <hr className='bg-white border-slate  mt-5 w-[70%]' />
    </div>
        <div className="text-white mb-3">
            <small  >Designed by @basitjawad <i>Full Stack Web Developer</i></small>
        </div>
    </div>
    </div>
  )
}

export default Footer
