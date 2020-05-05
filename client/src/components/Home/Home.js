import React, {useEffect} from 'react';
import finnWithClass from '../../assets/images/class.jpg';
import createSocket from 'socket.io-client';

function Home() {
    // const socket = createSocket('http://localhost:5000');

    useEffect(() => {
        const socket = createSocket('http://localhost:5000');
        const broadcastCallback = (data) => {
            console.log(data)
        }
        socket.on('broadcast', broadcastCallback);
        return () => {
            socket.removeListener('broadcast', broadcastCallback);
        };
    }, []);

    return (
        <div className="Home">
            <img src={finnWithClass} alt="" style={{
                width: '400px',
                height: 'auto'
            }}/>

            <div>Home</div>
        </div>
    )
}

export default Home;