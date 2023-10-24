import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Task from './models/Task.js';

mongoose
  .connect('mongodb://0.0.0.0:27017/taskDB')
  .then(() => console.log('connected to db'))
  .catch((err) => console.log(err.message));

const app = express();
app.use(express.json());
app.use(cors());

app.get('/api/tasks', async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

app.post('/api/tasks', async (req, res) => {
  const { task } = req.body;
  if (!task) return res.status(400).json('task field is required.');

  const newTask = await Task.create({ task });
  res.status(201).json(newTask);
});

app.put('/api/tasks/:id', async (req, res) => {
  const { task } = req.body;
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id))
    return res.status(400).json('Id is not valid!');
  if (!task) return res.status(400).json('task field is required.');

  const updatedTask = await Task.findByIdAndUpdate(id, { task }, { new: true });
  res.status(200).json(updatedTask);
});

app.delete('/api/tasks/:id', async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id))
    return res.status(400).json('Id is not valid!');

  await Task.findByIdAndDelete(id);
  res.status(200).json(id);
});

app.listen(5000, () => console.log('running on port 5000'));
