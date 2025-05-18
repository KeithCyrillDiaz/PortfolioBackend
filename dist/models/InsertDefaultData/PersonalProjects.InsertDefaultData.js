"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertDefaultPersonalProject = void 0;
const consoleLogsFunction_1 = require("constants/consoleLogsFunction");
const insertDefaultPersonalProject = async () => {
    try {
        consoleLogsFunction_1.MessageLog.Event("Checking Personal Project Default Data");
        // const PersonalProjectdefaultData: PersonalProjectTypes = {
        //     startingMonth: "October",
        //     endingMonth:  "October",
        //     MobileAndDesktop: false,
        //     MobileAppProject?: false,
        //     year: 2024,
        //     projectType:  "Portfolio Website",
        //     appName:  "Keith Diaz Portfolio",
        // }
    }
    catch (error) {
        consoleLogsFunction_1.MessageLog.Error("Error inserting technical skills data: " + error.message);
    }
};
exports.insertDefaultPersonalProject = insertDefaultPersonalProject;
//# sourceMappingURL=PersonalProjects.InsertDefaultData.js.map