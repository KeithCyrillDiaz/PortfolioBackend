import express from 'express'
import { getBackendAuthentication } from '../middlewares/Authentication'
import { fetchExperiences, storeExperiences } from '../controllers/Experience'
import { experienceInputValidation } from '../middlewares/Experience';

export default(router: express.Router) => {
    // Apply the middleware to all routes under the /PortfolioBackend path
    router.use("/PortfolioBackend", getBackendAuthentication);

    router.get("/PortfolioBackend/fetchExperiences",   fetchExperiences)
    router.post("/PortfolioBackend/storeExperiences", experienceInputValidation, storeExperiences)

}