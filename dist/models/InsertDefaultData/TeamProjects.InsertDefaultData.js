"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertDefaultTeamProjects = void 0;
const icons_1 = require("../../constants/icons");
const consoleLogsFunction_1 = require("../../constants/consoleLogsFunction");
const TeamProjects_1 = require("../../models/Projects/TeamProjects");
const insertDefaultTeamProjects = async () => {
    try {
        consoleLogsFunction_1.MessageLog.Event("Checking Team Project Default Data");
        const defaultTeamProject = {
            startingMonth: "October",
            MobileAndDesktop: true,
            endingMonth: "June",
            year: 2024,
            projectType: "Thesis Project",
            appName: "Kalinga App",
            projectDetails: "Empowering Breastmilk Donation Banks Through Mobile Application Management Integration",
            introduction: "The Kalinga App, created in collaboration with the Quezon City Human Milk Bank (QCHMB), aims to streamline the process of donating and requesting breast milk, enhancing the awareness and utilization of Milk Banks across the country (Cubelo et al., 2024).",
            images: [
                {
                    imagesURL: [
                        icons_1.kalingaURLS["Kalinga Admin Home"],
                        icons_1.kalingaURLS["Kalinga Admin Dashboard"]
                    ],
                    label: "Kalinga Admin Website which will be handled by Quezon City Human Milk Bank",
                },
                {
                    imagesURL: [
                        icons_1.kalingaURLS["Kalinga App Log In"],
                        icons_1.kalingaURLS["Kalinga App Donor Dashboard"],
                        icons_1.kalingaURLS["Kalinga App Requestor Dashboard"],
                        icons_1.kalingaURLS["Kalinga App Developers"],
                    ],
                    portrait: true,
                    label: "Kalinga App handled by mothers to either schedule an appointment for donation or request breast milk",
                },
            ],
            video: {
                videoThumbNailURL: icons_1.kalingaURLS["Kalinga Video Thumbnail"],
                videoURL: icons_1.kalingaURLS["Kalinga Video Url"],
                label: "Video Presentation of Kalinga"
            },
            Technologies: {
                frontEnd: [
                    "JavaScript",
                    "React.js",
                    "React Native",
                    "Firebase Storage",
                    "Axios",
                    "Expo",
                ],
                backEnd: [
                    "TypeScript",
                    "Express.js",
                    "MongoDB",
                    "Postman",
                    "Node.js"
                ],
            },
            Members: [
                {
                    fullName: "Ma. Alisha Mae M. Arafol",
                    role: "UI/UX Designer & Front End Developer",
                    linkedInURL: icons_1.kalingaMembersURLS.Alisha.linkedIn,
                    profileImageURL: icons_1.kalingaMembersURLS.Alisha.profileImage
                },
                {
                    fullName: "Rogine Mae C. Cubelo",
                    role: "Group Leader & Full Stack Developer",
                    linkedInURL: icons_1.kalingaMembersURLS.Rogine.linkedIn,
                    profileImageURL: icons_1.kalingaMembersURLS.Rogine.profileImage
                },
                {
                    fullName: "Keith Cyrill A. Diaz",
                    role: "Full Stack Developer",
                    linkedInURL: icons_1.kalingaMembersURLS.Keith.linkedIn,
                    profileImageURL: icons_1.kalingaMembersURLS.Keith.profileImage
                },
                {
                    fullName: "Ma. Beverly Q. Somodio",
                    role: "Full Stack Developer",
                    linkedInURL: icons_1.kalingaMembersURLS.Beverly.linkedIn,
                    profileImageURL: icons_1.kalingaMembersURLS.Beverly.profileImage
                },
                {
                    fullName: "Jeannah Jean S. Padasas",
                    role: "UI/UX Designer & Quality Assurance",
                    linkedInURL: icons_1.kalingaMembersURLS.Jeannah.linkedIn,
                    profileImageURL: icons_1.kalingaMembersURLS.Jeannah.profileImage
                },
            ]
        };
        const count = await TeamProjects_1.TeamProjectsModel.countDocuments();
        if (count !== 0) {
            consoleLogsFunction_1.MessageLog.Ready("Team Projects data already exists");
            return;
        }
        await TeamProjects_1.TeamProjectsModel.insertMany(defaultTeamProject);
        consoleLogsFunction_1.MessageLog.Ready("Default Team Projects Inserted");
    }
    catch (error) {
        consoleLogsFunction_1.MessageLog.Error("Error inserting team projects data: " + error.message);
    }
};
exports.insertDefaultTeamProjects = insertDefaultTeamProjects;
//# sourceMappingURL=TeamProjects.InsertDefaultData.js.map