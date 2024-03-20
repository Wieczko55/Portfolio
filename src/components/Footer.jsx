import React from "react";

import {social} from '../data';

import Logo from '../assets/Logo1.png';

const Footer = () =>{
    return(
        <div className="bg-tertiary py-12">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
                    <div className="flex space-x-6 items-center justify-center">
                        {social.map((item, index) =>{
                            const {href, icon} = item;
                            return <a className="text-accent text-base" href={href} key={index}>{icon}</a>
                        })}
                    </div>
                    <div>
                        <img src={Logo} alt="/" />
                    </div>
                        <p className="text-gray-400">&copy; 2024 Patryk Wieczorek. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;