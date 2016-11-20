angular.module('easykanban').service('TaskService', TaskService);

function TaskService() {

  var tasks = [
    {
      id: 1,
      name: 'task1', // ['task'+id] uniqeu
      title: 'Tasks 1',
      description: 'Finish the web app top bar',
      tag: 'defect',
      creator: 'Thalles',
      assignedTo: 'Thalles',
      column: 2,
      points: 5
    }, {
      id: 2,
      name: 'task2',
      title: 'Tasks 2',
      description: 'Mockup tasks 2',
      tag: 'defect',
      creator: 'Thalles',
      assignedTo: 'Thalles',
      column: 2,
      points: 8
    }, {
      id: 3,
      name: 'task3',
      title: 'Tasks 3',
      description: 'Mockup tasks 3',
      tag: 'defect',
      creator: 'Thalles',
      assignedTo: 'Thalles',
      column: 2,
      points: 4
    }, {
      id: 4,
      name: 'task4',
      title: 'Tasks 4',
      description: 'Mockup tasks 4',
      tag: 'feature',
      creator: 'Thalles',
      assignedTo: 'Thalles',
      column: 1,
      points: 3
    }, {
      id: 5,
      name: 'task5',
      title: 'Tasks 5',
      description: 'Mockup tasks 5',
      tag: 'improvement',
      creator: 'Thalles',
      assignedTo: 'Thalles',
      column: 3,
      points: 10
    }
  ];

  this.getAllTasks = function () {
    return tasks;
  };
}