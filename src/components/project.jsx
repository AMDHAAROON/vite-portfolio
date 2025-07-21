import clg from "../assets/clg.jpg";
import tour from "../assets/tour.jpeg";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Typewriter from "typewriter-effect";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Project() {
  // const [activeIndex, setActiveIndex] = useState(1);
  const [, setDirection] = useState("right"); // for slide direction

  const projects = [
    {
      title: "Cultural Hub Website",
      description:
        "A dynamic event and workshop platform built with React and Tailwind.",
      image: clg,
      link: "https://github.com/AMDHAAROON/theta-1",
    },
    {
      title: "Tourism Website",
      description:
        "Tourism website using HTML, CSS, JavaScript, and Tailwind CSS.",
      image: tour,
      link: "https://github.com/AMDHAAROON/Tourism-website",
    },
    {
      title: "Portfolio Website",
      description:
        "A fast and responsive portfolio built with React, Tailwind, and Vite showcasing modern skills.",
      image: clg,
      link: "https://github.com/AMDHAAROON/vite-portfolio",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(
    Math.floor(projects.length / 2)
  );

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
      setKey((prev) => prev + 1); // Force remount on view
    }
  }, [inView]);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(true);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pb-4 px-3 cursor-default bg-[#ECECEC]" id="project">
      <section className="bg-lightlaven border-x-2 border-b-2 border-[#ffffff] shadow-2xl rounded-2xl p-2 py-10">
        <h1
          ref={ref}
          className="text-center text-4xl  md:text-5xl text-white font-cal mb-10"
        >
          {" "}
          {inView && (
            <Typewriter
              key={key} // this remounts the component
              onInit={(typewriter) => {
                typewriter.typeString("Projects").start();
              }}
            />
          )}
        </h1>

        {/* Desktop View */}
        <div className="hidden md:flex justify-center gap-6 mb-8">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative w-80 h-64 rounded-lg overflow-hidden shadow-lg bg-white transition-all duration-300 group ${
                activeIndex === idx ? "opacity-100 scale-105" : "opacity-40"
              }`}
              onMouseEnter={() => setActiveIndex(idx)}
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />

              {/* Text content */}
              <div className="absolute bottom-0 w-full bg-white/80 p-4 py-6 backdrop-blur-sm">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.description}</p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-base font-medium animate-pulse">
                  Click to view
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex items-center justify-center gap-4 mt-2 md:mt-8 ">
          <button
            onClick={goLeft}
            className="text-[#B2C3F7] p-2 rounded-full bg-[#ffffff] hover:bg-[#B2C3F7] hover:text-white transition"
          >
            <ArrowBackIosNewIcon fontSize="medium" className="" />
          </button>

          {/* Sliding container */}

          <a
            href={projects[activeIndex].link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-80 h-64 overflow-hidden group"
          >
            <div className="w-full h-full bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={projects[activeIndex].image}
                alt={projects[activeIndex].title}
                className="w-full object-cover max-h-38"
              />
              <div className="pt-2 px-4">
                <h3 className="text-lg font-semibold">
                  {projects[activeIndex].title}
                </h3>
                <p className="text-sm text-gray-600">
                  {projects[activeIndex].description}
                </p>
              </div>
            </div>

            {/* Overlay text */}
            {showHint && (
              <div className=" rounded-lg absolute inset-0 bg-[rgba(0,0,0,0.2)] flex items-center justify-center text-white text-sm font-medium">
                Tap to view
              </div>
            )}
          </a>

          <button
            onClick={goRight}
            className="text-[#B2C3F7] p-2 rounded-full bg-[#ffffff] hover:bg-[#B2C3F7] hover:text-white transition"
          >
            <ArrowForwardIosIcon fontSize="medium" />
          </button>
        </div>
      </section>
    </div>
  );
}
