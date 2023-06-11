"use client"

import { FaBars, FaTimes } from "react-icons/fa";
import {TbHexagonLetterR} from 'react-icons/tb';
import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const [navBg, setNavBg] = useState("bg-stone-900/80 backdrop-blur");
    const pathname = usePathname();

    useEffect(() => {
        if (pathname === "/"
        ) {
            setNavBg("bg-stone-900/80 backdrop-blur");
        } else {
            setNavBg("bg-stone-900/20");
        }
    }, [pathname]);

    const links = ["home", "about", "skills", "projects", "contact"];

    return (
        <div className={"flex justify-between items-center w-full h-20 px-10 text-white fixed" +
                        " drop-shadow-[0px_7px_5px_rgba(8,145,178,0.1)] z-[100] " + navBg}>
            <div>
                <Link href="#home" scroll={false}>
                    <TbHexagonLetterR size="4em" className="stroke-cyan-400 stroke-1 hover:scale-110"/>
                </Link>
            </div>

            <ul className="hidden md:flex">
                {links.map((link, index) => (
                    <li
                        key={index}
                        className="px-4 cursor-pointer capitalize font-semibold text-slate-300 hover:scale-110 hover:text-cyan-400 duration-200"
                    >
                        <Link href={`#${link}`} scroll={false}>
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>

            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer z-10 text-gray-500 md:hidden"
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className="md:hidden flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
                    {links.map((link, index) => (
                        <li
                            key={index}
                            className="px-4 cursor-pointer capitalize py-6 text-4xl"
                        >
                            <Link href={`#${link}`} scroll={false}
                                onClick={() => setNav(!nav)}
                            >
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default NavBar;