import { ReactElement } from 'react';
import '../styles/me.css'

const Me: React.FC = (): ReactElement => {
    return(
        <div className='me'>
            <h1>Grant Canty</h1>
            <h2>Master's Student in AI</h2>
            <h2>Aspiring Developer</h2>
        </div>
    )
}

export default Me;