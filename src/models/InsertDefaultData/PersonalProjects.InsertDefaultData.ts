import { MessageLog } from "constants/consoleLogsFunction"
import { PersonalProjectTypes } from "models/Projects/PersonalProjects";



export const insertDefaultPersonalProject = async () => {
    try {
        MessageLog.Event("Checking Personal Project Default Data")
        // const PersonalProjectdefaultData: PersonalProjectTypes = {
        //     startingMonth: "October",
        //     endingMonth:  "October",
        //     MobileAndDesktop: false,
        //     MobileAppProject?: false,
        //     year: 2024,
        //     projectType:  "Portfolio Website",
        //     appName:  "Keith Diaz Portfolio",

        // }

        
    } catch (error) {
        MessageLog.Error("Error inserting technical skills data: " + error.message);
    }
}