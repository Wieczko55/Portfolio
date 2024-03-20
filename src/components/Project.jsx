import React from "react";

const Project = ({item}) =>{
    return(
        <div key={item.id} className="flex flex-col items-center text-center">
           <a href={item.href} target="blank"><div className="mb-8">
                <img src={item.image} alt="/" className="rounded-2xl h-[250px] object-cover"/>
            </div>
            <p className="text-accent text-sm mb-3 capitalize">{item.category}</p>
            <h3 className="text-2xl font-semibold capitalize mb-3">{item.name}</h3>
            </a>
        </div>
    )
}
export default Project;