import React from 'react'
import About from '../About'
import Portfolio from '../Portfolio'
import Resume from '../Resume'
import ContactMe from '../Contact-Me'
import RenderPage from '../RenderPage'

function Page({currentPage}) {
    const renderPage = () => {
        switch (currentPage.name) {
            case 'About Me':
                return <About />;
            case 'Portfolio':
                return <Portfolio />
            case 'Resume':
                return <Resume />
            case 'Contact Me':
                return <ContactMe />
            default: 
               return <About />;
        }
    }
    return (
        <div>
            <h2>{currentPage.name}</h2>
            <RenderPage>{renderPage()}</RenderPage>
        </div>
    )
}

export default Page
