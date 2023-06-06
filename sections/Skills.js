import SkillCard from "@/components/SkillCard";
import {skillList} from "@/data/skillList";

export default function Skills() {
    return (
        <div id="skills" className="bg-gradient-to-b from-black to-gray-800">
            <div className="container">
                <div className="flex flex-col justify-center w-full h-full mt-16 sm:mt-20 px-6 md:px-10 lg:px-12">
                    <p className="uppercase text-xl tracking-widest text-cyan-400">
                        Skills
                    </p>
                    <h2 className="py-4">What I Can Do</h2>
                    <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                        {skillList.map((skill, index) =>
                            <SkillCard key={index} name={skill.name} IconImage={skill.IconImage} color={skill.color}/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}