const mongoose = require('mongoose')

// Schema + model
const dogSchema = new mongoose.Schema({
    name: String,
    age: Number,
    color: String
})

const Dog = mongoose.model('dog', dogSchema)

module.exports = Dog