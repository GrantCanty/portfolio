import { ReactElement, useState, useRef, useEffect, useCallback } from 'react';
import Me from '../assets/me'
import Navigation from '../assets/navigation'
import About from '../assets/about'
import Portfolio from '../assets/portfolio'
import Experience from '../assets/experience'
import Education from '../assets/education'
import Social from '../assets/social'
import '../styles/home.css';
import '../styles/section.css';

import bruitpic from '../../public/bruit.png'
import skiviewpic from '../../public/skiview.png'
import quizzypic from '../../public/quizzy.png'
import flashcardspic from '../../public/flashcards.png'
import soundclassifierpic from '../../public/sound_classifier.png'
import aiml1pic from '../../public/ai & ml lab 1.png'
import aiml2pic from '../../public/ai & ml lab 2.png'
import fedlearningpic from '../../public/fed_learning.png'
import bigdatapic from '../../public/big_data.png'

type Lang = 'en' | 'fr'

const Home: React.FC = (): ReactElement => {
    const rightRef = useRef<HTMLDivElement>(null);
    const sectionRefs = useRef<HTMLDivElement[]>([]);

    const [lang, setLang] = useState<Lang>("en");
    const [activeStates, setActiveStates] = useState<boolean[]>([true, false, false, false, false])

    function toggleLang() {
        setLang((prevState: string) => (prevState === "en" ? 'fr' : 'en'))
    }

    const handleScroll = useCallback(() => {
        if (rightRef.current && sectionRefs.current.length > 0) {
            const containerTop = rightRef.current.getBoundingClientRect().top;

            const newActiveStates = sectionRefs.current.map((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                return sectionTop <= containerTop + 2 && sectionTop + section.offsetHeight > containerTop + 2; // threshold
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

    let imagesArr: string[] = []
    imagesArr.push(bigdatapic)
    imagesArr.push(soundclassifierpic)
    imagesArr.push(fedlearningpic)
    imagesArr.push(aiml1pic)
    imagesArr.push(aiml2pic)

    imagesArr.push(bruitpic)
    imagesArr.push(flashcardspic)
    imagesArr.push(quizzypic)
    imagesArr.push(skiviewpic)
    
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
                                <Me lang={lang} />
                                <Navigation lang={lang} activeStates={activeStates}/>
                                <Social />
                            </header>
                            <main className="card-right" ref={rightRef}>
                                <div className="section" ref={(el) => (sectionRefs.current[0] = el!)}>
                                    <About lang={lang} />
                                </div>
                                <div className="section" ref={(el) => (sectionRefs.current[1] = el!)}>
                                    <Portfolio lang={lang} images={imagesArr} />
                                </div>
                                <div className="section" ref={(el) => (sectionRefs.current[2] = el!)}>
                                    <Experience lang={lang} />
                                </div>
                                <div className="section" ref={(el) => (sectionRefs.current[3] = el!)}>
                                    <Education lang={lang} />
                                </div>
                                {/*<div className="section" ref={(el) => (sectionRefs.current[4] = el!)}>
                                    <Resume />
                                </div>*/}
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;