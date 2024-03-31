const express=require('express')
const userCtrl=require('../controllers/todoController')


const router=express.Router();


router.post('/',userCtrl.post);
router.get('/',userCtrl.get);

module.exports={
    router
}