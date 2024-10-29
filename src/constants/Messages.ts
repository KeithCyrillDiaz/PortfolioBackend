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

export const checkFetchResult = (result: Document[], res: express.Response, dataName: string)=> {
    if(!result){
        MessageLog.Error(`Failed to fetch ${dataName.toLowerCase()} data`)
        res.status(500).json(ErrorMessages['Server Error'])
        return 
    }

    if(result.length === 0){
        MessageLog.Error(`No ${dataName.toLowerCase()} data found`)
        res.status(404).json({
            messages: {
                code: 1,
                message: `No ${dataName.toLowerCase()} data available`
            }
        })
        return 
    }

    MessageLog.Success(`Retrieve ${dataName.toLowerCase()} Data Successfully`)
    res.status(200).json({
        messages: {
            code: 0,
            message: `Retrieve ${dataName.toLowerCase()} Data Successfully`
        },
        result
    })
    return 
}


export const checkCreateResult = (result: any, res: express.Response,  dataName: string) => {
    if(!result) {
        MessageLog.Error("Failed to store data")
        res.status(500).json(ErrorMessages["Server Error"])
        return 
    }

    MessageLog.Success(`${dataName.toLowerCase()} data have been stored`)
    res.status(200).json({messages: {
            code: 0,
            message: `${dataName.toLowerCase()} data have been stored`
        },
        result
    })
    return
}