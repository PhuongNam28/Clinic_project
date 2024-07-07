import db from '../models/index'
import CRUDService from '../services/CRUDService'
let getHomePage = async (req , res)=>{
    // render is a function from ejs aloow user to use the file
    try {
        let data = await db.User.findAll();
        return res.render('homepage.ejs',{
            data: JSON.stringify(data)
        })
    } catch (error) {
        console.log(error);
    }
    
}
let getCRUD = (req , res)=>{
    return res.render('crud.ejs')
}


let postCRUD = async (req , res)=>{
    let message = await CRUDService.createNewUser(req.body)
    console.log(message)
    return res.send('post crud from server')
}
let displayCRUD = async (req , res)=>{
    let data = await CRUDService.getAllUser()
    console.log(data)
    return res.render('display-crud.ejs',{
        dataTable: data
    })
}

// 1 object need key and value
module.exports = {
    getHomePage : getHomePage,
    getCRUD : getCRUD,
    postCRUD : postCRUD,
    displayCRUD : displayCRUD,
}