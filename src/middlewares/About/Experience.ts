import express from 'express'

import { MessageLog } from '../../constants/consoleLogsFunction'
import { catchErrorLog, ErrorMessages } from '../../constants/Messages'
import { dateTypes } from '../../constants/types'
import { ValidMonth } from '../../constants/validation'

export const experienceInputValidation = async (
    req: express.Request, res: express.Response, next: express.NextFunction) => {
        try {
            MessageLog.Event("Validating Inputs")
            const { startingMonth, endingMonth, year, company, role, bulletsData } = req.body;
            if(
                !startingMonth || 
                !ValidMonth.includes(startingMonth) ||
                !endingMonth || 
                !ValidMonth.includes(endingMonth) ||
                typeof year !== 'number' || 
                !company || 
                !role || 
                !Array.isArray(bulletsData)
            ){
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