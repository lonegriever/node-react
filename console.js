var repl = require("repl");
const db = require('./server/models/index');
const {
    User
} = db;
var replServer = repl.start({
    prompt: "Node console > "
});
replServer.context.User = User;
