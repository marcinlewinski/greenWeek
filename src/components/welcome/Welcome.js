import React from 'react';
import './Welcome.css'
const introduction = "Plastic pollution is a global issue that affects the environment, wildlife, and ultimately, human health. We provide practical tips and examples to help you reduce plastic consumption and make sustainable choices. Let's join hands and take small steps towards creating a better future for our planet!";


function Welcome() {

    return (
        <div className='welcome' style={{backgroundImage: `url("/welcomeImg.jpg")`}}>
            <div className='text-container'>
                <h1 className='welcome-intro'>Welcome to Green Week!</h1>
                <p className='welcome-text'>{ introduction }</p>
            </div>
        </div>
    )
}

export default Welcome