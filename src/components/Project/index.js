import React from "react";
import projectOne from '../../assets/images/screenshot1.png';
import projectTwo from '../../assets/images/screenshot2.png';
import projectThree from '../../assets/images/screenshot3.png';
import projectFour from '../../assets/images/screenshot4.png';

function Project() {
    const projects = [
        {
            name: "Trip it",
            photo: projectOne,
            url: "https://p1group5.github.io/trip-it/",
            gitHub: "https://github.com/P1Group5/trip_it.git"
        },
        {
            name: "Second Blind Date",
            photo: projectTwo,
            url: "https://salty-brushlands-53741.herokuapp.com/",
            gitHub: "https://github.com/2ndblinddate/project-2nd-blind-date"
        },
        {
            name: "Work Day Scheduler",
            photo: projectThree,
            url: "https://frodrickfronkenstein.github.io/work-day-scheduler/",
            gitHub: "https://github.com/frodrickfronkenstein/work-day-scheduler"
        },
        {
            name: "Coding Quiz",
            photo: projectFour,
            url: "https://frodrickfronkenstein.github.io/coding-quiz/",
            gitHub: "https://github.com/frodrickfronkenstein/coding-quiz"
        }
    ];

    return (
        <div>
            {projects.map((project) => {
                return (
                    <div>
                        <img src={project.photo} alt={project.name} style={{ width: '25%' }}></img>
                        <h3 href={project.url}>{project.name}</h3>
                        <a href={project.gitHub}>Repository</a>
                    </div>
                )
            })}
        </div>
    )
}

export default Project;