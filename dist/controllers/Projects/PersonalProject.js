"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storePersonalProjects = exports.fetchPersonalProjects = void 0;
const consoleLogsFunction_1 = require("../../constants/consoleLogsFunction");
const Messages_1 = require("../../constants/Messages");
const PersonalProjects_1 = require("../../models/Projects/PersonalProjects");
const fetchPersonalProjects = async (req, res) => {
    try {
        consoleLogsFunction_1.MessageLog.Event("Fetching personal projects data");
        const result = await (0, PersonalProjects_1.getAllPersonalProjects)();
        (0, Messages_1.checkFetchResult)(result, res, "Personal Projects");
        return;
    }
    catch (error) {
        (0, Messages_1.catchErrorLog)(res, error);
        return;
    }
};
exports.fetchPersonalProjects = fetchPersonalProjects;
const storePersonalProjects = async (req, res) => {
    try {
        consoleLogsFunction_1.MessageLog.Event("Storing personal projects data");
        const data = req.body;
        const result = await (0, PersonalProjects_1.createPersonalProjects)(data);
        (0, Messages_1.checkCreateResult)(result, res, "Personal Projects");
        return;
    }
    catch (error) {
        (0, Messages_1.catchErrorLog)(res, error);
        return;
    }
};
exports.storePersonalProjects = storePersonalProjects;
//# sourceMappingURL=PersonalProject.js.map