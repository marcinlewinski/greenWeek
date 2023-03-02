import React from 'react';
import './Welcome.css'

function Welcome({ onSolutionClick }) {

    return (
        <div className='welcome' style={{ backgroundImage: `url("/welcomeImg.jpg")` }}>
            <div className='text-container'>
                <h1 className='welcome-intro'>Welcome to Green Week!</h1>
                <p className='welcome-text'>
                    Welcome to our platform dedicated to environmental sustainability! We believe that every individual and business has a role to play in protecting our planet, and we're excited to share our <span className='marked-text' onClick={onSolutionClick}>ideas and solutions</span> with you. With our innovative approach, we can reduce usage of plastic. But we don't stop there - we want to hear from you too! Share your own ideas and solutions for a more sustainable future. Together, we can make a real difference for our planet and future generations.
                </p>
            </div>
        </div>
    )
}

export default Welcome