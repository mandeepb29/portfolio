import React, { useEffect, useState } from 'react'
import Logo from "../../images/mandeep.svg";

const Navbar = ({isWhite}) => {
    const linkStyle = `
     ${isWhite ? "text-darkgrey":"text-gray"} text-lg font-dm font-bold hover:text-white transition duration-300
    `

    const [isScrolled, setIsScrolled] = useState(false);
  const threshold = 20; // set your desired threshold value here

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      setIsScrolled(scrollHeight > threshold);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  //console.log("Navbar is white ? - ", isWhite)

  return (
    <div className={`fixed w-full ${isWhite? isScrolled ? "bg-white":"bg-transparent":"bg-dark"}  z-50 transition-all ease-in-out-circ`}>
<div className="container">
 <nav className={`flex flex-row justify-between transition-all ease-in duration-200 delay-300 ${isScrolled?'py-5':'py-5'}  border-b border-b-gray ${isScrolled?'border-opacity-25':'border-opacity-0'}`}>
        <img src={Logo} className={`h-8 lg:h-10 ${isWhite?"invert":""}`} alt="Mandeep Logo" />
        <ul className={`list-none flex-row items-center gap-28 hidden transition-all ease-out-cubic duration-300 lg:flex ${!isScrolled ? 'lg:mt-16':''} `}>
            <li><a className={linkStyle} href="#work">work</a></li>
            <li><a className={linkStyle} href="#skills">skills</a></li>
            <li><a className={linkStyle} href="#testimonial">testimonial</a></li>
            <li><a className={linkStyle} href="#about">about me (more)</a></li>
            <li><a className={linkStyle} href="#contact">contact</a></li>
        </ul>
    </nav>
    </div>
    </div>
  )
}

export default Navbar;