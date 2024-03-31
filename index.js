const express=require('express')
const mongoose=require('mongoose')

const userRoutes = require('./routes/todoRoutes')

// Defining the PORT
const port=process.env.PORT || 3000;

// Creating Express App
const app=express();

// Listen to requests
app.listen(port,()=>{
    console.log(`The server is running on ${port}`);
});

app.use(express.json());
mongoose.connect('mongodb://localhost:27017/todos-db');
console.log('Db Connected');


app.use('/todos',userRoutes);

app.use((req,res)=>{
    res.status(404).send('Not Found');
})