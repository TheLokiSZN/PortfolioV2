import React, {useState} from 'react'
import Projects from '../Projects'

function Portfolio() {
    const [projects] = useState([
        {
            name: 'project1',
            description: 'words',
            link: 'more words',
            repo: "Github link"
        },
        {
            name: 'project2',
            description: 'words x2',
            link: 'more words x2',
            repo: 'github link x2'
        }
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
