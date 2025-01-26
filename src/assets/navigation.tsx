import { ReactElement } from 'react';
import { HashLink } from 'react-router-hash-link'
import '../styles/navigation.css'
import text from '../data/text.json'

interface Props {
    lang: string;
    activeStates: boolean[];
}

let info = Object(text)

const Navigation: React.FC<Props> = (props): ReactElement => {
    return(
        <nav className='nav'>
            <ul className='nav-list'>
                {Object.keys(info[props.lang]['navigation']).map((val: string, key: number) => {
                    return <li key={key} > <HashLink className={props.activeStates[key] ? "active" : undefined } smooth to={`/#${val}`}> {info[props.lang]['navigation'][val]} </HashLink> </li>
                })}
            </ul>
        </nav>
    )
}

export default Navigation;