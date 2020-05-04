import React from 'react';
import finnWithClass from '../../assets/images/class.jpg';

function Home() {
    return (
        <div className="Home">
            <img src={finnWithClass} alt="" style={{
                width: '400px',
                height: 'auto'
            }}/>

            <div>Home</div>
            <div>Env from node: {process.env.REACT_APP_TEST}</div>
        </div>
    )
}

export default Home;