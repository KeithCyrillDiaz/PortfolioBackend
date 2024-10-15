"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeTechnicalSkills = exports.fetchTechnicalSkills = void 0;
const consoleLogsFunction_1 = require("constants/consoleLogsFunction");
const Messages_1 = require("../../constants/Messages");
const fetchTechnicalSkills = async (req, res) => {
    try {
        consoleLogsFunction_1.MessageLog.Event("Fetching Technical Skills");
    }
    catch (error) {
        (0, Messages_1.catchErrorLog)(res, error);
        return;
    }
};
exports.fetchTechnicalSkills = fetchTechnicalSkills;
const storeTechnicalSkills = async (req, res) => {
    try {
        consoleLogsFunction_1.MessageLog.Event("storing Technical Skills");
    }
    catch (error) {
        (0, Messages_1.catchErrorLog)(res, error);
        return;
    }
};
exports.storeTechnicalSkills = storeTechnicalSkills;
//# sourceMappingURL=TechnicalSkills.js.map