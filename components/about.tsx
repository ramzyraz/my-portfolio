import Image from "next/image";
import { FaChevronRight } from 'react-icons/fa'
import MyImage from '../public/assets/OnlyRaz.jpg'

const About = () => {
    return (  
        <div id="about-me" className='flex flex-col'>
            <div className='flex items-center justify-between max-w-2xl m-auto py-4'>
                <div>
                    <h2 className="text-[#319795] dark:text-[#4FD1C5] py-8">/ about me</h2>
                    <div className="flex justify-start">
                        <span className="font-bold mr-4 text-gray-600 dark:text-[#e5e5e5]">1998</span>
                        <p className="text-justify text-gray-600 dark:text-[#e5e5e5]">Born in Lahore, Pakistan.</p>
                    </div>
                    <div className="flex justify-start">
                        <span className="font-bold mr-4 text-gray-600 dark:text-[#e5e5e5]">2017</span>
                        <p className="text-justify text-gray-600 dark:text-[#e5e5e5]">Started Bachelors in Computer Science at Lahore University of Management Sciences.</p>
                    </div>
                    <div className="flex justify-start">
                        <span className="font-bold mr-4 text-gray-600 dark:text-[#e5e5e5]">2021</span>
                        <p className="text-justify">Completed Bachelors in Computer Science.</p>
                    </div>
                </div>
                <div>
                    <Image src={MyImage} alt='Profile Picture' className="rounded-full max-w-[200px] px-2" />
                </div>
            </div>
            <div className='my-auto mx-[613px] py-8'>
                <p className="text-justify">Here are some of the technologies I have been working with:</p>
                <div className="flex justify-center">
                    <div className="flex justify-around w-full py-2">
                        <ul className="flex flex-col items-start py-4 px-6">
                            <li className="flex justify-center py-2">
                                <FaChevronRight className="my-1 text-[#319795] dark:text-[#4FD1C5]" /><p className='mx-2 my-0.5 text-justify'>HTML & CSS</p>
                            </li>
                            <li className="flex justify-center py-2">
                                <FaChevronRight className="my-1 text-[#319795] dark:text-[#4FD1C5]" /><p className='mx-2 my-0.5 text-justify'>JavaScript</p>
                            </li>
                            <li className="flex justify-center py-2">
                                <FaChevronRight className="my-1 text-[#319795] dark:text-[#4FD1C5]" /><p className='mx-2 my-0.5 text-justify'>Python</p>
                            </li>
                            <li className="flex justify-center py-2">
                                <FaChevronRight className="my-1 text-[#319795] dark:text-[#4FD1C5]" /><p className='mx-2 my-0.5 text-justify'>React</p>
                            </li>                            
                        </ul>
                        <ul className="flex flex-col items-start py-4 px-6">
                            <li className="flex justify-center py-2">
                                <FaChevronRight className="my-1 text-[#319795] dark:text-[#4FD1C5]" /><p className='mx-2 my-0.5 text-justify'>HTML & CSS</p>
                            </li>
                            <li className="flex justify-center py-2">
                                <FaChevronRight className="my-1 text-[#319795] dark:text-[#4FD1C5]" /><p className='mx-2 my-0.5 text-justify'>JavaScript</p>
                            </li>
                            <li className="flex justify-center py-2">
                                <FaChevronRight className="my-1 text-[#319795] dark:text-[#4FD1C5]" /><p className='mx-2 my-0.5 text-justify'>Python</p>
                            </li>
                            <li className="flex justify-center py-2">
                                <FaChevronRight className="my-1 text-[#319795] dark:text-[#4FD1C5]" /><p className='mx-2 my-0.5 text-justify'>React</p>
                            </li>                            
                        </ul>
                    </div>
                </div>
                <p className="text-justify py-2">
                    Outside of work, I&apos;m interested in following the advancements of science and art related fields. I also play a lot of video games, read productivity
                    resources and have a deep passion for learning foreign languages.
                </p>
            </div>
        </div>
    );
}
 
export default About;