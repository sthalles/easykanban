angular.module('easykanban')
    .controller('BoardController', BoardController);


function BoardController($scope, $mdDialog, $filter, BoardConfigService, TaskService) {
  var self = this;
  self.boardColumns = BoardConfigService.getBoardColumns();
  self.tasks = TaskService.getAllTasks();

  self.selectColumn = function(column, $event) {
    // console.log($event.currentTarget);
    for (var i = 0; i < self.boardColumns.length; i++) {
      if (self.boardColumns[i].isSelected == true) {
        self.boardColumns[i].isSelected = false;
        break;
      }
    }
    column.isSelected = true;
  };

  self.hideColumn = function(column, $event) {
    if (column.hasOwnProperty('isHidden')) {
      column.isHidden = !column.isHidden;
    } else {
      column.isHidden = true;
    }
  };

  $scope.handleDragStart = function(ev) {
    //debugger;
    this.style.opacity = '0.4';
    ev.dataTransfer.setData('text/plain', ev.target.id);
    // Set the drag effect to move
    ev.dataTransfer.dropEffect = 'move';
  };

  $scope.handleDragEnd = function(ev) {
    this.style.opacity = '1.0';
  };

  $scope.handleDrop = function(ev) {
    ev.preventDefault();
    ev.stopPropagation();

    // Get the id of the target and add the moved element to the target's DOM
    var draggedTaskId = ev.dataTransfer.getData('text');

    if (ev.target.hasAttribute('droppable')) {
      var draggedTask = document.getElementById(draggedTaskId);

      // get the id of the column
      var colId = ev.target.getAttribute('id');

      var col = $filter('filter')(self.boardColumns, {
        'name': colId
      });

      if (self.tasks[draggedTaskId].column != col[0].id) {
        self.tasks[draggedTaskId].column = col[0].id;
        ev.target.appendChild(draggedTask);
      }
    }
  };

  $scope.handleDragOver = function(ev) {
    ev.preventDefault(); // Necessary. Allows us to drop.
    ev.dataTransfer.dropEffect = 'move'; // See the section on the DataTransfer object.
    return false;
  };

  this.showTabDialog = function(ev) {

    $mdDialog.show({
      controller: TaskDialogController,
      controllerAs: 'TaskDialogCtrl',
      templateUrl: '../templates/pages/task/add-task-dialog.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true
    });

    function TaskDialogController() {
      var vm = this;

      vm.createNewTask = function(newTask) {
        // TODO: send the task to the server

        self.tasks.push(angular.copy(newTask));
        vm.hide();
      };

      vm.hide = function() {
        $mdDialog.hide();
      };

      vm.cancel = function() {
        $mdDialog.cancel();
      };

      vm.answer = function(answer) {
        vm.hide();
      };
    }
  };
}
