"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeTechnicalSkills = exports.fetchTechnicalSkills = void 0;
const consoleLogsFunction_1 = require("../../constants/consoleLogsFunction");
const Messages_1 = require("../../constants/Messages");
const TechnicalSkills_1 = require("../../models/About/TechnicalSkills");
const fetchTechnicalSkills = async (req, res) => {
    try {
        consoleLogsFunction_1.MessageLog.Event("Fetching Technical Skills");
        const result = await (0, TechnicalSkills_1.getTechnicalSkills)();
        (0, Messages_1.checkFetchResult)(result, res, "Technical Skills");
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
        const data = req.body;
        const result = await (0, TechnicalSkills_1.createTechnicalSkills)(data);
        (0, Messages_1.checkCreateResult)(result, res, "Technical Skills");
        return;
    }
    catch (error) {
        (0, Messages_1.catchErrorLog)(res, error);
        return;
    }
};
exports.storeTechnicalSkills = storeTechnicalSkills;
//# sourceMappingURL=TechnicalSkills.js.map