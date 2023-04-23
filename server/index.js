// /* npm init -y
// body-parser - enable us to sent post request
// cors - enable cros original requests
// express - create a routing of the application
// mongoose - create models for our posts
// nodemon - we don't need manually to reset the server every time the change is made*/
// //http://localhost:5000/tasks

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import taskRoutes from './routes/tasks.js';
// import userRoute from './routes/userRoute.js';
import dotenv from 'dotenv';
// app.use(express.json());

//initialise the app istance so we can then use all methods
const app = express();

//Use env file to hide sensitive information
dotenv.config();


// // Setting up the body parcer to send requests
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// //Use express middleware to connect the router to our application// Initialise all the routes
app.use('/tasks', taskRoutes);
// app.use('/api/user', userRoute);

// //Connect server with DB
const CONNECTION_URL = 'mongodb+srv://zhuliya:fyp-zhuliya@cluster0.numzlxu.mongodb.net/?retryWrites=true&w=majority';

// //const CONNECTION_URL = 'mongodb+srv://Zhuliya:fyp-zhuliya@cluster0.8rtbgtr.mongodb.net/?retryWrites=true&w=majority';
// //Initialize the port
const PORT = process.env.PORT || 5000;
// // Now we have to listen to this port by usign app.listen method, where the first parameter is port and the second parameter is callback function

// //Use mongoose function that accepts two different parameters - the connection URL and object with all the options
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`The server is running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

// //We can use MondoDB compass instead of opening the prowser any time to see if the collection is added or not. It is runed on the local machine using the connection URL

// // mongoose.set('useFindAndModify', false);




// //const express = require("express");
// //const app = express();
// // require('dotenv').config();
// //const dbconfig = require("./config/dbConfig")
// //const port = process.env.PORT || 5000;

// // console.log(process.env.MONGO_URL);
// //app.listen(port, () => console.log(`Server is running at port &{port}`));

