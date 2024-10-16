"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TeamProjects_1 = require("../../controllers/Projects/TeamProjects");
const TeamProject_1 = require("../../middlewares/Projects/TeamProject");
exports.default = (router) => {
    router.get("/PortfolioBackend/fetchTeamProjects", TeamProjects_1.fetchTeamProjects);
    router.post("/PortfolioBackend/storeTeamProjects", TeamProject_1.inputValidationTeamProject, TeamProjects_1.storeTeamProjects);
};
//# sourceMappingURL=TeamProject.js.map