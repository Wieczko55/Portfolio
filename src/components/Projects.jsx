import React, {useState, useEffect} from 'react';

import {projectsData} from '../data';

import {projectsNav} from '../data';

import Project from './Project';

const Projects = () =>{
    
    const [item, setItem] = useState({name: 'all'});
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() =>{
        if (item.name === 'all'){
            setProjects(projectsData)
        } else {
            const newProjects = projectsData.filter((Project) =>{
                return Project.category.toLowerCase() === item.name;
            })
            setProjects(newProjects);
        }
    }, [item]);

    const handleClick = (e, index) =>{
        setItem({name: e.target.textContent.toLowerCase() });
        setActive(index);
    }

    return(
        <div className=''>
             
             <div className='mb-12 max-w-xl mx-auto'>
                <ul className='flex flex-col md:flex-row justify-evenly items-center text-white'>
                    {projectsNav.map((item, index)=>{
                        return <li onClick={(e) =>{handleClick(e, index)}} key={index} className={`${active === index ? 'active' : ''} cursor-pointer capitalize m-4 `} >{item.name}</li>
                    })}
                </ul>
             </div>

             <div className='grid lg:grid-cols-3 gap-y-12 lg:gap-x-8 lg:gap-y-8 md:grid-cols-2 md:gap-6'>
                {projects.map((item) =>{
                    return <Project item={item} key={item.id}/>
                })}
             </div>
        </div>
    )
}

export default Projects;