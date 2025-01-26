import { ReactElement } from "react";
import text from '../data/text.json'

let info = Object(text);



const Education: React.FC = (): ReactElement => {
    return(
        <>
            <div id='education' className='section education'>
            <h2>Education</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laudantium nulla quam sequi voluptatum mollitia repudiandae, reiciendis molestiae quia ab eum! Facilis explicabo architecto nobis odio doloremque id pariatur laborum?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laudantium nulla quam sequi voluptatum mollitia repudiandae, reiciendis molestiae quia ab eum! Facilis explicabo architecto nobis odio doloremque id pariatur laborum?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laudantium nulla quam sequi voluptatum mollitia repudiandae, reiciendis molestiae quia ab eum! Facilis explicabo architecto nobis odio doloremque id pariatur laborum?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laudantium nulla quam sequi voluptatum mollitia repudiandae, reiciendis molestiae quia ab eum! Facilis explicabo architecto nobis odio doloremque id pariatur laborum?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laudantium nulla quam sequi voluptatum mollitia repudiandae, reiciendis molestiae quia ab eum! Facilis explicabo architecto nobis odio doloremque id pariatur laborum?</p>
                {/*info['en']['experience'].map((ele, key: number) => {
                    return (
                        
                    )

                })*/}
            </div>
        </>
    )
}

export default Education;