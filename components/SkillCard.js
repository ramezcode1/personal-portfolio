export default function SkillCard({name, IconImage, color}) {
    return (
        <div className="p-3 shadow-md shadow-cyan-400 text-gray-600 bg-gray-200 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-3 justify-center items-center w-full h-full">
                <div className="m-auto">
                    <IconImage size="40" color={color}/>
                </div>
                <h3>{name}</h3>
            </div>
        </div>
    );
}