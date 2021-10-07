import React, {useState} from 'react'
import Projects from '../Projects'

function Portfolio() {
    const [projects] = useState([
        {
            name: 'Plan Rain Check',
            description: 'words x2',
            link: 'https://kevinlacarrubba.github.io/plan-rain-check/',
            repoLink: 'https://github.com/KevinLaCarrubba/plan-rain-check'
        },
        {
            name: 'Crypto Forum',
            description: 'words x2',
            link: 'https://cryptotalk-forum.herokuapp.com/',
            repoLink: 'https://github.com/KevinLaCarrubba/Crypto-Forum'
        },
        {
            name: 'Project 3',
            description: 'words x2',
            link: 'more words x2',
            repoLink: 'github link x2'
        },
        {
            name: 'Code Refractor',
            description: 'I was given the task of refractoring this mock website during my bootcamp in coding.',
            link: 'https://thelokiszn.github.io/codeRefractor/',
            repoLink: 'https://github.com/TheLokiSZN/codeRefractor'
        },
        {
            name: 'Password Generator',
            description: 'words x2',
            link: 'https://thelokiszn.github.io/PW-Repo/',
            repoLink: 'https://github.com/TheLokiSZN/PW-Repo'
        },
        {
            name: 'Quiz Game',
            description: 'words x2',
            link: 'https://thelokiszn.github.io/Quiz/',
            repoLink: 'https://github.com/TheLokiSZN/Quiz'
        },
        {
            name: 'Day Planner',
            description: 'words x2',
            link: 'https://thelokiszn.github.io/Day-Planner/',
            repoLink: 'https://github.com/TheLokiSZN/Day-Planner'
        },
        {
            name: 'MVC Tech Blog',
            description: 'words x2',
            link: 'https://mvc-tech-blog-2.herokuapp.com/',
            repoLink: 'https://github.com/TheLokiSZN/MVC-Tech-blog2'
        },
        {
            name: 'Workout Tracker',
            description: 'words x2',
            link: 'https://workout-tracker424.herokuapp.com/',
            repoLink: 'https://github.com/TheLokiSZN/Workout-Tracker'
        },
    ])
    return (
        <div>
            <div>
                {projects.map((projects, idx) => (
                    <Projects
                    projects={projects}
                    key={"projects" + idx}
                    ></Projects>
                ))}
            </div>
        </div>
    )
}

export default Portfolio
