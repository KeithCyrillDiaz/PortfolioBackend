"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Authentication_1 = require("../middlewares/Authentication");
exports.default = (router) => {
    router.use("/PortfolioBackend", Authentication_1.getBackendAuthentication);
};
//# sourceMappingURL=Authentication.js.map