aplicacion.controller('confirmarCtrl', [
  '$scope',
  '$uibModalInstance',
  function($scope, $uibModalInstance) {

    console.log('entra a la creacion de cliente');

    $scope.ok = function() {
      $uibModalInstance.close(true)
    };

    $scope.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };

  }
]);
