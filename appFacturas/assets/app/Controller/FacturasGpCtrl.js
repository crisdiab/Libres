aplicacion.controller('FacturasGpCtrl', [
  '$scope',
'ConsultasFactory',
  'detalleFactory',
  'limiteFactory',
  '$http',
  '$uibModal',
  '$cookies',
  function ($scope,ConsultasFactory,detalleFactory,limiteFactory, $http,$uibModal,$cookies) {

     $scope.idUsuario = $cookies.get('UsuarioId')
    $scope.facturas=[]
    $scope.facturasSinAsignar=[];
    
    
    
 $scope.FacturasXusuario= function () {
      ConsultasFactory
        .buscarFacturaXid({
          idComprador: $scope.idUsuario
        })
        .$promise
        .then(
          function (respuesta) {
            $scope.facturas=respuesta
            console.log('facturas por cliente',respuesta)
            // console.log('facturas por cliente',$scope.facturas)
           
           $scope.asignar($scope.facturas);

          },
          function (error) {
            console.log(error);
          });
    }
    $scope.FacturasXusuario();

$scope.asignar=function(facturas){
  console.log('entro en facturas por asignar')
  for(var i=0; i<facturas.length;i++){
   
    if(facturas[i].tipoFactura==1){
      $scope.facturasSinAsignar.push(facturas[i]);
    }
  }
  
  console.log('llegan estas fact sin asignar',$scope.facturasSinAsignar)
  
  
}

$scope.actualizarfactura=function(factura){
   ConsultasFactory
        .actualizar({
          id: factura.id
        }, {
        tipoFactura:factura.tipoFactura
    
        })
        .$promise
        .then(
          function (respuesta) {

            console.log(respuesta)
            toastr.success('Datos modificados correctamente')
            console.log('edito correctamente')

          },
          function (error) {
            console.log(error);
          });
}
 $scope.borrarfactura = function (idProveedor) {

      var modalBorrar = $uibModal.open({
        templateUrl: './rutas/Modal/confirmar.html',
        controller: 'confirmarCtrl',
        size: 'lg',
        //        resolve: {
        //          items: function () {
        //            return $ctrl.items;
        //          }
        //        }
      });

      modalBorrar.result
        .then(
        function success(eleccion) {
          ConsultasFactory
            .delete({
            id: idProveedor
          })
            .$promise
            .then(
            function(respuesta) {

              console.log('borro correctamente')  ;
              toastr.success('Factura Eliminada Correctamente')
//              angular.forEach($scope.proveedores, function(proveedor, indiceProv) {
//                if (proveedor.id == id) {
//                  $scope.proveedores.splice(indiceProv, 1);
//                }
//              })
             $scope.FacturasXusuario();

            },
            function(error) {
              toastr.error('No se a podido eliminar la factura o no existe')
              console.log(error);
            });
        },
        function error() {
          console.log('El usuario cerro el modal en la fecha: ' + new Date());
        });


    }


  }]);

//


