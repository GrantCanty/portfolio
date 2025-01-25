import { ReactElement } from 'react';
//import { useRef, useEffect } from 'react'
import Me from '../assets/me'
import Navigation from '../assets/navigation'
import '../styles/home.css';

const Home: React.FC = (): ReactElement => {
    
    
    return(
        <>
        <div className='screen'>
            <div className="container">
                <header className="home-card-left">
                    <div>
                        <Me />
                        <Navigation />
                    </div>
                </header>
                <main className="home-card-right">
                    <div id='about' className='section about'>
                        <h2>About</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nostrum delectus labore, quo consequuntur illum facere itaque adipisci fugit possimus totam doloribus, expedita sequi maiores libero quaerat provident quia voluptas.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nostrum delectus labore, quo consequuntur illum facere itaque adipisci fugit possimus totam doloribus, expedita sequi maiores libero quaerat provident quia voluptas.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nostrum delectus labore, quo consequuntur illum facere itaque adipisci fugit possimus totam doloribus, expedita sequi maiores libero quaerat provident quia voluptas.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nostrum delectus labore, quo consequuntur illum facere itaque adipisci fugit possimus totam doloribus, expedita sequi maiores libero quaerat provident quia voluptas.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nostrum delectus labore, quo consequuntur illum facere itaque adipisci fugit possimus totam doloribus, expedita sequi maiores libero quaerat provident quia voluptas.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nostrum delectus labore, quo consequuntur illum facere itaque adipisci fugit possimus totam doloribus, expedita sequi maiores libero quaerat provident quia voluptas.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nostrum delectus labore, quo consequuntur illum facere itaque adipisci fugit possimus totam doloribus, expedita sequi maiores libero quaerat provident quia voluptas.</p>
                    </div>
                    <div id='portfolio' className='section portfolio'>
                        <h2>Portfolio</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nostrum delectus labore, quo consequuntur illum facere itaque adipisci fugit possimus totam doloribus, expedita sequi maiores libero quaerat provident quia voluptas.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nostrum delectus labore, quo consequuntur illum facere itaque adipisci fugit possimus totam doloribus, expedita sequi maiores libero quaerat provident quia voluptas.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nostrum delectus labore, quo consequuntur illum facere itaque adipisci fugit possimus totam doloribus, expedita sequi maiores libero quaerat provident quia voluptas.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nostrum delectus labore, quo consequuntur illum facere itaque adipisci fugit possimus totam doloribus, expedita sequi maiores libero quaerat provident quia voluptas.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nostrum delectus labore, quo consequuntur illum facere itaque adipisci fugit possimus totam doloribus, expedita sequi maiores libero quaerat provident quia voluptas.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nostrum delectus labore, quo consequuntur illum facere itaque adipisci fugit possimus totam doloribus, expedita sequi maiores libero quaerat provident quia voluptas.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nostrum delectus labore, quo consequuntur illum facere itaque adipisci fugit possimus totam doloribus, expedita sequi maiores libero quaerat provident quia voluptas.</p>
                    </div>
                    <div id='resume' className='section resume'>
                        <h2>Resume</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nostrum delectus labore, quo consequuntur illum facere itaque adipisci fugit possimus totam doloribus, expedita sequi maiores libero quaerat provident quia voluptas.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nostrum delectus labore, quo consequuntur illum facere itaque adipisci fugit possimus totam doloribus, expedita sequi maiores libero quaerat provident quia voluptas.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nostrum delectus labore, quo consequuntur illum facere itaque adipisci fugit possimus totam doloribus, expedita sequi maiores libero quaerat provident quia voluptas.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nostrum delectus labore, quo consequuntur illum facere itaque adipisci fugit possimus totam doloribus, expedita sequi maiores libero quaerat provident quia voluptas.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nostrum delectus labore, quo consequuntur illum facere itaque adipisci fugit possimus totam doloribus, expedita sequi maiores libero quaerat provident quia voluptas.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nostrum delectus labore, quo consequuntur illum facere itaque adipisci fugit possimus totam doloribus, expedita sequi maiores libero quaerat provident quia voluptas.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nostrum delectus labore, quo consequuntur illum facere itaque adipisci fugit possimus totam doloribus, expedita sequi maiores libero quaerat provident quia voluptas.</p>
                    </div>
                </main>
            </div>
        </div>
        </>
    )
}

export default Home;