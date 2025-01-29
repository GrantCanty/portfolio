import { ReactElement } from 'react';
import text from '../data/text.json'
import Typewriter from './typewriter';

interface Props {
    lang: string;
}

let info = Object(text)

const About: React.FC<Props> = (props): ReactElement => { 
    return(
        <div id='about' className='about'>
            <h2><Typewriter text={info[props.lang]['about'][0]} speed={150} /></h2>
            {info[props.lang]['about'].slice(1).map((ele: string, key: number) => {
                return <p key={key}>{ele}</p>
            })}
        </div>
    )
}

export default About;