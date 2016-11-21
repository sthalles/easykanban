var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
// require the mongoose module
var mongoose = require('mongoose');
var Task = require('../models/schemas/task');

router.route('/tasks')
  .post(function (req, res) {
    var task = new Task();
    task.content.name = req.body.name;
    task.content.title = req.body.title;
    task.save(function (err) {
      if (err) {
        res.send(err);
      }
      res.send({
        'status': 'OK'
      });
    });

  })
  .get(function (req, res) {
    Task.find(function (err, tasks) {
      if (err)
        res.send(err);

      res.json(tasks);
    });
  });



//router.post('/tasks', function(req, res, next) {
//  console.log(req.body.name);
//  res.send('respond with a resource');
//});

module.exports = router;