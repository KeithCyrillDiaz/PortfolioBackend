import express from 'express'
import Experience from './Experience'

const router = express.Router()

export default(): express.Router => {
    Experience(router)
    return router
}