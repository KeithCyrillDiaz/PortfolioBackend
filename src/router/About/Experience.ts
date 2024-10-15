import express from 'express'
import { fetchExperiences, storeExperiences } from '../../controllers/About/Experience'
import { experienceInputValidation } from '../../middlewares/About/Experience';

export default(router: express.Router) => {
    router.get("/PortfolioBackend/fetchExperiences",   fetchExperiences)
    router.post("/PortfolioBackend/storeExperiences", experienceInputValidation, storeExperiences)

}