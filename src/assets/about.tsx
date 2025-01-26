import { ReactElement } from 'react';
import text from '../data/text.json'

const About: React.FC = (): ReactElement => {
    let info = Object(text)

    info['en']['about'].forEach((ele: string) => {
        console.log(ele)
    })
    
    return(
        <div id='about' className='section about'>
            {info['en']['about'].map((ele: string) => {
                return <p>{ele}</p>
            })}
        </div>
    )
}

export default About;