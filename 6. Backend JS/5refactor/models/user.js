const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: true, 
      },
      lastName: {
        type: String,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      gender: {
        type: String,
      },
      jobTitle: {
        type: String,
      }
  }, { timestamps: true })

  //model
const User = mongoose.model("user" , userSchema) // user - collection name

module.exports = User;