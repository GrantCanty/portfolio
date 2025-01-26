import { ReactElement } from "react";
import text from '../data/text.json'
import { Link } from "react-router-dom";

let info = Object(text);

interface portfolio {
    title: string;
    description: string;
    url: string;
    tech_stack: string[];
}

interface Props {
    lang: string;
}

const Portfolio: React.FC<Props> = (props): ReactElement => {
    
    return(
        <div id='portfolio' className='portfolio'>
            {info[props.lang]['portfolio'].map((ele: portfolio, key: number) => {
                console.log(ele)
                return (
                    <Link to={ele.url}>
                    <div key={key} className='showcase-item'>
                        <div className="showcase-image">
                            
                        </div>
                        <div className="showcase-info-wrapper">
                            <div className="showcase-info">
                                <h2>{ele.title}</h2>
                                <p>{ele.description}</p>
                            </div>
                            <div className="showcase-stack">
                                {ele.tech_stack.map((val: string) => {
                                    return <div className="stack-item">{val}</div>
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