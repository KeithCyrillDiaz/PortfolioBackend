import { kalingaMembersURLS, kalingaURLS } from "../../constants/icons";
import { MessageLog } from "../../constants/consoleLogsFunction";
import { TeamProjectsModel, TeamProjectTypes } from "../../models/Projects/TeamProjects";

export const insertDefaultTeamProjects = async () => {
    try {
        MessageLog.Event("Checking Team Project Default Data")
        const defaultTeamProject: TeamProjectTypes = 
            {
                startingMonth: "October",
                MobileAndDesktop: true,
                endingMonth: "June",
                year: 2024,
                projectType: "Thesis Project",
                appName: "Kalinga App",
                projectDetails:"Empowering Breastmilk Donation Banks Through Mobile Application Management Integration",
                introduction: "The Kalinga App, created in collaboration with the Quezon City Human Milk Bank (QCHMB), aims to streamline the process of donating and requesting breast milk, enhancing the awareness and utilization of Milk Banks across the country (Cubelo et al., 2024).",
                images: [
                    {
                        imagesURL: [
                            kalingaURLS["Kalinga Admin Home"],
                            kalingaURLS["Kalinga Admin Dashboard"]
                        ],
                        label:"Kalinga Admin Website which will be handled by Quezon City Human Milk Bank",
                    },
                    {
                        imagesURL: [

                            kalingaURLS["Kalinga App Log In"],
                            kalingaURLS["Kalinga App Donor Dashboard"],
                            kalingaURLS["Kalinga App Requestor Dashboard"],
                            kalingaURLS["Kalinga App Developers"],
                        ],
                        portrait: true,
                        label:"Kalinga App handled by mothers to either schedule an appointment for donation or request breast milk",
                    },

                ],
                video:
                    {
                        videoThumbNailURL: kalingaURLS["Kalinga Video Thumbnail"],
                        videoURL: kalingaURLS["Kalinga Video Url"],
                        label: "Video Presentation of Kalinga"
                    },
                Technologies: 
                    {
                        frontEnd:[
                            "JavaScript",
                            "React.js",
                            "React Native",
                            "Firebase Storage",
                            "Axios",
                            "Expo",

                        ],
                        backEnd:[
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
                            linkedInURL: kalingaMembersURLS.Alisha.linkedIn,
                            profileImageURL: kalingaMembersURLS.Alisha.profileImage
                        },
                        {
                            fullName: "Rogine Mae C. Cubelo",
                            role: "Group Leader & Full Stack Developer",
                            linkedInURL: kalingaMembersURLS.Rogine.linkedIn,
                            profileImageURL: kalingaMembersURLS.Rogine.profileImage
                        
                        },
                        {
                        
                            fullName: "Keith Cyrill A. Diaz",
                            role: "Full Stack Developer",
                            linkedInURL: kalingaMembersURLS.Keith.linkedIn,
                            profileImageURL: kalingaMembersURLS.Keith.profileImage
                        },
                        {
                            fullName: "Ma. Beverly Q. Somodio",
                            role: "Full Stack Developer",
                            linkedInURL: kalingaMembersURLS.Beverly.linkedIn,
                            profileImageURL: kalingaMembersURLS.Beverly.profileImage
                        },
                    
                        {
                            fullName: "Jeannah Jean S. Padasas",
                            role: "UI/UX Designer & Quality Assurance",
                            linkedInURL: kalingaMembersURLS.Jeannah.linkedIn,
                            profileImageURL: kalingaMembersURLS.Jeannah.profileImage
                        },
                    

                    ]
                
            }
    
        const count = await TeamProjectsModel.countDocuments()
        if(count !== 0) {
            MessageLog.Ready("Team Projects data already exists");
            return
        }


        await TeamProjectsModel.insertMany(defaultTeamProject);

        MessageLog.Ready("Default Team Projects Inserted");

    } catch (error) {
        MessageLog.Error("Error inserting team projects data: " + error.message);
    }
    
}