"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTechnicalSkills = exports.getTechnicalSkills = exports.TechnicalSkillsModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const TechnicalSkillsSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    url: { type: String, required: true },
    Level: { type: String, required: true },
    Experience: { type: String, required: true },
    Rating: { type: Number, required: true },
});
exports.TechnicalSkillsModel = mongoose_1.default.model("Technical_Skills", TechnicalSkillsSchema);
const getTechnicalSkills = () => exports.TechnicalSkillsModel.find();
exports.getTechnicalSkills = getTechnicalSkills;
const createTechnicalSkills = (values) => new exports.TechnicalSkillsModel(values).save().then((result) => result.toObject());
exports.createTechnicalSkills = createTechnicalSkills;
//# sourceMappingURL=TechnicalSkills.js.map