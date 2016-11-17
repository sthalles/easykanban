angular.module('easykanban').directive('draggable', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      element[0].addEventListener('dragstart', scope.handleDragStart, false);
      element[0].addEventListener('dragend', scope.handleDragEnd, false);
    }
  };
});

angular.module('easykanban').directive('droppable', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      element[0].addEventListener('drop', scope.handleDrop, false);
      element[0].addEventListener('dragover', scope.handleDragOver, false);
    }
  };
});
