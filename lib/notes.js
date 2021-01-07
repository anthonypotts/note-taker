// The lib directory holds the files that declare the functions that will be used throughout the application.
// With Modularization we can organize them in this one file so it's easier to read. Make sure to export!

// these are the dependencies
const fs = require("fs");
const path = require("path"); 

function findById(id, notesArray) {
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
}

function createNewNote(body, notesArray) {
    // our function's main code will go here!
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
}

function validateNote(note) {
    if (!note.title || typeof note.title !== 'string') {
      return false;
    }
    if (!note.text || typeof note.text !== 'string') {
      return false;
    }
    return true;
}

module.exports= { findById, createNewNote, validateNote };