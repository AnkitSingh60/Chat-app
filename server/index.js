const express = require("express");
const app = express();
const connect = require("./config/db.js")
app.use(express.json());
const userRoutes = require("./routes/userRoutes")


const PORT = process.env.PORT || 5000;
require("dotenv").config();

const cors = require("cors");
const { notFound, errorHandler } = require("./middleware/errorMiddleware.js");
app.use(cors());


app.get("/", (req, res) => {
    res.status(200).send("Server is running...")
})

app.use("/api/user",userRoutes)

//error handling....

app.use(notFound);
app.use(errorHandler);

//Just for checking if we got data from the database

// app.get("/api/chat", (req, res) => {
//     res.status(200).send(chats)
// })

// app.get("/api/chat/:id", (req, res) => {
//     const singleChat = chats.find((chat) => chat._id === req.params.id)
//     res.status(200).send(singleChat)
// })

// const userSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     age: { type: Number, required: true },
// },
//     {
//         timestamps: true,
//         versionKey: false
//     })

// const User = mongoose.model("user", userSchema)

// app.post("/users", async (req, res) => {
//     try {
//         const user = await User.create(req.body)
//         res.send(user)
//     } catch (error) {
//         console.log('error:', error.message)

//     }
// })

// app.get("/users", async (req, res) => {
//     const user = await User.find().lean().exec();
//     res.send(user)
// })



app.listen(PORT, async function () {
    try {
        await connect();
    } catch (error) {
        console.log('error:', error.message)
    }
    console.log(`listening on port ${PORT}...`);
})