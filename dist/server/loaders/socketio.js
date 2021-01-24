const socketio = require('socket.io');
module.exports = ({ server }) => {
    const io = socketio(server);
    io.emit('broadcast', { message: 'fathead' });
};
//# sourceMappingURL=socketio.js.map