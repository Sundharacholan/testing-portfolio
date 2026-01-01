import { Link } from "react-router-dom"
import { useLayoutEffect } from "react";

import logo from "../assets/logo.png"
import myPhoto from "../assets/myPic.png"
import nostra from "../assets/nostra.png"
import weatherApp from "../assets/weatherApp.png"
import greenden from "../assets/greenden.png"

function Home() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [Location]);

    var chooseMe = [
        {
            title: "Design Mindset",
            cmIcon: "🎨",
            para: "I believe design and development go hand in hand. I blend functionality with clean, modern UI/UX to create applications that are not only reliable but also engaging and intuitive for users.",
        },
        {
            title: "Growth-Oriented",
            cmIcon: "📈",
            para: "I embrace continuous learning and adaptability. By keeping up with new tools and best practices, I ensure that every project I build is better than the last and ready for the future.",
        },
        {
            title: "Problem Solver",
            cmIcon: "🚀",
            para: "I approach challenges with creativity and logic, breaking down complex issues into clear, actionable steps.My focus is on delivering practical, solutions that work in real- world scenarios.",
        }
    ]

    var projectList = [
        {
            name: "Weather App",
            date: "Sep 2025",
            banner: weatherApp,
            demo: "https://weather-app-pearl-psi-24.vercel.app/",
            tech: ["React.js", "API", "TailwindCSS"],
            description: "A responsive weather app that fetches real-time data via an API, allowing users to search for any city and view current conditions through a simple, user-friendly design.",
        },
        {
            name: "Nostra",
            date: "Feb 2025",
            banner: nostra,
            demo: "https://sundharacholan.github.io/Nostra-v3.0/",
            tech: ["HTML", "CSS", "JavaScript"],
            description: "Nostra is a modern fashion e-commerce website offering summer collections, easy navigation, and a responsive design for a smooth shopping experience across devices."
        },
        {
            name: "GreenDen",
            date: "Nov 2024",
            banner: greenden,
            demo: "https://sundharacholan.github.io/greenden-js/",
            tech: ["HTML", "TailwindCSS", "JS"],
            description: "Greenden is a responsive plant e-commerce site featuring flower products, best sellers, customer reviews, and a clean user-friendly design, crafted with Tailwind CSS and JS.",
        },
    ]

    var WorkFlow = [
        {
            wTitle: "1. Analysis",
            wDesc: "Every successful project begins with insight. I dive deep into the problem, set clear objectives, and study user needs to ensure a solid foundation before development begins."
        },
        {
            wTitle: "2. Design",
            wDesc: "I turn ideas into structured solutions, designing user interfaces and database schemas for a smooth, scalable experience that balances usability and performance."
        },
        {
            wTitle: "3. Develop",
            wDesc: "I build the frontend and backend, integrate APIs, and connect databases, writing clean, maintainable, and scalable code that turns concepts into fully functional applications."
        },
        {
            wTitle: "4. Deploy",
            wDesc: "Once tested and optimized, I deploy the project securely to production and provide ongoing support, updates, and improvements to ensure the application grows with your needs."
        }
    ]


    return (
        <div className="min-h-screen flex justify-center items-center flex-col relative overflow-hidden">
            {/* Curved gradient background */}
            <div className="absolute top-0 right-0 bottom-0 w-[85%] h-[8%] md:h-screen md:w-[40%] bg-gradient-to-br from-[#191d39] to-[#0a0b10] rounded-bl-full"></div>

            <div className="ml-7 pt-16 pb-10 md:pb-0 pr-7  md:pr-0 flex flex-col-reverse md:flex-row w-[100%]">

                {/* text-content  */}
                <div className=" w-full px-3 md:px-0 md:pl-10 md:pr-0 md:w-1/2 flex flex-col justify-center">
                    <p className="font-semibold w-fit rounded-2xl px-4 py-1 text-xs md:text-sm bg-[#12E8BA] text-black">AVAILABLE FOR WORK</p>

                    <div className="mt-3 text-center">
                        <p className="w-fit text-xl md:text-2xl font-semibold text-gray-400 mt-1">I'm</p>
                        <h1 className="w-fit text-3xl md:text-5xl font-bold tracking-wide text-white" >Sundharacholan S L</h1>
                        <h3 className="w-fit mt-1 text-xl md:text-2xl font-semibold text-gray-400 ">MERN stack developer</h3>
                    </div>

                    <p className="md:w-[74%]  text-justify text-sm md:text-base text-gray-400 mt-3">Crafting modern, responsive web apps using React.js, Express.js, Tailwind, and MongoDB. Focused on performance, clean design, and impactful user experiences.</p>

                    {/* CTA  */}
                    <div className=" md:w-[39%] w-[57%] mt-6 flex items-center justify-between gap-2 font-medium text-base md:text-lg">
                        <Link to="contact" className="text-black bg-[#FACC15] rounded-lg py-2 px-[12px] md:px-4   hover:bg-[#eabf15eb] md:tracking-wider">Hire Me</Link>
                        <Link to="about" className="bg-black/30 text-[#FACC15] rounded-lg py-2 px-[12px] md:px-4 hover:bg-black/50 md:tracking-wider">About Me</Link>
                    </div>

                </div>

                {/* profile condainer */}
                <div className="w-[100%] z-10 md:w-[50%] flex justify-center py-16 md:py-20">
                    <img className="md:w-[60%] w-3/4 md:h-[100%] h-3/4 rounded-full border-8 border-slate-800" src={myPhoto} alt="" />
                </div>
            </div>

            {/* chooseMe condainer */}
            <div className="w-full px-7 py-14 md:py-[126px] bg-gradient-to-br from-[#11192b] to-[#0f0f0f]">

                <h2 className="w-full text-3xl md:text-5xl text-center md:text-left font-bold tracking-wide text-[#12E8BA] py-10">Why Choose Me</h2>
                <div className="flex gap-5 flex-wrap">
                    {
                        chooseMe.map(function (data, i) {
                            return (
                                <div key={i} className="border w-[100%] md:w-[30%] flex-grow border-gray-800/50 bg-black/20 border-t-gray-600 border-l-gray-600 border-l-2 border-t-2 p-6 rounded-tl-3xl rounded-br-3xl">
                                    <div className="flex items-center gap-3">
                                        <p className=" w-fit p-2 rounded-full bg-gradient-to-br from-[#121c35] to-[#071017]">{data.cmIcon}</p>
                                        <h1 className="w-fit text-xl md:text-2xl font-semibold text-white/90">{data.title}</h1>
                                    </div>
                                    <p className="text-justify text-sm md:text-base text-gray-300/80 mt-2">{data.para}</p>
                                </div>)
                        })
                    }
                </div>
            </div>

            {/* projects */}
            <div className="px-7 py-14">
                <p className="font-semibold w-fit rounded-2xl px-4 py-1 text-xs md:text-sm bg-[#12E8BA] text-black">SEE MY RECENT WORKS</p>
                {/* <h2 className="font-bold text-3xl md:text-5xl text-left mt-4">Projects</h2> */}

                {/* project cards */}
                <div className="flex flex-wrap py-9 gap-x-10 gap-y-7 md:gap-y-[90px]">
                    {
                        projectList.map(function (data, index) {
                            return (
                                <div className="flex-col h-[50%] justify-center shadow-lg shadow-black/70 bg-gradient-to-br from-[#071017] to-[#0f162a] items-center grow md:w-[30%] border-gray-800/50  border rounded-2xl py-4" key={index} >

                                    <div className="flex justify-between items-center px-2 pb-3">
                                        <h2 className="text-xl font-bold">{data.name}</h2>
                                        <p className="text-xs pr-1 text-gray-300 font-medium">🚀 {data.date}</p>
                                    </div>

                                    <img className="rounded-tl-xl rounded-tr-xl w-full opacity-90" src={data.banner} alt="" />

                                    <div>

                                        {/* <p className="text-gray-300 mx-5  text-justify pt-3 pb-[10px]">{data.description}</p> */}
                                        <div className="flex gap-2 justify-between items-center px-3 border-t border-gray-900/90 pt-4">

                                            <div className="flex items-center gap-2">
                                                {data.tech.map(function (tool) {
                                                    return (
                                                        <h1 className="bg-white/5 text-[#12E8BA] px-2 py-1 text-xs md:text-sm rounded-md font-medium">{tool}</h1>
                                                    )
                                                })}
                                            </div>

                                            <div className="flex justify-center items-center text-[#facc15c8]">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" stroke-width="1.5" stroke="currentColor" className="size-6 mt-[6px]">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                                </svg>
                                                <Link to={data.demo} className=" font-semibold text-base md:text-lg rounded-md" target="_blank">Live Demo</Link>
                                            </div>

                                        </div>

                                    </div>

                                </div>);
                        })
                    }
                </div>
                <Link to="/projects" className="w-fit mx-auto gap-2 flex items-center font-semibold text-base md:text-lg text-black bg-[#FACC15] rounded-lg py-2 px-[12px] md:px-4 hover:bg-[#eabf15eb]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499" />
                    </svg>
                    <h2 className="md:tracking-wider">See All Projects</h2>
                </Link>

            </div>

            {/*WorkFlow*/}
            <div className="w-full md:flex py-14 px-7 md:py-[104.8px] bg-gradient-to-br from-[#11192b] to-[#0f0f0f]">

                <div className=" w-full md:w-[40%] flex flex-col justify-center">
                    <p className="font-semibold w-fit rounded-2xl px-4 py-1 text-xs md:text-sm bg-[#12E8BA] text-black">MY PROCESS</p>
                    <h2 className="w-[58%] font-bold text-3xl md:text-5xl mt-6">My Development Workflow</h2>

                    <Link to="/contact" className="w-fit mt-6 gap-2 flex items-center font-semibold text-base md:text-lg text-black bg-[#FACC15] rounded-lg py-2 px-[12px] md:px-[22px] hover:bg-[#eabf15eb]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                        </svg>
                        <p className="md:tracking-wide">Turn Your Idea into Reality</p>
                    </Link>
                </div>

                <div className="w-full md:w-[60%] mt-8 flex flex-wrap items-center justify-center gap-4">
                    {
                        WorkFlow.map(function (data, i) {
                            return (
                                <div key={i} className="border md:w-[40%] w-full flex-grow border-gray-800/50 bg-black/20 border-t-gray-600 border-l-gray-600 border-l-2 border-t-2 p-6 rounded-tl-3xl rounded-br-3xl">
                                    <h3 className="w-fit text-xl md:text-2xl font-semibold text-white/90">{data.wTitle}</h3>
                                    <p className="text-justify text-xs md:text-sm text-gray-300/80 mt-2">{data.wDesc}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {/* footer */}
            <div className="w-full bg-black/30">
                <div className="w-full md:flex justify-between py-16 px-7">
                    <div className="flex items-center gap-3">
                        <img className="w-16 md:w-20 h-16 md:h-20 rounded-s-full mt-[2px] md:mt-[4px]" src={logo} alt="logo" />
                        <div>
                            <h1 className="text-2xl w-fit md:text-4xl font-medium md:font-semibold" >Sundharacholan</h1>
                            <h4 className="text-lg md:text-xl mt-1 text-gray-300/60 pl-[2px]">Full-Stack Developer</h4>
                        </div>
                    </div>

                    <div className="flex justify-start md:justify-between gap-24 px-4 mt-10 md:mt-0 text-start md:text-center">
                        <div className="flex flex-col gap-3">
                            <h1 className="md:mb-1 text-base md:text-lg font-medium text-white/85">Services</h1>
                            <p className="cursor-pointer text-gray-300/70 text-sm md:text-base ">Website Development</p>
                            <p className="cursor-pointer text-gray-300/70 text-sm md:text-base ">Freelance Development</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h1 className="md:mb-1 text-base md:text-lg font-medium text-white/85">Connect</h1>
                            <a href="mailto:chozhan136@gmail.com" className="cursor-pointer text-gray-300/70 hover:text-[#12E8BA] text-sm md:text-base ">Email</a>
                            <a href="https://www.linkedin.com/in/sundharacholan" target="_blank" className="cursor-pointer text-gray-300/70 hover:text-[#12E8BA] text-sm md:text-base ">LinkedIn</a>
                        </div>
                    </div>
                </div>
                <div className="border-t-gray-900/90 border-t py-4 text-center text-sm text-gray-500">
                    <p>© 2025 Sundharacholan. All rights reserved.</p>
                </div>
            </div>

        </div>
    );
}

export default Home;