const fs = require("fs");
const appendFileSync = require("fs");

fs.writeFileSync("notes.txt", "My name is shubham.");
fs.appendFileSync("notes.txt", " This is append file sync.");
