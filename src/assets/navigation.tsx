import { ReactElement } from 'react';
import { HashLink } from 'react-router-hash-link'
import '../styles/navigation.css'
import text from '../data/text.json'

interface Props {
    lang: string;
}

let info = Object(text)

const Navigation: React.FC<Props> = (props): ReactElement => {
    Object.keys(info[props.lang]['navigation']).forEach((val) => {
        console.log(val, info[props.lang]['navigation'][val])
    })

    let keys: string[] = Object.keys(info[props.lang]['navigation'])
    
    return(
        <nav className='nav'>
            <ul className='nav-list'>
                {keys.map((val: string) => {
                    return <li > <HashLink smooth to={`/#${val}`}> {info[props.lang]['navigation'][val]} </HashLink> </li>
                })}
            </ul>
        </nav>
    )
}

export default Navigation;