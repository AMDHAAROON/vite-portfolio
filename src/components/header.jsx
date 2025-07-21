import { Bars3Icon} from '@heroicons/react/24/solid'
import { useState } from 'react'
import icon from '../assets/online-learning.png';


export default function Header(){
   const [toggleMenu,settoggleMenu]= useState(false);
    return <>
    <section className="px-3 pt-4 bg-[#ECECEC] cursor-default ">    
    <header className="flex justify-between px-10 py-5  bg-lightlaven rounded-t-2xl border-x-2  border-[#ffffff] ">
        <a href="#" className="font-cursive text-gray-600 text-4xl   border-r-2 border-white pr-4 flex"> Myself
        </a>
        <nav className="hidden  md:block">
        <ul className="flex gap-9  mt-2 text-gray-600 font-marker text-2xl ">
           <li> <a href="/" className='pb-1 border-b-4 border-lightlaven hover:border-white transition-all duration-300'>Home</a></li>
           <li> <a href="#about" className='pb-1 border-b-4 border-lightlaven hover:border-white transition-all duration-300'>About</a></li>
            <li><a href="#project" className='pb-1 border-b-4 border-lightlaven hover:border-white transition-all duration-300'>Projects</a></li>
            <li><a href="#resume" className='pb-1 border-b-4 border-lightlaven hover:border-white transition-all duration-300'>Resume</a></li>
            <li><a href="#contact" className='pb-1 border-b-4 border-lightlaven hover:border-white transition-all duration-300'>Contact</a></li>
        </ul>
        </nav> 
      
     
       
        { toggleMenu && <nav className="block md:hidden  ">
           
        <ul onClick={()=>settoggleMenu(!toggleMenu)} className="flex flex-col py-16 mobile-nav animate-slide-down  z-50">
       
           <li> <a href="/" className='text-white pb-3 border-b-2 border-white  '>Home</a></li>
           <li> <a href="#about" className='text-white pb-3 border-b-2 border-white ' >About</a></li>
            <li><a href="#project" className='text-white pb-3 border-b-2 border-white'>Projects</a></li>
            <li><a href="#resume" className='text-white pb-3 border-b-2 border-white'>Resume</a></li>
            <li><a href="#contact" className='text-white pb-3 border-b-2 border-white'>Contact</a></li>
           
        </ul>
       
        </nav>}
        
        <button onClick={()=>settoggleMenu(!toggleMenu)} className='block md:hidden'> <Bars3Icon className=' text-black h-10 pb-2 '/></button>
        
    </header>
    </section>
    </>
}