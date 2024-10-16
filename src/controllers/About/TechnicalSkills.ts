import express from 'express'
import { MessageLog } from '../../constants/consoleLogsFunction'
import { catchErrorLog, checkCreateResult, checkFetchResult} from '../../constants/Messages'
import { createTechnicalSkills, getTechnicalSkills } from '../../models/About/TechnicalSkills'
import { TechnicalSkillTypes } from '../../constants/types'


export const fetchTechnicalSkills = async (req: express.Request, res: express.Response) => {
    try {
        MessageLog.Event("Fetching Technical Skills")
        const result = await getTechnicalSkills()
        checkFetchResult(result, res, "Technical Skills")

    } catch (error) {
        catchErrorLog(res, error)
        return 
    }
}

export const storeTechnicalSkills = async (req: express.Request, res: express.Response) => {
    try {
        MessageLog.Event("storing Technical Skills")

        const data: TechnicalSkillTypes[] = req.body

        const result = await createTechnicalSkills(data)
        checkCreateResult(result, res, "Technical Skills")
        return

    } catch (error) {
        catchErrorLog(res, error)
        return 
    }
}