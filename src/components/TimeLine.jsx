import React from "react";

import { FaCalendarAlt } from "react-icons/fa";

const TimeLine = () =>{
    return(
        <div className="section bg-secondary text-white" id="testimonials">
            <div className="container mx-auto flex flex-col items-center justify-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">Adventure</h1>
            <p className="text-slate-300 mt-3 mb-8">My personal journey</p>   
            <ol class="relative border-s border-gray-300 dark:border-gray-200 flex flex-col justify-center">              
                <li class="mb-10 ms-4">
                     <div class="absolute w-3 h-3 bg-gray-200 rounded-full -start-1.5 border border-white"></div>
                    <time class="mb-1 text-md font-semibold leading-none text-accent  flex"><FaCalendarAlt className="mr-2 text-accent" size={17}/>2021</time>
                    <h3 class="text-lg font-semibold text-gray-300 dark:text-white">First contact with web developing</h3>
                    <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">In 2019 was my first lesson of web developing in html and css, it was love at first sight because I have stayed working with websites until today, only improving my skills and acquiring knowledge about new technologies</p>
                    
                </li>
                <li class="mb-10 ms-4">
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                    <time class="mb-1 text-md font-semibold leading-none text-accent  flex"><FaCalendarAlt className="mr-2" size={17}/>2022</time>
                    <h3 class="text-lg font-semibold text-gray-300 dark:text-white">inf 03 qualification exam</h3>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">IT school involves passing an exam, so I passed it and in the meantime I managed to create my first amateur projects that did not look professional in the slightest, but I could already see progress in creating the code and understanding it</p>
                </li>
                <li class="ms-4 mb-10">
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                    <time class="mb-1 text-md font-semibold leading-none text-accent  flex"><FaCalendarAlt className="mr-2" size={17}/> 2023</time>
                    <h3 class="text-lg font-semibold text-gray-300 dark:text-white">Completing IT technical school and starting studies</h3>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">It's a time of great changes, I left my old school from which I squeezed the maximum potential, and then it was time for new challenges, i.e. university, the longest vacation of my life was not only a time of rest but also the greatest progress because a lot of time = a lot of time to improve my passions .</p>
                </li>
                <li class="ms-4">
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                    <time class="mb-1 text-md font-semibold leading-none text-accent  flex"><FaCalendarAlt className="mr-2" size={17}/> 2024</time>
                 <h3 class="text-lg font-semibold text-gray-300 dark:text-white">First serious projects and job search</h3>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">2024 is a period in which I managed to create several interesting projects that I believe could be of interest to a potential employer or client, these projects (in my opinion the best) are placed slightly higher in the "portfolio" tab, this is definitely a period in which my skills is the highest and I can also see a huge progress compared to previous years. I hope that you will like the skills that I pour into my projects and will hire me or give me an order.</p>
                </li>
            </ol>
            </div>
        </div>
    )
}

export default TimeLine;