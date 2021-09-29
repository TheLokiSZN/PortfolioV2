import React from 'react'
import About from '../About'
import Portfolio from '../Portfolio'
import Resume from '../Resume'
import ContactMe from '../Contact-Me'

function Page({currentPage}) {
    const renderPage = () => {
        switch (currentPage.name) {
            case 'About Me':
                return <About/>;
            case 'Portfolio':
                return <Portfolio/>
            case 'Resume':
                return <Resume/>
            case 'Contact Me':
                return <ContactMe/>
            default: 
                <About/>;
        }
    }
    return (
        <div>
            Page
        </div>
    )
}

export default Page
