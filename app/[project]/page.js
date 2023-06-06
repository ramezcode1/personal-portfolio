import {RiRadioButtonFill} from "react-icons/ri";
import Image from "next/image";
import {projectList} from "@/data/projectList";
import Link from "next/link";

export default function ProjectPage({params}) {
    const {project} = params;
    const data = projectList.find(p => p.urlParam === project);
    const {
        title,
        backgroundImg,
        techStack,
        hrefLive,
        hrefCode,
        description
    } = data;
    return (
        <div className="w-full">
            <div className=" w-screen h-[30vh] lg:h-[40vh] relative">
                <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10"/>
                <Image
                    className="absolute z-1"
                    layout="fill"
                    objectFit="cover"
                    src={backgroundImg}
                    alt="/"
                />
                <div
                    className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 px-6 md:px-10 lg:px-12">
                    <h2 className="py-2">{title}</h2>
                    <h3>{techStack.join(' / ')}</h3>
                </div>
            </div>
            <div className="bg-slate-100 text-slate-900 h-[70vh] lg:h-[60vh] px-6 md:px-10 lg:px-12">
                <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
                    <div className="col-span-4">
                        <p>Project</p>
                        <h2 className="py-3">Overview</h2>
                        <p>
                            {description}
                        </p>
                        <a
                            href={hrefLive}
                            target="_blank"
                        >
                            <button
                                className="shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white px-8 py-2 mt-4 mr-8">
                                Demo
                            </button>
                        </a>
                        <a
                            href={hrefCode}
                            target="_blank"
                        >
                            <button
                                className="shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white px-8 py-2 mt-4">
                                Code
                            </button>
                        </a>
                    </div>
                    <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
                        <div className="p-2">
                            <p className="text-center font-bold pb-2">Technologies</p>
                            <div className="grid grid-cols-3 md:grid-cols-1">
                                {techStack.map(tech => (
                                    <p className="text-gray-600 py-2 flex items-center">
                                        <RiRadioButtonFill className="pr-1"/> {tech}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                    <Link href="/#projects">
                        <p className="underline cursor-pointer text-blue-500">Back</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}