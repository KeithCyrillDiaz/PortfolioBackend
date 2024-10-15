import express from 'express'
import Experience from './About/Experience'
import TechnicalSkills from './About/TechnicalSkills'
import Authentication from './Authentication'

const router = express.Router()

export default(): express.Router => {
    Authentication(router) // Apply authentication globally to /PortfolioBackend
    Experience(router)
    TechnicalSkills(router)
    return router
}