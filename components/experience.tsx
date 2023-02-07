import React, { useState } from "react"
import { FaChevronRight } from 'react-icons/fa'
import { experiences } from "./experienceData";

const Experience = () => {
    const [activeTab, setActiveTab] = useState<number>(0);

    return ( 
        <div id="experience" className='flex flex-col max-w-2xl m-auto py-4'>
            <div>
                <h2 className="text-[#319795] dark:text-[#4FD1C5] py-8">/ experience</h2>
            </div>
            <div className="flex flex-col md:flex-row flex-wrap -mb-px list-none justify-around font-medium text-center text-gray-600 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                {
                    experiences.map((experience, idx) => {
                        return (
                            <button
                                key={idx}
                                className={`py-2 border-b-2 dark:border-b-4 transition-colors duration-300 ${
                                    idx === activeTab
                                    ? "border-teal-500"
                                    : "border-transparent hover:border-gray-200"
                                }`}
                                onClick={() => setActiveTab(idx)}
                            >
                                {experience.name}
                            </button>
                        );
                    })
                }
            </div>
            <div className="py-4">
                <h3 className='text-xl'>{experiences[activeTab].content.title}</h3>
                <p className="italic text-gray-600 dark:text-[#e5e5e5]">{experiences[activeTab].content.date}</p>
                <div className="flex justify-center">
                    <div className="flex justify-around w-full py-2">
                        <ul className="flex flex-col items-start py-4 px-6">
                            {
                                experiences[activeTab].content.details.map((role, idx) => {
                                    return (
                                        <li 
                                            key={idx}
                                            className="flex justify-center py-2"
                                        >
                                            <FaChevronRight className="my-1 text-[#319795] dark:text-[#4FD1C5]" />
                                            <p className='mx-2 my-0.5 text-justify'>{role}</p>
                                        </li>
                                    );
                                })
                            }                           
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Experience;