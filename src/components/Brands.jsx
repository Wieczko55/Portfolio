import React from "react";

import {brands} from '../data';

const Brands = () =>{
    return(
        <div className="min-h-[146px] bg-tertiary flex items-center">
            <div className="container mx-auto flex md:justify-between items-center flex-wrap justify-evenly">
                {brands.map((brand, index) =>{
                    return <div key={index}>
                      <a href="#"><img src={brand.img} alt="/" className="hover:scale-125 transition-all duration-200"/></a> 
                    </div>
                })}
            </div>
        </div>
    )
}

export default Brands;