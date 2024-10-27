import React from "react";
import Mainbody from '../components/Mainbody'
import Title from '../components/Title'
import Recommendations from '../components/Recommendations'

function HomePage() {
    return (
        <>
            <header>
                <Title />
            </header>

            <body className="main-content-container">
                <section id="hidden" className="left-content-container" />
                <section className="middle-content-container">  

                    <section className="asides-container">
                        <aside className='left-aside'> <Mainbody /> </aside>
                        <aside className='right-aside'> <Recommendations /> </aside>
                    </section>
                </section>
                <section id="hidden" className="right-content-container" />
            </body>
        </>
    )
}

export default HomePage