const expressLoader = require('./express');
const socketioLoader = require('./socketio');
module.exports = ({ expressApp, server }) => {
    expressLoader({ expressApp: expressApp });
    socketioLoader({ server });
};
//# sourceMappingURL=main.js.map