import { ReactElement } from "react";
import text from '../data/text.json'
import '../styles/exp.css'

let info = Object(text);

interface experience {
    start: string;
    end: string;
    type: string;
    company: string;
    title: string;
    description: string;
}

const Experience: React.FC = (): ReactElement => {
    return(
        <div id='experience' className='section experience'>
            {info['en']['experience'].map((ele: experience, key: number) => {
                return (
                    <div key={key} className='experience-item'>
                        <div className="years">
                            <p>{ele.start} - {ele.end}</p>
                        </div>
                        <div className="job-info">
                            <h2>{ele.title}</h2>
                            <h3>{ele.company} - {ele.type}</h3>
                            <p>{ele.description}</p>
                        </div>
                    </div>
                )

            })}
        </div>
    )
}

export default Experience;