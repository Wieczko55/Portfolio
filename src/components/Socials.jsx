import {social} from '../data';

const Socials = () =>{
    return(
        <div>
            <ul className='flex space-x-6'>
                {social.map((item, index) =>{
                    return <li className='flex justify-center items-center text-accent' key={index}>
                        <a className='text-base' href={item.href} target='blank'>{item.icon}</a>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Socials;