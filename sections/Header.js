import SquigglyLines from "@/components/SquigglyLines";
import Link from "next/link";
import LottieAnimation from "@/lotties-hook/LottieAnimation";

export default function Header() {
    return (
        <div id="home" className="bg-gradient-to-b from-black to-gray-800">
            <div className="container">
                <div className="w-full md:grid grid-cols-3 gap-8 mt-16 sm:mt-20 px-6 md:px-10 lg:px-12">
                    <div className="col-span-2 flex flex-col justify-center h-full background-gradient">
                        <p className="text-gray-300 text-3xl font-bold py-4">Hi, I'm</p>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-normal text-gray-300">
                            <span className="relative whitespace-nowrap text-cyan-600">
                            <SquigglyLines/>
                            <span className="relative">Ramez Betrus{" "}</span>
                            </span>
                        </h1>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-400 mt-2">
                            Full-Stack Developer
                        </h2>
                        <div className="flex mt-10">
                            <Link href="/#about"
                                  className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-cyan-600 text-cyan-600 text-white">
                                <span
                                    className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-cyan-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                <span
                                    className="relative text-cyan-600 transition duration-300 group-hover:text-white ease">
                                    ABOUT ME
                                </span>
                            </Link>
                            <Link href="/#projects"
                                  className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium transition-all border-cyan-600 text-cyan-600 bg-cyan-600 hover:bg-transparent text-white">
                                <span
                                    className="absolute group-hover:border-[25px] w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                <span
                                    className="relative text-white transition duration-300 group-hover:text-cyan-600 ease">
                                    SEE MY WORK
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div
                        className="w-full h-auto shadow-gray-400 hidden md:flex items-start justify-center -mt-10 p-4 hover:scale-110 ease-in-out duration-300">
                        <LottieAnimation filename="webdev.json"/>
                    </div>
                </div>
            </div>
        </div>
    );
}