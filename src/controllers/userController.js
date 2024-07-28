import userService from "../services/userService";
let handleLogin = async (req, res) => {
  //check email của người dùng có tồn tại hay không
  // so sánh password của người dùng.
  // return userInfo
  // trả 1 access toker: JWT
  let email = req.body.email;
  let password = req.body.password;
  if(email && password)
  {
    let userData = await userService.handleUserLogin(email, password);
    return res.status(200).json({
      errCode: userData.errCode,
      message: userData.errMessage,
      user : userData.user ? userData.user : {}
    });
  }
  else{
    return res.status(500).json({
      errCode: 1,
      message: "Missing username or password",
    });
  }

};
module.exports = {
  handleLogin: handleLogin,
};
