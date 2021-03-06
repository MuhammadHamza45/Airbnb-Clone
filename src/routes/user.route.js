const express=require('express');
const userController = require('../controllers/user.controller');
const auth=require('../middleware/auth');
const router=express.Router();



router
    .route('/signup')
    // .get(userController.getUsers)
    .post(userController.createUser);
router
    .route('/signin')
    // .get(userController.getUsers)
    .post(userController.signinUser);
router
    .route('/homes')
    .get(auth.authenticateToken,userController.getUsers);
    // .patch(userController.updateUser);
// router
//     .route('/location_image')
//     .get(userController.findUser1)
    

module.exports = router;