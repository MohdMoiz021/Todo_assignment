const mongoose=require('mongoose');

const schema=new mongoose.Schema({
    title:{
        type:String,
        required:[true, 'Title Should be provided']
    },
    // description:{
    //     type:String,
    //     required:[true],
    //     minLength:[5,'Minimum 5 characters'],
    //     maxLength:[25,'Maximum 25 characters']
    // },
    Status:{
        type:String,
    },
    createdDate:{type:Date},
    updatedDate:{type:Date,default:Date.now}
});

module.exports=mongoose.model('user',schema);