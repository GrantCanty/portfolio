import { ReactElement } from 'react';
//import { useRef, useEffect } from 'react'
import Me from '../assets/me'
import Navigation from '../assets/navigation'
import About from '../assets/about'
import Portfolio from '../assets/portfolio'
import Resume from '../assets/resume'
import Experience from '../assets/experience'
import '../styles/home.css';

const Home: React.FC = (): ReactElement => {
    
    
    return(
        <>
        <div className='screen'>
            <div className="container">
                <header className="card-left squeeze">
                    <div>
                        <Me />
                        <Navigation />
                    </div>
                </header>
                <main className="card-right squeeze">
                    <About />
                    <Portfolio />
                    <Experience />
                    <Resume />
                </main>
            </div>
        </div>
        </>
    )
}

export default Home;