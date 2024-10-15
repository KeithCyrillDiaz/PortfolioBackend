import mongoose from "mongoose";

const TechnicalSkillsSchema = new mongoose.Schema({
    title: {type: String, required: true},
    url: {type: String, required: true},
    Level: {type: String, required: true},
    Experience: {type: String, required: true},
    Rating: {type: Number, required: true},
})

export const TechnicalSkillsModel = mongoose.model("Technical_Skills", TechnicalSkillsSchema);
export const getTechnicalSkills = () => TechnicalSkillsModel.find();
export const createTechnicalSkills = (values: Record<string, any>) => new TechnicalSkillsModel(values).save().then((result) => result.toObject())
