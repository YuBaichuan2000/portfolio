"use client";
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';


const projectData = [
    {
        id: 1,
        title: "React Portfolio Website",
        description: "Project 1 description",
        image: "/images/projects/1.png",
        tag: ["All", "Frontend"],
        gitUrl: '/',
        previewUrl: "/"
    },
    {
        id: 2,
        title: "ChatGPT Clone",
        description: "Project 2 description",
        image: "/images/projects/2.png",
        tag: ["All", "Frontend"],
        gitUrl: '/',
        previewUrl: "/"
    },
    {
        id: 3,
        title: "Service Booking Web Application",
        description: "Project 3 description",
        image: "/images/projects/3.png",
        tag: ["All", "Full Stack"],
        gitUrl: '/',
        previewUrl: "/"
    },
    {
        id: 4,
        title: "Exercise Tracker",
        description: "Project 4 description",
        image: "/images/projects/4.png",
        tag: ["All", "Full Stack"],
        gitUrl: '/',
        previewUrl: "/"
    },
    {
        id: 5,
        title: "Cattle Disease Classifier",
        description: "Project 5 description",
        image: "/images/projects/5.png",
        tag: ["All", "ML"],
        gitUrl: '/',
        previewUrl: "/"
    },
    {
        id: 6,
        title: "Tweet Sentiment Analyzer",
        description: "Project 6 description",
        image: "/images/projects/6.png",
        tag: ["All", "ML"],
        gitUrl: '/',
        previewUrl: "/"
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