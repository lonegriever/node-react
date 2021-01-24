var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const app = require('express')();
const http = require('http');
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const loaders = require('./server/loaders/main');
        const server = http.createServer(app);
        yield loaders({ expressApp: app, server: server });
        server.listen(process.env.PORT || 5000, () => {
            console.log('server is now listening at port 5000');
        });
    });
}
startServer();
//# sourceMappingURL=server.js.map