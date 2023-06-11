import ProjectItem from "@/components/ProjectItem";

import {projectList} from "@/data/projectList";

export default async function Projects() {
    return (
        <div id="projects" className="bg-gradient-to-b from-gray-800 to-black">
            <div className="container">
                <div className="flex flex-col justify-center w-full h-full mt-16 sm:mt-20 px-6 md:px-10 lg:px-12">
                    <p className="uppercase text-xl tracking-widest text-cyan-400">
                        Projects
                    </p>
                    <h2 className="py-4">What I've Built</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projectList.map((project, index) => (
                            <ProjectItem
                                key={index}
                                title={project.title}
                                backgroundImg={project.backgroundImg}
                                urlParam={project.urlParam}
                                techStack={project.techStack}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}