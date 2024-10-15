import express, {Response} from 'express'

import { MessageLog } from "./consoleLogsFunction"
import { Document } from 'mongoose'


export const ErrorMessages = {
    "Server Error": {
        messages: {
            code: 1,
            message: "Internal Server Error"
        }
    },
    "Unauthorized": {
        messages: {
            code: 1,
            message: "Unauthorized User"
        }
    },
    "Bad Request": {
        messages: {
            code: 1,
            message: "Bad Request"
        }
    }
}


export const catchErrorLog = (res: Response, error: string) => {
    MessageLog.Error("Internal Server Error: " + error)
    res.status(500).json(ErrorMessages["Server Error"])
    return
}

export const validResultForFetch = (result: Document[], res: express.Response, dataName: string): boolean => {
    if(!result){
        MessageLog.Error(`Failed to fetch ${dataName.toLowerCase()} data`)
        res.status(500).json(ErrorMessages['Server Error'])
        return false
    }

    if(result.length === 0){
        MessageLog.Error(`No ${dataName.toLowerCase()} data found`)
        res.status(404).json({
            messages: {
                code: 1,
                message: `No ${dataName.toLowerCase()} data available`
            }
        })
        return false
    }

    return true
}
