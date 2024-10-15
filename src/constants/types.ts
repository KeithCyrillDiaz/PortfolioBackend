export type dateTypes = 
'January' | 'February' | 'March' | 'April' | 'May' | 'June'
| 'July' | 'August' | 'September' | 'October' | 'November' | 'December';

export type SkillLevel = "Intermediate" | "Beginner" | "Novice";

export type ExperienceTypes = {
    startingMonth: dateTypes;
    endingMonth: dateTypes;
    year: number;
    company: string;
    role: string;
    bulletsData: string[];
}

export type TechnicalSkillTypes = {
    title: string;
    url: string | undefined;
    Level: SkillLevel;
    Experience: string;
    Rating: number
}
\