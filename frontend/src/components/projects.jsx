import { Link, useLocation } from "react-router-dom"
import { useEffect } from "react"

import actodo from "../assets/actodo.png"
import greenden from "../assets/greenden.png"
import nostra from "../assets/nostra.png"
import tripadvisor from "../assets/tripadvisor.png"
import udemy from "../assets/udemy.png"
import weatherApp from "../assets/weatherApp.png"

function Projects() {

    const Location = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [Location])

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
            name: "Actodo",
            date: "Aug 2025",
            banner: actodo,
            demo: "https://actodo-blush.vercel.app/",
            tech: ["React.js", "TailwindCSS"],
            description: "Actodo is a smart to-do web app with user authentication, enabling users to add, delete, and manage tasks easily, while displaying the current date and time."
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
            description: "Greenden is a responsive plant e-commerce site featuring flower products, best sellers, customer reviews, and a clean user-friendly design."
        },
        {
            name: "TripAdvisor",
            date: "Oct 2024",
            banner: tripadvisor,
            demo: "https://sundharacholan.github.io/tripadvisor/",
            tech: ["HTML", "TailwindCSS"],
            description: "A responsive TripAdvisor clone, featuring hotel listings, reviews, ratings, and intuitive UI components for a smooth cross-device experience."
        },
        {
            name: "Udemy Clone",
            date: "Sep 2024",
            banner: udemy,
            demo: "https://sundharacholan.github.io/Udemy_clone/",
            tech: ["HTML", "CSS"],
            description: "A Udemy clone, replicating key UI components like navbar, banner, course cards, and footer for a seamless user experience across devices."
        },
    ]

    return (
        <div className="flex flex-col justify-center items-center min-h-screen">

            <div className="px-7 pt-20 pb-12 w-full">

                <h2 className="font-bold text-4xl text-center mt-4">Projects ✨</h2>

                {/* project cards */}
                <div className="flex flex-wrap py-9 gap-x-10 gap-y-7  md:gap-y-[90px]">
                    {
                        projectList.map(function (data, index) {
                            return (
                                <div className="flex-col justify-center shadow-lg shadow-black/70 bg-gradient-to-br from-[#071017] to-[#0f162a] items-center grow md:w-[30%] border-gray-800/50  border rounded-2xl py-4" key={index} >

                                    <div className="flex justify-between items-center px-2 pb-3">
                                        <h2 className="text-xl font-bold">{data.name}</h2>
                                        <p className="text-xs pr-1 text-gray-300 font-medium">🚀 {data.date}</p>
                                    </div>

                                    <img className="rounded-tl-xl rounded-tr-xl w-full opacity-90" src={data.banner} alt="" />

                                    <div>

                                        <p className="text-gray-300 mx-5  text-justify pt-3 pb-[10px]">{data.description}</p>
                                        <div className="flex gap-2 justify-between items-center px-3 border-t border-gray-900/90 pt-3">

                                            <div className="flex items-center gap-2 flex-wrap w-[64%]">
                                                {data.tech.map(function (tool) {
                                                    return (
                                                        <h1 className="bg-white/5 text-[#12E8BA] px-[10px] py-1 mt-[1px] text-xs md:text-sm rounded-md font-medium">{tool}</h1>
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
            </div>

            {/* footer */}
            {/* <div className="w-full bg-black/30">
                <div className="w-full flex justify-between py-16 px-7">
                    <div>
                        <div className="flex items-center gap-2">
                            <img className="w-12 h-12 rounded-s-full mt-[2px] md:mt-[4px]" src={logo} alt="logo" />
                            <h1 className="text-2xl w-fit md:text-4xl font-medium md:font-semibold" >Sundharacholan</h1>
                        </div>
                        <h4 className="text-lg md:text-xl ml-[57px] mt-1 text-gray-300/60">Full-Stack Developer</h4>
                    </div>

                    <div className="flex justify-between gap-24">
                        <div className="flex flex-col gap-3 text-center">
                            <h1 className="mb-1 text-lg font-medium">Services</h1>
                            <p className="cursor-pointer text-gray-300/70 ">Website Development</p>
                            <p className="cursor-pointer text-gray-300/70 ">Freelance Development</p>
                        </div>
                        <div className="flex flex-col gap-3 text-center">
                            <h1 className="mb-1 text-lg font-medium">Connect With Me</h1>
                            <p className="cursor-pointer text-gray-300/70 hover:text-[#12E8BA]">Email</p>
                            <p className="cursor-pointer text-gray-300/70 hover:text-[#12E8BA]">LinkedIn</p>
                        </div>
                    </div>
                </div>
                <div className="border-t-gray-900/90 border-t py-4 text-center text-sm text-gray-500">
                    <p>© 2025 Sundharacholan. All rights reserved.</p>
                </div>
            </div> */}

        </div>
    );
}

export default Projects;