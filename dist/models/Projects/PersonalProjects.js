"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPersonalProjects = exports.getAllPersonalProjects = exports.PersonalProjectModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const PersonalProjectSchema = new mongoose_1.default.Schema({
    startingMonth: { type: String, required: true },
    endingMonth: { type: String, required: true },
    MobileAndDesktop: { type: Boolean, required: true },
    MobileAppProject: { type: Boolean, default: false },
    year: { type: Number, required: true },
    projectType: { type: String, required: true },
    appName: { type: String, required: true },
    projectDetails: { type: String, required: true },
    introduction: { type: String, required: true },
    images: { type: [{
                imagesURL: { type: [String], required: true },
                label: { type: String, required: true },
                portrait: { type: Boolean, default: false },
            }] },
    videos: { type: [{
                videoURL: { type: String, required: true },
                label: { type: String, required: true },
                videoThumbNailURL: { type: String, required: true },
            }] },
});
exports.PersonalProjectModel = mongoose_1.default.model("Personal_Project", PersonalProjectSchema);
const getAllPersonalProjects = () => exports.PersonalProjectModel.find();
exports.getAllPersonalProjects = getAllPersonalProjects;
const createPersonalProjects = (values) => new exports.PersonalProjectModel(values).save().then((result) => result.toObject());
exports.createPersonalProjects = createPersonalProjects;
//# sourceMappingURL=PersonalProjects.js.map