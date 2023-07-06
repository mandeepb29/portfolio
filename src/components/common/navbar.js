import React, { useEffect, useState } from 'react'
import Logo from "../../images/mandeep.svg";
import { Link } from "gatsby";
import "./navbar.css";
import SocialMediaPanel from './socialMediaPanel';

const Navbar = ({ isWhite }) => {
  const linkStyle = `
     ${isWhite ? "text-darkgrey hover:text-dark" : "text-gray hover:text-white"} text-xl xl:text-lg font-dm font-bold block transition duration-300  border-b border-b-gray border-opacity-25 pb-4 xl:border-opacity-0 xl:pb-0
    `

  const [isScrolled, setIsScrolled] = useState(false);
  const threshold = 20; // set your desired threshold value here

  useEffect(() => {
    const hamburger = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');

    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      setIsScrolled(scrollHeight > threshold);
    };

    const toggleMenu = () => {
      navMenu.classList.toggle('active');
      hamburger.classList.toggle('active');

    }

    window.addEventListener('scroll', handleScroll);
    hamburger.addEventListener('click', toggleMenu);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      //hamburger.removeEventListener('click', toggleMenu);
    };
  }, []);


  //console.log("Navbar is white ? - ", isWhite)

  return (
    <div className={`fixed w-full ${isWhite ? isScrolled ? "bg-white" : "bg-transparent" : "bg-dark"}  z-50 xl:z-40 transition-all ease-in-out-circ`}>
      <div className="container">
        <nav className={`flex flex-row justify-between items-center transition-all ease-in duration-200 z-50 delay-300 py-4 border-b border-b-gray ${isScrolled ? 'border-opacity-25' : 'border-opacity-0'}`}>
          <Link to='/' className='z-[60]'>
            <img src={Logo} className={`h-8 lg:h-10 ${isWhite ? "invert" : ""}`} alt="Mandeep Logo" id='websiteLogo' />
          </Link>

          <div className="cursor-pointer py-1 px-3 w-16 h-12 z-50 flex flex-col xl:hidden items-center" id='hamburgerBtn'>
            <div className={`inline-block h-1 mb-2 w-full rounded-md bg-gradient-to-r ${isWhite ? "from-purple" : "from-purplelight"}  to-purplelight2`}></div>
            <div className={`inline-block h-1 mb-1 w-full rounded-md bg-gradient-to-r ${isWhite ? "from-purple" : "from-purplelight"}  to-purplelight2`}></div>
            <span className={`text-xs ${isWhite ? "text-darkgrey" : "text-lightgray"} font-syne font-bold`}>menu</span>
          </div>

          <div className='transition-all ease-out-cubic duration-300 h-screen fixed top-0 left-0 w-full opacity-0 invisible xl:visible xl:relative xl:opacity-100 xl:h-auto flex flex-col xl:flex-row xl:justify-end justify-between pb-8 pt-32 xl:pt-3 xl:pb-3 px-8 xl:px-6 z-40' id='navMenu'>
            <ul className={`transition-all ease-out-cubic duration-300 list-none gap-12 xl:gap-28 flex flex-col xl:flex-row 
        ${!isScrolled ? 'lg:mt-16' : ''}`}>
              <li><Link className={linkStyle} to="#work">work</Link></li>
              <li><Link className={linkStyle} to="#skills">skills</Link></li>
              <li><Link className={linkStyle} to="#testimonial">testimonial</Link></li>
              <li><Link className={linkStyle} to="#about">about me (more)</Link></li>
              <li><Link className={linkStyle} to="#contact">contact</Link></li>
            </ul>

            <div className='xl:hidden'>
              <SocialMediaPanel isWhite={true} />
            </div>

          </div>

        </nav>
      </div>
    </div>
  )
}

export default Navbar;