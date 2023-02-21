const mongoose = require("mongoose");

const validator = require("validator");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please provide your name"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "please provide your email"],
        unique: true,
        validate: [validator.isEmail, "provide your valid email"],
        trim: true,
        lowercase: true,
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
}, {
    timestamps: true
});


const User = mongoose.model("User", userSchema)


module.exports = User

