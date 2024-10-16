import { MessageLog } from '../../constants/consoleLogsFunction'
import { catchErrorLog, ErrorMessages } from '../../constants/Messages'
import { ValidMonth } from '../../constants/validation'
import express from 'express'


export const inputValidationTeamProject = async (req: express.Request, res: express.Response, next:express.NextFunction) => {
    try {  
        MessageLog.Event("Validating Input")
        const { 
                startingMonth,
                endingMonth,
                MobileAndDesktop,
                year,
                projectType,
                appName,
                projectDetails,
                introduction,
                images,
                video,
                Technologies,
                Members,

            } = req.body

        if(
            !startingMonth ||
            !ValidMonth.includes(startingMonth) ||
            !endingMonth ||
            !ValidMonth.includes(endingMonth) ||
            !MobileAndDesktop ||
            !year ||
            typeof year !== 'number' ||
            !projectType ||
            !appName ||
            !projectDetails ||
            !introduction ||
            !Array.isArray(images) ||
            !video ||
            !Technologies ||
            !Array.isArray(Members)

        ) {
            MessageLog.Error("Bad Request")
            res.status(400).json(ErrorMessages['Bad Request'])
            return
        }
            MessageLog.Ready("Inputs are Valid");

            next();

    } catch (error) {
        catchErrorLog(res, error)
        return
    }
}