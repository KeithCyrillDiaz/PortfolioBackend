import express from 'express'
import Experience from './About/Experience'
import TechnicalSkills from './About/TechnicalSkills'
import Authentication from './Authentication'
import PersonalProjects from './Projects/PersonalProjects'
import TeamProject from './Projects/TeamProject'

const router = express.Router()

export default(): express.Router => {
    Authentication(router) // Apply authentication globally to /PortfolioBackend
    Experience(router)
    TechnicalSkills(router)
    PersonalProjects(router)
    TeamProject(router)
    return router
}