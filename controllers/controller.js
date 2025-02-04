const per_detilsSchema = require('../models/per_detilsSchema')
const serviceSchema = require('../models/serviceSchema')
const admins = require('../models/userSchema')
const projects = require('../models/projectsShema')
const skills = require('../models/skillsSchema')
const experience = require('../models/experienceSchema')
const jwt = require('jsonwebtoken')

exports.getDetils = async (req, res) => {
    console.log('inside getDetils controller');
    try {
        const detils = await per_detilsSchema.find()
        res.status(200).json(detils)

    } catch (error) {
        res.status(401).json(`Request failed dew to ${error}`)
    }
}

exports.getService = async (req, res) => {
    console.log('inside getService controller');
    try {
        const service = await serviceSchema.find({})
        res.status(200).json(service)

    } catch (error) {
        res.status(401).json(`Request faild dew to ${error}`)
    }
}

exports.login = async (req, res) => {
    console.log('Inside login function');
    const { email, password } = req.body
    try {
        const existUser = await admins.findOne({ email, password })
        if (existUser) {
            const token = jwt.sign({ userId: existUser._id }, "supersecretekey12345")
            console.log(token);

            res.status(200).json({ existUser, token })
        }
        else {
            res.status(406).json('Incorrect email or password')
        }
    } catch (error) {

    }
}

exports.addProject = async (req, res) => {
    console.log('inside addProject controller');

    const { projectName, discription, technology, githubLink, hostLink } = req.body
    const projectImage = req.file.filename
    console.log(projectImage);

    try {
        const existingProject = await projects.findOne({ githubLink })

        if (existingProject) {
            res.status(406).json('Project alredy exist..')
        }
        else {
            const newProject = new projects({
                projectName, discription, technology, githubLink, hostLink, projectImage
            })
            await newProject.save()
            res.status(200).json(newProject)
        }
    } catch (error) {
        res.status(401).json(`request failed due to ${error}`)
    }

}

exports.getAllProject = async (req, res) => {
    console.log('inside getAllProject controller');

    try {
        const project = await projects.find()
        res.status(200).json(project)

    } catch (error) {
        res.status(406).json(`Faild dew to ${error}`)
    }
}

exports.getSkills = async (req, res) => {
    console.log('inside getSkills controller');
    try {
        const allSkills = await skills.find()
        res.status(200).json(allSkills)

    } catch (error) {
        res.status(406).json(`Request failed dew to ${error}`)
    }
}

exports.getExperience = async (req, res) => {
    console.log('inside getExperience controller');
    try {
        const allExperience = await experience.find()
        res.status(200).json(allExperience)

    } catch (error) {
        res.status(406).json(`Request failed dew to ${error}`)
    }
}