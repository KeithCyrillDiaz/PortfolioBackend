import express from 'express'
import { getBackendAuthentication } from '../../middlewares/Authentication';
import { fetchTechnicalSkills, storeTechnicalSkills } from '../../controllers/About/TechnicalSkills';
import { inputValidationTechnicalSkills } from '../../middlewares/About/TechnicalSkills';



export default(router: express.Router) => {
    router.use("/PortfolioBackend", getBackendAuthentication);

    router.get("/PortfolioBackend/fetchTechnicalSkills", fetchTechnicalSkills)
    router.post("/PortfolioBackend/storeTechnicalSkills", inputValidationTechnicalSkills, storeTechnicalSkills)
    
}