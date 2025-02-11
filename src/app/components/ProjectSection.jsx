"use client";
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';


const projectData = [
    {
        id: 1,
        title: "React Portfolio Website",
        description: "My portfolio website built using React and Tailwind CSS.",
        image: "/images/projects/1.png",
        tag: ["All", "Frontend"],
        gitUrl: 'https://github.com/YuBaichuan2000/portfolio',
        previewUrl: "https://portfolio-66fjgryj5-george-yus-projects-acb1f072.vercel.app/"
    },
    {
        id: 2,
        title: "ChatGPT Clone",
        description: "Frontend project using React and ChatGPT API.",
        image: "/images/projects/2.png",
        tag: ["All", "Frontend"],
        gitUrl: 'https://github.com/YuBaichuan2000/gpt-clone',
        previewUrl: "https://gpt-clone-e01d.onrender.com/"
    },
    // {
    //     id: 3,
    //     title: "Service Booking Web Application",
    //     description: "Full stack project using React, Node.js, Express, and MySQL.",
    //     image: "/images/projects/3.png",
    //     tag: ["All", "Full Stack"],
    //     gitUrl: 'https://github.com/YuBaichuan2000/SSEProject',
    //     // previewUrl: "https://github.com/YuBaichuan2000/SSEProject"
    // },
    {
        id: 4,
        title: "Exercise Tracker",
        description: "Full stack project using React, Node.js, Express, and MongoDB.",
        image: "/images/projects/4.png",
        tag: ["All", "Full Stack"],
        gitUrl: 'https://github.com/YuBaichuan2000/workout-tracker',
        previewUrl: "https://workout-tracker-frontend-1gjy.onrender.com/"
    },
    {
        id: 5,
        title: "Cattle Disease Classifier",
        description: "Machine learning project using PyTorch and Image Classification.",
        // image: "/images/projects/5.png",
        tag: ["All", "ML"],
        gitUrl: 'https://github.com/YuBaichuan2000/cattle-disease-cv',
        // previewUrl: "https://github.com/YuBaichuan2000/cattle-disease-cv"
    },
    {
        id: 6,
        title: "Merchant Ranking System",
        description: "Machine learning project using PySpark and Big Data Analysis.",
        // image: "/images/projects/6.png",
        tag: ["All", "ML"],
        gitUrl: 'https://github.com/MAST30034-Applied-Data-Science/generic-buy-now-pay-later-project-group-27',
        // previewUrl: "https://github.com/MAST30034-Applied-Data-Science/generic-buy-now-pay-later-project-group-27"
    },

]


const ProjectSection = ({id}) => {

    const [tag, setTag] = useState("All");

    const handleTagChange = (tag) => {
        setTag(tag);
    }

    const filteredProjects = projectData.filter((project) => {
        return project.tag.includes(tag);
    })

    return (
        <div id={id}>
            <h2 className='text-center text-4xl font-bold text-white mt-4'>My Projects</h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                <ProjectTag name="All" onClick={handleTagChange} tag="All" isSelected={tag === "All"} />
                <ProjectTag name="Frontend" onClick={handleTagChange} tag="Frontend" isSelected={tag === "Frontend"} />
                <ProjectTag name="Full Stack" onClick={handleTagChange} tag="Full Stack" isSelected={tag === "Full Stack"} />
                <ProjectTag name="ML" onClick={handleTagChange} tag="ML" isSelected={tag === "ML"} />
            </div>
            <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
                { filteredProjects.map((project) => (
                   
                    <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} gitUrl={project.gitUrl} previewUrl={project.previewUrl}/>
                    
                )) }
            </div>
        </div>
        

        
    )
}

export default ProjectSection;