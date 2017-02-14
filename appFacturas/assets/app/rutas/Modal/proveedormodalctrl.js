aplicacion.controller('ProveedorModalCtrl', [
  '$scope',

  '$http',
  '$uibModalInstance',
  function ($scope, $http, $uibModalInstance) {

    $http.get(masterUrl+'/ProveedorApi')
      .then(
        function success(data) {
          console.log(data.data);
          $scope.proveedores = data.data;

        },
        function error(err) {
          console.log(err);
        });

    //$scope.seleccionado = {
    //  proveedor : proveedores[0]
    //}

    $scope.seleccionarProveedor = function (cliente) {


      $uibModalInstance.close(cliente);

      console.log('proveedor elegido'+cliente);

    }

    $scope.ok = function () {
      $uibModalInstance.close();
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };



    $scope.onlyNumbers = "/^[0-9]{10,10}$/;"
    $scope.filtroProveedor = '';



    $scope.nuevoProveedor = {
      nombre: '',
      Ruc: '',
      direccion: '',
      telefono: ''
    }

    $scope.crearProveedorCerrar = function () {

      $http.post(masterUrl+'/ProveedorApi', $scope.nuevoProveedor)
        .then(
          function success(ingreso) {
            console.log('Respondio el cliente cerrar esto: ', ingreso);
            $scope.nuevoProveedor = {
                nombre: '',
                Ruc: '',
                direccion: '',
                telefono: ''
              }
            $scope.proveedores.push(data.data);
              // console.log('data');
            $http.get(masterUrl+'/ProveedorApi')
              .then(
                function success(data) {
                  console.log(data.data);
                  $scope.proveedores = data.data;
                  console.log('id del proveeedor es '+$scope.proveedores[$scope.proveedores.length - 1].id);
                  $uibModalInstance.close($scope.proveedores[$scope.proveedores.length - 1]);

                },
                function error(err) {
                  toastr.options.positionClass = 'toast-bottom-center'
                  toastr.warning('El proveedor que ingreso ya existe')

                  console.log(err);
                });



          },
          function error(err) {
            console.log(err);
          })


    }




    $scope.validarRuc = function (ruc) {

      var acumulado = 0;
      var instancia;
      var ruclen = ruc.length;

      for (var i = 0; i < ruclen; i++) {
        var z = ruc.substring(i, i + 1);
        if ((z != "0") && (z != "1") && (z != "2") && (z != "3") && (z != "4") && (z != "5") && (z != "6") && (z != "7") && (z != "8") && (z != "9")) {
          //          alert("Ruc Invalido");
          toastr.options.preventDuplicates = true
          toastr.error('EL ruc ingresado  invalido')
          return;
        }
      }
      if (ruclen != 13) {
        //        alert("Ruc Invalido");
        toastr.options.preventDuplicates = true
        toastr.error('EL ruc ingresado  invalido')
        return;
      }
      if ((ruc.substring(0, 2) > 22) || (ruc.substring(0, 2) < 1)) {
        //        alert("Ruc Invalido");
        toastr.options.preventDuplicates = true
        toastr.error('EL ruc ingresado  invalido')
        return;
      }
      if (ruc.substring(2, 3) >= 6) {
        toastr.options.preventDuplicates = true
        toastr.error('EL ruc ingresado  invalido')
        return;
      }
      for (var i = 1; i <= 9; i++) {
        if (i % 2 != 0) {
          instancia = ruc.substring(i - 1, i) * 2;
          if (instancia > 9) instancia -= 9;
        } else instancia = ruc.substring(i - 1, i);
        acumulado += parseInt(instancia);
      }
      while (acumulado > 0)
        acumulado -= 10;
      if (ruc.substring(9, 10) != (acumulado * -1)) {
        //  alert("Ruc Invalido");
        toastr.options.preventDuplicates = true
        toastr.error('EL ruc ingresado  invalido')
        return;
      }
      if ((ruc.substring(10, 13) != 001) && (ruc.substring(10, 13) != 002) && (ruc.substring(10, 13) != 003)) {
        //alert("Ruc Invalido");
        toastr.options.preventDuplicates = true
        toastr.error('EL ruc ingresado  invalido')
        return;
      }
      toastr.options.preventDuplicates = true
      toastr.success('EL ruc ingresado es valido')
        //  alert("Ruc Valido");

    }
    $scope.ocultarBotonAgregar = function () {
      $scope.botones.agregarProveedor = !$scope.botones.agregarProveedor;
    };
    $scope.verProveedores = function () {
      $scope.botones.verTabla = !$scope.botones.verTabla;
    };


    //    toastr.options.preventDuplicates = true
    //    toastr.success('EL ruc ingresado es valido')

  }]);
