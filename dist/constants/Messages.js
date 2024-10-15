"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validResultForFetch = exports.catchErrorLog = exports.ErrorMessages = void 0;
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
const validResultForFetch = (result, res, dataName) => {
    if (!result) {
        consoleLogsFunction_1.MessageLog.Error(`Failed to fetch ${dataName.toLowerCase()} data`);
        res.status(500).json(exports.ErrorMessages['Server Error']);
        return false;
    }
    if (result.length === 0) {
        consoleLogsFunction_1.MessageLog.Error(`No ${dataName.toLowerCase()} data found`);
        res.status(404).json({
            messages: {
                code: 1,
                message: `No ${dataName.toLowerCase()} data available`
            }
        });
        return false;
    }
    return true;
};
exports.validResultForFetch = validResultForFetch;
//# sourceMappingURL=Messages.js.map