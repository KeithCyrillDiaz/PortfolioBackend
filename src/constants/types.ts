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


export type imageType = {
    imagesURL: string[];
    label: string;
    portrait?: boolean
}

export type videoType = {
    videoURL: string;
    label: string;
    videoThumbNailURL: string
}

export type ProjectTypes = 'Thesis Project' | 'Personal Project'

export type PersonalProjectsTypes = {
    startingMonth: dateTypes;
    endingMonth: dateTypes;
    MobileAndDesktop: boolean;
    MobileAppProject?: boolean;
    year: number
    projectType: ProjectTypes;
    appName: string;
    projectDetails: string;
    introduction: string;
    images: imageType[];
    video: videoType;
}

export type TeamProjectsTypes = {
    startingMonth: dateTypes;
    endingMonth: dateTypes;
    MobileAndDesktop: boolean;
    MobileAppProject?: boolean;
    year: number
    projectType: ProjectTypes;
    appName: string;
    projectDetails: string;
    introduction: string;
    images: imageType[];
    video: videoType;
    Technologies: TechnologiesType;
    Members: MembersType[];
    
}


export type TechnologiesType = {
    frontEnd: string[];
    backEnd: string[];
}

export type MembersType = {
    profileImageURL: string | undefined;
    linkedInURL: string | undefined;
    role: string;
    fullName: string;
}
