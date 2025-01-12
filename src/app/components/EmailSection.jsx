"use client";
import React, {useState} from "react";
import GithubIcon from "../../../public/github.svg";
import LinkedInIcon from "../../../public/linkedin.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = ({id}) => {

    // const [emailSubmitted, setEmailSubmitted] = useState(false);

    // const handleSubmit = async (e) => {   
    //     e.preventDefault();
    //     const email = e.target.email.value;
    //     const subject = e.target.subject.value;
    //     const message = e.target.message.value;

    //     const res = await fetch('/api/send', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ email, subject, message })
    //     });

    //     if (res.ok) {
    //         e.target.reset();
    //         setEmailSubmitted(true);
    //         alert('Message sent successfully!');
    //     } else {
    //         alert('Failed to send message');
    //     }
    // }


    return (
        <section id={id} className="grid md:grid-cols-1 my-12 md:my-12 py-24 gap-4">
            <div>
                <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    {" "}
                    I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <div className="socilas flex flex-row gap-2">
                    <Link href="https://github.com/YuBaichuan2000" target="_blank">
                        <Image src={GithubIcon} alt="Github Icon" height={50} width={50}></Image>
                    </Link>
                    <Link href="https://www.linkedin.com/in/george-yu-a6800a227/" target="_blank">
                        <Image src={LinkedInIcon} alt="Linkedin Icon" height={50} width={50}></Image>
                    </Link>
                </div>
            </div>
            {/* <div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <label htmlFor="email" className="text-white block mb-1 text-sm font-medium">Your Email</label>
                    <input name="email" type="email" id="email" className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text0sm rounded-lg block w-full p-2.5" required placeholder="george@hireme.com"/>
                    <label htmlFor="subject" className="text-white block mb-1 text-sm font-medium">Subject</label>
                    <input name="subject" type="text" id="subject" className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text0sm rounded-lg block w-full p-2.5" required placeholder=""/>
                    
                </form>
                <div className="mt-6 mb-6">
                    <label htmlFor="message" className="text-white block mb-2 text-sm font-medium">Message</label>
                    <textarea name="message" id="message" className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text0sm rounded-lg block w-full p-2.5" placeholder="Please leave your message..."></textarea>
                </div>
                <button type="submit" className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">Send Message</button>
                { emailSubmitted && <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>}
            </div> */}
        </section>
    )
};

export default EmailSection;