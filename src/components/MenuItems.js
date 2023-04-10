import React from 'react'
import { Link } from 'react-router-dom'
import 'animate.css';

const Navbar = ({showMenu,active}) => {
  return (
    <div className='ease-in duration-300 website__div '>
    <ul className={active?'flex-col flex items-center fixed inset-0 left-1/4 bg-black/40 backdrop-blur-lg gap-8 justify-center p-8 md:hidden ': "hidden"}>
      <i className="ri-close-line cursor-pointer text-[1.5rem] text-[#59e2c5]" onClick={showMenu}></i>
      <li><Link to="/About" className='text-[#939fbc] transition-duration: 75ms  animate__backInRight'> <span  className='text-[#59e2c5]'>01.</span> About</Link></li>
      <li><Link to="/Experience" className='text-[#939fbc]'> <span className='text-[#59e2c5]'>02.</span> Experience</Link></li>
      <li><Link to="/Work"  className='text-[#939fbc]'> <span className='text-[#59e2c5]'>03.</span> Work</Link></li>
      <li><Link to="/Contact" className='text-[#939fbc]'> <span className='text-[#59e2c5]'>04. </span> Contact</Link></li>
      <Link to="/Resume"><button className='rounded-lg border-solid border-2 border-[#40a496] h-11 w-24 min-w-[20%] text-[#40a496] font-semibold'>Resume</button></Link>
     
    </ul>
    </div>
    
       
    
    
  )
}

export default Navbar