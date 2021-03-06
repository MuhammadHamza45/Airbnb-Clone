
const userService  = require('../services/user.service');
// const {accessToken}=require('../')
const createUser = async (req, res) => {
  // console.log(req.body);
    await userService
      .createUser(req.body) 
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        console.log(err);
        res.send(err);
      });
  };
const signinUser=(async(req,res)=>{
  // console.log(req.body);
  const user = await userService.signinUser(req.body);
    if (!user) {
        res.status(404).send("Not Found");
    } const tokenAge= 60*60;
    console.log(user.accessToken);
    res.cookie('jwt',user.accessToken,{
      httpOnly:true, maxAge:tokenAge
    });
    res.status(200).json({
      status:true,
      data:{
        email:user.email
      }
    });
  });

const getUsers = (async(req, res) => {
    await userService.getUsers(req.body)
    
     .then((data)=>{
        res.send(data);
     })
    .catch((err)=>{
        console.log(err);
        res.send(err);
    })
    
});

// const findUser1= ((req, res) => {
//     console.log("Get user from userController");
//     res.send("Get user controller");
// });

// const updateUser = ((req, res, next) => {
//     console.log("updateUser from userController");
//     res.send("updateuser from usercontroller");
// });


module.exports = {
    getUsers,
    createUser,
    signinUser,
    // findUser1
    // updateUser
};

