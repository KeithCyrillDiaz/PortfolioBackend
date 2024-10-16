"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Experience_1 = require("../../controllers/About/Experience");
const Experience_2 = require("../../middlewares/About/Experience");
exports.default = (router) => {
    router.get("/PortfolioBackend/fetchExperiences", Experience_1.fetchExperiences);
    router.post("/PortfolioBackend/storeExperiences", Experience_2.experienceInputValidation, Experience_1.storeExperiences);
};
//# sourceMappingURL=Experience.js.map