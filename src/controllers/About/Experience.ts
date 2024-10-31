import { ExperienceTypes } from 'constants/types'
import { MessageLog } from '../../constants/consoleLogsFunction'
import { catchErrorLog, checkCreateResult, checkFetchResult, ErrorMessages,  } from '../../constants/Messages'
import express from 'express'
import { createExperience, getExperiences } from '../../models/About/Experiences'


export const fetchExperiences = async(req: express.Request, res: express.Response) => {
    try {
        
        MessageLog.Event("Fetching Experiences")
        const result = await getExperiences()
        checkFetchResult(result, res, "Fetch Experiences")

    } catch (error) {
        catchErrorLog(res, error)
        return 
    }
}


export const storeExperiences = async (req:express.Request, res:express.Response) => {
    try {
        
        MessageLog.Event("Storing Experiences")
        
        const data: ExperienceTypes = {...req.body}
        const result = await createExperience(data)
        checkCreateResult(result, res, "Experience")

    } catch (error) {
        catchErrorLog(res, error)
        return 
    }
}