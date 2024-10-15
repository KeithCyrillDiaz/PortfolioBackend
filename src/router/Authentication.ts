import express from 'express'
import { getBackendAuthentication } from '../middlewares/Authentication';


export default(router: express.Router) => {
    router.use("/PortfolioBackend", getBackendAuthentication);
}