import { MessageLog } from '../../constants/consoleLogsFunction'
import { catchErrorLog, ErrorMessages } from '../../constants/Messages'
import { ValidMonth } from '../../constants/validation'
import { NextFunction, Request, Response } from 'express'



export const inputValidationPersonalProjects = async (req: Request, res: Response, next:NextFunction) => {
    try {
        MessageLog.Event("Validating Input")
        const { startingMonth,
                endingMonth,
                MobileAndDesktop,
                year,
                projectType,
                appName,
                projectDetails,
                introduction,
                images,
                video, 
            } = req.body
            //MobileAppProject is not required so its okay not to check
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
                !video
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