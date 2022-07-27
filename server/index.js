const express = require("express");
const mongoose = require("mongoose");
const app = express();
const connect = require("./config/db.js")
app.use(express.json());


const PORT = process.env.PORT || 5000;
require("dotenv").config();

const cors = require("cors");
app.use(cors());


app.get("/", (req, res) => {
    res.status(200).send("Server is running...")
    // console.log("Server is running")
})

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
},
{
    timestamps:true,
    versionKey:false
})

const User = mongoose.model("user", userSchema)

app.post("/users", async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.send(user)
    } catch (error) {
    console.log('error:', error.message)

    }
})

app.get("/users", async (req, res) => {
    const user = await User.find().lean().exec();
    res.send(user)
})



app.listen(PORT, async function () {
    try {
        await connect();
    } catch (error) {
        console.log('error:', error.message)
    }
    console.log(`listening on port ${PORT}...`);
})