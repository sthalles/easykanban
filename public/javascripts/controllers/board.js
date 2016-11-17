angular.module('easykanban')
    .controller('BoardController', BoardController);


function BoardController($scope, $mdDialog, BoardConfigService, TaskService) {
  var self = this;
  self.boardColumns = BoardConfigService.getBoardColumns();
  self.tasks = TaskService.getAllTasks();

  self.selectColumn = function(column, $event) {
    console.log($event.currentTarget);
    for (var i = 0; i < self.boardColumns.length; i++) {
      if (self.boardColumns[i].isSelected == true) {
        self.boardColumns[i].isSelected = false;
        break;
      }
    }
    column.isSelected = true;
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
    var data = ev.dataTransfer.getData('text');

    if (ev.target.hasAttribute('droppable')) {
      ev.target.appendChild(document.getElementById(data));
    }
  };

  $scope.handleDragOver = function(ev) {
    ev.preventDefault(); // Necessary. Allows us to drop.
    ev.dataTransfer.dropEffect = 'move'; // See the section on the DataTransfer object.
    return false;
  };

  this.showTabDialog = function(ev) {
    $mdDialog.show({
      controller: BoardController,
      templateUrl: '../partials/addTaskDialog.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true
    })
        .then(function(answer) {
          this.status = 'You said the information was "' + answer + '".';
        }, function() {
          this.status = 'You cancelled the dialog.';
        });
  };

}
