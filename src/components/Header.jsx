import React, {useState, useEffect} from "react";
import Nav from '../components/Nav';
import NavMobile from '../components/NavMobile';
import Socials from '../components/Socials';
import Logo from '../assets/Logo1.png'

const Header = () =>{
    const [bg, setBg] = useState(false);

    useEffect(() =>{
        window.addEventListener('scroll', () =>{
            return window.scrollY > 50 ? setBg(true) : setBg(false)
        });
    });
    
    return(
        <div  className={`${bg ? 'bg-tertiary h-20' : 'bg-primary h-24'}flex items-center fixed top-0 w-full text-white z-10 translation-all duration-300`}>
            <div className="container mx-auto h-full flex items-center justify-between">
                
                <a href="#">
                    <img src={Logo} alt="/" />
                </a>

                <div className="hidden lg:block">
                    <Nav />
                </div>

                <div className="hidden lg:block">
                    <Socials />
                </div>

                <div className="lg:hidden">
                    <NavMobile />
                </div>
            </div>
        </div>
    )
}

export default Header;