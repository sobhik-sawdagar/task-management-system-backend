const express = require('express');
const app = express();

require('dotenv').config();
require('./database/db.js');

const PORT = process.env.PORT || 3000;  
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/tasksRoutes.js');
const morgan = require('morgan'); //
const path = require('path');
const exp = require('constants');

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));

//User-Interface route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'user_interface', 'index.html'));
});

//Static files
app.use(express.static(path.join(__dirname, 'user_interface')));


//Using the task routes
app.use('/tasks', taskRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});