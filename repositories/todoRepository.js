const Todo = require('../models/Todo');

const getAll =(current,size) => {
  const rowsToSkip=(current-1)*size;
  return Todo
  .find({},{__v:0})
  .skip(rowsToSkip)
  .limit(size)
};

const create =(title,status,description) => {
  const todo = new Todo({
    title,
    status,
    description
  });
  return todo.save();
};

const getById = id => {return Todo.findById(id,{__v:0});};

const updateTodo = async (id, title, status,description = false) => {
  const todo = await Todo.findById(id);
  if (!todo) {
    throw new Error('Todo not found');
  }
  todo.title = title;
  todo.status = status;
  todo.description=description;
  return todo.save();
};

const deleteById = async (id) => {
  const todo = await Todo.findById(id);
  if (!todo) {
    throw new Error('Todo not found');
  }
  return Todo.deleteOne({_id:id});
};

module.exports={
    getAll,
    create,
    getById,
    updateTodo,
    deleteById
}