import React, { useState } from 'react'
import { FaInstagram,FaFacebookSquare,FaTwitter } from "react-icons/fa";
import amp from "../assets/amp.png"

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = ()=>{
        setMenuOpen(!menuOpen)
    }
  return (
    <nav className={`w-[100vw]   flex flex-col gap-3`}>
         <div className='flex justify-center items-center p-5 text-white text-xl  bg-[#c76205] w-full'>
           <marquee>
           Easy Returns I Free Shipping
           </marquee>

           {/* <div className='flex md:hidden ' onClick={toggleMenu}>
           <AiOutlineMenu
            
           /></div> */}
            </div>

            <div className='hidden md:flex items-end w-full justify-end text-4xl gap-5 pr-10 text-[#69443c] cursor-pointer'>
                <FaInstagram className='transform hover:scale-110 scale-100'/>
                <FaFacebookSquare className='transform hover:scale-110 scale-100'/>
                <FaTwitter className='transform hover:scale-110 scale-100'/>
                
            </div>

            <div className=' flex md:flex-row flex-col justify-center items-center text-[4rem] md:text-[8rem] text-[#d16808] flex-wrap  md:max-h-[160px]'>
                <div className='flex justify-center items-center'>

                <div className=' '>
                Lasso  
                </div>
                <div>
                <img src={amp} className='h-[4rem]  md:h-[7rem] md:mt-[-20px]'/>
                </div>
                </div>
                <div>
                Lace
                </div>


            </div>

           <div className='mx-auto max-w-[500px] md:max-w-full'>
           <div className='flex gap-4 md:gap-10 text-lg md:text-2xl justify-center items-center  text-[#69443c] flex-wrap px-2 cursor-pointer'>
                <div className='transform hover:scale-110 scale-100'>Home</div>
                <div className='transform hover:scale-110 scale-100'>Shop</div>
                <div className='transform hover:scale-110 scale-100'>Collection</div>
                <div className='transform hover:scale-110 scale-100'>About</div>
                <div className='transform hover:scale-110 scale-100'>Contact</div>
            </div>
           </div>

           {/* code for sidebar */}
{/* 
           <div className={`fixed top-0 right-0 h-full w-[80%] bg-white z-50 p-5 transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className='flex justify-between items-center mb-8'>
          <h2 className='text-2xl text-[#69443c]'>Menu</h2>
          <AiOutlineClose onClick={toggleMenu} className='text-2xl cursor-pointer' />
        </div>
        <ul className='text-[#69443c] flex flex-col gap-4 text-xl'>
          <li className='transform hover:scale-110'>Home</li>
          <li className='transform hover:scale-110'>Shop</li>
          <li className='transform hover:scale-110'>Collection</li>
          <li className='transform hover:scale-110'>About</li>
          <li className='transform hover:scale-110'>Contact</li>
        </ul>
      </div> */}
     
    </nav>
  )
}

export default Navbar