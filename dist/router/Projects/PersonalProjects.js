"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PersonalProject_1 = require("../../controllers/Projects/PersonalProject");
const PersonalProjects_1 = require("../../middlewares/Projects/PersonalProjects");
exports.default = (router) => {
    router.get("/PortfolioBackend/fetchAllPersonalProjects", PersonalProject_1.fetchAllPersonalProjects);
    router.post("/PortfolioBackend/storePersonalProjects", PersonalProjects_1.inputValidationPersonalProjects, PersonalProject_1.storePersonalProjects);
};
//# sourceMappingURL=PersonalProjects.js.map