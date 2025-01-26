import { ReactElement } from 'react';
import { useRef, useEffect } from 'react'
import Me from '../assets/me'
import Navigation from '../assets/navigation'
import About from '../assets/about'
import Portfolio from '../assets/portfolio'
import Resume from '../assets/resume'
import Experience from '../assets/experience'
import '../styles/home.css';

const Home: React.FC = (): ReactElement => {
    const rightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = (e: WheelEvent) => {
        // Prevent default window scroll
        e.preventDefault();

        // Scroll the right section manually
        if (rightRef.current) {
            rightRef.current.scrollTop += e.deltaY;
        }
        };

        // Attach the scroll listener
        window.addEventListener("wheel", handleScroll, { passive: false });

        // Cleanup the listener on component unmount
        return () => {
        window.removeEventListener("wheel", handleScroll);
        };
    }, []);
    
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
                <main className="card-right squeeze" ref={rightRef}>
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