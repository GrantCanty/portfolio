import { ReactElement } from 'react';
//import { useRef, useEffect } from 'react'
import Me from '../assets/me'
import Navigation from '../assets/navigation'
import About from '../assets/about'
import Portfolio from '../assets/portfolio'
import Resume from '../assets/resume'
import '../styles/home.css';

const Home: React.FC = (): ReactElement => {
    
    
    return(
        <>
        <div className='screen'>
            <div className="container">
                <header className="home-card-left">
                    <div>
                        <Me />
                        <Navigation />
                    </div>
                </header>
                <main className="home-card-right">
                    <About />
                    <Portfolio />
                    <Resume />
                </main>
            </div>
        </div>
        </>
    )
}

export default Home;