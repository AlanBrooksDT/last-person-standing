const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,   
    },
});

const User = mongoose.model("User", usersSchema);

module.exports = User;