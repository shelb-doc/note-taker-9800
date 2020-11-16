// 1. Require Express
const express = require("express");
const path = require("path");
// 2. Create an instance of Express
const app = express();
// 3. Set the PORT
const PORT = process.env.PORT || 8080;

// Add middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Use /public as root folder
app.use(express.static(__dirname + '/public'));

// VIEW ROUTES
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});

// API ROUTES
app.get("/api/config", (req, res) => {
    res.json({
    success: true,
    });
});