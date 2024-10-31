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
        (0, Messages_1.checkFetchResult)(result, res, "Fetch Experiences");
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
        (0, Messages_1.checkCreateResult)(result, res, "Experience");
    }
    catch (error) {
        (0, Messages_1.catchErrorLog)(res, error);
        return;
    }
};
exports.storeExperiences = storeExperiences;
//# sourceMappingURL=Experience.js.map