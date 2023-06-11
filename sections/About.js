import Link from 'next/link';
import LottieAnimation from "@/lotties-hook/LottieAnimation";

export default function About() {
    return (
        <div id="about" className="bg-gradient-to-b from-gray-800 to-black">
            <div className="container">
                <div className="md:grid grid-cols-3 gap-8 mt-16 sm:mt-20 px-6 md:px-10 lg:px-12">
                    <div className="col-span-2">
                        <p className="uppercase text-xl tracking-widest text-cyan-400">
                            ABOUT
                        </p>
                        <h2 className="py-4 text-2xl">Who I am</h2>
                        <p className="py-2 text-gray-400">
                            Hello! My name is Ramez and I enjoy creating things that live on the internet.
                            I am dedicated to continuous learning and growth, staying up-to-date with the latest
                            technologies and design trends in order to deliver the best possible solutions.
                        </p>
                        <p className="py-2 text-gray-400">
                            With a strong work ethic, attention to detail, and a passion for excellence, I am confident
                            in
                            my ability to make a valuable contribution to any web development team.
                        </p>
                        <Link href="/#projects">
                            <p className="py-2 text-gray-400 underline cursor-pointer">
                                Check out some of my latest projects.
                            </p>
                        </Link>
                    </div>
                    <div
                        className="w-full h-auto m-auto shadow-gray-400 flex items-center justify-center p-4 hover:scale-110 ease-in-out duration-300">
                        <LottieAnimation filename="about-me.json"/>
                    </div>
                </div>
            </div>
        </div>
    )
}