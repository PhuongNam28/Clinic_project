let getHomePage = (req , res)=>{
    // render is a function from ejs aloow user to use the file
    return res.render('homepage.ejs')
}


// 1 object need key and value
module.exports = {
    getHomePage : getHomePage,
}