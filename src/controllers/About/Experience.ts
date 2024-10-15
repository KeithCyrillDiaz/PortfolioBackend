import { ExperienceTypes } from 'constants/types'
import { MessageLog } from '../../constants/consoleLogsFunction'
import { catchErrorLog, ErrorMessages, validResultForFetch } from '../../constants/Messages'
import express from 'express'
import { createExperience, getExperiences } from '../../models/About/Experiences'


export const fetchExperiences = async(req: express.Request, res: express.Response) => {
    try {
        
        MessageLog.Event("Fetching Experiences")
        const result = await getExperiences()
        if(!validResultForFetch(result, res, "Experiences")){
            return
        }

        MessageLog.Success("Retrieve Experiences Data Successfully")
        res.status(200).json({
            messages: {
                code: 0,
                message: "Retrieve Experiences Data Successfully"
            },
            result
        })

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
        if(!result) {
            MessageLog.Error("Failed to store data")
            res.status(500).json(ErrorMessages["Server Error"])
            return 
        }

        MessageLog.Success("Experience data have been stored")
        res.status(200).json({messages: {
                code: 0,
                message: "Experience data have been stored"
            },
            result
        })

    } catch (error) {
        catchErrorLog(res, error)
        return 
    }
}