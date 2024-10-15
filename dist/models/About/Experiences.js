"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExperiences = exports.createExperience = exports.ExperienceModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ExperienceSchema = new mongoose_1.default.Schema({
    startingMonth: { type: String, required: true },
    endingMonth: { type: String, required: true },
    year: { type: Number, required: true },
    company: { type: String, required: true },
    role: { type: String, required: true },
    bulletsData: { type: [String], required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});
exports.ExperienceModel = mongoose_1.default.model("Experience", ExperienceSchema);
const createExperience = (values) => new exports.ExperienceModel(values).save().then((result) => result.toObject());
exports.createExperience = createExperience;
const getExperiences = () => exports.ExperienceModel.find();
exports.getExperiences = getExperiences;
//# sourceMappingURL=Experiences.js.map