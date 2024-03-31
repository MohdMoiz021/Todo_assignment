const todoRepository=require('../repositories/todoRepository')

// Displaying all todo List (Using Get Request)
const getAllTodos = async (req, res) => {
  try {
    const size=req.params.size || 10;
    const page=req.params.page || 1;
    const todos = await todoRepository.getAll(page,size);
    res.json(todos);
  } catch(error){res.status(500).send({ message: error.message });}}

// Adding new ToDos (Using Post Request)
const createTodo = async (req, res) => {
    const {title,status,description}=req.body;
   try {
    const newTodo = await todoRepository.create(title,status,description);
    res.status(201)
    res.json(newTodo);
  } catch (error) {res.status(400).json({ message: error.message });}};

// Updating Existing Todos (Using Put Request)
const updateTodo = async (req, res) => {
    const id = req.params.id;
    const {title,status,description}=req.body;
    try{
        const updatedTodo=await todoRepository.updateTodo(id,title,status,description)
        res.json(updatedTodo);
    }catch(error){res.status(400).send({ message: error.message })}}

// Deleting Existing todos (Using Delete Request)
    const deleteTodo = async (req, res) => {
        const id = req.params.id;
        try {
            if(!id==id){
                res.status(404);
                res.send('Not Found in records');
                return;
            }
            await todoRepository.deleteById(id);
                res.status(204);
                res.send({ message: 'Todo deleted' });
        } catch (error) {res.status(500).send({ message: error.message });}};

  // Retreiving by i'd
  const getTodoById = async (req, res) => {
      const id = req.params.id;
      try{
          if(!id===null)
          {
              res.status(404).send('Not Found'); 
              return;
          }
          const todo = await todoRepository.getById(id);
          res.status(200).json(todo);
      }catch(err) {res.status(500).send('Internal Server Error');}};

module.exports = {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  getTodoById
};
