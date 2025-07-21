import aboutimg from "../assets/hero.png";
import { useInView } from "react-intersection-observer";
import Typewriter from "typewriter-effect";
import { useEffect, useState } from "react";

export default function TypingHeading() {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (inView) {
      setKey((prev) => prev + 1); // Force remount on view
    }
  }, [inView]);

  const config = {
    line1:
      "I am Mohamed Haaroon, a BCA student at SASTRA University with a strong foundation in IT, data analytics, and programming.",
    line2:
      "And recognized by TCS iON and Accenture for my analytical and technical skills, I am passionate about leveraging my academic expertise to solve real-world challenges",
    line3:
      "Currently, I am enhancing my skills in front-end development and am eager to work as an intern or in any opportunity that allows me to contribute, learn, and grow in the IT field.",
  };

  return (
    <div className="px-3 pb-4 dark cursor-default bg-[#ECECEC]" id="about">
      <section className="flex flex-col md:flex-row border-2 border-[#D7DDF0] shadow-xl rounded-2xl p-12 md:p-20 bg-white">
        <div className="md:w-1/2  md:mr-10  ">
          <img
            src={aboutimg}
            className="md:h-auto  md:mx-6 md:my-10 lg:my-0 float-img"
          />
        </div>

        <div className="md:w-1/2 ">
          <div className="flex flex-col  md:pl-8  ">
            <h1
              ref={ref}
              className="text-[#7596F7] text-3xl md:text-5xl  font-cal  tracking-wide "
            >
              {inView && (
                <Typewriter
                  key={key} // this remounts the component
                  onInit={(typewriter) => {
                    typewriter.typeString("Get to know me").start();
                  }}
                />
              )}{" "}
            </h1>

            <p className="pt-4  md:pt-12 text-1xl font-mono ">
              {" "}
              {config.line1}
            </p>
            <p className="pt-6 text-1xl font-mono">{config.line2} </p>
            <p className="pt-6 text-1xl font-mono hidden sm:block ">
              {config.line3}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
