const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: String,
  status: {
    type: String,
    enum: ['pending', 'In Progress', 'Completed']
  },
   description:{
        type:String,
        required:[true],
        minLength:[5,'Minimum 5 characters'],
        maxLength:[25,'Maximum 25 characters']
    },
    createdDate:{type:Date},
    updatedDate:{type:Date,default:Date.now}
});

module.exports = mongoose.model('Todo', todoSchema);
