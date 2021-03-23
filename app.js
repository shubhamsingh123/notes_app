const validator = require("validator");

const getNotes = require("./utils");

const sum = getNotes();

console.log(sum);

console.log(validator.isEmail("shubham.com"));

console.log(validator.isURL("https//heko.com"));
