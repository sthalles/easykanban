angular.module('easykanban')
    .service('BoardConfigService', BoardConfigService);


function BoardConfigService() {
  var board = [
    {
      id: 1,
      title: 'Todo',
      isSelected: true,
      color: 'red'
    }, {
      id: 2,
      title: 'Doing',
      isSelected: false,
      color: 'blue'
    }, {
      id: 3,
      title: 'Done',
      isSelected: false,
      color: 'yellow'
    }];
  this.getBoardColumns = function() {
    return board;
  };
}
