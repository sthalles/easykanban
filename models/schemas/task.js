// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var taskSchema = new Schema({
  content: {
    name: {
      type: String,
      required: true,
      unique: false
    },
    title: {
      type: String,
      required: true
    },
    description: String,
    creatorId: Number,
    assignedToUserId: Number,
    column: Number,
    points: Number
  }
});

// the schema is useless so far
// we need to create a model using it
var Task = mongoose.model('Task', taskSchema);

// make this available to our users in our Node applications
module.exports = Task;