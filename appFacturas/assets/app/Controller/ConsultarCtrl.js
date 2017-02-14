aplicacion.controller('ConsultarCtrl', [
  '$scope',
'facturafactory',
  'detalleFactory',
  'limiteFactory',
  '$http',
  '$cookies',
  function ($scope,facturafactory,detalleFactory,limiteFactory, $http,$cookies) {

      $scope.facturas = [];
      $scope,limitesXperiodo=[];
      $scope.fechaFactura = [];
      $scope.FechaEmision=[]
      $scope.factsPerido = [];
      $scope.facturasUsuario = [];
      $scope.busqueda = '';
      $scope.detalles = [];
      $scope.idUsuario = $cookies.get('UsuarioId')
      $scope.facturaConDetalles=[];


      $scope.Periodo=0;


    $scope.ActualizarInformacion = function (objetoFactura) {

      for(var i=0;i<objetoFactura.length;i++){

        facturafactory
          .actualizar({
            id: objetoFactura[i].id
          }, {
            periodo : objetoFactura[i].periodo
          })
          .$promise
          .then(
            function (respuesta) {



            },
            function (error) {
              console.log(error);
            });


      }


    }

    $scope.verFacturas=function(){

      facturafactory
        .facturaXid({
          idUsuario: $scope.idUsuario
        })
        .$promise
        .then(
          function (respuesta) {
            $scope.facturas=respuesta;
            for(var i=0;i<$scope.facturas.length;i++){
              $scope.facturas[i].periodo= $scope.entregarYearFactura($scope.facturas[i].fechaEmision);

            }
            $scope.ActualizarInformacion($scope.facturas);

          },
          function (error) {
            console.log(error);
          });


    }
    $scope.verFacturas()
    $scope.entregarYearFactura= function(fecha){
      $scope.splitfecha= fecha
      $scope.year = fecha.split('-')
      fecha= $scope.year[0];
      return fecha;

    }








  }]);

//


