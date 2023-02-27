import React from 'react';
import WelcomeImgComponent from './WelcomeImgComponent';
import WelcomeIntroductionComponent from './WelcomeIntroductionComponent';

function Welcome() {

    return (<><div className='welcome'>
        <WelcomeIntroductionComponent />
        <WelcomeImgComponent />
    </div>
    </>)
}


export default Welcome