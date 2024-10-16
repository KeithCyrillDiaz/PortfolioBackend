import mongoose from "mongoose";


const PersonalProjectSchema = new mongoose.Schema({
    startingMonth: {type: String, required: true},
    endingMonth: {type: String, required: true},
    MobileAndDesktop: {type: Boolean, required: true},
    MobileAppProject: {type: Boolean, default: false},
    year: {type: Number, required: true},
    projectType: {type: String, required: true},
    appName: {type: String, required: true},
    projectDetails: {type: String, required: true},
    introduction: {type: String, required: true},
    images: {type: [{
        imagesURL: {type: [String], required: true},
        label: {type: String, required: true},
        portrait: {type: Boolean, default: false},
    }]},

    videos: {type: [{
        videoURL: {type: String, required: true},
        label: {type: String, required: true},
        videoThumbNailURL: {type: String, required: true},
    }]},
})


export const PersonalProjectModel = mongoose.model("Personal_Project", PersonalProjectSchema);
export const getAllPersonalProjects = () => PersonalProjectModel.find();
export const createPersonalProjects = (values: Record<string, any>) => new PersonalProjectModel(values).save().then((result) => result.toObject());
