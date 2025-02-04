const mongoose = require('mongoose')

const per_detilsSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    whatsapp: {
        type: String,
        require: true
    },
    telegram_id: {
        type: String,
        require: true
    },
    linkedin_id: {
        type: String,
        require: true
    },
    github_id: {
        type: String,
        require: true
    }
})

const personal_details = mongoose.model('personal_details', per_detilsSchema ,'personal_details')

module.exports = personal_details