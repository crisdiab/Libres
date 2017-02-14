aplicacion.controller('ProveedorCtrl', [
  '$scope',
  'proveedorFactory',
  '$uibModal',
  '$http',
  function ($scope, proveedorFactory,$uibModal,$http) {

    $scope.proveedores = [];
    $scope.onlyNumbers = "/^[0-9]{10,10}$/;"
    $scope.filtroProveedor = '';
    $scope.botones = {
      agregarProveedor: false,
      verTabla: true
    };


    $scope.nuevoProveedor = {
      nombre: '',
      Ruc: '',
      direccion: '',
      telefono: ''
    }

    $scope.crearProveedor = function () {
      $http.post(masterUrl+'/ProveedorApi', $scope.nuevoProveedor)
        .then(
          function success(data) {
            console.log(data);
            if ($scope.proveedorForm) {
              $scope.proveedorForm.$setPristine();
              $scope.proveedorForm.$setUntouched();
            }

            $scope.nuevoProveedor = {
              nombre: '',
              Ruc: '',
              direccion: '',
              telefono: ''
            }
            $scope.proveedores.push(data.data);
          },
          function error(err) {
            toastr.options.positionClass = 'toast-bottom-center'
            toastr.warning('El Proveedor que ingreso ya existe')

            console.log(err);
          })

    }

   $scope.proveedoresTodos = function(){
     $http.get(masterUrl+'/ProveedorApi')
       .then(
       function success(data) {
         console.log(data.data);
         console.log(data.data[data.data.length - 1].id)
         $scope.proveedores = data.data;

       },
       function error(err) {
         console.log(err);
       });

   }
   $scope.proveedoresTodos();


    $scope.validarRuc = function (ruc) {




        var number = ruc
        var dto = number.length;
        var valor;
        var acu=0;
        if(number==""){

          toastr.error("No has ingresado ningún dato, porfavor ingresar los datos correspondientes.")
        }
        else{
          for (var i=0; i<dto; i++){
            valor = number.substring(i,i+1);
            if(valor==0||valor==1||valor==2||valor==3||valor==4||valor==5||valor==6||valor==7||valor==8||valor==9){
              acu = acu+1;
            }
          }
          if(acu==dto){
            while(number.substring(10,13)!=001){
              toastr.options.preventDuplicates = true
              toastr.warning('Los tres últimos dígitos no tienen el código del RUC 001.');
              return;
            }
            while(number.substring(0,2)>24){
              toastr.warning('Los dos primeros dígitos no pueden ser mayores a 24.');
              return;
            }
            toastr.success('El RUC está escrito correctamente');

            var porcion1 = number.substring(2,3);
            if(porcion1<6){
              toastr.info('El tercer dígito es menor a 6, por lo \ntanto el usuario es una persona natural.\n');
            }
            else{
              if(porcion1==6){
                toastr.info('El tercer dígito es igual a 6, por lo \ntanto el usuario es una entidad pública.\n');
              }
              else{
                if(porcion1==9){
                  toastr.info('El tercer dígito es igual a 9, por lo \ntanto el usuario es una sociedad privada.\n');
                }
              }
            }
          }
          else{
            toastr.error("ERROR: Por favor no ingrese texto");
          }
        }


    }
    $scope.ocultarBotonAgregar = function () {
      $scope.botones.agregarProveedor = !$scope.botones.agregarProveedor;
    };
    $scope.verProveedores = function () {
      $scope.botones.verTabla = !$scope.botones.verTabla;
    };
    $scope.actualizarProveedor = function (objetoProveedor) {
      console.log('recibi el objetoproveedor' + objetoProveedor,objetoProveedor)
      console.log(objetoProveedor.id+' este es el id proveedor')
      proveedorFactory
        .actualizar({
          idProveedor: objetoProveedor.id
        }, {
        nombre: objetoProveedor.nombre,
        Ruc: objetoProveedor.Ruc,
        direccion: objetoProveedor.direccion,
        telefono: objetoProveedor.telefono
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
    $scope.borrarProveedor = function (idProveedor) {

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
          proveedorFactory
            .delete({
            id: idProveedor
          })
            .$promise
            .then(
            function(respuesta) {

              console.log('borro correctamente')  ;
              toastr.success('Proveedor Eliminado Correctamente')
//              angular.forEach($scope.proveedores, function(proveedor, indiceProv) {
//                if (proveedor.id == id) {
//                  $scope.proveedores.splice(indiceProv, 1);
//                }
//              })
              $scope.proveedoresTodos()


            },
            function(error) {
              toastr.error('No se a podido eliminar el proveedor o no existe')
              console.log(error);
            });
        },
        function error() {
          console.log('El usuario cerro el modal en la fecha: ' + new Date());
        });


    }
    //    toastr.options.preventDuplicates = true
    //    toastr.success('EL ruc ingresado es valido')
  }]);


