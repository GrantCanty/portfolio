import { ReactElement, useState, useRef, useEffect } from 'react';
import Me from '../assets/me'
import Navigation from '../assets/navigation'
import About from '../assets/about'
import Portfolio from '../assets/portfolio'
import Resume from '../assets/resume'
import Experience from '../assets/experience'
import Education from '../assets/education'
import '../styles/home.css';
import '../styles/section.css';

const Home: React.FC = (): ReactElement => {
    const rightRef = useRef<HTMLDivElement>(null);
    const [lang, setLang] = useState<string>("en");

    function toggleLang() {
        setLang((prevState: string) => (prevState === "en" ? 'fr' : 'en')
    )
    }

    useEffect(() => {
        const handleScroll = (e: WheelEvent) => {
        e.preventDefault();

        if (rightRef.current) {
            rightRef.current.scrollTop += e.deltaY;
        }
        };

        window.addEventListener("wheel", handleScroll, { passive: false });

        return () => {
        window.removeEventListener("wheel", handleScroll);
        };
    }, []);
    
    return(
        <>
            <div className='base'>
                <nav className='lang-select'>
                    <button onClick={toggleLang}>{lang}</button>
                </nav>
                <div className='screen'>
                    <div className='squeeze-side'>
                        <div className="container">
                            <header className="card-left">
                                <div>
                                    <Me lang={lang} />
                                    <Navigation lang={lang} />
                                </div>
                            </header>
                            <main className="card-right" ref={rightRef}>
                                <About lang={lang} />
                                <Portfolio />
                                <Experience />
                                <Education />
                                <Resume />
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;