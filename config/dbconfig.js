// const mongoose = require('mongoose');

// //Connect to MongoDB connection URL
// mongoose.connect(process.env.MONGO_URL)
// //Create connection object
// const connection = mongoose.connection;
// //Verify that connection by using two methods connected and error
// connection.on(`connected` , ()=>{
//     console.log('MongoDB is connected');
// });

// connection.on("error", (error) => {
//     console.log("Error in MongoDB connection", error);
// });

// //Export
// module.export = mongoose;