"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inputValidationTeamProject = void 0;
const consoleLogsFunction_1 = require("../../constants/consoleLogsFunction");
const Messages_1 = require("../../constants/Messages");
const validation_1 = require("../../constants/validation");
const inputValidationTeamProject = async (req, res, next) => {
    try {
        consoleLogsFunction_1.MessageLog.Event("Validating Input");
        const { startingMonth, endingMonth, MobileAndDesktop, year, projectType, appName, projectDetails, introduction, images, video, Technologies, Members, } = req.body;
        if (!startingMonth ||
            !validation_1.ValidMonth.includes(startingMonth) ||
            !endingMonth ||
            !validation_1.ValidMonth.includes(endingMonth) ||
            !MobileAndDesktop ||
            !year ||
            typeof year !== 'number' ||
            !projectType ||
            !appName ||
            !projectDetails ||
            !introduction ||
            !Array.isArray(images) ||
            !video ||
            !Technologies ||
            !Array.isArray(Members)) {
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
exports.inputValidationTeamProject = inputValidationTeamProject;
//# sourceMappingURL=TeamProject.js.map