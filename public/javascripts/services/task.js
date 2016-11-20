angular.module('easykanban').service('TaskService', TaskService);

function TaskService() {

  var tasks = [
    {
      id: '1',
      name: 'Tasks 1',
      description: 'Finish the web app top bar',
      tag: 'defect',
      creator: 'Thalles',
      assignedTo: 'Thalles',
      column: 2,
      points: 5
    }, {
      id: '2',
      name: 'Tasks 4',
      description: 'Mockup tasks 4',
      tag: 'defect',
      creator: 'Thalles',
      assignedTo: 'Thalles',
      column: 2,
      points: 8
    }, {
      id: '3',
      name: 'Tasks 5',
      description: 'Mockup tasks 5',
      tag: 'defect',
      creator: 'Thalles',
      assignedTo: 'Thalles',
      column: 2,
      points: 4
    }, {
      id: '4',
      name: 'Tasks 2',
      description: 'Mockup tasks 2',
      tag: 'feature',
      creator: 'Thalles',
      assignedTo: 'Thalles',
      column: 1,
      points: 3
    }, {
      id: '4',
      name: 'Tasks 3',
      description: 'Mockup tasks 3',
      tag: 'improvement',
      creator: 'Thalles',
      assignedTo: 'Thalles',
      column: 3,
      points: 10
    }
  ];

  this.getAllTasks = function() {
    return tasks;
  };
}
