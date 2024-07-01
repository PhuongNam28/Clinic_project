import db from '../models/index'
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


// 1 object need key and value
module.exports = {
    getHomePage : getHomePage,
}