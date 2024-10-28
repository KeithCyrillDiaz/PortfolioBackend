import { MessageLog } from "../../constants/consoleLogsFunction";
import mongoose from "mongoose";
import { TechnicalSkillsIcons } from "../../constants/icons";


export type TechnicalSkillsTypes = {
    title: string;
    url: string;
    Level: string;
    Experience: string;
    projects: string[]
};

const TechnicalSkillsSchema = new mongoose.Schema({
    title: {type: String, required: true},
    url: {type: String, required: true},
    Level: {type: String, required: true},
    Experience: {type: String, required: true},
    projects: {type: [String], required: true},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
})

export const TechnicalSkillsModel = mongoose.model("Technical_Skills", TechnicalSkillsSchema);
export const getTechnicalSkills = () => TechnicalSkillsModel.find();
export const createTechnicalSkills = (values: Record<string, any>) => new TechnicalSkillsModel(values).save().then((result) => result.toObject())



