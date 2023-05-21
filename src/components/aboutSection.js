import React from 'react'
import CameraVector from '../images/camera-vector.svg';
import ReadingVector from '../images/reading-vector.svg';
import WalkVector from '../images/walk-vector.svg';
import YoutubeVector from '../images/youtube-vector.svg';
import MovieVector from '../images/movie-vector.svg';


function AboutSection() {
  return (
    <div className='bg-black'>
        <div className="grid grid-cols-3">
                <div className="grid col-span-2">
                    <section>
                    <div className="container">
                            <h2 className="section-heading mb-0">
                                More about me
                            </h2>

                            <p className='text-white text-md'>
                                while, I am not working you can find me...
                            </p>

                            <div className="grid grid-cols-5 mt-16 gap-6 items-center">
                                <div className='col-span-3'>
                                    <div className="grid gap-6">
                                        <div className="rounded-3xl px-12 pb-10 pt-8 bg-[#E3FFE2]">
                                            <img src={CameraVector} className='w-28 mb-6' alt="photography" />
                                            <h3 className='font-bold text-2xl'>doing <br /> photography</h3>
                                        </div>

                                      <div className="grid grid-cols-2">
                                        <div>

                                        </div>
                                        <div className="col-span-1 rounded-3xl px-8 pt-8 pb-6 bg-[#E5FFFF]">
                                            <img src={WalkVector} className='w-16 mb-4' alt="photography" />
                                            <h3 className='font-bold text-xl'>taking <br />long walks</h3>
                                        </div>
                                      </div>
                                        
                                      <div className="rounded-3xl px-12 pb-10 pt-8 bg-[#FFA8A8]">
                                            <img src={YoutubeVector} className='w-28 mb-6' alt="photography" />
                                            <h3 className='font-bold text-xl'>watching random  <br /> 
youtube videos</h3>
                                        </div>

                                    </div>
                                </div>
                                <div className='col-span-2'>
                                <div className="grid gap-6">

                                <div className="rounded-3xl px-12 pb-10 pt-8 bg-[#F5FFCB]">
                                            <img src={MovieVector} className='w-28 mb-6' alt="photography" />
                                            <h3 className='font-bold text-2xl'>watching <br /> movies</h3>
                                        </div>

                                        <div className="rounded-3xl px-12 pb-10 pt-8 bg-[#B0C1FF]">
                                            <img src={ReadingVector} className='w-28 mb-6' alt="photography" />
                                            <h3 className='font-bold text-2xl'>reading non-fiction novels</h3>
                                        </div>
                                </div>
                            </div>
                            </div>
                    </div>
                    </section>
                    
                </div>
                <div className="col-span-1">
                    <img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                </div>
        </div>
       
    </div>
  )
}

export default AboutSection