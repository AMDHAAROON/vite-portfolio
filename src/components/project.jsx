import clg from '../assets/clg.jpg';
import tour from '../assets/tour.jpeg';
import { useState,useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import Typewriter from 'typewriter-effect';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export default function Project() {
  // const [activeIndex, setActiveIndex] = useState(1);
  const [, setDirection] = useState("right"); // for slide direction

  const projects = [
    {
      title: "Cultural Hub Website",
      description: "A dynamic event and workshop platform built with React and Tailwind.",
      image: clg,
      link: "https://mohamed-haaroon.web.app"
    },
    {
      title: "Tourism Website",
      description: "Tourism website using HTML, CSS, JavaScript, and Tailwind CSS.",
      image: tour,
      link: "https://github.com/AMDHAAROON/Tourism-website"
    },
    {
      title: "College Website",
      description: "Frontend developer role using React and Tailwind CSS.",
      image: clg,
      link: "https://github.com/AMDHAAROON"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(Math.floor(projects.length / 2));

  const goLeft = () => {
    setDirection("left");
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goRight = () => {
    setDirection("right");
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };
 
   const { ref, inView } = useInView({ threshold: 0.9 });
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (inView) {
      setKey(prev => prev + 1); // Force remount on view
    }
  }, [inView]);

  return (
    <div className='pb-4 px-3 cursor-default bg-[#e0e0e0]' id='project'>
      <section className='bg-lightlaven border-x-2 border-b-2 border-[#ffffff] shadow-2xl rounded-2xl p-6'>
        <h1 ref={ref} className='text-center text-5xl text-white font-cal mb-10'> {inView && (
        <Typewriter
          key={key} // this remounts the component
          onInit={(typewriter) => {
            typewriter.typeString('Projects').start();
          }}
        />
      )}</h1>

        {/* Desktop View */}
        <div className="hidden md:flex justify-center gap-6 mb-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`w-80 h-64 rounded-lg overflow-hidden shadow-lg bg-white transition-all duration-300 ${
                activeIndex === idx ? "opacity-100 scale-105" : "opacity-40"
              }`}
              onMouseEnter={() => setActiveIndex(idx)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex items-center justify-center gap-4 mt-8">
          <button onClick={goLeft} className="text-white p-2 rounded-full bg-[#ffffff] hover:bg-white hover:text-black transition">
  <ArrowBackIosNewIcon fontSize="medium" />
</button>

          {/* Sliding container */}
            console.log("Project component loaded");
<div className="relative w-80 h-64 overflow-hidden">
  <div className="w-full h-full bg-white rounded-lg shadow-lg overflow-hidden">
    <img
      src={projects[activeIndex].image}
      alt={projects[activeIndex].title}
      className="w-full object-cover max-h-44 md:max-h-52"
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold">{projects[activeIndex].title}</h3>
      <p className="text-sm text-gray-600">{projects[activeIndex].description}</p>
    </div>
  </div>
</div>



          <button onClick={goRight} className="text-white p-2 rounded-full bg-[#ffffff] hover:bg-white hover:text-black transition">
  <ArrowForwardIosIcon fontSize="medium" />
</button>
        </div>
      </section>
    </div>
  );
}
