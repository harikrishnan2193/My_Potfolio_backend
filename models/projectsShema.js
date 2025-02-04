const mongoose = require('mongoose')

const projectsSchema = new mongoose.Schema({
    projectName: {
        type: String,
        require: true
    },
    discription: {
        type: String,
        require: true
    },
    technology: {
        type: String,
        require: true
    },
    githubLink: {
        type: String,
        require: true
    },
    hostLink: {
        type: String,
        require: true
    },
    projectImage: {
        type: String,
        require: true
    }
})

const projects = mongoose.model('projects', projectsSchema)

module.exports = projects