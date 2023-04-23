import express from 'express';

//Import all functions
import { getTasks, createTask, updateTask, deleteTask } from '../controllers/tasks.js'


const router = express.Router();

//http://localhost:5000/tasks

//Start adding routes
router.get('/', getTasks);
router.post('/', createTask);
router.patch('/:id', updateTask);
router.delete('/:id', deleteTask);

// router.get('/',(req, res) => {
//     res.send('This works');
// });

export default router;