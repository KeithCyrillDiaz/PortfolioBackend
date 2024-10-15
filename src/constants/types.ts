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