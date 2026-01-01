import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png"
import { useState } from "react";

function Nav() {

    const location = useLocation();
    var [isOpen, setIsOpen] = useState(false)

    var menuList = [
        { path: "/", name: "Home" },
        { path: "/projects", name: "Projects" },
        { path: "/about", name: "About" },
        { path: "/contact", name: "Contact" }
    ]

    return (
        <div>
            <div className="w-full fixed top-0 z-50 border-b border-b-gray-800 bg-black/30 backdrop-blur-lg flex justify-between items-center px-5 py-[10px]">

                <Link to={menuList[0].path} className="flex items-center gap-2">
                    <img className="w-10 h-10 rounded-s-full mt-[2px] md:mt-[4px]" src={logo} alt="logo" />
                    <h1 className="text-xl md:text-2xl font-medium md:font-semibold" >Sundharacholan</h1>
                </Link>

                <div className="flex md:hidden cursor-pointer" onClick={() => { setIsOpen(true) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>

                <div className="hidden gap-10 font-medium md:flex">
                    {
                        menuList.map(function (data) {
                            return (
                                <Link
                                    className={`hover:text-[#FACC15] px-1 ${location.pathname === data.path ||
                                        (data.path !== "/" && location.pathname.startsWith(data.path))
                                        ? "text-[#FACC15] border-b-2 border-b-[#FACC15]"
                                        : ""
                                        }`}
                                    to={data.path}
                                >
                                    {data.name}
                                </Link>
                            )
                        })
                    }
                </div>
            </div>

            {/* SideNav */}

            <div className={`w-[100%] h-[100%] bg-black/45 fixed z-40 md:hidden ${isOpen ? "left-0" : "-left-[100%]"}`}>
                <div className="w-[65%] h-[100%] shadow-xl transition-all duration-700 bg-black/30 backdrop-blur-lg px-5 py-[50px]">

                    <p onClick={() => { setIsOpen(false) }} className="text-right font-semibold cursor-pointer flex justify-end pt-7">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </p>

                    <div className="w-[80%] gap-10 font-medium flex-col justify-between items-center h-[30%]">
                        {
                            menuList.map(function (data) {
                                return (
                                    <div className="flex-col text-lg font-medium mx-3 my-7 w-fit transition-all duration-700">
                                        <Link
                                            className={`hover:text-[#FACC15]  ${location.pathname === data.path ||
                                                (data.path !== "/" && location.pathname.startsWith(data.path))
                                                ? "text-[#FACC15]"
                                                : ""
                                                }`}
                                            to={data.path}
                                            onClick={() => { setIsOpen(false) }}
                                        >
                                            {data.name}
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Nav;