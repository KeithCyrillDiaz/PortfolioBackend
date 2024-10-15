import express, {Response} from 'express'

import { MessageLog } from "./consoleLogsFunction"


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


