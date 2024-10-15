"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBackendAuthentication = void 0;
const consoleLogsFunction_1 = require("../constants/consoleLogsFunction");
const Messages_1 = require("../constants/Messages");
const getBackendAuthentication = async (req, res, next) => {
    try {
        consoleLogsFunction_1.MessageLog.Event("Checking for Authentication");
        if (!req.headers.authorization || !req.headers.authorization.startsWith("Bearer ")) {
            console.log("Error - ".red + "Unauthorized User");
            res.status(401).json(Messages_1.ErrorMessages["Unauthorized"]);
            return;
        }
        const userToken = req.headers.authorization.split(" ")[1];
        const token = process.env.BACKEND_TOKEN;
        if (userToken !== token) {
            console.log("Error - ".red + "Unauthorized User");
            res.status(401).json(Messages_1.ErrorMessages["Unauthorized"]);
            return;
        }
        consoleLogsFunction_1.MessageLog.Ready("User is Authorized");
        next();
    }
    catch (error) {
        consoleLogsFunction_1.MessageLog.Error("Internal Server Error");
        res.status(500).json(Messages_1.ErrorMessages["Server Error"]);
        return;
    }
};
exports.getBackendAuthentication = getBackendAuthentication;
//# sourceMappingURL=Authentication.js.map