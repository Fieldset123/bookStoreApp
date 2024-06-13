const express=require('express');
const router=express.Router();
const signup=require('../controllers/user.controller.signup.js')
const login=require('../controllers/user.controller.login.js')
router.post('/signup',signup);
router.post('/login',login);


module.exports=router;