import manEmoji from "../assets/boss.png"
import myPhoto from "../assets/myPic.png"

import { useLayoutEffect } from "react";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";


function About() {

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [Location]);

  return (
    <div className="min-h-screen">

      <div className="pt-20 px-0 md:px-20 pb-8 w-full">
        <div className="flex justify-center items-center gap-3 mt-4">
          <h2 className="font-bold text-4xl text-center">About Me</h2>
          <img className="w-9 h-8" src={manEmoji} />
        </div>

        {/* about me */}
        <div className="flex md:flex-row flex-col items-center w-full">
          <div className="w-[100%] z-10 md:w-[50%] flex justify-center px-10 md:px-0 py-16 md:py-20">
            <img className="md:w-[60%] w-3/4 md:h-[100%] h-3/4 rounded-full border-[5px] border-slate-800" src={myPhoto} alt="" />
          </div>
          <p className="text-lg text-gray-300 text-justify px-7 md:mr-[54px]"><span className="font-semibold text-[#12E8BA]">I’m Sundharacholan</span>, a passionate fullstack developer who thrives on turning creative ideas into functional digital products. I specialize in building responsive, efficient, and visually appealing web solutions using the MERN stack</p>
        </div>

        <div className="px-7 md:px-16 mt-6 md:mt-0">
          <div>
            <h2 className="font-semibold text-xl text-[#12E8BA]">Career Goals</h2>
            <p className="border-l-[3px] rounded-t-[6px] rounded-b-[6px] pl-3 py-1 text-[17px] mb-4 text-justify mt-1 ml-1 text-gray-300">My goal is to grow as a full-stack developer and contribute to impactful products that solve real-world problems. I aspire to work in a collaborative environment where I can innovate, learn from industry experts, and create seamless digital experiences that make technology accessible to everyone.</p>
          </div>
          <div className="pt-1">
            <h2 className="font-semibold text-xl text-[#12E8BA]">Education</h2>
            <h4 className="border-l-[3px] rounded-t-[6px] pl-3 pt-1 ml-1 mt-1 text-gray-300"> Bachelor of Technology <span className="font-medium">(B.Tech) </span> in Computer Science and Business Systems</h4>
            <h4 className="border-l-[3px] pl-3 ml-1 text-gray-300">Sri Sairam Engineering College — Graduation: 2027</h4>
            <p className="border-l-[3px] rounded-b-[6px] pl-3 pb-1 ml-1 pt-2 text-[17px] mb-4 text-justify text-gray-400/80">Studied software development, data management, and technology-driven business systems to solve modern challenges effectively.</p>
          </div>
          <div className="pt-1">
            <h2 className="font-semibold text-xl text-[#12E8BA]">Full-Stack Development Course</h2>
            <h4 className="border-l-[3px] rounded-t-[6px] pl-3 pt-1 ml-1 mt-1 text-gray-300">Error Makes Clever Academy  —  Completed:2024  </h4>
            <p className="border-l-[3px] rounded-b-[6px] pl-3 pb-1 text-[17px] ml-1 pt-1 mb-4 text-justify text-gray-400/80 ">Trained in end-to-end web application development using React.js, Node.js, Express, and MongoDB with hands-on project experience.</p>
          </div>
        </div>

      </div>

      {/*Skills & Technologies*/}
      <div className="w-full md:flex gap-10 px-7 md:px-40 mt-8 py-3 md:py-[104.8px] bg-gradient-to-br from-[#11192b] to-[#0f0f0f]">

        <div className="w-full md:w-[40%] flex flex-col justify-center">
          {/* <p className="font-semibold w-fit rounded-2xl px-4 py-1 text-xs md:text-sm bg-[#12E8BA] text-black">MY PROCESS</p> */}
          <h2 className="w-[60%] md:w-[58%] font-bold text-3xl md:text-4xl mt-6 md:mt-0">Skills & Technologies</h2>

          <div className="w-fit mt-5 md:mt-8 gap-2 flex items-center font-semibold text-base md:text-lg border border-[#12E8BA] text-[#12E8BA] hover:text-black rounded-3xl py-2 px-[12px] md:px-[22px] hover:bg-[#12E8BA] hover:cursor-pointer">
            <a href="./Resume.pdf" download className="md:tracking-wide">📄 Download Resume</a>
          </div>
        </div>

        <div className="w-[100%] py-6 md:py-0 flex flex-wrap gap-4 md:gap-3 text-sm">
          {/* React */}
          <div className=" flex flex-1 flex-col justify-center items-center bg-white/5 px-5 md:px-9 py-5 rounded-xl backdrop-blur-md hover:scale-95 transition">
            <FaReact className="text-[#61DAFB] text-4xl mb-3" />
            <p className="font-medium text-gray-200">React.js</p>
            {/* <div className="w-full rounded-lg bg-white/30 mt-2">
                <div className="text-center rounded-l-lg rounded-md text-[10px] bg-white text-black w-[90%]">90%</div>
              </div> */}
          </div>
          {/* Tailwind */}
          <div className="flex flex-1 flex-col justify-center items-center bg-white/5 px-5 py-6 rounded-xl backdrop-blur-md hover:scale-95 transition">
            <SiTailwindcss className="text-[#38BDF8] text-4xl mb-3" />
            <p className="font-medium text-gray-200">TailwindCSS</p>
            {/* <div className="w-full rounded-lg bg-white/30 mt-2">
                <div className="text-center rounded-l-lg rounded-lg text-[10px] bg-white text-black w-[95%]">95%</div>
              </div> */}
          </div>
          {/* Node */}
          <div className="flex flex-1 flex-col  justify-center items-center bg-white/5 px-8 md:px-[34px] py-5 rounded-xl backdrop-blur-md hover:scale-95 transition">
            <FaNodeJs className="text-[#68A063] text-4xl mb-3" />
            <p className="font-medium text-gray-200">Node.js</p>
            {/* <div className="w-full rounded-lg bg-white/30 mt-2">
                <div className="text-center text-[10px] rounded-l-lg bg-white text-black w-[80%]">80%</div>
              </div> */}
          </div>
          {/* Express */}
          <div className="flex flex-1 flex-col justify-center items-center bg-white/5 px-8 md:px-7 py-5 rounded-xl backdrop-blur-md hover:scale-95 transition">
            <SiExpress className="text-gray-300 text-4xl mb-3" />
            <p className="font-medium text-gray-200">Express.js</p>
            {/* <div className="w-full rounded-lg bg-white/30 mt-2">
                <div className="text-center rounded-l-lg text-[10px] bg-white text-black w-[80%]">80%</div>
              </div> */}
          </div>
          {/* MongoDB */}
          <div className="flex flex-1 flex-col justify-center items-center bg-white/5 px-8 md:px-6 py-5 rounded-xl backdrop-blur-md hover:scale-95 transition">
            <SiMongodb className="text-[#4DB33D] text-4xl mb-3" />
            <p className="font-medium text-gray-200">MongoDB</p>
            {/* <div className="w-full rounded-lg bg-white/30 mt-2">
                <div className="text-center rounded-l-lg text-[10px] bg-white text-black w-[75%]">70%</div>
              </div> */}
          </div>
          {/* GitHub */}
          <div className="flex flex-1 flex-col justify-center items-center bg-white/5 py-5 px-8 rounded-xl backdrop-blur-md hover:scale-95 transition">
            <FaGithub className="text-gray-300 text-4xl mb-3" />
            <p className="font-medium text-gray-200">GitHub</p>
            {/* <div className="w-full rounded-lg bg-white/30 mt-2">
                <div className="text-center rounded-l-lg text-[10px] bg-white text-black w-[75%]">70%</div>
              </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;