const Nav = () => {
    return ( 
        <div className="flex justify-end p-6 mr-4">
                <button 
                    className='
                    border 
                    border-[#4FD1C5] 
                    rounded-lg
                    shadow-lg 
                    px-5
                    py-3
                    text-[17px]
                    cursor-pointer 
                    text-[#e5e5e5] 
                    bg-[#319795]
                    hover:scale-110
                    dark:bg-inherit
                    dark:hover:text-[#e5e5e5] 
                    dark:hover:bg-[#4FD1C5]
                    dark:shadow-gray-600
                    '
                    onClick={() => window.open('/assets/Resume.pdf', '_blank')}
                >
                    Resume
                </button>
        </div>
     );
}
 
export default Nav;