import { MessageLog } from '../constants/consoleLogsFunction'
import { ErrorMessages } from '../constants/Messages'
import express from 'express'


export const getBackendAuthentication = async (
    req: express.Request, 
    res: express.Response, 
    next: express.NextFunction
) => {

    try {
        
        MessageLog.Event("Checking for Authentication")

        if(!req.headers.authorization || !req.headers.authorization.startsWith("Bearer ")){
            console.log("Error - ".red + "Unauthorized User")
            res.status(401).json(ErrorMessages["Unauthorized"])
            return 
        }

        const userToken = req.headers.authorization.split(" ")[1]

        const token = process.env.BACKEND_TOKEN;
        if(userToken !== token){
            console.log("Error - ".red + "Unauthorized User")
            res.status(401).json(ErrorMessages["Unauthorized"])
            return
        }

        MessageLog.Ready("User is Authorized")
        next();

    } catch (error) {
        console.log("Internal Server Error:", error)
        res.status(500).json(ErrorMessages["Server Error"])
        return
    }
}