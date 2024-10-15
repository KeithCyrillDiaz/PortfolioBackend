import express from 'express'
import Experience from './About/Experience'
import TechnicalSkills from './About/TechnicalSkills'

const router = express.Router()

export default(): express.Router => {
    Experience(router)
    TechnicalSkills(router)
    return router
}