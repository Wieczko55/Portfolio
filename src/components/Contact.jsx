import React from "react";

import { contact } from '../data';

import { useRef } from "react";

const Contact = () =>{

    const ref = useRef();

    React.useEffect(() => {
        if (ref.current) {
          ref.current.focus();
        }
      }, []);

    return(
        <div className="section bg-primary" id="contact">
            <div className="container mx-auto">
                <div className="flex flex-col items-center text-center">
                    <h2 className="section-title relative before:content-contact before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block">Contact me</h2>
                    <p className="subtitle">I told you a little about myself, now it's time for you to take a step, so don't wait, contact me and let's start cooperation today. I guarantee that it will be a decision you will not regret</p>
                </div>
                <div className="flex flex-col lg:gap-x-8 lg:flex-row">
                    <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
                        {contact.map((item, index) =>{
                            const {icon, title, subtitle, description} = item;
                            return <div className="flex flex-col lg:flex-row gap-x-4" key={index}>
                                <div className="text-accent rounded-sm w-14 h-14 flex items-start justify-start mt-1 mb-0 lg:mb-0 text-2xl">
                                    {icon}
                                </div>
                                <div>
                                    <h4 className="font-body text-xl mb-1">{title}</h4>
                                    <p className="mb-1 text-slate-500">{subtitle}</p>
                                    <p className="text-accent">{description}</p>
                                </div>
                            </div>
                        })}
                    </div>
                    <form action="https://formsubmit.co/patrykwieczorek081@gmail.com" method="POST" className="space-y-8 w-full max-w-[780px]">
                        <div className="flex gap-8">
                            <input type="text" name="name" className="input" placeholder="Your name" required/>
                            <input type="email" name="email" className="input" placeholder="Your email" required/>
                        </div>
                        <input required name="subject" type="text" className="input" placeholder="Subject"/>
                        <textarea required name="message" className="textarea" placeholder="Your message"></textarea>
                        <button type="submit" className="btn btn-lg bg-accent hover:bg-accent-hover mx-auto sm:mx-0" ref={ref}>Send nessage</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;