import express from "express"
// static will show client which folder you can get access to
let configvViewEngine = (app)=>{
    app.use(express.static("./src/config"))
//EJS will allow you to write logic in HTML
    app.set("view engine","ejs");
// show the path you can get to view, every view file locate in src/views
    app.set("views","./src/views")
}

module.exports = configvViewEngine;