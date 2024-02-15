const mogoose = require('mongoose');

const taskSchema = new mogoose.Schema({
    task:String,
})

module.exports = mogoose.model('Task', taskSchema)