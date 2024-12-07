import React, { useContext, useEffect, useState } from "react";
import { GiEvilBook } from "react-icons/gi";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaX } from "react-icons/fa6";
import { AuthContext, useAuthentication } from "../context/AuthProvider";


const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSticky, setIsSticky] = useState(false)
  
    const {user, createUser} =useAuthentication()
    // console.log(121, user.email)

    const navItmes = [
        { path: '/',        link: 'Home' },
        { path: '/shop',    link: 'Shop' },
        { path: '/about',   link: 'About' },
        { path: '/contact', link: 'Contact' },
        { path: '/admin/dashboard', link: 'Sell Your Book' },
        { path: '/blog', link: 'Blog' },
    ];
     
    // Toggle menu for mobile devices
    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev)
    }

    // Add sticky navigation
    useEffect(() => {
        const handleScroll = () => {
        if(window.scrollY > 100 ){
            setIsSticky(true)
        } else {
            setIsSticky(false)
        }
    }
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    },[])
   

  // Add responsive design for smaller screens
  return (

    <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">   
    <nav className={`py-4 px-4 lg:px-24 ${isSticky ? " sticky top-0 left-0 right-0 bg-blue-300": ""}`}>

        <div className="flex justify-between items-center text-base gap-8">
        {/* logo */}
        <Link to='/' className='text-4xl font-bold text-sky-600 flex items-center gap-3'>
        <GiEvilBook className="inline-block" />
        </Link>

        {/* nav item for large devices */}
        <ul className="hidden md:flex space-x-10">
            {
                navItmes.map(({link, path}, index)=>{
                    return (
                        <li key={index}>
                            <Link to={path} className='text-sm font-medium text-sky-600 hover:text-sky-950 uppercase cursor-pointer'>{link}</Link>
                        </li>
                    )
                })
            }
        </ul>

        {/* button for large devices */}
        <div className="space-x-2 hidden lg:flex items-center">
            <button><FaBarsStaggered className='text-sky-600 hover:text-sky-950 cursor-pointer' />
            {
                user? user.email :""
            }
            </button>
        </div>

        {/* menu button for mobile devices */}
        <div className="md:hidden">
            <button onClick={toggleMenu} className="focus: outline-lime-400"> {isMenuOpen ? <FaX className="h-5 w-5 text-sky-600" /> : <FaBarsStaggered className="h-5 w-5 text-sky-600" />}</button>
        </div>

        {/* mobile items */}
        <div className={`${isMenuOpen ? 'block'  : 'hidden'}`}>
        {
                navItmes.map(({link, path}, index)=>{
                    return (
                        <li key={index}>
                            <Link to={path} className='text-sm font-medium text-sky-600 hover:text-sky-950 uppercase cursor-pointer'>{link}</Link>
                        </li>
                    )
                })
            }
        </div>
        </div>    
    </nav>
    </header>
  );
}; 

export default Navbar;
