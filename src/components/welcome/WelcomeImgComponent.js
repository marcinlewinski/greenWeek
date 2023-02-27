import React from 'react';
import welcomeImg from '../../resources/welcomeImg.jpg';

function WelcomeImgComponent() {

    return (<>
        <img className="welcome-img" alt="welcome-img" src={welcomeImg} />
    </>
    )
}

export default WelcomeImgComponent