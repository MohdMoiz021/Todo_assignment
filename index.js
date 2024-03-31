const express = require('express');
const mongoose = require('mongoose');

// Routes
const homeRoutes=require('./routes/homeRoutes');
const todoRoutes = require('./routes/todoRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/todo-list');

// Routes Url
app.use('/',homeRoutes);
app.use('/todos', todoRoutes);

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
