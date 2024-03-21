import React from "react";
import ReactTypingEffect from 'react-typing-effect';
const About = () =>{
    return(
        <div id="About" className="section bg-secondary">
             <div className="w-full flex flex-col items-center justify-ceneter  px-8 my-12">
             <p className='font-semibold text-gray-400 text-lg sm:text-2xl md:text-3xl lg:text-4xl text-center'>Are you looking for a good front-end developer?</p>
             <h1 className='sm:font-semibold text-white text-lg font-bold sm:text-3xl md:text-4xl lg:text-5xl mt-5'>Download my CV and&nbsp; 
                <ReactTypingEffect className='text-accent'
                     text={[" Hire me", " Work with me", " Recommend me"]}
                     speed={200}
                     typingDelay={250}
                     eraseSpeed={200}
                     eraseDelay={400}
                />
            </h1> 
            <p className='text-center mt-5 font-semibold text-gray-400 text-lg sm:text-2xl md:text-3xl lg:text-4xl'>let me prove myself and use many years of learning in working with or for you.</p>
            <a href="Patryk_Wieczorek_CV.pdf" download><button className='mt-5 border border-accent rounded-xl p-3 font-semibold text-xl sm:text-2xl md:text-3xl bg-accent shadow-lg shadow-orange-900 hover:scale-110 transition-all duration-300 hover:shadow-orange-500 hover:bg-orange-600 hover:text-white'>Download CV</button></a>
             </div>
        </div>
    )
}

export default About;