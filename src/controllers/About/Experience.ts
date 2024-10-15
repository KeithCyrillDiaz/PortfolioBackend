import { ExperienceTypes } from 'constants/types'
import { MessageLog } from '../../constants/consoleLogsFunction'
import { ErrorMessages } from '../../constants/Messages'
import express from 'express'
import { createExperience } from '../../models/Experiences'


export const fetchExperiences = async(req: express.Request, res: express.Response) => {
    try {
        
        MessageLog.Event("Fetching Experiences")

    } catch (error) {
        MessageLog.Error("Internal Server Error")
        res.status(500).json(ErrorMessages["Server Error"])
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
        MessageLog.Error("Internal Server Error")
        res.status(500).json(ErrorMessages["Server Error"])
        return 
    }
}