import { ReactElement } from 'react';
import Me from '../assets/me'
import Navigation from '../assets/navigation'
import '../styles/home.css';

const Home: React.FC = (): ReactElement => {
    return(
        <>
            <div className="home-card-grid-wrapper">
                <div className="home-card-left">
                    <Me />
                    <Navigation />
                </div>
                <div className="home-card-right">

                </div>
            </div>
        </>
    )
}

export default Home;