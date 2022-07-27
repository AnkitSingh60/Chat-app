const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: { type: "String", required: true },
        email: { type: "String", unique: true, required: true },
        password: { type: "String", required: true },
        pic: {
            type: "String",
            required: true,
            default: "https://cdn-icons-png.flaticon.com/512/147/147144.png"
        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: false,
        },
    },
    { timestaps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;