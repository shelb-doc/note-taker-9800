// 1. Require Express
const express = require("express");
const path = require("path");
const fs = require ('fs');

// Create an instance of Express
const app = express();

// Set the PORT
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

app.get("/api/notes", function (req, res) {
    return res.json(JSON.parse(fs.readFileSync("./db/db.json")));
});


// POST ROUTES

app.post("/api/notes", function (req, res) {
    
    let newNoteRequest = req.body;
    console.log("New request: ", newNoteRequest);

    notesArray.push(newNoteRequest);
    // Set id property of newNoteRequest to its index in notesArray
    newNoteRequest.id = notesArray.indexOf(newNoteRequest);

    fs.writeFileSync("./db/db.json", JSON.stringify(notesArray));
    
    res.json({
        isError: false,
        message: "Note successfully saved",
        port: PORT,
        status: 200,
        success: true
    });

});

// DELETE ROUTES

app.delete("/api/notes/:id", function (req, res) {
    let id = parseInt(req.params.id);
    let removeItemArray = notesArray.filter(item => item.id != id);

    removeItemArray.forEach(element => element.id = removeItemArray.indexOf(element));

    fs.writeFileSync("./db/db.json", JSON.stringify(removeItemArray));

    res.json({
        isError: false,
        message: "Note successfully deleted",
        port: PORT,
        status: 200,
        success: true
    });
});

// Redirect to root if no routes match
app.get("*", function (req, res) {
    res.redirect('/');
});