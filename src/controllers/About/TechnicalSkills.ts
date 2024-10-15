import express from 'express'
import { MessageLog } from '../../constants/consoleLogsFunction'
import { catchErrorLog, ErrorMessages, validResultForFetch } from '../../constants/Messages'
import { createTechnicalSkills, getTechnicalSkills } from '../../models/About/TechnicalSkills'
import { TechnicalSkillTypes } from '../../constants/types'


export const fetchTechnicalSkills = async (req: express.Request, res: express.Response) => {
    try {
        MessageLog.Event("Fetching Technical Skills")
        const result = await getTechnicalSkills()
        if(!validResultForFetch(result, res, "Technical Skills")){
            return
        }

        MessageLog.Success("Retrieve Technical Skills Data Successfully")
        res.status(200).json({
            messages: {
                code: 0,
                message: "Retrieve Technical Skills Data Successfully"
            },
            result
        })

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
        if(!result) {
            MessageLog.Error("Failed to store data")
            res.status(500).json(ErrorMessages["Server Error"])
            return 
        }

        MessageLog.Success("Technical skills data have been stored")
        res.status(200).json({messages: {
                code: 0,
                message: "Technical skills data have been stored"
            },
            result
        })


    } catch (error) {
        catchErrorLog(res, error)
        return 
    }
}