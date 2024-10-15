"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Authentication_1 = require("middlewares/Authentication");
const TechnicalSkills_1 = require("controllers/About/TechnicalSkills");
const TechnicalSkills_2 = require("middlewares/About/TechnicalSkills");
exports.default = (router) => {
    router.use("/PortfolioBackend", Authentication_1.getBackendAuthentication);
    router.get("/PortfolioBackend/fetchTechnicalSkills", TechnicalSkills_1.fetchTechnicalSkills);
    router.post("/PortfolioBackend/storeTechnicalSkills", TechnicalSkills_2.inputValidationTechnicalSkills, TechnicalSkills_1.storeTechnicalSkills);
};
//# sourceMappingURL=TechnicalSkills.js.map