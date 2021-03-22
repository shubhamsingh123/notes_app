const fs = require("fs");

fs.writeFileSync("notes.txt", "Hello this is a new file created by me...");

fs.appendFileSync("notes.txt", " Heyyy it's an appending text ..");
