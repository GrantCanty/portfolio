import { ReactElement, useState, useRef, useEffect, useCallback } from 'react';
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
    const sectionRefs = useRef<HTMLDivElement[]>([]);

    const [lang, setLang] = useState<string>("en");
    const [activeStates, setActiveStates] = useState<boolean[]>([true, false, false, false, false])

    function toggleLang() {
        setLang((prevState: string) => (prevState === "en" ? 'fr' : 'en'))
    }

    const handleScroll = useCallback(() => {
        if (rightRef.current && sectionRefs.current.length > 0) {
            const containerTop = rightRef.current.getBoundingClientRect().top;

            const newActiveStates = sectionRefs.current.map((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                return sectionTop <= containerTop + 0 && sectionTop + section.offsetHeight > containerTop + 0; // threshold
            });

            setActiveStates(newActiveStates);
        }
    }, []);

    useEffect(() => {
        const rightDiv = rightRef.current;

        if (rightDiv) {
            rightDiv.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (rightDiv) {
                rightDiv.removeEventListener('scroll', handleScroll);
            }
        };
    }, [handleScroll]);

    useEffect(() => {
        const handleWindowScroll = (e: WheelEvent) => {
        e.preventDefault();

        if (rightRef.current) {
            rightRef.current.scrollTop += e.deltaY;
        }
        };

        window.addEventListener("wheel", handleWindowScroll, { passive: false });

        return () => {
        window.removeEventListener("wheel", handleWindowScroll);
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
                                    <Navigation lang={lang} activeStates={activeStates}/>
                                    <div>social media will go here</div>
                                </div>
                            </header>
                            <main className="card-right" ref={rightRef}>
                                <div className="section" ref={(el) => (sectionRefs.current[0] = el!)}>
                                    <About lang={lang} />
                                </div>
                                <div className="section" ref={(el) => (sectionRefs.current[1] = el!)}>
                                    <Portfolio lang={lang} />
                                </div>
                                <div className="section" ref={(el) => (sectionRefs.current[2] = el!)}>
                                    <Experience lang={lang} />
                                </div>
                                <div className="section" ref={(el) => (sectionRefs.current[3] = el!)}>
                                    <Education lang={lang} />
                                </div>
                                <div className="section" ref={(el) => (sectionRefs.current[4] = el!)}>
                                    <Resume />
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;