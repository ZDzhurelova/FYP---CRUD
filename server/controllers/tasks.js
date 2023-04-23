//Create all handlers for our routes
import mongoose from "mongoose";
import TaskMessage from "../models/taskMessage.js";
//Create function for router.get

//Get tasks function
export const getTasks = async (req, res) => {
    //res.send('This is now working!');
    //try/catch blog - if we get error catch block will be executed and if everything is successfull the try blog will be executed
    
    try {
        //Retrive all the tasks in the DB
        const taskMessages = await TaskMessage.find();

        //if everything works well return all the task messages
        res.status(200).json(taskMessages);

    } catch (error) {
       // res.status(404).json({message: error.message });
        
    }
}


//Create Task function
export const createTask = async (req, res) => {
    //res.send('Task creation works');
    const task = req.body;
    const newTask = new TaskMessage(task);

    try {
        await newTask.save();

        //Once is saved a respond will appear for successfull creation
        res.status(201).json(newTask);

    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

//Update Task
export const updateTask = async (req,res) => {
    const { id: _id } = req.params;
    const task = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('There is no task with that id');
    //If the id is valida update the task
    const updatedTask = await TaskMessage.findByIdAndUpdate(_id, { ...task, _id }, { new: true});
    //Send the updated version
    res.json(updateTask);
}

//Delete Task
export const deleteTask = async (req, res) => {
    //Get id from req.params
    const { id } = req.params;
    //Make sure the id is valid
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('There is no task with that id');
    //Delete Task logic
    await TaskMessage.findByIdAndRemove(id);
    console.log('DELETE');
    //Return message
    res.json ({ message: 'Taks is deleted'});

}