const Task = require('../models/task')

module.exports = {
    createTask: async (req, res) =>{
        console.log(`create user`);
        try{
            const {email, username, age} = req.body
            const task = new Task({email, username, age})
            task.save()
            console.log(task);
            res.json(task);
        }catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
          }
    },

    listTasks: async (req, res) => {
      try {
        const tasks = await Task.find();
        res.json(tasks);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    },

    listTasks: async (req, res) => {
      try {
        const { id } = req.params;
        const task = await Task.findById(id);
        res.json(task);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }

}