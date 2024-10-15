import {Request, Response, NextFunction} from 'express'

import { MessageLog } from '../../constants/consoleLogsFunction';
import { catchErrorLog, ErrorMessages } from '../../constants/Messages'



export type SkillLevel = "Intermediate" | "Beginner" | "Novice";
const allowedSkillLevel: SkillLevel[] = ["Intermediate", "Beginner", "Novice"]

export const inputValidationTechnicalSkills = async (req:Request, res: Response, next: NextFunction) => {
    try {
        
            MessageLog.Event("Validating Inputs")
        const { title, url, Level, Experience, Rating,} = req.body

        if( 
            !title || 
            !url || 
            !allowedSkillLevel.includes(Level) || 
            !Level || 
            !Experience || 
            !Rating || 
            typeof Rating !== "number"
        ) {
            MessageLog.Error("Bad Request")
            res.status(400).json(ErrorMessages['Bad Request'])
            return
        }
            MessageLog.Ready("Inputs are Valid")

        next();
    } catch (error) {
        catchErrorLog(res, error)
        return
    }
}