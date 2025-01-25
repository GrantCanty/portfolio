import { ReactElement } from 'react';

const Navigation: React.FC = (): ReactElement => {
    return(
        <nav>
            <ul>
                <li> <a href='#about'>About </a></li>
                <li><a href='#portfolio' >Portfolio </a></li>
                <li><a href='#resume'>Resume </a></li>
            </ul>
        </nav>
    )
}

export default Navigation;