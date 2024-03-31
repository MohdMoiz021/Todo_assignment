const userRepo = require('../repositories/todoRepository');
const Product = require('../models/Todo');

// const post = async(req,res) => {
//     const payload = req.body;
//     try{
//         if(!payload.status || !payload.title){
//             res.status(400).send('Enter the mandatory fields');
//             return;
//         }
//         console.log(payload);
//         await todosRepo.post(payload);
//         res.status(201).send('Created');

//     }catch(err){
//         console.error(err);
//         res.status(500).send('Internal Server Error');
//     }
// };

const post= async (req, res) => {
    const todo = new Todo({
      title: req.body.title,
      status: req.body.status || false,

    });
  
    try {
      const newTodo = await todo.save();
      res.status(201).json(newTodo);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  

// const get = async(req,res) => {
//     try{
//         const options = {
//             page : req.params.page || 1,
//             size : req.params.size || 10,
//             status : req.query.status,
//         }

//         const rows = await todosRepo.getCount(options.status);
//         const totalPages = Math.ceil(rows / options.size);


//         const data = await todos Repo.get(options);
//         const result = {
//             data,
//             rows,
//             totalPages,
//         }

//         res.status(200).json(result);
//     }catch(err){
//         console.error(err);
//         res.status(500).send('Internal Server Error');
//     }
// };








module.exports = {
    post,
   
}




























// const Task =require('../models/userModel')

// function create(req,res) {
//     if(!req.body.description || !req.body.Status){
//         return res.status(400).send('Task Cannot be empty')
//     }
// }

// const task=new Task({
//     description:req.body.description || 'Unknown Task',
//     Status:req.body.state,
//     // user_id:req.body.user_id,
// });

// task.save()
// .then((data)=>{
//     res.send(data)
// }).catch((err)=>{
//     res.status(500)
//     res.send('Some error Occured while creating task ')
// })

// findAll((req,res)=>{
//     Task.find()
//     .then((tasks)=>{
//         res.send(tasks)
//     }).catch((err)=>{
//         res.status(500)
//         res.send('Some error occured')
//     })
// })


// module.exports={
//     task,
//     findAll,
// }
