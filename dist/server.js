"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const compression_1 = __importDefault(require("compression"));
// import router from './router';
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const colors_1 = __importDefault(require("colors"));
colors_1.default.enable();
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    credentials: true,
}));
app.use((0, compression_1.default)());
app.use(body_parser_1.default.json());
app.use((0, cookie_parser_1.default)());
const server = http_1.default.createServer(app);
app.get("/", (req, res) => { res.json("Portfolio Backend"); });
const MongDB_URL = process.env.MONGO_DB_ATLAS;
if (!MongDB_URL) {
    throw new Error("MongoDB URL is not defined");
}
server.listen(7000, () => {
    console.log("Ready - ".green + "Server Running on http://localhost:7000");
    if (MongDB_URL === process.env.MONGO_DB_LOCAL)
        console.log("Ready - ".green + "MongoDB is running at localhost");
    else
        console.log("Ready - ".green + "MongoDB is running at Atlas");
});
mongoose_1.default.Promise = Promise;
mongoose_1.default.connect(MongDB_URL);
mongoose_1.default.connection.on('error', (error) => console.log(error));
// app.use('/kalinga', router());
exports.default = app;
//# sourceMappingURL=server.js.map