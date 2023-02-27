import React from 'react';
import WelcomeImg from './WelcomeImg';
import WelcomeIntroduction from './WelcomeIntroduction';

function Welcome() {

    return (<><div className='welcome'>
        <WelcomeIntroduction />
        <WelcomeImg />
    </div>
    </>)
}


export default Welcome