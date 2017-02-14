aplicacion.controller('limiteCtrl', [
  '$scope',
'limiteFactory',
  '$http',
  '$cookies',
  function ($scope,limiteFactory, $http,$cookies) {


    $scope.limites=[];
    $scope.Categorias=[
      'Salud',
      'Educacion',
      'Vivienda',
      'Alimentacion',
      'Vestido',
        'Otros'
    ]

    $scope.nuevoLimite={
      nombre:'',
      valor:'',
      periodo:''
    }
    $scope.logout = function(){
      $cookies.remove('UsuarioTipo');
      $cookies.remove('UsuarioId');

      console.log('hizo logout')

    }

    $http.get(masterUrl+'/Limites')
      .then(
        function success(data) {

          $scope.limites = data.data;

        },
        function error(err) {
          console.log(err);
        });
    $scope.crearLimite = function() {
      limiteFactory
        .save($scope.nuevoLimite)
        .$promise
        .then(
          function(respuesta) {
            $scope.limites.push(respuesta);
            if ($scope.LimiteForm) {
              $scope.LimiteForm.$setPristine();
              $scope.LimiteForm.$setUntouched();
            }
            $scope.nuevoLimite = {
              nombre:'',
              valor:'',
              periodo:''
            };

          },
          function(error) {
            console.log('Error', error);
          }
        );
    }





    $scope.actualizarLimite = function (objetoLimite) {
      console.log('recibi el objetoproveedor' + objetoLimite,objetoLimite)
      console.log(objetoLimite.id+' este es el id proveedor')
      limiteFactory
        .actualizar({
          idLimite: objetoLimite.id
        }, {
          nombre: objetoLimite.nombre,
          valor: objetoLimite.valor,
          periodo: objetoLimite.periodo,

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
  }]);
