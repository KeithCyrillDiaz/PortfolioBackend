import { fetchTeamProjects, storeTeamProjects } from '../../controllers/Projects/TeamProjects'
import express from 'express'
import { inputValidationTeamProject } from '../../middlewares/Projects/TeamProject'


export default(router: express.Router) => {
    router.get("/PortfolioBackend/fetchTeamProjects", fetchTeamProjects)
    router.post("/PortfolioBackend/storeTeamProjects", inputValidationTeamProject, storeTeamProjects)
}