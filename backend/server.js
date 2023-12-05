require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
const connectDB = require('./config/dbConn');
const userController = require('./controllers/usersController');

connectDB();

app.use(cors());
app.use(express.json());

app.get('/api/users', userController.getUsers);
app.get('/api/users/:id', userController.getUserById);
app.post('/api/users', userController.addUser);
app.put('/api/users/:id', userController.updateUser);
app.delete('/api/users/:id', userController.deleteUser);


mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(port, () => console.log(`Server running on port ${port}`));
});




