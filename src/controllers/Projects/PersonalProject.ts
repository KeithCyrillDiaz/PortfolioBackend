import {Request, Response} from 'express'
import { MessageLog } from '../../constants/consoleLogsFunction'
import { catchErrorLog, checkCreateResult, checkFetchResult } from '../../constants/Messages'
import { createPersonalProjects, getAllPersonalProjects } from '../../models/Projects/PersonalProjects'


export const fetchPersonalProjects = async (req: Request, res: Response) => {
    try {
            MessageLog.Event("Fetching personal projects data")
            const result = await getAllPersonalProjects()
            checkFetchResult(result, res, "Personal Projects")
            return
        
    } catch (error) {
        catchErrorLog(res, error)
        return
    }
}


export const storePersonalProjects = async (req: Request, res: Response) => {
    try {
            MessageLog.Event("Storing personal projects data")
            const data = req.body
            const result = await createPersonalProjects(data)
            checkCreateResult(result, res, "Personal Projects")
            return
        
    } catch (error) {
        catchErrorLog(res, error)
        return
    }
}