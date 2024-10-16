import mongoose from "mongoose";


const TeamProjectsSchema = new mongoose.Schema({
    startingMonth: {type: String, required: true},
    endingMonth: {type: String, required: true},
    MobileAndDesktop: {type: Boolean, required: true},
    MobileAppProject: {type: Boolean},
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

    video: {type: {
        videoURL: {type: String, required: true},
        label: {type: String, required: true},
        videoThumbNailURL: {type: String, required: true},
    }},

    Technologies: {type: {
        frontEnd: {type: [String], required: true},
        backEnd: {type: [String], required: true},
    }, required: true},

    Members: {type: [{
        profileImageURL: {type: String, required: true},
        linkedInURL: {type: String, required: true},
        role: {type: String, required: true},
        fullName: {type: String, required: true},
        }], required: true},
})


export const TeamProjectsModel =  mongoose.model("Team_Project", TeamProjectsSchema);
export const getAllTeamProject = () => TeamProjectsModel.find();
export const createTeamProject = (values: Record<string, any>) => new TeamProjectsModel(values).save().then((result) => result.toObject());
export const deleteTeamProjectById = (id: mongoose.ObjectId) => TeamProjectsModel.findOneAndDelete({_id: id})