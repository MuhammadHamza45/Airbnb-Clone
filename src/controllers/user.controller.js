
const userService  = require('../services/user.service');
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
    }
    res.status(200).send(user);
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

// const getUser= ((req, res) => {
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
    signinUser
    // getUser,
    // updateUser
};

