import { ReactElement } from 'react';
import { HashLink } from 'react-router-hash-link'

const Navigation: React.FC = (): ReactElement => {
    return(
        <nav>
            <ul>
                <li > <HashLink smooth to='/#about' >About </HashLink> </li>
                <li > <HashLink smooth to='/#portfolio' > Portfolio </HashLink> </li>
                <li > <HashLink smooth to='/#experience' > Professional Experience </HashLink> </li>
                <li > <HashLink smooth to='/#resume' >Resume</HashLink></li>
            </ul>
        </nav>
    )
}

export default Navigation;