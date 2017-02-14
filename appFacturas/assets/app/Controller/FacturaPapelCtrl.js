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
    // $scope.tipofact=0;
    $scope.iva=0;

    $scope.nuevaFactura = {
      idComprador:$scope.UsuarioCokie,
      idProveedor:'',
      numFactura:'',
      fechaEmision:'',
      valorFactura:0,
      periodo: '',
      alimentos:0,
      salud:0,
      vivienda:0,
      educacion:0,
      vestimenta:0,
      otros:0,
      totalSinIva:0,
      mercaderia:0,
      arriendo:0,
      serviciosBasicos:0,
      sueldos:0,
      movilizacion:0,
      viaticos:0,
      capacitacion:0,
      suministros:0,
      herramientas:0,
      tipoFactura:$scope.tipofact,
      mes:'',
      periodo:''
      

    }
    
    $scope.ocultargp=false;
    $scope.tipGasto='Gastos Personales';
    $scope.tipoDeGasto=['Gastos Personales','Gastos de Negocio'];
    
    $scope.CalcularSubtotal=function(factura,tipo){
     
     if(tipo==1){
       console.log('entro a tipo 1')
       
       var a = parseFloat(factura.alimentos)
      var b = parseFloat(factura.vestimenta)
      var c =parseFloat(factura.vivienda)
      var d =parseFloat(factura.educacion)
      var e =parseFloat(factura.salud)
      var f =parseFloat(factura.otros)
      
       $scope.nuevaFactura.totalSinIva=0;
      $scope.nuevaFactura.totalSinIva=(a+b+c+d+e+f).toFixed(2);
       }else{
         console.log('entro a tipo 2')
          $scope.nuevaFactura.totalSinIva=0
         var g=parseFloat(factura.mercaderia)
         var h=parseFloat(factura.arriendo)
         var i=parseFloat(factura.serviciosBasicos)
         var j=parseFloat(factura.sueldos)
         var k=parseFloat(factura.movilizacion)
         var l=parseFloat(factura.viaticos)
         var m=parseFloat(factura.capacitacion)
         var n=parseFloat(factura.suministros)
         var o=parseFloat(factura.herramientas)
         var p=parseFloat(factura.otros)
         $scope.nuevaFactura.totalSinIva=(g+h+i+j+k+l+m+n+o+p).toFixed(2);
       }
    }
    $scope.calcularTotal=function(subtotal,iva){
      var sub=parseFloat(subtotal)
      var iv= parseFloat(iva);
      $scope.nuevaFactura.valorFactura=((sub*(iv/100))+sub).toFixed(2);
    }
    $scope.verificartipoFact=function(tipoDeGasto){
       if(tipoDeGasto=='Gastos Personales'){
         $scope.nuevaFactura.tipoFactura=1;
       }
       if(tipoDeGasto=='Gastos de Negocio'){
         $scope.ocultargp=true;
         $scope.nuevaFactura.tipoFactura=2;
       }
     }
     $scope.entregarMes= function(fecha){
        $scope.splitfecha= fecha
        $scope.year = fecha.split('-')
        fecha= $scope.year[1];
        return fecha

      };
      $scope.entregarPeriodo= function(fecha){
        console.log('esta es la fecha',fecha)
        $scope.splitfecha= fecha
        $scope.year = fecha.split('-')
        fecha= $scope.year[0];
        return fecha

      };
     $scope.ActualizarInformacion = function (factura) {
console.log('factura',factura)

    
          
          //entregarPeriodo(objetoFactura[i].fechaEmision)

        facturafactory
          .actualizar({
            id: factura.id
          }, {
            periodo : $scope.entregarPeriodo(factura.fechaEmision),
            //mes:$scope.entregarMes(factura.fechaEmision)
          })
          .$promise
          .then(
            function (respuesta) {
        console.log('actualizo periodo')


            },
            function (error) {
              console.log(error);
            });


      


    }
    $scope.actualizarMes=function(factura){
      $scope.mes=$scope.entregarMes(factura.fechaEmision)
      
      switch($scope.mes){
        case '01':
           facturafactory
          .actualizar({
            id: factura.id
          }, {
            mes : 'Enero',
            //mes:$scope.entregarMes(factura.fechaEmision)
          })
          .$promise
          .then(
            function (respuesta) {


            console.log('act enero')
            },
            function (error) {
              console.log(error);
            });
          break;
                  case '02':
           facturafactory
          .actualizar({
            id: factura.id
          }, {
            mes : 'Febrero',
            //mes:$scope.entregarMes(factura.fechaEmision)
          })
          .$promise
          .then(
            function (respuesta) {

            console.log('act febrero')

            },
            function (error) {
              console.log(error);
            });
          break;
                  case '03':
           facturafactory
          .actualizar({
            id: factura.id
          }, {
            mes : 'Marzo',
            //mes:$scope.entregarMes(factura.fechaEmision)
          })
          .$promise
          .then(
            function (respuesta) {

            console.log('act marzo')

            },
            function (error) {
              console.log(error);
            });
          break;
                  case '04':
           facturafactory
          .actualizar({
            id: factura.id
          }, {
            mes : 'Abril',
            //mes:$scope.entregarMes(factura.fechaEmision)
          })
          .$promise
          .then(
            function (respuesta) {
            console.log('act abril')


            },
            function (error) {
              console.log(error);
            });
          break;
          case '05':
           facturafactory
          .actualizar({
            id: factura.id
          }, {
            mes : 'Mayo',
            //mes:$scope.entregarMes(factura.fechaEmision)
          })
          .$promise
          .then(
            function (respuesta) {
            console.log('act mayo')


            },
            function (error) {
              console.log(error);
            });
          break;
          case '06':
           facturafactory
          .actualizar({
            id: factura.id
          }, {
            mes : 'Junio',
            //mes:$scope.entregarMes(factura.fechaEmision)
          })
          .$promise
          .then(
            function (respuesta) {
            console.log('act junio')


            },
            function (error) {
              console.log(error);
            });
          break;
          case '07':
           facturafactory
          .actualizar({
            id: factura.id
          }, {
            mes : 'Julio',
            //mes:$scope.entregarMes(factura.fechaEmision)
          })
          .$promise
          .then(
            function (respuesta) {
            console.log('act Julio')


            },
            function (error) {
              console.log(error);
            });
          break;
          case '08':
           facturafactory
          .actualizar({
            id: factura.id
          }, {
            mes : 'Agosto',
            //mes:$scope.entregarMes(factura.fechaEmision)
          })
          .$promise
          .then(
            function (respuesta) {
            console.log('act agosto')


            },
            function (error) {
              console.log(error);
            });
          break;
          case '09':
           facturafactory
          .actualizar({
            id: factura.id
          }, {
            mes : 'Septiembre',
            //mes:$scope.entregarMes(factura.fechaEmision)
          })
          .$promise
          .then(
            function (respuesta) {
            console.log('act setp')


            },
            function (error) {
              console.log(error);
            });
          break;
          case '10':
           facturafactory
          .actualizar({
            id: factura.id
          }, {
            mes : 'Octubre',
            //mes:$scope.entregarMes(factura.fechaEmision)
          })
          .$promise
          .then(
            function (respuesta) {
            console.log('act oct')


            },
            function (error) {
              console.log(error);
            });
          break;
          case '11':
           facturafactory
          .actualizar({
            id: factura.id
          }, {
            mes : 'Noviembre',
            //mes:$scope.entregarMes(factura.fechaEmision)
          })
          .$promise
          .then(
            function (respuesta) {
            console.log('act nov')


            },
            function (error) {
              console.log(error);
            });
          break;
          case '12':
           facturafactory
          .actualizar({
            id: factura.id
          }, {
            mes : 'Diciembre',
            //mes:$scope.entregarMes(factura.fechaEmision)
          })
          .$promise
          .then(
            function (respuesta) {
            console.log('act dic')


            },
            function (error) {
              console.log(error);
            });
          break;




          
      }
      
      
    }
    
     $scope.limpiarFact=function(){
        $scope.iva=0;
$scope.ocultargp=false;
    $scope.nuevaFactura = {
      idComprador:$scope.UsuarioCokie,
      idProveedor:'',
      numFactura:'',
      fechaEmision:'',
      valorFactura:0,
      periodo: '',
      alimentos:0,
      salud:0,
      vivienda:0,
      educacion:0,
      vestimenta:0,
      otros:0,
      totalSinIva:0,
      mercaderia:0,
      arriendo:0,
      serviciosBasicos:0,
      sueldos:0,
      movilizacion:0,
      viaticos:0,
      capacitacion:0,
      suministros:0,
      herramientas:0,
      tipoFactura:$scope.tipofact,
      mes:'',
      periodo:''
      

    }
     }
     




    $scope.buscarFacturas = function(){
      $http.get(masterUrl+'/FacturaApi/')
        .then(
        function success(data) {
          $scope.facturas = data.data;
          for(var i = 0; i<$scope.facturas.length;i++){
          $scope.ActualizarInformacion($scope.facturas[i]) 
          $scope.actualizarMes($scope.facturas[i])
          }
          
          
          
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
      valorFactura:0,
      periodo: '',
      alimentos:0,
      salud:0,
      vivienda:0,
      educacion:0,
      vestimenta:0,
      otros:0,
      totalSinIva:0,
      mercaderia:0,
      arriendo:0,
      serviciosBasicos:0,
      sueldos:0,
      movilizacion:0,
      viaticos:0,
      capacitacion:0,
      suministros:0,
      herramientas:0,
      tipoFactura:$scope.tipofact,
      

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

    // $http.get(masterUrl+'/FacturaApi?idComprador='+$scope.UsuarioCokie )
    //   .then(
    //   function success(data) {
    //     console.log(data.data);
    //     $scope.facturas = data.data;

    //   },
    //   function error(err) {
    //     console.log(err);
    //   });



    $scope.ocultarBotonAgregar = function() {
      $scope.botones.clienteAgregar = !$scope.botones.clienteAgregar;
    };
    $scope.verClientes = function() {
      $scope.botones.verTabla = !$scope.botones.verTabla;
    };


  }]);


