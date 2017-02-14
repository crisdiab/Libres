aplicacion.controller('consultarLimitesCtrl', [
  '$scope',

  '$http',
  '$cookies',
  function ($scope, $http,$cookies) {


    $scope.limitesConsultar=[]
    $http.get(masterUrl+'/Limites')
      .then(
        function success(data) {

          $scope.limitesConsultar = data.data;

        },
        function error(err) {
          console.log(err);
        });
  }]);

