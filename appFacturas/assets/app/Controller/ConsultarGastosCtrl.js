
aplicacion.controller('consultarGastos', [
  '$scope',
'facturafactory',
  'limiteFactory',
  '$http',
  '$cookies',
  function ($scope, facturafactory,limiteFactory,$http,$cookies) {

    $scope,limitesXperiodo=[];
    $scope.bloquearConsultar=true;
    $scope.bloquearNuevaConsulta=true;
    $scope.bloquearLimites=false;
    $scope.ShowLimites=true;
    $scope.showConsultar=true;
    $scope.botones={
      mostrarLimite :false,
    }

    $scope.facturasLlamadas=[];
    $scope.idUsuario = $cookies.get('UsuarioId')
    $scope.facturaConDetalles=[];
    $scope.Arreglos={
      Alimento:[],
      Salud:[],
      Vivienda:[],
      Educacion :[],
      GastosNegocio:[],
      Otros:[]
    }
    $scope.limites = {
      mensaje: '',
      alimentacion: 0,
      salud:0,
      vivienda:0,
      educacion:0,
      gastosPersonales:0

    }
    $scope.diferenciaLimite={
      difAlimento:0,
      difSalud : 0,
      difVivienda : 0 ,
      difEducacion : 0,
      difGN :0,
    };
    $scope.Sumas={
      sumarAlimentos:0,
      sumarSalud:0,
      sumarVivienda:0,
      sumarEducacion :0,
      sumarGastosNegocio:0,
      sumarOtros:0,

    }

    $scope.periodos=[
      2016,
      2017
    ]
    $scope.periodo=0;
    $scope.verLimitesXperiodo= function(periodo){

      $scope.periodo= periodo
      if(periodo==0){
        toastr.error('Debe seleccionar algun periodo')
        console.log('error no hay periodo')
      }else{
        $scope.bloquearLimites=true;
        $scope.bloquearConsultar=false;

        limiteFactory
          .buscarXperiodo({
            periodo: periodo
          })
          .$promise
          .then(
            function (respuesta) {

              $scope.limitesXperiodo=respuesta;


              if($scope.limitesXperiodo.length==0){
                console.log('error limites x periodo',$scope.limitesXperiodo)
              }else{
                for(var i =0; i<$scope.limitesXperiodo.length;i++){
                  $scope.asign=$scope.limitesXperiodo[i].nombre;

                  switch ($scope.asign){
                    case 'Salud':
                      $scope.limites.salud=$scope.limitesXperiodo[i].valor;

                      break;
                    case 'Alimentacion':
                      $scope.limites.alimentacion=$scope.limitesXperiodo[i].valor;
                      break;
                    case 'Educacion':
                      $scope.limites.educacion=$scope.limitesXperiodo[i].valor;
                      break;
                    case 'Vivienda':
                      $scope.limites.vivienda=$scope.limitesXperiodo[i].valor;
                      break;
                    case 'Gastos personales':
                      $scope.limites.gastosPersonales=$scope.limitesXperiodo[i].valor;
                      break;
                  }
                }
              }
            },
            function (error) {
              console.log(error);
            });
      }

    }
    $scope.sumaCategoria = function(vector,sumarTipo) {




      if(vector.length == 0){

        return sumarTipo=sumarTipo;
      }else{
        for(var i=0; i<vector.length; i++){


          sumarTipo+=vector[i];




        }
        return sumarTipo=sumarTipo;
      }





    }
    $scope.calcularLimites =function (limite,valor,tipodif) {

      if(valor>limite){
        $scope.limites.mensaje='Excedio los limites'
        return tipodif=0;
      }else{
        $scope.limites.mensaje='Dentro del los limites'
        tipodif=limite-valor;
        return tipodif=tipodif;
      }

    }
    function llamarDetalles(facturas,indice) {



      $scope.facturaConDetalles=facturas[indice].facturas;

      if($scope.facturaConDetalles==0){

        console.log('factura sin detalles')

      }else{

        for(var i=0; i<$scope.facturaConDetalles.length;i++){

          $scope.tipoFactura= facturas[indice].facturas[i].idProducto
          $scope.valorProductoId=facturas[indice].facturas[i].valorConIva

          switch($scope.tipoFactura){

            case 1:
              $scope.Arreglos.Alimento.push($scope.valorProductoId);

              break;
            case 2:
              $scope.Arreglos.Salud.push($scope.valorProductoId);

              break;
            case 3:
              $scope.Arreglos.Vivienda.push($scope.valorProductoId);

              break;
            case 4:
              $scope.Arreglos.Educacion.push($scope.valorProductoId);

              break;
            case 5:
              $scope.Arreglos.GastosNegocio.push($scope.valorProductoId);

              break;
            case 6:
              $scope.Arreglos.Otros.push($scope.valorProductoId);

              break;

          }


        };
      }


    }
    $scope.consultarFacturas=function (periodo) {

      $scope.bloquearConsultar=true;
      $scope.bloquearNuevaConsulta=false;
      facturafactory

        .facturaXid({
          idUsuario: $scope.idUsuario
        })
        .$promise
        .then(
          function (respuesta) {

            $scope.facturasLlamadas=respuesta;
            console.log(respuesta)
            if(periodo==0){
              toastr.error("Debe seleccionar un periodo para calcular")
            }else{

              for(var i=0;i<$scope.facturasLlamadas.length;i++){

                if(periodo == $scope.facturasLlamadas[i].periodo){
                  console.log('llego limite',$scope.facturasLlamadas[i].periodo)
                  llamarDetalles($scope.facturasLlamadas,i)
                }

              }
            }




          },
          function (error) {
            console.log(error);
          });
      $scope.bloquear=false;
    }
    $scope.nuevaConsulta= function () {


      $scope.bloquearLimites=false;

      $scope.bloquearNuevaConsulta=true;
      $scope.Arreglos={
        Alimento:[],
        Salud:[],
        Vivienda:[],
        Educacion :[],
        GastosNegocio:[],
        Otros:[]
      }

    }

    $scope.ocultarBotones = function() {
      $scope.botones.mostrarLimite = !$scope.botones.mostrarLimite;
    };

    // tE,tV,tS,tA,Tgp,lE,lV,lS,lA,lgp
    $scope.exportar= function(Se,De,Sv,Dv,Ss,Ds,Sa,Da,Sgp,Dgp){
      var roundEd = (Math.round(Se*100)/100).toFixed(2);
      var roundV = (Math.round(Sv*100)/100).toFixed(2);
      var roundS =(Math.round(Ss*100)/100).toFixed(2);
      var rounda = (Math.round(Sa*100)/100).toFixed(2);
      var roundgp= (Math.round(Sgp*100)/100).toFixed(2);

      var roundDe =(Math.round(De*100)/100).toFixed(2);
      var roundDv = (Math.round(Dv*100)/100).toFixed(2);
      var roundDs = (Math.round(Ds*100)/100).toFixed(2);
      var roundDa = (Math.round(Da*100)/100).toFixed(2);
      var roundDgp =(Math.round(Dgp*100)/100).toFixed(2);
      console.log('redondeo vear',roundEd)
      var data = [
        [' -----  ','Resumen de ','Gastos Personales',' ------'],
        ['Categoria','Total','Limite','Diferencia'],
        ['Educacion',roundEd,$scope.limites.educacion,roundDe],
        ['Vivienda',roundV,$scope.limites.vivienda,roundDv],
        ['Salud',roundS,$scope.limites.salud,roundDs],
        ['Alimentacion',rounda,$scope.limites.alimentacion,roundDa],
        ['Gastos Personales',roundgp,$scope.limites.gastosPersonales,roundDgp],
      ];
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
  }]);
