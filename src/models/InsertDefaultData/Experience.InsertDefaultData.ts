import { MessageLog } from "../../constants/consoleLogsFunction"
import { ExperienceModel } from "../../models/About/Experiences";
export type dateTypes = 
'January' | 'February' | 'March' | 'April' | 'May' | 'June'
| 'July' | 'August' | 'September' | 'October' | 'November' | 'December';

export type ExperienceTypes = {
    startingMonth: dateTypes;
    endingMonth: dateTypes;
    year: number;
    company: string;
    role: string;
    bulletsData: string[];
}


export const insertDefaultExperience = async () => {
    try {
        MessageLog.Event("Checking experience Default Data")

        const defaultExperienceData: ExperienceTypes = {
            startingMonth: "March",
            endingMonth: "June",
            year: 2024,
            company: "Service Economy Applications INC – Alabang, Muntinlupa",
            role: "Software Developer Intern",
            bulletsData: [
                "Developed and maintained backend services using Node.js and Express with TypeScript, implementing RESTful APIs, token-based authentication, and middleware for enhanced security and functionality",
                "Utilized React with TypeScript, integrating React Hooks and custom components to build dynamic and responsive web applications"
            ],
        }
        
        const count = await ExperienceModel.countDocuments();
        if(count !== 0) {
            MessageLog.Ready("Experience data already exists");
            return
        }

        await ExperienceModel.insertMany(defaultExperienceData)
        MessageLog.Ready("Default Experience Data Inserted");

    } catch (error) {
        MessageLog.Error("Error inserting experience data: " + error.message);
    }
}