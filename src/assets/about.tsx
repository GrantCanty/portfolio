import { ReactElement } from 'react';
import text from '../data/text.json'

let info = Object(text)

const About: React.FC = (): ReactElement => { 
    return(
        <div id='about' className='section about'>
            {info['en']['about'].map((ele: string, key: number) => {
                return <p key={key}>{ele}</p>
            })}
        </div>
    )
}

export default About;