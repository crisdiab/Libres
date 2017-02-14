/**
 * Created by crist on 11/02/2017.
 */
aplicacion.controller('gastosNegocioDetalleCtrl', [
  '$scope',
'ConsultasFactory',
  'facturafactory',
  '$http',
  '$cookies',
  function ($scope,ConsultasFactory,facturafactory, $http,$cookies) {


  //variables
    $scope.busqueda=''
   
    $scope.idUsuario = $cookies.get('UsuarioId')
    $scope.facturas=[]

    
   
     $scope.periodo=''
    $scope.facturaPorPeriodo=[];


    $scope.bloquearBuscar=false;




    //funciones

    
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
           
           

          },
          function (error) {
            console.log(error);
          });
    }
    $scope.FacturasXusuario();

   


    $scope.buscarPorPeriodo=function (periodo,facturas) {

      $scope.bloquearBuscar=true;
     if(periodo==''){
       toastr.warning('Debe ingresar un periodo')
       $scope.Limpiar();
     }else{
       for(var i = 0;i<facturas.length;i++){
         if(facturas[i].periodo==periodo&& facturas[i].tipoFactura==2){
           
            $scope.facturaPorPeriodo.push(facturas[i]);
         }
       }
       if( $scope.facturaPorPeriodo.length==0){
         toastr.info('No existen facturas en el periodo ingresado')
         $scope.Limpiar();
       }
     }

    }
    
    $scope.Limpiar=function () {
   $scope.periodo=''
    $scope.facturaPorPeriodo=[];


    $scope.bloquearBuscar=false;
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
          ['Numero de Factura',
          'Proveedor',
          'Mes',
          'Fecha de Emision',
          'Mercaderia',
          'Arriendo',
          'Servicios Basicos',
          'Sueldos',
          'Movilizacion',
          'Viaticos',
          'Capacitacion',
          'Suministros',
          'Herramientas',
          'Otros',
          'Total Sin Iva',
          'Total Con Iva'],


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
            factura[i].mercaderia,
            factura[i].arriendo,
            factura[i].serviciosBasicos,
            factura[i].sueldos,
            factura[i].movilizacion,
            factura[i].viaticos,
            factura[i].capacitacion,
            factura[i].suministros,
            factura[i].herramientas,
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
