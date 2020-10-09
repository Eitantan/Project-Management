const fs = require("fs"), projects = [];

const pm = {};
pm.addItem = function(item){projects.push(item)}
pm.read = function(type){if(type=="return"({return projects}else if(type=="console"){console.log(projects}else{throw new Error("No type specified.")}}
pm.delete = function(index){delete projects[index]}
// Don't know how to do this. Maybe next minor version.
// pm.readFileForArray = function(filename, encoding="utf-8"){fs.readFile(filename + ".js", encoding, (err,data){if (err){ throw err } else return null})}
pm.createPublicList = function(){}
