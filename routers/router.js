const express = require('express')
const router = new express.Router()
const controller = require('../controllers/controller')
const jwtMiddleWare = require('../middleware/jwtMiddleware')
const multerConfig = require('../middleware/multterMiddleware')

router.get('/portfolio/detils', controller.getDetils)

router.get('/portfolio/services', controller.getService)

router.get('/portfolio/get', controller.getAllProject)

router.get('/portfolio/getSkills', controller.getSkills)

router.get('/portfolio/getExperiences', controller.getExperience)

router.post('/portfolio/login', controller.login)

router.post('/portfolio/add', jwtMiddleWare, multerConfig.single(`projectImage`), controller.addProject)

module.exports = router