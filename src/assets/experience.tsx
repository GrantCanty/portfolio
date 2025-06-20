import { ReactElement } from "react";
import text from '../data/text.json'
import '../styles/showcase.css'

let info = Object(text);

type Lang = 'en' | 'fr'

interface experience {
    start: string;
    end: string;
    type: string;
    company: string;
    title: string;
    description: string[];
}

interface Props {
    lang: Lang;
}

const Experience: React.FC<Props> = (props): ReactElement => {
    return(
        <div id='experience' className='experience'>
            <h2>{info[props.lang]['navigation']['experience']}</h2>
            {info[props.lang]['experience'].map((ele: experience, key: number) => {
                return (
                    <div key={key} className='showcase-item'>
                        <div className="professional-years">
                            <p>{ele.start} - {ele.end}</p>
                        </div>
                        <div className="professional-info">
                            <h2>{ele.title}</h2>
                            <h3>{ele.company} - {ele.type}</h3>
                            <ul>
                            {ele.description.map((val: string, i: number) => {
                                return <li key={i}>{val}</li>
                            })}
                            </ul>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Experience;