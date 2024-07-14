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
    return res.render('display-crud.ejs',{
        dataTable: data
    })
}
let getEditCRUD = async (req,res)=>{
    let userId = req.query.id;
    if(userId)
    {
        let userData = await CRUDService.getUserInfoById(userId)
        
        return res.render("edit-crud.ejs",{user: userData})
    }
    else{
        return res.send("User not found")
    }

    
}

let putCRUD = async(req,res)=>{
    let data = req.body;
    let allUsers = CRUDService.updateUserData(data)
    res.redirect('/get-crud')
    
}
let deleteCRUD = async(req,res)=>{
    let id = req.query.id;
    if(id){
        await CRUDService.deleteUserById(id)
        return res.send("delete user succeed")
    }
    else{
        return res.send("user not found")
    }
    
}

// 1 object need key and value
module.exports = {
    getHomePage : getHomePage,
    getCRUD : getCRUD,
    postCRUD : postCRUD,
    displayCRUD : displayCRUD,
    getEditCRUD:getEditCRUD,
    putCRUD:putCRUD,
    deleteCRUD:deleteCRUD
}