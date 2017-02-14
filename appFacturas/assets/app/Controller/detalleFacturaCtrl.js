aplicacion.controller('detalleFacturaCtrl', [
  '$scope',
'facturafactory',
  '$http',
  '$uibModal',
  '$stateParams',
  function ($scope,facturafactory, $http, $uibModal, $stateParams) {
    $scope.disponible=0;
    $scope.bloquearCrearDet=false;
    $scope.bloquearGP=false;
    $scope.bloquearGN=false;
    $scope.productos = [];
    $scope.gastosNegocio = [];
    $scope.onlyNumbers = "/^[0-9]{10,10}$/;"
    $scope.filtroProveedor = '';
    $scope.botones = {
      agregarProveedor: false,
      verTabla: false
    };
    $scope.valorTotalFactura=0;
    $scope.factura= {};
    $scope.sumatoriaDetalles=0;
    $scope.productos = [];
    $scope.productoSeleccionado = {
      id:0,
      valor:0
    };
    $scope.valorIva = {
      iva: 0
    }

    $scope.buscarNombreProducto = '';
    $scope.detallefacturas = [];
    $scope.nuevoDetalle = {
      valorSinIva: '',
      valorConIva: '',
      idProducto: $scope.productoSeleccionado.id,
      idFacturaProd: $stateParams.idFactura,
      cantidad: '',
      valor: $scope.productoSeleccionado.valor
    }



    $scope.BloquearGP= function(){
      $scope.bloquearGP=true;
      // $scope.bloquearGN=false;
    }

    $scope.BloquearGN= function(){
      // $scope.bloquearGP=false;
      $scope.bloquearGN=true;
    }

    $scope.buscarProductosPorNombre=function(){


      if($scope.buscarNombreProducto==''){
        $scope.buscarTodosProductos()
      }
      else{
        $http.get(masterUrl+'/ProductoApi?nombre=' + $scope.buscarNombreProducto)
          .then(
          function success(data) {

            $scope.productos = data.data;

          },
          function error(err) {
            console.log(err);
          }
        )
      }

    }
    $scope.buscarTodosProductos = function(){
      $http.get(masterUrl+'/ProductoApi')
        .then(
        function success(data) {
          console.log('llamo a buscar todos productos',data)
          for(var i = 0; i < data.data.length; i ++){
            if(data.data[i].tipo==1){
              $scope.productos.push(data.data[i]);
            }else if(data.data[i].tipo==2){
              $scope.gastosNegocio.push(data.data[i]);
            }
          }




        },
        function error(err) {
          console.log(err);
        }
      )

    }
    $scope.buscarTodosProductos();
    $scope.calcularprecio = function (cantidad, valor, iva) {

      parseInt(iva)
      parseInt(cantidad)
      parseInt(valor)
      if (iva == 0) {
            console.log('llego iva cero')
            $scope.nuevoDetalle.valorConIva =  valor*cantidad;
            $scope.nuevoDetalle.valorSinIva = valor*cantidad;
           } else {
             console.log('llego iva otros')
        $scope.nuevoDetalle.valorSinIva = valor*cantidad;
             $scope.nuevoDetalle.valorConIva = (Math.round(((valor*cantidad) + (valor*cantidad)*(iva/100))*100)/100).toFixed(2)
           }




        }
    $scope.precioSinIva= function(valor,cantidad){

      $scope.nuevoDetalle.valorSinIva = valor*cantidad;
    }
    $scope.buscarFactura = function(){
      $http.get(masterUrl+'/FacturaApi/' + $stateParams.idFactura)
        .then(
        function success(data) {
          $scope.factura = data.data;
          console.log('esta es la factura buscada',$scope.factura)
          $scope.valorTotalFactura=$scope.factura.valorFactura;
          console.log('este es el valor total de la factura',$scope.valorTotalFactura)
        },
        function error(err) {
          console.log(err);
        }
      )
    }
    $scope.buscarProductosPorFactura = function(){
      console.log('llamo buscar productos por factura')
      $http.get(masterUrl+'/DetallefacturaApi?idFacturaProd=' + $stateParams.idFactura)
        .then(
        function success(data) {
          $scope.detallefacturas = data.data;
          console.log('detalle facturas',$scope.detallefacturas)

        },
        function error(err) {
          console.log(err);
        }
      )

    }
    $scope.buscarFactura()
    $scope.buscarProductosPorFactura()
    $scope.crearDetalleFactura = function () {

      $http.post(masterUrl+'/DetalleFacturaApi', $scope.nuevoDetalle)
        .then(
        function success(data) {
          console.log(data);
          $scope.productoSeleccionado.valor = 0
          $scope.nuevoDetalle = {
            valorSinIva: '',
            valorConIva: '',
            idProducto:'',
            idFacturaProd: $stateParams.idFactura,
            cantidad: '',
            valor: $scope.productoSeleccionado.valor

          }
          $scope.buscarProductosPorFactura()
        },
        function error(err) {
          toastr.options.positionClass = 'toast-bottom-center'
          toastr.warning('El detalle esta incorrecto o ya existe')

          console.log(err);
        })

    }
    $scope.ocultarBotonAgregar = function () {
      $scope.botones.agregarProveedor = !$scope.botones.agregarProveedor;
    };
    $scope.verProveedores = function () {
      $scope.botones.verTabla = !$scope.botones.verTabla;
    };
    $scope.seleccionarFactura2 = function () {

      var modalFactura = $uibModal.open({
        templateUrl: './rutas/Modal/facturamodal.html',
        controller: 'facturaModalCtrl',
        size: 'lg',
        //        resolve: {
        //          items: function () {
        //            return $ctrl.items;
        //          }
        //        }
      });

      modalFactura.result
        .then(
        function success(factura) {
          console.log('Selecciono el Cliente: ', factura.id)
          $scope.idFacturaProd = factura.id
          toastr.info('Selecciono la factura con valor ' + factura.valorFactura + ' emitida el' + factura.fechaEmision)
          console.log($scope.nuevaFactura);
        },
        function error() {
          console.log('El usuario cerro el modal en la fecha: ' + new Date());
        });


    }
    $scope.comparar= function(vector,valorTotal){

      for(var i=0;i<vector.length;i++){
        $scope.sumatoriaDetalles+=vector[i].valorConIva
      }
      if($scope.sumatoriaDetalles == valorTotal && $scope.sumatoriaDetalles != 0){
        $scope.bloquearCrearDet=true;
        console.log('valores de detalles iguales al total')
      }
    }

  }])


