import { fetchAllPersonalProjects, storePersonalProjects } from '../../controllers/Projects/PersonalProject';
import express from 'express'
import { inputValidationPersonalProjects } from '../../middlewares/Projects/PersonalProjects';


export default(router: express.Router) => {
    router.get("/PortfolioBackend/fetchAllPersonalProjects", fetchAllPersonalProjects)
    router.post("/PortfolioBackend/storePersonalProjects", inputValidationPersonalProjects, storePersonalProjects)
}