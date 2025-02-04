const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({
    servicesName: {
        type: String,
        require: true
    },
    servicesDisc: {
        type: String,
        require: true
    }
})

const my_services = mongoose.model('my_services', serviceSchema, 'my_services')

module.exports = my_services