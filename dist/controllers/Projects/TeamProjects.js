"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeTeamProjects = exports.fetchTeamProjects = void 0;
const consoleLogsFunction_1 = require("../../constants/consoleLogsFunction");
const Messages_1 = require("../../constants/Messages");
const TeamProjects_1 = require("../../models/Projects/TeamProjects");
const fetchTeamProjects = async (req, res) => {
    try {
        consoleLogsFunction_1.MessageLog.Event("Fetching Team Projects");
        const result = await (0, TeamProjects_1.getAllTeamProject)();
        (0, Messages_1.checkFetchResult)(result, res, "Team Projects");
        return;
    }
    catch (error) {
        (0, Messages_1.catchErrorLog)(res, error);
        return;
    }
};
exports.fetchTeamProjects = fetchTeamProjects;
const storeTeamProjects = async (req, res) => {
    try {
        consoleLogsFunction_1.MessageLog.Event("Storing Team Projects");
        const data = req.body;
        const result = await (0, TeamProjects_1.createTeamProject)(data);
        (0, Messages_1.checkCreateResult)(result, res, "Team Projects");
        return;
    }
    catch (error) {
        (0, Messages_1.catchErrorLog)(res, error);
        return;
    }
};
exports.storeTeamProjects = storeTeamProjects;
//# sourceMappingURL=TeamProjects.js.map