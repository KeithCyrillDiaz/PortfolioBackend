"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Experience_1 = __importDefault(require("./About/Experience"));
const TechnicalSkills_1 = __importDefault(require("./About/TechnicalSkills"));
const router = express_1.default.Router();
exports.default = () => {
    (0, Experience_1.default)(router);
    (0, TechnicalSkills_1.default)(router);
    return router;
};
//# sourceMappingURL=index.js.map