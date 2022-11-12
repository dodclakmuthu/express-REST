const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fname: {
    required: true,
    type: String
  },
  lname: {
    required: true,
    type: String
  },
  age: {
    required: true,
    type: Number
  }
})

module.exports = mongoose.model('UserModel', userSchema)