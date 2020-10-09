const fs = require("fs");
const projects = [];

const projectList = {};
projectList.addItem = function(item){projects.push(item)}
projectList.read = function(type){if(type=="return"({return projects}else if(type=="console"){console.log(projects}else{throw new Error("No type specified.")}}
projectList.delete = function(index){delete projects[index]}
projectList.readFileForArray = function(filename, encoding="utf-8"){}
