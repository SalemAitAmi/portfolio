import Image from "next/image";
import { skillItemsTop, skillItemsFrontend, skillItemsBackend, skillItemsMisc } from "@/data";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

const Skills = () => {
    return (
        <section className="min-h-fit bg-gray-800" id="skills">
            <div className="px-5 py-14 md:container">
                <h2 className="title text-yellow-500" data-aos="fade-down">
                    Skills
                </h2>
                <h4 className="subtitle" data-aos="fade-down">
                    TOP SKILLS
                </h4>
                <br />
                <div className="flex flex-wrap justify-center gap-8">
                    {skillItemsTop.map((item, index) => (
                        <div key={index} className="group relative flex w-full max-w-sm items-center gap-5 rounded-md border-2 border-yellow-700 bg-gray-950 p-5 duration-200 hover:border-yellow-500 sm:cursor-pointer" data-aos="fade-up" data-aos-delay={index*100}>
                            <div>
                                <Image src={item.logo} alt={item.name} className="w-10 duration-200 group-hover:scale-125"/>
                            </div>
                            <div>
                                <h6 className="text-gray-100">{item.name}</h6>
                                <div className="absolute right-3 top-3 text-xl text-yellow-500">
                                    <HiOutlineArrowUpRight size={25}/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <h4 className="subtitle mt-8 mb-4" data-aos="fade-down">
                    FRONTEND
                </h4>
                <div className="flex flex-wrap justify-center gap-8">
                    {skillItemsFrontend.map((item, index) => (
                        <div key={index} className="group relative flex w-full max-w-sm items-center gap-5 rounded-md border-2 border-yellow-700 bg-gray-950 p-5 duration-200 hover:border-yellow-500 sm:cursor-pointer" data-aos="fade-up" data-aos-delay={index*100}>
                            <div>
                                <Image src={item.logo} alt={item.name} className="w-10 duration-200 group-hover:scale-125"/>
                            </div>
                            <div>
                                <h6 className="text-gray-100">{item.name}</h6>
                                <div className="absolute right-3 top-3 text-xl text-yellow-500">
                                    <HiOutlineArrowUpRight size={25}/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <h4 className="subtitle mt-8 mb-4" data-aos="fade-down">
                    BACKEND
                </h4>
                <div className="flex flex-wrap justify-center gap-8">
                    {skillItemsBackend.map((item, index) => (
                        <div key={index} className="group relative flex w-full max-w-sm items-center gap-5 rounded-md border-2 border-yellow-700 bg-gray-950 p-5 duration-200 hover:border-yellow-500 sm:cursor-pointer" data-aos="fade-up" data-aos-delay={index*100}>
                            <div>
                                <Image src={item.logo} alt={item.name} className="w-10 duration-200 group-hover:scale-125"/>
                            </div>
                            <div>
                                <h6 className="text-gray-100">{item.name}</h6>
                                <div className="absolute right-3 top-3 text-xl text-yellow-500">
                                    <HiOutlineArrowUpRight size={25}/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <h4 className="subtitle mt-8 mb-4" data-aos="fade-down">
                    MISC
                </h4>
                <div className="flex flex-wrap justify-center gap-8">
                    {skillItemsMisc.map((item, index) => (
                        <div key={index} className="group relative flex w-full max-w-sm items-center gap-5 rounded-md border-2 border-yellow-700 bg-gray-950 p-5 duration-200 hover:border-yellow-500 sm:cursor-pointer" data-aos="fade-up" data-aos-delay={index*100}>
                            <div>
                                <Image src={item.logo} alt={item.name} className="w-10 duration-200 group-hover:scale-125"/>
                            </div>
                            <div>
                                <h6 className="text-gray-100">{item.name}</h6>
                                <div className="absolute right-3 top-3 text-xl text-yellow-500">
                                    <HiOutlineArrowUpRight size={25}/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills;