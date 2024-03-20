import React from "react";
import {skills} from '../data';
const Skills = () => {
    return(
        <div className="bg-tertiary py-12">
            <div className="container mx-auto">
                <div className="grid grid-rows-2 grid-cols-4 md:grid-rows-1 md:grid-cols-8">
                    {skills.map((skill,index)=>{
                        return <div key={index}>
                            <img src={skill.image} alt="/" />
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Skills;