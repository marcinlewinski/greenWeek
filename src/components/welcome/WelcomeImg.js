import React from 'react';
import welcomeImg from '../../resources/welcomeImg.jpg';

function WelcomeImg() {

    return (<>
        <img className="welcome-img" alt="welcome-img" src={welcomeImg} />
    </>
    )
}

export default WelcomeImg