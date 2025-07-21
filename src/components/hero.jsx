import heroimg from '../assets/hero2.svg';
import { FaLinkedin} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";


export default function Hero(){
   const config={
      subtitle:'a dedicated frontend developer.',
      social:{
         insta:'https://www.instagram.com/mhd_haaroon/',
         linked:'https://www.linkedin.com/in/mohamed-haaroon/',
      }
   }

return<div className='pb-4 cursor-default bg-[#ECECEC]  ' id="hero">
 <section className='flex  flex-col md:flex-row bg-lightlaven  mx-3  pt-16 pb-8  px-6   text-black border-x-2 border-[#ffff] '>
    <div className='md:w-1/2  text-4xl font-chalk  justify-center  md:pt-8 text-center md:ml-20 leading-normal md:leading-snug text-black flex flex-col' >
    <h1 >Hey !<br/>I'm Mohamed<span className='text-black font-marker hover:text-white cursor-pointer'> Haaroon,</span>
    <p className='text-lg md:text-xl font-mono mt-2'>{config.subtitle}<span className='caret'></span></p>
     </h1>
     <div className='flex  mx-auto  md:justify-center mt-6'>
        <a href={config.social.linked} className='ml-12 mr-10 text-white hover:text-black'><FaLinkedin size={40}/></a>
        <a href={config.social.insta} className=' mr-16 md:mr-10 text-black hover:text-white'><AiFillInstagram size={40}/></a>
     </div>
     </div>
     <img  className=" md:w-1/2 mr-5 pt-8 float-img " src={heroimg}/>
   
    </section>
    <div class="flex justify-center bg-lightlaven rounded-b-2xl  py-4 mx-3 shadow-xl border-b-2 border-x-2  border-[#ffffff]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
              </svg>
             <a href="#about"><span class="ml-3 font-bold">Scroll Down</span></a>
        </div>
    </div>
}  