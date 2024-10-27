import React from "react";
import Mainbody from '../components/Mainbody'
import Title from '../components/Title'
import ExtraInfoButton from '../hooks/ExtraInfoButton'
import Recommendations from '../components/Recommendations'
import RedirectButton from '../hooks/RedirectButton'

function HomePage() {
    return (
        <>
            <header>
                <Title />
                <nav>
                    <RedirectButton targetPage="AboutPage" text="Om mig"/>
                </nav>
            </header>

            <body className="main-content-container">
                <section id="hidden" className="left-content-container" />
                <section className="middle-content-container">  

                    <section className="asides-container">
                        <aside className='left-aside'> <Mainbody /> </aside>
                        <aside className='right-aside'> <Recommendations /> </aside>
                    </section>

                    <section><ExtraInfoButton /></section>
                </section>
                <section id="hidden" className="right-content-container" />
            </body>
        </>
    )
}

export default HomePage