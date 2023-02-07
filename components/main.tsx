import { useRouter } from 'next/router';
import { BsChatLeft } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
// import Resume from '../public/Resume.pdf'

const Main = () => {
  const router = useRouter();
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-3/4 mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600 dark:text-[#e5e5e5]'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-700 dark:text-[#e5e5e5]'>
            Hi, I&#39;m <span className='text-[#319795] dark:text-[#4FD1C5]'> Ramez</span>
          </h1>
          <h1 className='py-2 text-gray-700 dark:text-[#e5e5e5]'>A Full Stack Developer</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto dark:text-[#e5e5e5]'>
            I’m focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>
          <div className='flex items-center justify-between max-w-[400px] m-auto py-4'>
            <div>
                <button
                    onClick={() =>
                        router.push(
                            'mailto:ramezsalman@gmail.com'
                        )
                    }
                >
                    <div className='
                        flex 
                        justify-between 
                        leading-8 
                        border 
                        border-[#4FD1C5] 
                        rounded-lg
                        shadow-lg 
                        p-3
                        cursor-pointer 
                        text-[#e5e5e5] 
                        bg-[#319795]
                        hover:scale-110
                        dark:bg-inherit
                        dark:hover:text-[#e5e5e5] 
                        dark:hover:bg-[#4FD1C5]
                        dark:shadow-gray-600
                        '
                    >
                        <span className='mx-2'>Contact Me</span> <BsChatLeft className='m-2' />
                    </div>
                </button>
            </div>
            <div className='flex'>
                <a
                href='https://www.linkedin.com/in/ramez-salman/'
                target='_blank'
                rel='noreferrer'
                className='px-4'
                >
                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 dark:shadow-gray-600'>
                    <FaLinkedinIn />
                </div>
                </a>
                <a
                href='https://github.com/ramzyraz'
                target='_blank'
                rel='noreferrer'
                >
                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 dark:shadow-gray-600'>
                    <FaGithub />
                </div>
                </a>
            </div>            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
