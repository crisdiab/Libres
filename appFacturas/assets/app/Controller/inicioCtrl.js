aplicacion.controller('inicioCtrl', [
  '$scope',

  '$http',
  '$cookies',
  function ($scope, $http,$cookies) {

    $scope.logout = function(){
console.log('ingreso a logout')
      $cookies.remove('UsuarioId');
      $cookies.remove('UsuarioTipo');
      console.log('hizo logout')

    }
  }]);

