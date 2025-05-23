import { imageType, videoType } from "constants/types";
import mongoose from "mongoose";


export type PersonalProjectTypes = {
    startingMonth: string;
    endingMonth:  string;
    MobileAndDesktop: boolean
    MobileAppProject?: boolean;
    year: number;
    projectType:  string;
    appName:  string;
    projectDetails:  string;
    introduction:  string;
    images: imageType[];

    video: videoType[];
}


const PersonalProjectSchema = new mongoose.Schema({
    startingMonth: {type: String, required: true},
    endingMonth: {type: String, required: true},
    MobileAndDesktop: {type: Boolean, required: true},
    MobileAppProject: {type: Boolean, default: false},
    year: {type: Number, required: true},
    projectType: {type: String, required: true},
    appName: {type: String, required: true},
    projectDetails: {type: String, },
    introduction: {type: String, required: true},
    images: {type: [{
        imagesURL: {type: [String], required: true},
        label: {type: String, required: true},
        portrait: {type: Boolean, default: false},
    }]},

    video: {type: {
        videoURL: {type: String, required: true},
        label: {type: String, required: true},
        videoThumbNailURL: {type: String, required: true},
    }},

    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
})


export const PersonalProjectModel = mongoose.model("Personal_Project", PersonalProjectSchema);
export const getAllPersonalProjects = () => PersonalProjectModel.find();
export const createPersonalProjects = (values: Record<string, any>) => new PersonalProjectModel(values).save().then((result) => result.toObject());
