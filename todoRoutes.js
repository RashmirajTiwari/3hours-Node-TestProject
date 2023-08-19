const todoController=require('./todoController');
const express=require('express');
const router=express.Router();

router.get('/getTodo',todoController.getTodo);
router.post('/postTodo',todoController.postTodo);
router.delete('/deleteTodo/:TodoId',todoController.deleteTodo);
module.exports=router;