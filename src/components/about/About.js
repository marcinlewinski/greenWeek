import dataAbout from '../../database/dataAbout';
import AboutDetail from './AboutDetail';

function About() {
    return (<>
        <div className='about'>
            {dataAbout.map((element, index) => (
                <AboutDetail key={index} {...element} />
            ))}
        </div>
    </>
    )
}

export default About