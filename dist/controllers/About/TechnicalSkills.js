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
        if (!(0, Messages_1.validResultForFetch)(result, res, "Technical Skills")) {
            return;
        }
        consoleLogsFunction_1.MessageLog.Success("Retrieve Technical Skills Data Successfully");
        res.status(200).json({
            messages: {
                code: 0,
                message: "Retrieve Technical Skills Data Successfully"
            },
            result
        });
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
        if (!result) {
            consoleLogsFunction_1.MessageLog.Error("Failed to store data");
            res.status(500).json(Messages_1.ErrorMessages["Server Error"]);
            return;
        }
        consoleLogsFunction_1.MessageLog.Success("Technical skills data have been stored");
        res.status(200).json({ messages: {
                code: 0,
                message: "Technical skills data have been stored"
            },
            result
        });
    }
    catch (error) {
        (0, Messages_1.catchErrorLog)(res, error);
        return;
    }
};
exports.storeTechnicalSkills = storeTechnicalSkills;
//# sourceMappingURL=TechnicalSkills.js.map