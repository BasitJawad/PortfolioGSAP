import React from 'react'
import "./card.css"
const Card = (props) => {

  return (
    <>
    <div className="ThreeD">

        <div className="container grid grid-rows-3 place-content-center items-center  rounded-xl lg:w-1/5 ">
            <div className="logo flex justify-center">
                <img src={props.logo} alt="Services" className='w-14   h-15 logoImage ' />
                </div>
            <div className="serviceName flex justify-center text-white text-xl font-bold "><h1 className='bg-gradient-to-br  text-2xl  from-[#984300] via-[#FD6F00] to-[#CA5900] bg-clip-text text-transparent '>{props.heading}</h1></div>
            <div className="description text-white text-center"><p className='   '> {props.desc}</p></div>
        </div>
    </div>
    
    </>
  )
}

export default Card