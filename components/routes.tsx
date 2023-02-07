import React from 'react'
import NextLink from 'next/link'

const Routes = () => {
    return ( 
        <div className="px-4 py-4 flex justify-start items-center" style={{marginLeft: `3.5rem`}}>
            <div className='fixed bottom-10 left-12 flex flex-col justify-center'>
                <div>
                    <NextLink href="#home" passHref>
                        <button
                            className="text-red-600 hover:text-teal-600 dark:text-red-400 dark:hover:text-teal-300"
                        >
                            / home
                        </button>
                    </NextLink>
                </div>
                <div>
                    <NextLink href="#about-me" passHref>
                        <button
                            className="text-red-600 hover:text-teal-600 dark:text-red-400 dark:hover:text-teal-300"
                        >
                            / about me
                        </button>
                    </NextLink>
                </div>
                <div>
                    <NextLink href="#experience" passHref>
                        <button
                            className="text-red-600 hover:text-teal-600 dark:text-red-400 dark:hover:text-teal-300"
                        >
                            / experience
                        </button>
                    </NextLink>
                </div>
                <div>
                    <NextLink href="#projects" passHref>
                        <button
                            className="text-red-600 hover:text-teal-600 dark:text-red-400 dark:hover:text-teal-300"
                        >
                            / projects
                        </button>
                    </NextLink>
                </div>
            </div>
        </div>
     );
}
 
export default Routes;