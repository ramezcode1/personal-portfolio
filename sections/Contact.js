import {MdPhone, MdEmail, MdHome} from 'react-icons/md';
import {FaGithub, FaLinkedinIn} from "react-icons/fa";
import {HiOutlineChevronDoubleUp} from "react-icons/hi";

export default function Contact() {
    return (
        <div id="contact" className="bg-gradient-to-b from-black to-gray-800">
            <div className="max-w-7xl mx-auto py-20 sm:py-24 px-6 md:px-10 lg:px-12">
                <p className="uppercase text-xl mb-3 tracking-widest text-cyan-400 underline underline-offset-8">
                    Contact Info
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <p className="flex items-center gap-4 text-xl py-4 text-gray-400">
                            <MdPhone/>
                            <span>(438)933-4178</span>
                        </p>
                        <p className="flex items-center gap-4 text-xl py-4 text-gray-400">
                            <MdEmail/>
                            <span>ramez.betrus@gmail.com</span>
                        </p>
                        <p className="flex items-center gap-4 text-xl py-4 text-gray-400">
                            <MdHome/>
                            <span>Montreal Quebec, Canada</span>
                        </p>
                        <div className="flex items-center gap-4">
                            <div
                                className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                <a
                                    href="https://github.com/ramezcode1"
                                    target="_blank"
                                >
                                    <FaGithub/>
                                </a>
                            </div>
                            <div
                                className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                <a
                                    href="https://www.linkedin.com/in/ramez-betrus-652775278/"
                                    target="_blank"
                                >
                                    <FaLinkedinIn/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="text-lg py-4 text-gray-400">Thank you for visiting my personal portfolio website.
                            Connect with me and let's build something incredible together!
                        </p>
                        <p className="text-lg py-4 text-gray-400">
                            I'm currently looking for new opportunities
                        </p>
                        <div className="flex mt-2">
                        <a href="Ramez_resume.pdf" download target="_blank"
                           className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-cyan-600 text-cyan-600 text-white">
                                <span
                                    className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-cyan-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                            <span
                                className="relative text-cyan-600 transition duration-300 group-hover:text-white ease">
                                Download Resume
                            </span>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}