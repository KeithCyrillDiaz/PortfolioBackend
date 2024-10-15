"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageLog = void 0;
exports.MessageLog = {
    "Event": (message) => console.log("Event - ".magenta + message + "..."),
    "Error": (message) => console.log("Error - ".red + message),
    "Ready": (message) => console.log("Ready - ".green + message),
    "Success": (message) => console.log("Success - ".yellow + message),
};
//# sourceMappingURL=consoleLogsFunction.js.map