import { MessageLog } from "../../constants/consoleLogsFunction"
import { catchErrorLog, checkCreateResult, checkFetchResult } from "../../constants/Messages"
import { Request, Response } from "express"
import { createTeamProject, getAllTeamProject } from "../../models/Projects/TeamProjects"


export const fetchTeamProjects = async (req: Request, res: Response) => {
    try {
        MessageLog.Event("Fetching Team Projects");
        const result = await getAllTeamProject();
        checkFetchResult(result, res, "Team Projects");
        return

    } catch (error) {
        catchErrorLog(res, error)
        return
    }
}

export const storeTeamProjects = async (req: Request, res: Response) => {
    try {
        MessageLog.Event("Storing Team Projects");
        const data = req.body;
        const result = await createTeamProject(data);
        checkCreateResult(result, res, "Team Projects");
        return
        
    } catch (error) {
        catchErrorLog(res, error)
        return
    }
}