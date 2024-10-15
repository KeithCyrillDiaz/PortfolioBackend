"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchErrorLog = exports.ErrorMessages = void 0;
const consoleLogsFunction_1 = require("./consoleLogsFunction");
exports.ErrorMessages = {
    "Server Error": {
        messages: {
            code: 1,
            message: "Internal Server Error"
        }
    },
    "Unauthorized": {
        messages: {
            code: 1,
            message: "Unauthorized User"
        }
    },
    "Bad Request": {
        messages: {
            code: 1,
            message: "Bad Request"
        }
    }
};
const catchErrorLog = (res, error) => {
    consoleLogsFunction_1.MessageLog.Error("Internal Server Error: " + error);
    res.status(500).json(exports.ErrorMessages["Server Error"]);
    return;
};
exports.catchErrorLog = catchErrorLog;
//# sourceMappingURL=Messages.js.map