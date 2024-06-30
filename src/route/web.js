import express from "express"
// homeController, u should remember it is an object from homeController.js
import homeController from "../controllers/homeController"

let router = express.Router()
// 1 server = 1 app => you need to pass your app into your server
let initWebRoutes = (app) =>{
    router.get('/',homeController.getHomePage)
// Begin with /, and it have to use all routes that we declare
    return app.use("/",router)
}

module.exports = initWebRoutes                                                                                                          