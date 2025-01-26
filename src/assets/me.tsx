import { ReactElement } from 'react';
import '../styles/me.css'
import text from '../data/text.json'

interface Props {
    lang: string;
}

let info = Object(text)

const Me: React.FC<Props> = (props): ReactElement => {
    return(
        <div className='me'>
            <h1>Grant Canty</h1>
            {info[props.lang]['quick_info'].map((ele: string, key: number) => {
                return <h2 key={key}>{ele}</h2>
            })}
        </div>
    )
}

export default Me;