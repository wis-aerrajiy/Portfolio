import { useEffect, useState, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';

import NavImages from '../assets/nav/wis_logo.jpg';
import { GoHomeFill } from "react-icons/go";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { CiFolderOn } from "react-icons/ci";
import { LuMessageCircle } from "react-icons/lu";
import { FaArrowDown } from "react-icons/fa6";
import { SelectedBarContext } from '../Context/SelectedBarContext';


const Navbar = () => {
    const { selectedBar, setSelectedBar } = useContext(SelectedBarContext);
    const navRef = useRef(null);

    const [nav, setNav] = useState(false);
    const [isLogoVisible, setIsLogoVisible] = useState(true);

    const handleNav = () => {
        setNav(!nav);
    };

    const navItems = [
        { id: 0, text: 'Home', link: '/', icon: GoHomeFill },
        { id: 1, text: 'About', link: '/about', icon: IoIosInformationCircleOutline },
        { id: 2, text: 'Projects', link: '/projects', icon: CiFolderOn },
        { id: 3, text: 'Contact', link: '/contact', icon: LuMessageCircle },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsLogoVisible(false);
                if (navRef && navRef.current) {
                    (navRef.current as any).classList.add('md:bg-slate-500/20');
                }
            } else {
                setIsLogoVisible(true);
                if (navRef && navRef.current) {
                    (navRef.current as any).classList.remove('md:bg-slate-500/20');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div onClick={handleNav} className='fixed right-4 top-7 md:hidden mr-4 z-40'>
                {
                    !nav
                        ?
                        (
                            <button className="text-2xl text-blue-900/50">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            </button>
                        )
                        :
                        (
                            <button className="text-2xl text-blue-900/50" onClick={handleNav}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        )
                }
            </div>

            <div className={`fixed bottom-10 left-[10vw] z-40 ${isLogoVisible ? 'md:block' : 'hidden'}`}>
                <div className='flex flex-row items-center justify-center bg-gray-600/10 md:bg-[#ffffff]/5 rounded-full'>
                    <div className='motion-safe:animate-bounce m-4'>
                        <FaArrowDown className='text-2xl text-black/30' />
                    </div>
                    <div className='text-black/30 text-2xl hidden md:block'>
                        Scroll Down
                    </div>
                </div>
            </div>

            <div ref={navRef} className='flex z-20 justify-between md:justify-around items-center h-24 px-4 text-white rounded-sm fixed top-0 w-full md:max-w-[100%] max-w-[100%]'>
                <div>
                    <img src={NavImages} alt="logo" width="50px"
                        className={`
                            filter grayscale contrast-150 shadow-md border-slate-500 ring-1 ring-red-600/6 rounded-lg m-4
                            ${!isLogoVisible && 'hidden md:block'}
                        `} />
                </div>

                <ul className='hidden md:flex'>
                    {
                        navItems.map((item, index) => (
                            <Link
                                to={item.link.toLowerCase()}
                                key={item.id}
                                onClick={() => setSelectedBar(index)}
                            >
                                <div
                                    className={
                                        `
                                        flex items-center flex-row-reverse px-6 py-3  rounded-xl m-2 cursor-pointer duration-300 text-black hover:bg-red-100/75 hover:text-black
                                        ${selectedBar === index && 'bg-red-100/75 text-black'}
                                        `
                                    }
                                >
                                    <div>
                                        {item.text}
                                    </div>
                                    <div className='pr-2'>
                                        <item.icon className='size-6' />
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </ul>



                <ul
                    className={
                        nav
                            ? 'fixed md:hidden rounded-sm left-0 top-[0] w-full h-screen border-r border-r-gray-900 bg-blue-400/0 ease-in-out duration-500 z-40 navDropdown !bg-none'
                            : 'ease-in-out duration-500  left-0 fixed w-full top-[-100%]'
                    }
                >

                    <div className='flex flex-col items-stretch justify-center h-full w-full space-y-10'>
                        {navItems.map(item => (
                            <Link
                                key={item.id}
                                to={item.link.toLowerCase()}
                                onClick={handleNav}
                                className=''
                            >
                                <div className='flex flex-col-reverse items-center justify-center rounded-xl duration-300 text-black cursor-pointer' >
                                    <div>
                                        {item.text}
                                    </div>
                                    <div className=''>
                                        <item.icon className='size-6' />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </ul>

            </div>
        </>
    );
};

export default Navbar;
