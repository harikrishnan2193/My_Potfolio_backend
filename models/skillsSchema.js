const mongoose = require('mongoose')

const skillsSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    percentage: {
        type: String,
        require: true
    },
    icon: {
        type: String,
        require: true
    }
})

const skills = mongoose.model('skills', skillsSchema)

module.exports = skills