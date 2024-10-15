"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Authentication_1 = require("../../middlewares/Authentication");
const Experience_1 = require("../../controllers/About/Experience");
const Experience_2 = require("../../middlewares/About/Experience");
exports.default = (router) => {
    // Apply the middleware to all routes under the /PortfolioBackend path
    router.use("/PortfolioBackend", Authentication_1.getBackendAuthentication);
    router.get("/PortfolioBackend/fetchExperiences", Experience_1.fetchExperiences);
    router.post("/PortfolioBackend/storeExperiences", Experience_2.experienceInputValidation, Experience_1.storeExperiences);
};
//# sourceMappingURL=Experience.js.map