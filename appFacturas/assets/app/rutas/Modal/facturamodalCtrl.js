aplicacion.controller('facturaModalCtrl', [
  '$scope',

  '$http',
  '$uibModalInstance',
  function ($scope, $http, $uibModalInstance) {


    $scope.facturas = [];
    $scope.busqueda = '';



    $http.get(masterUrl+'/FacturaApi')
      .then(
      function success(data) {
        console.log(data.data);
        $scope.facturas = data.data;

      },
      function error(err) {
        console.log(err);
      });

    $scope.seleccionarFactura = function (factura) {


      $uibModalInstance.close(factura);

      console.log(factura);

    }

    //    $scope.ok = function () {
    //      $uibModalInstance.close(seleccionarCliente());
    //    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };






  }]);
