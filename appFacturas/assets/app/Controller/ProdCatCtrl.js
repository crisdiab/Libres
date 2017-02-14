
//Catalogo Producto


aplicacion.controller('ProdCatCtrl', [
  '$scope',

  '$http',
  function ($scope, $http) {

    $scope.clientes = [];
    $scope.filtroCliente = '';
    $scope.botones = {
      clienteAgregar: false,
      verTabla: true
    };

    $scope.nuevoProducto = {
      nombre: '',
      precio: '',
      tipo:''
    }

    $scope.categorias = ['salud',

                        'vestimenta',
                         'alimentacion',
                        'educacion',
                         'gastos de negocio',
                         'otros'
                        ];


    $scope.crearProducto = function () {
      $http.post(masterUrl+'/ProductoApi', $scope.nuevoProducto)
        .then(
          function success(data) {
            console.log(data);
            $scope.nuevoProducto = {
              nombre: '',
              precio: '',
              tipo: ''
            }

            $scope.clientes.push(data.data);
          },
          function error(err) {
            console.log(err);
          })

    }



    $http.get(masterUrl+'/ProductoApi')
      .then(
      function success(data) {
        console.log(data.data);
        $scope.clientes = data.data;

      },
      function error(err) {
        console.log(err);
      });



    $scope.ocultarBotonAgregar = function() {
      $scope.botones.clienteAgregar = !$scope.botones.clienteAgregar;
    };
    $scope.verClientes = function() {
      $scope.botones.verTabla = !$scope.botones.verTabla;
    };




  }]);
