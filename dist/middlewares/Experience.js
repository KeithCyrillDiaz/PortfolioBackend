"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.experienceInputValidation = void 0;
const consoleLogsFunction_1 = require("../constants/consoleLogsFunction");
const Messages_1 = require("../constants/Messages");
const experienceInputValidation = async (req, res, next) => {
    try {
        consoleLogsFunction_1.MessageLog.Event("Validating Input");
        const { startingMonth, endingMonth, year, company, role, bulletsData } = req.body;
        if (!startingMonth ||
            !endingMonth ||
            typeof year !== 'number' ||
            !company ||
            !role ||
            !Array.isArray(bulletsData)) {
            consoleLogsFunction_1.MessageLog.Error("Bad Request");
            res.status(400).json(Messages_1.ErrorMessages['Bad Request']);
            return;
        }
        consoleLogsFunction_1.MessageLog.Ready("Inputs are Valid");
        next();
    }
    catch (error) {
        console.log("Internal Server Error", error);
        res.status(500).json(Messages_1.ErrorMessages["Server Error"]);
        return;
    }
};
exports.experienceInputValidation = experienceInputValidation;
//# sourceMappingURL=Experience.js.map