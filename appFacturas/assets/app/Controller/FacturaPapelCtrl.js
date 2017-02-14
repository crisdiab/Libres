aplicacion.controller('FacturaPapelCtrl', [
  '$scope',
'facturafactory',
  '$http',
  '$uibModal',
  '$cookies',
  function ($scope,facturafactory, $http, $uibModal,$cookies) {


    $scope.UsuarioCokie = $cookies.get('UsuarioId')
    $scope.facturas = [];
    $scope.filtroFacturas = '';
    $scope.botones = {
      clienteAgregar: false,
      verTabla: true
    };

    $scope.nuevaFactura = {
      idComprador:$scope.UsuarioCokie,
      idProveedor:'',
      numFactura:'',
      fechaEmision:'',
      valorFactura:'',
      periodo: ''

    }




    $scope.buscarFacturas = function(){
      $http.get(masterUrl+'/FacturaApi/')
        .then(
        function success(data) {
          $scope.facturas = data.data;
        },
        function error(err) {
          console.log(err);
        }
      )
    }


    $scope.crearFactura = function () {

      console.log($scope.nuevaFactura);
      $http.post(masterUrl+'/FacturaApi', $scope.nuevaFactura)
        .then(
        function success(data) {
          console.log(data);
          if($scope.facturaForm){
            $scope.facturaForm.$setPristine();
            $scope.facturaForm.$setUntouched();
          }
          $scope.nuevaFactura = {
            idComprador:$scope.UsuarioCokie,
            idProveedor:'',
            numFactura:'',
            fechaEmision:'',
            valorFactura:'',

          }

          $scope.buscarFacturas()



        },
        function error(err) {
          toastr.options.positionClass ='toast-bottom-center'
          toastr.options.preventDuplicates = true
          toastr.warning('La Factura que ingreso ya existe')

          console.log(err);
        })

    }


    $scope.seleccionarCliente = function () {

      var modalCliente = $uibModal.open({
        templateUrl: './rutas/Modal/clientemodal.html',
        controller: 'ClienteModalCtrl',
        size: 'lg',

      });

      modalCliente.result
        .then(
          function success(cliente) {
            console.log('Selecciono el Cliente: ',cliente.id)
            $scope.nuevaFactura.idComprador = cliente.id
            toastr.info('Selecciono el cliente '+cliente.nombre+' '+cliente.apellido)
            console.log($scope.nuevaFactura);
          },
          function error() {
            console.log('El usuario cerro el modal en la fecha: ' + new Date());
          });


    }
    $scope.seleccionarProveedor = function () {

      var modalProveedor = $uibModal.open({
        templateUrl: './rutas/Modal/proveedormodal.html',
        controller: 'ProveedorModalCtrl',
        size: 'lg',
        //        resolve: {
        //          items: function () {
        //            return $ctrl.items;
        //          }
        //        }
      });

      modalProveedor.result
        .then(
        function success(proveedor) {
          console.log('recibo esto del provvedor cuando cierro el modal'+proveedor)
          console.log('Selecciono el proveedor: ',proveedor.id)
          $scope.nuevaFactura.idProveedor = proveedor.id
          console.log( $scope.nuevaFactura.idProvedor);
          toastr.info('Selecciono el proveedor '+proveedor.nombre)

        },
        function error() {
          console.log('El usuario cerro el modal en la fecha: ' + new Date());
        });
  }

    $http.get(masterUrl+'/FacturaApi?idComprador='+$scope.UsuarioCokie )
      .then(
      function success(data) {
        console.log(data.data);
        $scope.facturas = data.data;

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


