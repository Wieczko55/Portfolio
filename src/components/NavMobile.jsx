import React, {useState} from "react";
import {navigation} from '../data';
import {Xicon} from '@heroicons/react/outline';
import { MenuAlt3Icon } from '@heroicons/react/outline';
import Socials from './Socials';
import {motion} from 'framer-motion';
import { Link } from 'react-scroll'
import { IoClose } from "react-icons/io5";
import Logo from '../assets/Logo1.png'

const NavMobile = () =>{
    const [isOpen, setIsOpen] = useState(false);

    const circleVariants = {
        hidden:{
            scale: 0 
        },
        visible:{
            scale: 180,
            transition:{
                type: 'spring',
                stifness: 160,
                damping: 60,
            },
        },
    };
    const ulVariants = {
        hidden:{
            opacity: 0
        },
        visible:{
            opacity: 1,
            transition:{
                delay: 0.3,
            },
        },
    };

    return(
        <div className="relative">
            <div onClick={() => setIsOpen(true)} className="cursor-pointer text-white">
                <MenuAlt3Icon className="w-8 h-8" />
            </div>
            
            <motion.div variants={circleVariants} initial='hidden' animate={isOpen ? 'visible': 'hidden' } className="w-4 h-4 rounded-full bg-accent fixed top-0 right-0"></motion.div>
            <motion.ul variants={ulVariants} initial='hidden' animate={isOpen ? 'visible' : 'hidden'} className={`${isOpen ? 'right-0' : '-right-full'} fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}>
                <div onClick={() => setIsOpen(false)} className="cursor-pointer absolute top-4 w-full flex justify-between">
                <img src={Logo} alt="/" className="ml-2"/>
                    <IoClose className="w-8 h-8 mt-2 mr-4 text-white"/>
                </div>

                {
                    navigation.map((item, index) =>{
                        return <li key={index} className="mb-6">
                            <Link to={item.href} smooth={true} duration={500} offset={-70} className="text-xl cursor-pointer capitalize">{item.name}</Link>
                        </li>
                    })
                }
                <q className="text-white absolute bottom-2 right-0 mr-5 ">Personal portfolio website</q>
            </motion.ul>
        </div>
    )
}

export default NavMobile;