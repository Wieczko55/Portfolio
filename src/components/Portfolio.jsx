import React from "react";

import Projects from "./Projects";

import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Portfolio = () =>{
    return(
        <div id="portfolio" className="section bg-primary min-h-[1400px]">
            <div className="container mx-auto">
                <div className="flex flex-col items-center text-center">
                    <h2 className="section-title">My Recent Projects</h2>
                    <p className="subtitle">
                       Lorem ipsum dolor site amet consectetur adipsicing elit. Dolorum beatae, est consequatur vero quisquam bitae ipsa. Ex corporis sapiente eos. 
                    </p>
                </div>
                <Projects />
                <a href="https://github.com/Wieczko55" target="blank" className="flex items-center justify-center md:justify-end text-white md:text-right md:mt-16 mt-8 md:mr-16 text-center">View more <MdKeyboardDoubleArrowRight className="text-white size-6"/></a>
            </div>
        </div>
    )
}

export default Portfolio;