const mongoose = require('mongoose')

const experienceSchema = new mongoose.Schema({
    jobRole: {
        type: String,
        require: true
    },
    companyName: {
        type: String,
        require: true
    },
    companyURL: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true
    },
    date: {
        type: String,
        require: true
    },
    discription: {
        type: String,
        require: true
    },
    cirtificateURL: {
        type: String,
        require: true
    }
})

const experiences = mongoose.model('experiences', experienceSchema)

module.exports = experiences