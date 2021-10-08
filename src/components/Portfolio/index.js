import React, {useState} from 'react';
import Projects from '../Projects';
import PlanRainCheck from '../../assets/img/Plan-Rain-Check.jpg';
import CryptoForum from '../../assets/img/Crypto-Forum.jpg';
import Project3 from '../../assets/img/Project-3.jpg';
import CodeRefractor from '../../assets/img/Code-Refractor.jpg';
import PasswordGenerator from '../../assets/img/Password-Generator.jpg';
import QuizGame from '../../assets/img/Quiz-Game.jpg';
import DayPlanner from '../../assets/img/Day-Planner.jpg';
import MVCTechBlog from '../../assets/img/MVC-Tech-Blog.png';
import WorkoutTracker from '../../assets/img/Workout-Tracker.jpg';


function Portfolio() {
    const [projects] = useState([
        {
            name: 'Plan Rain Check',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            link: 'https://kevinlacarrubba.github.io/plan-rain-check/',
            repoLink: 'https://github.com/KevinLaCarrubba/plan-rain-check',
            img: `${PlanRainCheck}`
        },
        {
            name: 'Crypto Forum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            link: 'https://cryptotalk-forum.herokuapp.com/',
            repoLink: 'https://github.com/KevinLaCarrubba/Crypto-Forum',
            img: `${CryptoForum}`

        },
        {
            name: 'Project 3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            link: 'more words x2',
            repoLink: 'github link x2',
            img: `${Project3}`
        },
        {
            name: 'Code Refractor',
            description: 'I was given the task of refractoring this mock website during my bootcamp in coding.',
            link: 'https://thelokiszn.github.io/codeRefractor/',
            repoLink: 'https://github.com/TheLokiSZN/codeRefractor',
            img: `${CodeRefractor}`
        },
        {
            name: 'Password Generator',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            link: 'https://thelokiszn.github.io/PW-Repo/',
            repoLink: 'https://github.com/TheLokiSZN/PW-Repo',
            img: `${PasswordGenerator}`
        },
        {
            name: 'Quiz Game',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            link: 'https://thelokiszn.github.io/Quiz/',
            repoLink: 'https://github.com/TheLokiSZN/Quiz',
            img: `${QuizGame}`
        },
        {
            name: 'Day Planner',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            link: 'https://thelokiszn.github.io/Day-Planner/',
            repoLink: 'https://github.com/TheLokiSZN/Day-Planner',
            img: `${DayPlanner}`
        },
        {
            name: 'MVC Tech Blog',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            link: 'https://mvc-tech-blog-2.herokuapp.com/',
            repoLink: 'https://github.com/TheLokiSZN/MVC-Tech-blog2',
            img: `${MVCTechBlog}`
        },
        {
            name: 'Workout Tracker',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            link: 'https://workout-tracker424.herokuapp.com/',
            repoLink: 'https://github.com/TheLokiSZN/Workout-Tracker',
            img: `${WorkoutTracker}`
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
