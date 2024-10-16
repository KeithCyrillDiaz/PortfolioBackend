import express from 'express'
import { fetchTechnicalSkills, storeTechnicalSkills } from '../../controllers/About/TechnicalSkills';
import { inputValidationTechnicalSkills } from '../../middlewares/About/TechnicalSkills';



export default(router: express.Router) => {
    router.get("/PortfolioBackend/fetchTechnicalSkills", fetchTechnicalSkills)
    router.post("/PortfolioBackend/storeTechnicalSkills", inputValidationTechnicalSkills, storeTechnicalSkills)
    
}