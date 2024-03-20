import React from "react";
import {FiLayout} from 'react-icons/fi';
import { IoCodeSlashSharp } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Services = () =>{
    const [ye,setYe] = useState(false);
    const [ye1,setYe1] = useState(false);
    const [ye2,setYe2] = useState(false);

    const backToPage = () =>{
        setYe(!ye);
        setYe1(false);
        setYe2(false);
    }

    const backToPage1 = () =>{
        setYe(false);
        setYe1(!ye1);
        setYe2(false);
    }

    const backToPage2 = () =>{
        setYe(false);
        setYe1(false);
        setYe2(!ye2);
        console.log(ye2);
    }
    


    return(
        <div className="bg-tertiary py-12" id="services">
            <div className="flex flex-col items-center mb-16 px-10 max-w-[700px] mx-auto">
                <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl">What I do for clients</h2>
                <p className="text-slate-400 mt-2 text-center">Mainly i create and develop websites, I can make a website to order or if you have a job offer for me, I will be happy to join a team with which we will create something great together</p>
            </div>
            <div className="container mx-auto md:grid md:grid-cols-3 gap-8 lg:gap-14">
                <div className="text-lg flex flex-col border rounded-2xl mb-6 md:mb-0 pl-10 md:py-5 py-2 text-white bg-secondary border-secondary hover:bg-gray-800 transition-all duration-100 hover:scale-105 group/item hover:cursor-pointer" onClick={() => setYe(!ye)}>
                    <FiLayout className="text-accent size-8 md:mt-20 mt-10"/>
                    <h2 className="mt-6 text-2xl lg:text-3xl font-semibold ">Web <br /> <span>Development</span></h2>
                    <p className="text-slate-500 mt-4 mb-2 group-hover/item:text-accent">View More -></p>
                </div>
                <div className="text-lg flex flex-col border mb-6 md:mb-0 rounded-2xl pl-10 md:py-5 py-2 text-white bg-secondary border-secondary hover:bg-gray-800 transition-all duration-100 hover:scale-105 group/item1 hover:cursor-pointer" onClick={() => setYe1(!ye1)}>
                    <IoCodeSlashSharp className="text-accent size-8 md:mt-20 mt-10"/>
                    <h2 className="mt-6 text-2xl lg:text-3xl font-semibold">UI/UX <br /> <span>Design</span></h2>
                    <p className="text-slate-500 mt-4 mb-2 group-hover/item1:text-accent">View More -></p>
                </div>
                <div className="text-lg flex flex-col border rounded-2xl pl-10 md:py-5 py-2 text-white bg-secondary border-secondary hover:bg-gray-800 transition-all duration-100 hover:scale-105 group/item2 hover:cursor-pointer" onClick={() => setYe2(!ye2)}>
                    <CgWebsite className="text-accent size-8 md:mt-20 mt-10"/>
                    <h2 className="mt-6 text-2xl lg:text-3xl font-semibold">Web <br /> <span>Design</span></h2>
                    <p className="text-slate-500 mt-4 mb-2 group-hover/item2:text-accent">View More -></p>
                </div>
            </div>
            {ye ? <div onClick={backToPage} className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0 duration-300"></div> : ''}
            {ye ? <div className={'justify-center rounded-2xl px-8 sm:py-4 py-2 flex flex-col fixed top-[50%] left-[50%] sm:mt-[-180px] mt-[-220px] w-[300px] sm:w-[600px] sm:ml-[-300px] ml-[-150px] bg-gray-300 z-10 duration-50'} style={{visibility: ye? 'visible' : 'hidden'}}>
                <IoMdClose size={25} onClick={backToPage} className="hover:cursor-pointer mt-4 sm:mt-1"/>
                <h2 className="text-black text-xl md:text-2xl lg:text-3xl font-semibold text-center sm:mt-10 mt-6">Web developer</h2>
                <p className="text-center mt-4">3 Years experience of creating and developing web sites.</p>
                <ul className="list-style-none mt-8 mb-10">
                    <li className="flex"><FaAngleRight className="mt-1 mr-2"/> I develop the user interface</li>
                    <li className="flex"><FaAngleRight className="mt-1 mr-2"/> Web page develompment</li>
                    <li className="flex"><FaAngleRight className="mt-1 mr-2"/> I create ux element interactions</li>
                    <li className="flex"><FaAngleRight className="mt-1 mr-2"/> i position your company brand.</li>
                    <li className="flex"><FaAngleRight className="mt-1 mr-2"/> Design and mackups of products for companies</li>
                </ul>
            </div> : '' }
            {ye1 ? <div onClick={backToPage1} className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0 duration-300"></div> : ''}
            {ye1 ? <div className={'justify-center rounded-2xl px-8 sm:py-4 py-2 flex flex-col fixed top-[50%] left-[50%] sm:mt-[-180px] mt-[-220px] w-[300px] sm:w-[600px] sm:ml-[-300px] ml-[-150px] bg-gray-300 z-10 duration-50'} style={{visibility: ye1? 'visible' : 'hidden'}}>
                <IoMdClose size={25} onClick={backToPage1} className="hover:cursor-pointer mt-4 sm:mt-1"/>
                <h2 className="text-black text-xl md:text-2xl lg:text-3xl font-semibold text-center sm:mt-10 mt-6">UI/UX Designer</h2>
                <p className="text-center mt-4">3 Years experience of creating and developing web sites.</p>
                <ul className="list-style-none mt-8 mb-10">
                    <li className="flex"><FaAngleRight className="mt-1 mr-2"/> I develop the user interface</li>
                    <li className="flex"><FaAngleRight className="mt-1 mr-2"/> I care about making a good impression on the user</li>
                    <li className="flex"><FaAngleRight className="mt-1 mr-2"/> I can conduct a website audit in terms of UX requirements</li>
                    <li className="flex"><FaAngleRight className="mt-1 mr-2"/> I know some tricks in adobe photoshop</li>
                    <li className="flex"><FaAngleRight className="mt-1 mr-2"/> UX research</li>
                </ul>
            </div> : ' '}
            {ye2 ? <div onClick={backToPage2} className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0 duration-300"></div> : ''}
            {ye2? <div className={'justify-center rounded-2xl px-8 sm:py-4 py-2 flex flex-col fixed top-[50%] left-[50%] sm:mt-[-180px] mt-[-220px] w-[300px] sm:w-[600px] sm:ml-[-300px] ml-[-150px] bg-gray-300 z-10 duration-50'} style={{visibility: ye2? 'visible' : 'hidden'}}>
                <IoMdClose size={25} onClick={backToPage2} className="hover:cursor-pointer mt-4 sm:mt-1"/>
                <h2 className="text-black text-xl md:text-2xl lg:text-3xl font-semibold text-center sm:mt-10 mt-6">Web designer</h2>
                <p className="text-center mt-4">3 Years experience of creating and developing web sites.</p>
                <ul className="list-style-none mt-8 mb-10">
                    <li className="flex"><FaAngleRight className="mt-1 mr-2"/> Visual design</li>
                    <li className="flex"><FaAngleRight className="mt-1 mr-2"/> SEO</li>
                    <li className="flex"><FaAngleRight className="mt-1 mr-2"/> Color theory </li>
                    <li className="flex"><FaAngleRight className="mt-1 mr-2"/> Design for any type of website</li>
                </ul>
            </div> : ''}
        </div>
    )
}

export default Services;