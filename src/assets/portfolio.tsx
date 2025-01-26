import { ReactElement } from "react";
import text from '../data/text.json'

let info = Object(text);

interface portfolio {
    title: string;
    description: string;
    url: string;
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
                    <div key={key} className='showcase-item'>
                        <h2>{ele.title}</h2>
                        <p>{ele.description}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Portfolio;