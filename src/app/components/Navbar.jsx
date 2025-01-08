"use client";
import React, { useState }from 'react';
import Navlink from './Navlink';
import Link from 'next/link';
import MenuOverlay from './MenuOverlay';
import {Bars3Icon, XMarkIcon, XmarkIcon} from '@heroicons/react/24/solid'

const navLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    },

]

const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = useState(true);


    return ( 
        <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'>
            <div className='flex flex-wrap iterms-center justify-between mx-auto px-4 py-2'>
                <Link href={"/"} className='text-2xl md:text-5xl text-white font-semibold'>
                    GEORGE YU
                </Link>
                <div className='mobile-menu block md:hidden'>
                    {
                        navbarOpen ? (<button className='flex items-center px-3 py-2 border rounded border-slate-200  text-slate-200 hover:text-white hover:border-white' onClick={() => setNavbarOpen(!navbarOpen)}><Bars3Icon className='h-5 w-5'/></button> )
                            : (<button className='flex items-center px-3 py-2 border rounded border-slate-200  text-slate-200 hover:text-white hover:border-white' onClick={() => setNavbarOpen(!navbarOpen)}><XMarkIcon className='h-5 w-5'/></button>)
                    }
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {
                            navLinks.map((link, index) => (
                                <li key={index} >
                                    <Navlink href={link.path} title={link.title}></Navlink>
                                </li>
                            )
                        )
                        }
                    </ul>
                </div>

            </div>
            {!navbarOpen ? <MenuOverlay links={navLinks}/> : null}
        </nav>
    );
}
 
export default Navbar;