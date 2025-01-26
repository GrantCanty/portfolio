import { ReactElement } from 'react';
import { HashLink } from 'react-router-hash-link'
import '../styles/navigation.css'

const Navigation: React.FC = (): ReactElement => {
    return(
        <nav>
            <ul className='nav-list'>
                <li > <HashLink smooth to='/#about' >About </HashLink> </li>
                <li > <HashLink smooth to='/#portfolio' > Portfolio </HashLink> </li>
                <li > <HashLink smooth to='/#experience' >  Experience </HashLink> </li>
                <li > <HashLink smooth to='/#education' >  Education </HashLink> </li>
                <li > <HashLink smooth to='/#resume' >Resume</HashLink></li>
            </ul>
        </nav>
    )
}

export default Navigation;