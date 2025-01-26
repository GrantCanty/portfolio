import { ReactElement } from 'react';
import text from '../data/text.json'

interface Props {
    lang: string;
}

let info = Object(text)

const About: React.FC<Props> = (props): ReactElement => { 
    return(
        <div id='about' className='section about'>
            {info[props.lang]['about'].map((ele: string, key: number) => {
                return <p key={key}>{ele}</p>
            })}
        </div>
    )
}

export default About;