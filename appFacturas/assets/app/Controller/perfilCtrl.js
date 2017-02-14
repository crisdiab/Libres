aplicacion.controller('perfilCtrl', [
  '$scope',
'perfilFactory',
  '$http',
  '$cookies',
  function ($scope,perfilFactory, $http,$cookies) {

    $scope.clientes = [];
    $scope.busqueda = '';
    $scope.idUsuario = $cookies.get('UsuarioId')

    $http.get(masterUrl+'/ClienteApi?id='+$scope.idUsuario)
      .then(
      function success(data) {
        console.log(data.data);
        $scope.clientes = data.data;


      },
      function error(err) {
        console.log(err);
      });


   $scope.actualizarPerfil= function(){

     //console.log('objeto cliente ',objetoCliente)
     perfilFactory
       .actualizar({
       idCliente:  $scope.idUsuario
     }, {
       nombre: $scope.clientes.nombre,
       apellido : $scope.clientes.apellido,
       cedula: $scope.clientes.cedula,
       usuario:$scope.clientes.usuario,
       password: $scope.clientes.password
     })
       .$promise
       .then(
       function (respuesta) {
         // angular.forEach($scope.razas, function(valor, indice) {
         //     if (respuesta.id == valor.id) {
         //         $scope.razas[indice]=respuesta;
         //     }
         // });
         console.log(respuesta)
         toastr.success('Datos modificados correctamente')
         console.log('edito correctamente')

       },
       function (error) {
         console.log(error);
       });
   }


  }]);
