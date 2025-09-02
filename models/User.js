const { model, Schema } = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
});

userSchema.methods.validatePassword = function (password) {
    return bcrypt.compare(password, this.password)
}

const User = model("User", userSchema)
module.exports = User