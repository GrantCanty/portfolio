import { ReactElement } from "react";
import text from '../data/text.json'

let info = Object(text);

type Lang = 'en' | 'fr'

interface education {
    start: string;
    end: string;
    university: string;
    location: string;
    major: string;
    description: string;
}

interface Props {
    lang: Lang;
}

const Education: React.FC<Props> = (props): ReactElement => {
    return(
        <div id='education' className='education'>
            <h2>{info[props.lang]['navigation']['education']}</h2>
            {info[props.lang]['education'].map((ele: education, key: number) => {
                return (
                    <div key={key} className='showcase-item'>
                        <div className="professional-years">
                            <p>{ele.start} - {ele.end}</p>
                        </div>
                        <div className="professional-info">
                            <h2>{ele.major}</h2>
                            <h3>{ele.university} - {ele.location}</h3>
                            <p>{ele.description}</p>
                        </div>
                    </div>
                )

            })}
        </div>
    )
}

export default Education;