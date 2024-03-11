require("dotenv").config();
const express = require('express');
const cors = require("cors");
const app = express();
const port = 3000;
const CONNECTION_STRING = process.env.CONNECTION_STRING;
const mongoose = require("mongoose");
const User = require("./userModel");

const saveUserToDb = async (body) => {
    const { login, password } = body;
    const user = await User.findOne({ login, password });
    if (!user) return await User.create({ login, password });
    else return user;
}

app.use(express.json());
app.use(cors({ origin: "*" }));

app.post('/', async (req, res) => res.status(200).json({ user: await saveUserToDb(req.body)}));

app.listen(port, () => {
    mongoose.connect(CONNECTION_STRING)
        .then(console.log('🌿 MongoDB connected'))
        .catch(err => console.log(`❗ Mongoose error: ${err}`));
    console.log(`🚀 Server started on port ${port}`);
});