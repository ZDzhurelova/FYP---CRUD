import mongoose from 'mongoose';

//Create Mongoose schema
const taskSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

//Turn the schena into a model
const TaskMessage = mongoose.model('TaskMessage', taskSchema);

//Export mongoose model from task message file
export default TaskMessage;

