"use client";
import React, {useTransition, useState} from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Web Development</li>
                <li>Full Stack Development</li>
                <li>Database Management</li>
                <li>Machine Learning</li>
                <li>Data Analysis</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Master of Computer Science, University of Adelaide</li>
                <li>Bachelor of Science, Data Science Major, University of Melbourne</li>
                <li>Secondary Education, Trinity Grammar School, Kew</li>
            </ul>
        )
    },
    {
        title: "Tools",
        id: "tools",
        content: (
            <ul className='list-disc pl-2'>
                <li>React</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>MySQL</li>
                <li>mongoDB</li>
                <li>Python</li>
                <li>Git</li>
            </ul>
        )
    },
]

const AboutSection = ({id}) => {

    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }

    return (
        <section id={id} className='text-white'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image src="/images/workspace.png" alt='workspace' width={500} height={500} className="h-96 object-cover"/>
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                    I am a software engineer with a strong foundation in building robust, scalable systems and applications. My expertise spans full-stack development, including frontend and backend technologies, with a focus on performance, scalability, and user experience. I am dedicated to writing clean, maintainable code and delivering high-quality software solutions that meet business needs and drive innovation.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>{" "}Skills{" "}</TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>{" "}Education{" "}</TabButton>
                        <TabButton selectTab={() => handleTabChange("tools")} active={tab === "tools"}>{" "}Tools{" "}</TabButton>
                        
                    </div>
                    <div className='mt-8'>
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;