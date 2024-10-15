import { MessageLog } from '../constants/consoleLogsFunction'
import { ErrorMessages } from '../constants/Messages'
import express from 'express'

export const experienceInputValidation = async (
    req: express.Request, res: express.Response, next: express.NextFunction) => {
        try {
            MessageLog.Event("Validating Input")
            const { startingMonth, endingMonth, year, company, role, bulletsData } = req.body;
            if(
                !startingMonth || 
                !endingMonth || 
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
            MessageLog.Error("Internal Server Error")
            res.status(500).json(ErrorMessages["Server Error"])
            return 
        }
    }