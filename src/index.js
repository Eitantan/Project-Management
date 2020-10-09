const fs = require("fs"), projects = [];

const pm = {};
pm.addItem = function(item){projects.push(item)}
pm.read = function(type){if(type=="return"({return projects}else if(type=="console"){console.log(projects}else{throw new Error("No type specified.")}}
pm.delete = function(index){delete projects[index]}
