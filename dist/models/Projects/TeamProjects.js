"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTeamProjectById = exports.createTeamProject = exports.getAllTeamProject = exports.TeamProjectsModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const TeamProjectsSchema = new mongoose_1.default.Schema({
    startingMonth: { type: String, required: true },
    endingMonth: { type: String, required: true },
    MobileAndDesktop: { type: Boolean, required: true },
    MobileAppProject: { type: Boolean },
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
    video: { type: {
            videoURL: { type: String, required: true },
            label: { type: String, required: true },
            videoThumbNailURL: { type: String, required: true },
        } },
    Technologies: { type: {
            frontEnd: { type: [String], required: true },
            backEnd: { type: [String], required: true },
        }, required: true },
    Members: { type: [{
                profileImageURL: { type: String, required: true },
                linkedInURL: { type: String, required: true },
                role: { type: String, required: true },
                fullName: { type: String, required: true },
            }], required: true },
});
exports.TeamProjectsModel = mongoose_1.default.model("Team_Project", TeamProjectsSchema);
const getAllTeamProject = () => exports.TeamProjectsModel.find();
exports.getAllTeamProject = getAllTeamProject;
const createTeamProject = (values) => new exports.TeamProjectsModel(values).save().then((result) => result.toObject());
exports.createTeamProject = createTeamProject;
const deleteTeamProjectById = (id) => exports.TeamProjectsModel.findOneAndDelete({ _id: id });
exports.deleteTeamProjectById = deleteTeamProjectById;
//# sourceMappingURL=TeamProjects.js.map