"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertDefaultExperience = void 0;
const consoleLogsFunction_1 = require("../../constants/consoleLogsFunction");
const Experiences_1 = require("../../models/About/Experiences");
const insertDefaultExperience = async () => {
    try {
        consoleLogsFunction_1.MessageLog.Event("Checking experience Default Data");
        const defaultExperienceData = {
            startingMonth: "March",
            endingMonth: "June",
            year: 2024,
            company: "Service Economy Applications INC – Alabang, Muntinlupa",
            role: "Software Developer Intern",
            bulletsData: [
                "Developed and maintained backend services using Node.js and Express with TypeScript, implementing RESTful APIs, token-based authentication, and middleware for enhanced security and functionality",
                "Utilized React with TypeScript, integrating React Hooks and custom components to build dynamic and responsive web applications"
            ],
        };
        const count = await Experiences_1.ExperienceModel.countDocuments();
        if (count !== 0) {
            consoleLogsFunction_1.MessageLog.Ready("Experience data already exists");
            return;
        }
        await Experiences_1.ExperienceModel.insertMany(defaultExperienceData);
        consoleLogsFunction_1.MessageLog.Ready("Default Experience Data Inserted");
    }
    catch (error) {
        consoleLogsFunction_1.MessageLog.Error("Error inserting experience data: " + error.message);
    }
};
exports.insertDefaultExperience = insertDefaultExperience;
//# sourceMappingURL=Experience.InsertDefaultData.js.map