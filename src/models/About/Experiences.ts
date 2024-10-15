import { ExperienceTypes } from "constants/types";
import mongoose, { Schema } from "mongoose";


const ExperienceSchema = new mongoose.Schema({
    startingMonth: {type: String, required: true},
    endingMonth: {type: String, required: true},
    year: {type: Number, required: true},
    company: {type: String, required: true},
    role: {type: String, required: true},
    bulletsData: {type: [String], required: true},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
})


export const ExperienceModel = mongoose.model("Experience", ExperienceSchema)
export const createExperience = (values: Record<string, any>) => new ExperienceModel(values).save().then((result) => result.toObject())
export const getExperiences = () => ExperienceModel.find()