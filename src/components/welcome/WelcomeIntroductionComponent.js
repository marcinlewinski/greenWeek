import React from 'react';

function WelcomeIntroductionComponent() {

    const introduction = "10 THINGS YOU CAN DO TO HELP SAVE OUR PLANET. The scale of the challenges facing our planet can seem daunting, but we can all do something. Here are 10 simple ways you can help reduce your impact, and help in the fight against climate change.";

    return (<>
        <div>
            <h2 className='welcome-intro'>{introduction}</h2></div>
    </>
    )
}

export default WelcomeIntroductionComponent