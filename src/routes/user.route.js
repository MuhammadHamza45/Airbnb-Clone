const express=require('express');
const userController = require('../controllers/user.controller');
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
    .route('/:userId')
    .get(userController.getUser)
    .patch(userController.updateUser);

module.exports = router;