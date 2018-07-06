"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const controller_1 = require("./questions/controller");
const db_1 = require("./db");
const controller_2 = require("./answers/controller");
const app = routing_controllers_1.createKoaServer({
    cors: true,
    controllers: [controller_1.default, controller_2.default]
});
db_1.default()
    .then(_ => app.listen(4000, () => console.log("Listening on port 4000")))
    .catch(err => console.error(err));
//# sourceMappingURL=index.js.map