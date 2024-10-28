import { getAllTeamProject, TeamProjectTypes } from "../../models/Projects/TeamProjects";
import { MessageLog } from "../../constants/consoleLogsFunction";
import { TechnicalSkillsIcons } from "../../constants/icons";
import { TechnicalSkillsModel, TechnicalSkillsTypes } from "../../models/About/TechnicalSkills";


const dateToInteger: { [key: string]: number } = {
    "January": 1,
    "February": 2,
    "March": 3,
    "April": 4,
    "May": 5,
    "June": 6,
    "July": 7,
    "August": 8,
    "September": 9,
    "October": 10,
    "November": 11,
    "December": 12
};

const getLevel = (value: number): string => {
    if (value <= 1) {
        return "Novice";
    } else if (value >= 2 && value <= 3) {
        return "Beginner";
    } else if (value >= 4 && value <= 6) {
        return "Intermediate";
    } else if (value >= 7 && value <= 12) {
        return "Advanced";
    } else {
        return "Expert"; 
    }
};

export const insertDefaultTechnicalSkills = async () => {

    MessageLog.Event("Checking Technical Skills Default Data")
    const checkIcons = TechnicalSkillsIcons["TypeScript"]
    if(!checkIcons) {
        MessageLog.Error("Icon images are not loaded")
    }

    const teamProjectsData = await getAllTeamProject()
    if(teamProjectsData.length === 0){
        MessageLog.Error("Team Projects Data not found")
        return
    }

    const calculateTechStats = (projects: TeamProjectTypes[]) => {
        const techProjects: Record<string, string[]> = {};
        const techDurations: Record<string, number> = {};
        const techs: Set<string> = new Set();
    
        projects.forEach((project) => {
            const allTechs = [...project.Technologies.frontEnd, ...project.Technologies.backEnd];
            const {startingMonth, endingMonth, appName} = project
            allTechs.forEach(tech => {
                techProjects[tech] = techProjects[tech] || []; 
                techProjects[tech].push(appName);
                techDurations[tech] = (techDurations[tech] || 0) + (dateToInteger[endingMonth] - dateToInteger[startingMonth]) 
                techs.add(tech)
            });
        });

        const allTechnologies = Array.from(techs);

        return { techProjects, techDurations, allTechnologies};
    };  

    const { techProjects, techDurations, allTechnologies} = calculateTechStats(teamProjectsData as TeamProjectTypes[]);

    const defaultTechnicalSkills:TechnicalSkillsTypes[] = allTechnologies.map(technology => {
        const duration = techDurations[technology] || 0;
        const iconURL = TechnicalSkillsIcons[technology === "Firebase Storage" ? "Firebase" : technology];
        if(!iconURL) {
            MessageLog.Error(`Failed to load ${technology} icon`)
            return
        }
        return{
            title: technology,
            url: iconURL,
            Level: getLevel(techDurations[technology]),
            Experience: `${duration} month${duration !== 1 ? 's' : ''}`,
            projects: techProjects[technology]
        } 
})

    const count = await TechnicalSkillsModel.countDocuments();
    if(count !== 0) {
        MessageLog.Ready("Technical Skills data already exists");
        return
    }

    try {
        await TechnicalSkillsModel.insertMany(defaultTechnicalSkills);
        MessageLog.Ready("Default Technical Skills Inserted");
    } catch (error) {
        MessageLog.Error("Error inserting technical skills data: " + error.message);
    }
        
}