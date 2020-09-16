const { application } = require('express');
const express = require('express');
const app = express();

app.get("/utc-time", (req, res) => {
    var date = new Date();
    var UTC = date.toUTCString();
res.status(200).json({
    message: UTC
})
});

module.exports = app;