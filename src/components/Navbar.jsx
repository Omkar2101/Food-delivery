import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { BsTruck } from "react-icons/bs";
import { FaBox } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from 'react';

//newthing focus-outline-none for the input box 

function Navbar(isopen) {
    const [nav,setnav] = useState(false);

  return (
   <>
    <div className='max-w-[1640px] mx-auto  flex justify-between items-center p-4 '>
        <div  className='flex  items-center'>
            <div onClick={()=>setnav(!nav)} >
                <AiOutlineMenu size={30}  className='px-1 cursor-pointer '></AiOutlineMenu>
            </div>
            <div className=''>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl '>Best <span className='font-bold'>Eats </span></h1>
            </div>

        </div>
       
        <div className='hidden lg:flex   mx-4 flex items-center rounded-xl bg-gray-200 w-32  gap-1'>
            <div className='text-white bg-black rounded-full p-1 '>Delivery</div>
            <div className='text-black '>Pickup</div>
        </div>
        
         {/* Search bar */}
        <div className='flex mx-auto rounded-full bg-gray-100 p-1 w-[200px] sm:w-[400px] lg:w-[500px]'>
            
            <AiOutlineSearch size={30} className='px-1'></AiOutlineSearch>
            <input type="text" className='bg-transparent focus:outline-none w-full '
            placeholder='Search food' />
        </div>
        <div className='w-20 h-6 rounded-full bg-zinc-800 flex justify-center items-center py-4 gap-2 '>
                <FaShoppingCart className='cursor-pointer text-white'></FaShoppingCart>
                <div className='text-white'>Cart</div>
        </div>

        {/* Menu  */}
        <div className={nav ? 'fixed bg-black/80 w-full h-screen top-0 left-0 z-10 ':""}>
            {/* Side drawer menu */}
                <div className={nav ?'bg-white/90 w-[300px]  duaratio:800 transition  h-screen fixed':'bg-white/90 w-[300px] left-[-100%]  duaratio:800 transition  h-screen fixed'}>
                <h1 className='text-xl sm:text-3xl lg:text-4xl '>Best <span className='font-bold'>Eats </span></h1>
                    <div className='text-bold top-0 right-0 absolute '  > 
                        <RxCross2 onClick={()=>setnav(!nav)} className="cursor-pointer" size={30}></RxCross2>
                    </div>
                    <div className='my-14'>
                        <nav className=''>
                            <ul className='cursor-pointer flex text-lg items-center p-2 gap-2 border-black border-b-2'>
                                <BsTruck ></BsTruck>
                                <li>Shipping</li>
                            </ul>
                            <ul className='cursor-pointer flex  text-lg items-center p-2 gap-2 border-black border-b-2'>
                                <FaBox></FaBox>
                                <li>Orders</li>
                            </ul>
                            <ul className='cursor-pointer flex  text-lg items-center p-2 gap-2 border-black border-b-2'>
                                <MdCall></MdCall>
                                <li>Help Center</li>
                            </ul>
                            <ul className='cursor-pointer flex  text-lg items-center p-2 gap-2 border-black border-b-2'>
                                <BsStars></BsStars>
                                <li>Rewards</li>
                            </ul>
                            <ul className='cursor-pointer flex  text-lg items-center p-2 gap-2 border-black border-b-2'>
                                <FaLocationDot></FaLocationDot>
                                <li>Location</li>
                            </ul>
                            
                        </nav>
                    </div>
                    
                    
                </div>
        </div>
    </div>
   
   
   </>
  )
}

export default Navbar