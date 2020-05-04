import React from 'react';
import './AboutStyle.scss';
import campfire from '../../assets/images/campfire.png';

function About() {
    return (
        <div className="About">
            <img src={campfire} alt="" style={{
                width: '400px',
                height: 'auto'
            }}/>

            <div>About</div>
        </div>
    )
}

export default About;