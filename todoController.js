
const Todo=require('./todoModel');
exports.postTodo= (req, res, next) => {
    const itemName = req.body.itemName;
    const description = req.body.description;
    Todo.create({
      itemName:itemName,
      description:description,
    }
    ).then(result=>{
      console.log(result);
      res.json(result);
    }).catch(err=>{
      console.log(err);
    })
    
   
};



exports.getTodo = (req, res, next) => {
  Todo.findAll().then(results=>{
  res.json(results);
  }).catch(err=>{
    console.log(err);
  })
};

exports.deleteTodo = (req, res, next) => {
  const TodoId=req.params.TodoId;
  Todo.findByPk(TodoId).then(todo=>{
    return todo.destroy();
  }).then(()=>{
    console.log("Deleted Todo...!")
  })
  .catch(err=>{
    console.log(err);
  })
  
};