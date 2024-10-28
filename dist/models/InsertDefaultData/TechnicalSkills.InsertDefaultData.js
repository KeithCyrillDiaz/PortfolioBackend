"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertDefaultTechnicalSkills = void 0;
const TeamProjects_1 = require("../../models/Projects/TeamProjects");
const consoleLogsFunction_1 = require("../../constants/consoleLogsFunction");
const icons_1 = require("../../constants/icons");
const TechnicalSkills_1 = require("../../models/About/TechnicalSkills");
const dateToInteger = {
    "January": 1,
    "February": 2,
    "March": 3,
    "April": 4,
    "May": 5,
    "June": 6,
    "July": 7,
    "August": 8,
    "September": 9,
    "October": 10,
    "November": 11,
    "December": 12
};
const getLevel = (value) => {
    if (value <= 1) {
        return "Novice";
    }
    else if (value >= 2 && value <= 3) {
        return "Beginner";
    }
    else if (value >= 4 && value <= 6) {
        return "Intermediate";
    }
    else if (value >= 7 && value <= 12) {
        return "Advanced";
    }
    else {
        return "Expert";
    }
};
const insertDefaultTechnicalSkills = async () => {
    consoleLogsFunction_1.MessageLog.Event("Checking Technical Skills Default Data");
    const checkIcons = icons_1.TechnicalSkillsIcons["TypeScript"];
    if (!checkIcons) {
        consoleLogsFunction_1.MessageLog.Error("Icon images are not loaded");
    }
    const teamProjectsData = await (0, TeamProjects_1.getAllTeamProject)();
    if (teamProjectsData.length === 0) {
        consoleLogsFunction_1.MessageLog.Error("Team Projects Data not found");
        return;
    }
    const calculateTechStats = (projects) => {
        const techProjects = {};
        const techDurations = {};
        const techs = new Set();
        projects.forEach((project) => {
            const allTechs = [...project.Technologies.frontEnd, ...project.Technologies.backEnd];
            const { startingMonth, endingMonth, appName } = project;
            allTechs.forEach(tech => {
                techProjects[tech] = techProjects[tech] || [];
                techProjects[tech].push(appName);
                techDurations[tech] = (techDurations[tech] || 0) + (dateToInteger[endingMonth] - dateToInteger[startingMonth]);
                techs.add(tech);
            });
        });
        const allTechnologies = Array.from(techs);
        return { techProjects, techDurations, allTechnologies };
    };
    const { techProjects, techDurations, allTechnologies } = calculateTechStats(teamProjectsData);
    const defaultTechnicalSkills = allTechnologies.map(technology => {
        const duration = techDurations[technology] || 0;
        const iconURL = icons_1.TechnicalSkillsIcons[technology === "Firebase Storage" ? "Firebase" : technology];
        if (!iconURL) {
            consoleLogsFunction_1.MessageLog.Error(`Failed to load ${technology} icon`);
            return;
        }
        return {
            title: technology,
            url: iconURL,
            Level: getLevel(techDurations[technology]),
            Experience: `${duration} month${duration !== 1 ? 's' : ''}`,
            projects: techProjects[technology]
        };
    });
    const count = await TechnicalSkills_1.TechnicalSkillsModel.countDocuments();
    if (count !== 0) {
        consoleLogsFunction_1.MessageLog.Ready("Technical Skills data already exists");
        return;
    }
    try {
        await TechnicalSkills_1.TechnicalSkillsModel.insertMany(defaultTechnicalSkills);
        consoleLogsFunction_1.MessageLog.Ready("Default Technical Skills Inserted");
    }
    catch (error) {
        consoleLogsFunction_1.MessageLog.Error("Error inserting technical skills data: " + error.message);
    }
};
exports.insertDefaultTechnicalSkills = insertDefaultTechnicalSkills;
//# sourceMappingURL=TechnicalSkills.InsertDefaultData.js.map