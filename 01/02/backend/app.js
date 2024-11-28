const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
    const correctData = {
        username: "tew",
        password : "123"
    }
    const { user, pass } = req.body;

    try {
        if (!user || !pass) {
            return res.status(400).json({ status: 'error', message: 'Username or password is missing' });
        }
        if (user === correctData.username && pass === correctData.password) {
            return res.status(200).json({ status: 'success' });
        }
        return res.status(200).json({ status: 'error'});
        //return res.status(401).json({ status: 'error'});
    } catch (err) {
        console.error("Error during login: ", err);
        return res.status(500).json({ error: "Failed to log in due to a server error" });
    }
});

const port = 3001;
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
