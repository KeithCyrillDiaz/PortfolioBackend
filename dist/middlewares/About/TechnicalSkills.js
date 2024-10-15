"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inputValidationTechnicalSkills = void 0;
const consoleLogsFunction_1 = require("constants/consoleLogsFunction");
const Messages_1 = require("constants/Messages");
const allowedSkillLevel = ["Intermediate", "Beginner", "Novice"];
const inputValidationTechnicalSkills = async (req, res, next) => {
    try {
        consoleLogsFunction_1.MessageLog.Event("Validating Inputs");
        const { title, url, Level, Experience, Rating, } = req.body;
        if (!title ||
            !url ||
            !allowedSkillLevel.includes(Level) ||
            !Level ||
            !Experience ||
            !Rating ||
            typeof Rating !== "number") {
            consoleLogsFunction_1.MessageLog.Error("Bad Request");
            res.status(400).json(Messages_1.ErrorMessages['Bad Request']);
            return;
        }
        consoleLogsFunction_1.MessageLog.Ready("Inputs are Valid");
        next();
    }
    catch (error) {
        (0, Messages_1.catchErrorLog)(res, error);
        return;
    }
};
exports.inputValidationTechnicalSkills = inputValidationTechnicalSkills;
//# sourceMappingURL=TechnicalSkills.js.map