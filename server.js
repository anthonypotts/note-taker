const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const { notes } = require('./db/db');
const fs = require('fs');
const path = require('path');

// requiring the routes will make the app read each index.js file within each directory
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

// tells our app if client that if they navigate to a <ourhost>/api then it will use the apiRoutes 
app.use('/api', apiRoutes);
// tells our app if "/" is the endpoint then it will serve the html router
app.use('/', htmlRoutes);
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`API server now on port 3001!`);
});

// heroku: pure-mesa-53928