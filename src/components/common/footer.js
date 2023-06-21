import React from 'react'
import BehanceIcon from '../../images/behance.svg';
import GithubIcon from '../../images/github.svg';
import LinkedinIcon from '../../images/linkedin.svg';
import InstagramIcon from '../../images/instagram.svg';

function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <section className='bg-white p-0 z-[51] relative'>
        <div className="flex flex-col lg:min-h-screen justify-between">
        <div className="container mt-16">
        <div className="text-center">
        <h2 className='section-heading section-heading-dark text-center max-w-3xl normal-case mx-auto text-2xl md:text-3xl md:leading-normal'>
        Thanks for stopping by, I’m currently looking to join a new team of creative designers and developers. If you think we might be a good fit for one another, please contact me.
        </h2>
        </div>
        <div className="text-center">
        <button className="btn btn-primary">
        <span>
        connect with me
                  </span>
        </button>
        </div>
        </div>
        <div className="container mt-28">
        <p className="text-darkgrey text-center font-medium text-sm">
            you can also find me on these platforms
        </p>

        <div className="flex gap-16 justify-center opacity-80 mt-8">
            <a href="https://www.linkedin.com/in/mandeepbaghel" target='_blank' className='w-12'>
                <img src={LinkedinIcon} alt="linkedin" />
            </a>
            <a href="https://github.com/mandeepb29" className='w-12' target='_blank'>
            <img src={GithubIcon} alt="github" />
            </a>
            <a href="https://www.instagram.com/mandeepbaghel/" className='w-12' target='_blank'>
            <img src={InstagramIcon} alt="instagram" />
            </a>
            <a href="https://www.behance.net/mandeepbaghel" className='w-12' target='_blank'>
            <img src={BehanceIcon} alt="behance" />
            </a>
        </div>

        <div className="border-t border-lightgray py-6 mt-8">
            <p className="text-darkgrey font-medium text-center text-md">
                {
                    `Copyright  ${currentYear}. Mandeep Baghel`
                }
            </p>
        </div>
         
            </div>
        </div> 
    </section>
  )
}

export default Footer