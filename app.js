const fs = require("fs");

const name = {
  firstName: "Shubham",
  lastName: "Singh",
};

const newName = { ...name, age: 24, hometown: "Dhanbad" };

const jsonObject = JSON.stringify(newName);

fs.writeFileSync("notes.txt", jsonObject);
