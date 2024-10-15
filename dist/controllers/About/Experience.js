"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeExperiences = exports.fetchExperiences = void 0;
const consoleLogsFunction_1 = require("../../constants/consoleLogsFunction");
const Messages_1 = require("../../constants/Messages");
const Experiences_1 = require("../../models/About/Experiences");
const fetchExperiences = async (req, res) => {
    try {
        consoleLogsFunction_1.MessageLog.Event("Fetching Experiences");
        const result = await (0, Experiences_1.getExperiences)();
        if (!(0, Messages_1.validResultForFetch)(result, res, "Experiences")) {
            return;
        }
        consoleLogsFunction_1.MessageLog.Success("Retrieve Experiences Data Successfully");
        res.status(200).json({
            messages: {
                code: 0,
                message: "Retrieve Experiences Data Successfully"
            },
            result
        });
    }
    catch (error) {
        (0, Messages_1.catchErrorLog)(res, error);
        return;
    }
};
exports.fetchExperiences = fetchExperiences;
const storeExperiences = async (req, res) => {
    try {
        consoleLogsFunction_1.MessageLog.Event("Storing Experiences");
        const data = { ...req.body };
        const result = await (0, Experiences_1.createExperience)(data);
        if (!result) {
            consoleLogsFunction_1.MessageLog.Error("Failed to store data");
            res.status(500).json(Messages_1.ErrorMessages["Server Error"]);
            return;
        }
        consoleLogsFunction_1.MessageLog.Success("Experience data have been stored");
        res.status(200).json({ messages: {
                code: 0,
                message: "Experience data have been stored"
            },
            result
        });
    }
    catch (error) {
        (0, Messages_1.catchErrorLog)(res, error);
        return;
    }
};
exports.storeExperiences = storeExperiences;
//# sourceMappingURL=Experience.js.map