import React from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom';
import "remixicon/fonts/remixicon.css";
import MenuItems from "./MenuItems"
const Navbar = () => {

  const [active, setActive] = useState(false)

  const showMenu = () => {
    setActive(!active)
  }
  return (
    <div className='fixed w-full bg-[#0a192f] flex justify-between p-4 '>
          <div className='text-2xl font-bold uppercase   scale-150'>
                <h1 className='block text-xl text-[#59e2c5] font-semibold'>OJ</h1>
          </div>
        
        <nav>
          <div className='absolute right-6 scale-150 md:hidden'>
            <i className='ri-menu-line scale-150 cursor-pointer text-[1.5rem] text-[#59e2c5]' 
            onClick={showMenu}></i>
          </div>

            <ul className='hidden md:flex gap-8 text-white'>
              <li><Link to='/About'className='text-[#939fbc] hover:text-[#59e2c5] transition-all'><span className='text-[#59e2c5]'>01.</span>  About</Link></li>

              <li><Link to="/Experience" className='text-[#939fbc] hover:text-[#59e2c5] transition-all'><span className='text-[#59e2c5]'>02.</span>  Experience</Link></li>

              <li><Link to="/Work" className='text-[#939fbc] hover:text-[#59e2c5] transition-all '><span className='text-[#59e2c5]'>03.</span>  Work</Link></li>

              <li><Link to="/Contact" className='text-[#939fbc] hover:text-[#59e2c5] transition-all'><span className='text-[#59e2c5]'>04.</span> Contact</Link></li>

              <Link to="/Resume"> <button className='rounded-lg border-solid border-2 border-[#40a496] h-11 w-24 min-w-[20%] text-[#40a496] font-semibold'>Resume</button> </Link>

            </ul>

            <MenuItems showMenu={showMenu} active={active}/>
          
        </nav>
       
    </div>

    
  )
}

export default Navbar