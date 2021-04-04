const validator = require("validator");
const getNotes = require("./notes");

// const msg = getNotes();

const mail = "shubham16cse06gmail.com";

console.log(validator.isEmail(mail));

// console.log(msg);
