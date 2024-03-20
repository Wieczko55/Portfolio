import React from "react";
import m2 from '../assets/photo.jpg';
const About = () =>{
    return(
        <div id="About" className="section bg-secondary">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-24">
                <img src={m2} alt="/" className="object-cover h-full w-[556px] mx-auto lg:mx-0 rounded-2xl"/>
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                        <div className="flex flex-col">
                            <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3  relative before:absolute before:opacity-40 before:-top-[2rem] before:block">Patryk Wieczorek </h2>
                            <p className="text-accent mb-4">Freelance Front-end Developer</p>
                            <hr className="mb-8 opacity-5"/>
                            <p className="mb-8 text-gray-400 text-center lg:text-left">Ambitious Student, durning my 4 years adventure with many different technologies I acquired a solid foundation in front-end development. I'm motivated and determinated I always deliver projects on time. I'm self-taught, so I got all the knowladge by finishing some free and paid courses and mostly from reading the documentation. I'm fully prepared to embark on my journey in the IT industry as a Junior Front-end Developer.</p>
                        </div>
                        <button className="btn btn-md bg-accent hover:bg-accent-hover transition-all hover:shadow-md hover:shadow-gray-300 hover:scale-110">Contact me</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;