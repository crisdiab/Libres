/**
 * Created by crist on 11/02/2017.
 */
aplicacion.controller('detalleGastosPctrl', [
  '$scope',
'ConsultasFactory',
  'facturafactory',
  '$http',
  '$cookies',
  function ($scope,ConsultasFactory,facturafactory, $http,$cookies) {


  //variables
    $scope.busqueda=''
    $scope.periodo=''
    $scope.idUsuario = $cookies.get('UsuarioId')
    $scope.facturas=[]
    $scope.meses=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
    $scope.tipos={
      alimento:0,
      vivienda:0,
      salud:0,
      educacion:0,
      vestimenta:0,
      otros:0

    }
    $scope.iva=0
    $scope.totSinIva=0

    $scope.facturaDetalles=[]


    $scope.bloquearBuscar=false;




    //funciones

    $scope.agregarMesaFactura=function (facturas) {
      console.log('llego facturas',facturas)


      for(var i =0;i<facturas.length;i++){
        console.log('este el al fecha emison',facturas[i].fechaEmision)
        $scope.aux=$scope.entregarMes(facturas[i].fechaEmision)
        switch($scope.aux){
          case '01':
            facturafactory
              .actualizar({
                id: facturas[i].id
              }, {
                mes : 'Enero'
              })
              .$promise
              .then(
                function (respuesta) {

                  console.log('actualizo enero')

                },
                function (error) {
                  console.log(error);
                });
            break;
          case '02':
            facturafactory
              .actualizar({
                id: facturas[i].id
              }, {
                mes : 'Febrero'
              })
              .$promise
              .then(
                function (respuesta) {

                  console.log('actualizo febreo')

                },
                function (error) {
                  console.log(error);
                });
            break;
          case '03':
            facturafactory
              .actualizar({
                id: facturas[i].id
              }, {
                mes : 'Marzo'
              })
              .$promise
              .then(
                function (respuesta) {

                  console.log('actualizo marzo')

                },
                function (error) {
                  console.log(error);
                });
            break;
          case '04':
            facturafactory
              .actualizar({
                id: facturas[i].id
              }, {
                mes : 'Abril'
              })
              .$promise
              .then(
                function (respuesta) {

                  console.log('actualizo abril')

                },
                function (error) {
                  console.log(error);
                });
            break;
          case '05':
            facturafactory
              .actualizar({
                id: facturas[i].id
              }, {
                mes : 'Mayo'
              })
              .$promise
              .then(
                function (respuesta) {

                  console.log('actualizo mayo')

                },
                function (error) {
                  console.log(error);
                });
            break;
          case '06':
            facturafactory
              .actualizar({
                id: facturas[i].id
              }, {
                mes : 'Junio'
              })
              .$promise
              .then(
                function (respuesta) {

                  console.log('actualizo Junio')

                },
                function (error) {
                  console.log(error);
                });
            break;
          case '07':
            facturafactory
              .actualizar({
                id: facturas[i].id
              }, {
                mes : 'Julio'
              })
              .$promise
              .then(
                function (respuesta) {

                  console.log('actualizo lulio')

                },
                function (error) {
                  console.log(error);
                });
            break;
          case '08':
            facturafactory
              .actualizar({
                id: facturas[i].id
              }, {
                mes : 'Agosto'
              })
              .$promise
              .then(
                function (respuesta) {

                  console.log('actualizo Agosto')

                },
                function (error) {
                  console.log(error);
                });
            break;
          case '09':
            facturafactory
              .actualizar({
                id: facturas[i].id
              }, {
                mes : 'Septiembre'
              })
              .$promise
              .then(
                function (respuesta) {

                  console.log('actualizo septiembre')

                },
                function (error) {
                  console.log(error);
                });
            break;
          case '10':
            facturafactory
              .actualizar({
                id: facturas[i].id
              }, {
                mes : 'Octubre'
              })
              .$promise
              .then(
                function (respuesta) {

                  console.log('actualizo Octubre')

                },
                function (error) {
                  console.log(error);
                });
            break;
          case '11':
            facturafactory
              .actualizar({
                id: facturas[i].id
              }, {
                mes : 'Noviembre'
              })
              .$promise
              .then(
                function (respuesta) {

                  console.log('actualizo noviembre')

                },
                function (error) {
                  console.log(error);
                });
            break;
          case '12':
            facturafactory
              .actualizar({
                id: facturas[i].id
              }, {
                mes : 'Diciembre'
              })
              .$promise
              .then(
                function (respuesta) {

                  console.log('actualizo diciembre')

                },
                function (error) {
                  console.log(error);
                });
            break;

        }

      }

    }
    $scope.entregarMes= function(fecha){
      $scope.splitfecha= fecha
      $scope.year = fecha.split('-')
      fecha= $scope.year[1];
      console.log('mes',fecha)
      return fecha;

    }
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
            $scope.agregarMesaFactura($scope.facturas)
            $scope.precioPorTipo($scope.facturas)
            $scope.calcularTotal($scope.facturas)

          },
          function (error) {
            console.log(error);
          });
    }
    $scope.FacturasXusuario();

    $scope.precioPorTipo=function (facturas) {

     for(var i =0 ; i<facturas.length;i++){

       for(var j=0;j<facturas[i].facturas.length;j++){
         switch(facturas[i].facturas[j].idProducto){
           case 1:
             facturafactory
               .actualizar({
                 id: facturas[i].id
               }, {
                 salud : facturas[i].facturas[j].valorSinIva
               })
               .$promise
               .then(
                 function (respuesta) {

                   console.log('actualizo salud')

                 },
                 function (error) {
                   console.log(error);
                 });

             break;
           case 2:
             facturafactory
               .actualizar({
                 id: facturas[i].id
               }, {
                 alimentos : facturas[i].facturas[j].valorSinIva
               })
               .$promise
               .then(
                 function (respuesta) {

                   console.log('actualizo alimentos')

                 },
                 function (error) {
                   console.log(error);
                 });

             break;
           case 3:
             facturafactory
               .actualizar({
                 id: facturas[i].id
               }, {
                 educacion : facturas[i].facturas[j].valorSinIva
               })
               .$promise
               .then(
                 function (respuesta) {

                   console.log('actualizo educacion')

                 },
                 function (error) {
                   console.log(error);
                 });

             break;
           case 4:
             facturafactory
               .actualizar({
                 id: facturas[i].id
               }, {
                 vivienda : facturas[i].facturas[j].valorSinIva
               })
               .$promise
               .then(
                 function (respuesta) {

                   console.log('actualizo vivienda')

                 },
                 function (error) {
                   console.log(error);
                 });

             break;
           case 5:
             facturafactory
               .actualizar({
                 id: facturas[i].id
               }, {
                 vestimenta : facturas[i].facturas[j].valorSinIva
               })
               .$promise
               .then(
                 function (respuesta) {

                   console.log('actualizo vestimenta')

                 },
                 function (error) {
                   console.log(error);
                 });

             break;
           case 6:
             facturafactory
               .actualizar({
                 id: facturas[i].id
               }, {
                 otros : facturas[i].facturas[j].valorSinIva
               })
               .$promise
               .then(
                 function (respuesta) {

                   console.log('actualizo otros')

                 },
                 function (error) {
                   console.log(error);
                 });

             break;
         }
       }
     }


    }


    $scope.buscarPorPeriodo=function (periodo,facturas) {

      $scope.bloquearBuscar=true;
      for(var i=0  ;i<facturas.length;i++){
        if(periodo==facturas[i].periodo){

          $scope.facturaDetalles.push(facturas[i]);
        }
        else{
          toastr.warning("No existen facturas del periodo ingresado");
        }
      }

    }
    $scope.calcularTotal = function (facturas) {

      for(var i=0;i<facturas.length;i++){

       $scope.totSinIva = facturas[i].alimentos+facturas[i].educacion+facturas[i].vivienda+facturas[i].salud+facturas[i].vestimenta+facturas[i].otros;
       $scope.iva= facturas[i].valorFactura - $scope.totSinIva;
        facturafactory
          .actualizar({
            id: facturas[i].id
          }, {
            TotalSinIva : $scope.totSinIva,
            Iva : $scope.iva

          })
          .$promise
          .then(
            function (respuesta) {

              console.log('actualizo ')

            },
            function (error) {
              console.log(error);
            });
      }
    }
    $scope.Limpiar=function () {
      $scope.bloquearBuscar=false;
      $scope.tipos={
        alimento:0,
        vivienda:0,
        salud:0,
        educacion:0,
        vestimenta:0,
        otros:0

      }
      $scope.iva=0
      $scope.totSinIva=0

      $scope.facturaDetalles=[]
      $scope.busqueda=''
      $scope.periodo=''
    }

    $scope.exportarDetallesGp= function(factura){
      // var roundEd = (Math.round(Se*100)/100).toFixed(2);


      if(factura.length==0){
        toastr.error('Atencion No hay nada que exportar')
      }
      else{



        var arregloDatos= []

        var data = [
          [' -----  ','Resumen de Gastos Personales',' ------','---'],
          ['Año',$scope.periodo,'Usuario'],
          ['',''],
          ['Numero de Factura','Proveedor','Mes','Fecha de Emision','Vivienda','Alimentacion','Salud','Educacion','Vestimenta','Otros','Total Sin Iva','Total Con Iva'],


        ];
        var dataIndex = 4;
        data[0].push(arregloDatos)


        console.log(data)
       //
        var arregloDatos= []
        for(var i= 0 ; i<factura.length;i++){
          data[dataIndex]=[
            (factura[i].numFactura),
            factura[i].idProveedor.nombre,
            factura[i].mes,
            factura[i].fechaEmision,
            factura[i].vivienda,
            factura[i].alimentos,
            factura[i].salud,
            factura[i].educacion,
            factura[i].vestimenta,
            factura[i].otros,
            factura[i].TotalSinIva,
            factura[i].valorFactura,

          ];
          dataIndex++;
        }
        console.log(data);
        dataIndex = 4;
        //

        var csvContent = '';
        data.forEach(function (infoArray, index) {
          dataString = infoArray.join(';');
          csvContent += index < data.length ? dataString + '\n' : dataString;
        });

        var download = function(content, fileName, mimeType) {
          var a = document.createElement('a');
          mimeType = mimeType || 'application/octet-stream';

          if (navigator.msSaveBlob) { // IE10
            return navigator.msSaveBlob(new Blob([content], { type: mimeType }), fileName);
          } else if ('download' in a) { //html5 A[download]
            a.href = 'data:' + mimeType + ',' + encodeURIComponent(content);
            a.setAttribute('download', fileName);
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            return true;
          } else { //do iframe dataURL download (old ch+FF):
            var f = document.createElement('iframe');
            document.body.appendChild(f);
            f.src = 'data:' + mimeType + ',' + encodeURIComponent(content);

            setTimeout(function() {
              document.body.removeChild(f);
            }, 333);
            return true;
          }
        }

        download(csvContent, 'csv file.csv', 'text/csv');
      }


    }


  }]);
