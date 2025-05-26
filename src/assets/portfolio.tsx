import { ReactElement } from "react";
import text from '../data/text.json'
import { Link } from "react-router-dom";

let info = Object(text);

type Lang = 'en' | 'fr'

interface portfolio {
    title: string;
    description: string;
    url: string;
    tech_stack: string[];
    img_path: string;
}

interface Props {
    lang: Lang;
    images: string[];
}

const Portfolio: React.FC<Props> = (props): ReactElement => {
    return(
        <div id='portfolio' className='portfolio'>
            <h2>{info[props.lang]['navigation']['portfolio']}</h2>
            {info[props.lang]['portfolio'].map((ele: portfolio, key: number) => {
                return (
                    <Link key={key} to={ele.url}>
                        <div  className='showcase-item'>
                            <div className="showcase-image">
                                <img src={props.images[key]}></img>
                            </div>
                            <div className="showcase-info-wrapper">
                                <div className="showcase-info">
                                    <h2>{ele.title}</h2>
                                    <p>{ele.description}</p>
                                </div>
                                <div className="showcase-stack">
                                    {ele.tech_stack.map((val: string, key: number) => {
                                        return <div key={key} className="stack-item">{val}</div>
                                    })}
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Portfolio;