import dotenv from 'dotenv'
dotenv.config()

export const TechnicalSkillsIcons:{[key: string]: string} = {
    "TypeScript": process.env.TYPESCRIPT_IMG,
    "HTML": process.env.HTML_IMG,
    "Tailwind": process.env.TAILWIND_IMG,
    "React.js": process.env.REACT_IMG,
    "Next.js": process.env.NEXT_IMG,
    "JavaScript": process.env.JAVASCRIPT_IMG,
    "Node.js": process.env.NODE_IMG,
    "Express.js": process.env.EXPRESS_IMG,
    "React Native": process.env.NATIVE_IMG,
    "Axios": process.env.AXIOS_IMG,
    "Expo": process.env.EXPO_IMG,
    "MongoDB": process.env.MONGO_DB_IMG,
    "Postman": process.env.POSTMAN_IMG,
    "Firebase": process.env.FIREBASE_IMG,
}

export const kalingaURLS = {
    "Kalinga Admin Home": process.env.KALINGA_ADMIN_HOMEPAGE,
    "Kalinga Admin Dashboard": process.env.KALINGA_ADMIN__DASHBOARD,

    "Kalinga App Log In": process.env.KALINGA_APP_LOG_IN,
    "Kalinga App Donor Dashboard": process.env.KALINGA_APP_DONOR_DASHBOARD,
    "Kalinga App Requestor Dashboard": process.env.KALINGA_APP_REQUESTOR_DASHBOARD,
    "Kalinga App Developers": process.env.KALINGA_APP_DEVELOPERS,

    "Kalinga Video Url": process.env.KALINGA_VIDEO_URL,
    "Kalinga Video Thumbnail": process.env.KALINGA_VIDEO_THUMBNAIL,
}   

export const kalingaMembersURLS = {
    Alisha: {
        profileImage: process.env.LINKED_IN_ALISHA,
        linkedIn: process.env.DP_ALISHA,
    },
    Rogine: {
        profileImage: process.env.LINKED_IN_CUBELO,
        linkedIn: process.env.DP_CUBELO,
    },
    Keith: {
        profileImage: process.env.LINKED_IN_KEITH,
        linkedIn: process.env.DP_KEITH,
    },
    Jeannah: {
        profileImage: process.env.LINKED_IN_JEANNAH,
        linkedIn: process.env.DP_JEANNAH,
    },
    Beverly: {
        profileImage: process.env.LINKED_IN_BEVERLY,
        linkedIn: process.env.DP_BEVERLY,
    },
}