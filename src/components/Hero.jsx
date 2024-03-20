import React from "react";

import myimg from '../assets/Me.png';

const Hero = () =>{
    return(
        <div id="home" className="text-white lg:h-[85vh]  flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden">
            <div className="container mx-auto h-full">
                <div className="flex items-center h-full pt-8">

                    <div className="flex-1 flex flex-col items-center lg:items-start">
                        <p className="text-xl text-accent mb-[22px]">Hey, I'm Patryk 👋</p>
                        <h1 className="text-center lg:text-left text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-6xl lg:leading-[1.2] font-bold md:tracking-[-2px]">I Build & Design <br /> Web Sites.</h1>
                        <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">I'm glad I caught your attention. I have been creating websites for 3 years, it is undoubtedly my passion, which I want to transfer into helping people and my own success.</p>
                        <a href="#_" class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-accent bg-accent rounded-full shadow-md group hover:border-orange-900">
                            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-900  group-hover:translate-x-0 ease">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span class="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Work With Me</span>
                            <span class="relative invisible">Button Text</span>
                        </a>
                    </div>
                    <div className="hidden lg:flex flex-1 justify-end items-end h-full">
                        <img src={myimg} alt="/" className="w-full scale-125" />
                    </div>
                </div> 
            </div>

        </div>
    )
}

export default Hero;