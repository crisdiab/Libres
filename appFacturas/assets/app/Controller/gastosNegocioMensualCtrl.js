/**
 * Created by crist on 12/02/2017.
 */
/**
 * Created by Cristian on 07/02/2017.
 */
aplicacion.controller('gastosNegocioMensualCtrl', [
  '$scope',
  'ConsultasFactory',
  '$http',
  '$cookies',
  'limiteFactory',
  'facturafactory',
  function ($scope,ConsultasFactory, $http,$cookies,limiteFactory,facturafactory) {


    $scope.idUsuario = $cookies.get('UsuarioId')
    $scope.facturas=[]
    $scope.negXperiodo=[]
    $scope.factXtipo={
      Enero:[],
      Febrero:[],
      Marzo:[],
      Abril:[],
      Mayo:[],
      Junio:[],
      Julio:[],
      Agosto:[],
      Septiembre:[],
      Octubre:[],
      Noviembre:[],
      Diciembre:[]
    };
    $scope.factXmes=[]
    $scope.periodo='';
    $scope.sumas = {
      mercaderia:0,//7
      arriendo:0,//8
      serviciosBasico:0,//9
      sueldos:0,//10
      movilizacion:0,//11
      viaticos:0,//12
      capacitacion:0,//13
      suministros:0,//14
      herramientas:0,//15
      otros:0,//16
      mercaderia1:0,//7
      arriendo1:0,//8
      serviciosBasico1:0,//9
      sueldos1:0,//10
      movilizacion1:0,//11
      viaticos1:0,//12
      capacitacion1:0,//13
      suministros1:0,//14
      herramientas1:0,//15
      otros1:0,//16
      mercaderia2:0,//7
      arriendo2:0,//8
      serviciosBasico2:0,//9
      sueldos2:0,//10
      movilizacion2:0,//11
      viaticos2:0,//12
      capacitacion2:0,//13
      suministros2:0,//14
      herramientas2:0,//15
      otros2:0,//16
      mercaderia3:0,//7
      arriendo3:0,//8
      serviciosBasico3:0,//9
      sueldos3:0,//10
      movilizacion3:0,//11
      viaticos3:0,//12
      capacitacion3:0,//13
      suministros3:0,//14
      herramientas3:0,//15
      otros3:0,//16
      mercaderia4:0,//7
      arriendo4:0,//8
      serviciosBasico4:0,//9
      sueldos4:0,//10
      movilizacion4:0,//11
      viaticos4:0,//12
      capacitacion4:0,//13
      suministros4:0,//14
      herramientas4:0,//15
      otros4:0,//16
      mercaderia5:0,//7
      arriendo5:0,//8
      serviciosBasico5:0,//9
      sueldos5:0,//10
      movilizacion5:0,//11
      viaticos5:0,//12
      capacitacion5:0,//13
      suministros5:0,//14
      herramientas5:0,//15
      otros5:0,//16
      mercaderia6:0,//7
      arriendo6:0,//8
      serviciosBasico6:0,//9
      sueldos6:0,//10
      movilizacion6:0,//11
      viaticos6:0,//12
      capacitacion6:0,//13
      suministros6:0,//14
      herramientas6:0,//15
      otros6:0,//16
      mercaderia7:0,//7
      arriendo7:0,//8
      serviciosBasico7:0,//9
      sueldos7:0,//10
      movilizacion7:0,//11
      viaticos7:0,//12
      capacitacion7:0,//13
      suministros7:0,//14
      herramientas7:0,//15
      otros7:0,//16
      mercaderia8:0,//7
      arriendo8:0,//8
      serviciosBasico8:0,//9
      sueldos8:0,//10
      movilizacion8:0,//11
      viaticos8:0,//12
      capacitacion8:0,//13
      suministros8:0,//14
      herramientas8:0,//15
      otros8:0,//16
      mercaderia9:0,//7
      arriendo9:0,//8
      serviciosBasico9:0,//9
      sueldos9:0,//10
      movilizacion9:0,//11
      viaticos9:0,//12
      capacitacion9:0,//13
      suministros9:0,//14
      herramientas9:0,//15
      otros9:0,//16
      mercaderia10:0,//7
      arriendo10:0,//8
      serviciosBasico10:0,//9
      sueldos10:0,//10
      movilizacion10:0,//11
      viaticos10:0,//12
      capacitacion10:0,//13
      suministros10:0,//14
      herramientas10:0,//15
      otros10:0,//16
      mercaderia11:0,//7
      arriendo11:0,//8
      serviciosBasico11:0,//9
      sueldos11:0,//10
      movilizacion11:0,//11
      viaticos11:0,//12
      capacitacion11:0,//13
      suministros11:0,//14
      herramientas11:0,//15
      otros11:0,//16
      mercaderia12:0,//7
      arriendo12:0,//8
      serviciosBasico12:0,//9
      sueldos12:0,//10
      movilizacion12:0,//11
      viaticos12:0,//12
      capacitacion12:0,//13
      suministros12:0,//14
      herramientas12:0,//15
      otros12:0,//16


    }
    $scope.tipos={
      mercaderia:[],//7
      arriendo:[],//8
      serviciosBasico:[],//9
      sueldos:[],//10
      movilizacion:[],//11
      viaticos:[],//12
      capacitacion:[],//13
      suministros:[],//14
      herramientas:[],//15
      otros:[],//16
      mercaderia1:[],//7
      arriendo1:[],//8
      serviciosBasico1:[],//9
      sueldos1:[],//10
      movilizacion1:[],//11
      viaticos1:[],//12
      capacitacion1:[],//13
      suministros1:[],//14
      herramientas1:[],//15
      otros1:[],//16
      mercaderia2:[],//7
      arriendo2:[],//8
      serviciosBasico2:[],//9
      sueldos2:[],//10
      movilizacion2:[],//11
      viaticos2:[],//12
      capacitacion2:[],//13
      suministros2:[],//14
      herramientas2:[],//15
      otros2:[],//16
      mercaderia3:[],//7
      arriendo3:[],//8
      serviciosBasico3:[],//9
      sueldos3:[],//10
      movilizacion3:[],//11
      viaticos3:[],//12
      capacitacion3:[],//13
      suministros3:[],//14
      herramientas3:[],//15
      otros3:[],//16
      mercaderia4:[],//7
      arriendo4:[],//8
      serviciosBasico4:[],//9
      sueldos4:[],//10
      movilizacion4:[],//11
      viaticos4:[],//12
      capacitacion4:[],//13
      suministros4:[],//14
      herramientas4:[],//15
      otros4:[],//16
      mercaderia5:[],//7
      arriendo5:[],//8
      serviciosBasico5:[],//9
      sueldos5:[],//10
      movilizacion5:[],//11
      viaticos5:[],//12
      capacitacion5:[],//13
      suministros5:[],//14
      herramientas5:[],//15
      otros5:[],//16
      mercaderia6:[],//7
      arriendo6:[],//8
      serviciosBasico6:[],//9
      sueldos6:[],//10
      movilizacion6:[],//11
      viaticos6:[],//12
      capacitacion6:[],//13
      suministros6:[],//14
      herramientas6:[],//15
      otros6:[],//16
      mercaderia7:[],//7
      arriendo7:[],//8
      serviciosBasico7:[],//9
      sueldos7:[],//10
      movilizacion7:[],//11
      viaticos7:[],//12
      capacitacion7:[],//13
      suministros7:[],//14
      herramientas7:[],//15
      otros7:[],//16
      mercaderia8:[],//7
      arriendo8:[],//8
      serviciosBasico8:[],//9
      sueldos8:[],//10
      movilizacion8:[],//11
      viaticos8:[],//12
      capacitacion8:[],//13
      suministros8:[],//14
      herramientas8:[],//15
      otros8:[],//16
      mercaderia9:[],//7
      arriendo9:[],//8
      serviciosBasico9:[],//9
      sueldos9:[],//10
      movilizacion9:[],//11
      viaticos9:[],//12
      capacitacion9:[],//13
      suministros9:[],//14
      herramientas9:[],//15
      otros9:[],//16
      mercaderia10:[],//7
      arriendo10:[],//8
      serviciosBasico10:[],//9
      sueldos10:[],//10
      movilizacion10:[],//11
      viaticos10:[],//12
      capacitacion10:[],//13
      suministros10:[],//14
      herramientas10:[],//15
      otros10:[],//16
      mercaderia11:[],//7
      arriendo11:[],//8
      serviciosBasico11:[],//9
      sueldos11:[],//10
      movilizacion11:[],//11
      viaticos11:[],//12
      capacitacion11:[],//13
      suministros11:[],//14
      herramientas11:[],//15
      otros11:[],//16
      mercaderia12:[],//7
      arriendo12:[],//8
      serviciosBasico12:[],//9
      sueldos12:[],//10
      movilizacion12:[],//11
      viaticos12:[],//12
      capacitacion12:[],//13
      suministros12:[],//14
      herramientas12:[],//15
      otros12:[],//16

    }


    $scope.bloquearBuscar= false;
    $scope.ocultarDetalles=true;
    $scope.ocultarBusqueda=false;
    $scope.ocultarNC=false;





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

                  console.log('actualizo febrero')

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
           // console.log('facturas por cliente',respuesta)
            // console.log('facturas por cliente',$scope.facturas)
            $scope.agregarMesaFactura($scope.facturas)
          },
          function (error) {
            console.log(error);
          });
    }
    $scope.FacturasXusuario();
    $scope.NegxPeriodo = function (facturasIn,periodo) {

      $scope.ocultarBusqueda=true;
      $scope.ocultarDetalles=false;


      if(periodo == ''){
        toastr.error('Debe ingresar un periodo')
      }else{

        for(var i=0; i<facturasIn.length; i++){
          if(facturasIn[i].periodo==periodo){


            $scope.negXperiodo.push(facturasIn[i]);
            // console.log('facturas por peridoo ingresado',$scope.factXperiodo)
            // $scope.factXtipo.push(facturasIn[i].facturas)
            // console.log('ingresp facxtipo',$scope.factXtipo)


          }
        }
        if($scope.negXperiodo.length==0){
          console.log ('no hay facturas en el periodo')
          toastr.warning('No existen facturas en el periodo ingresado')
        }else{

          for(var k=0;k<$scope.negXperiodo.length; k++){
            switch($scope.factXperiodo[k].mes){
              case 'Enero':
                $scope.factXtipo.Enero.push($scope.factXperiodo[k].facturas)
                break;
              case 'Febrero':
                $scope.factXtipo.Febrero.push($scope.factXperiodo[k].facturas)
                break;
              case 'Marzo':
                $scope.factXtipo.Marzo.push($scope.factXperiodo[k].facturas)
                break;
              case 'Abril':
                $scope.factXtipo.Abril.push($scope.factXperiodo[k].facturas)
                break;
              case 'Mayo':
                $scope.factXtipo.Mayo.push($scope.factXperiodo[k].facturas)
                break;

              case 'Junio':
                $scope.factXtipo.Junio.push($scope.factXperiodo[k].facturas)
                break;
              case 'Julio':
                $scope.factXtipo.Julio.push($scope.factXperiodo[k].facturas)
                break;
              case 'Agosto':
                $scope.factXtipo.Agosto.push($scope.factXperiodo[k].facturas)
                break;
              case 'Septiembre':
                $scope.factXtipo.Septiembre.push($scope.factXperiodo[k].facturas)
                break;
              case 'Octubre':
                $scope.factXtipo.Octubre.push($scope.factXperiodo[k].facturas)
                break;
              case'Noviembre':
                $scope.factXtipo.Noviembre.push($scope.factXperiodo[k].facturas)
                break;
              case 'Diciembre':
                $scope.factXtipo.Diciembre.push($scope.factXperiodo[k].facturas)
                break;
            }



          }
          console.log('factX tipo preba',$scope.factXtipo)


          for(var a=0;a<$scope.factXtipo.Enero.length;a++){
            if($scope.factXtipo.Enero.length==0){
              console.log('no hay detalles')
            }else{
              for(var i=0;i<$scope.factXtipo.Enero.length;i++){

                for(var j = 0; j<$scope.factXtipo.Enero[i].length;j++){
                  if($scope.factXtipo.Enero[i].length==0){
                    console.log('no hay nada')
                  }else{

                    switch ($scope.factXtipo.Enero[i][j].idProducto){
                      case 7:
                        $scope.tipos.mercaderia1.push($scope.factXtipo.Enero[i][j].valorConIva);
                        break;
                      case 8:
                        $scope.tipos.arriendo1.push($scope.factXtipo.Enero[i][j].valorConIva);
                        break;
                      case 9:
                        $scope.tipos.serviciosBasico1.push($scope.factXtipo.Enero[i][j].valorConIva);
                        break;
                      case 10:
                        $scope.tipos.sueldos1.push($scope.factXtipo.Enero[i][j].valorConIva);
                        console.log('puso en sueldos enero')
                        break;
                      case 11:
                        $scope.tipos.movilizacion1.push($scope.factXtipo.Enero[i][j].valorConIva);
                        break;
                      case 12:
                        $scope.tipos.viaticos1.push($scope.factXtipo.Enero[i][j].valorConIva);
                        break;
                      case 13:
                        $scope.tipos.capacitacion1.push($scope.factXtipo.Enero[i][j].valorConIva);
                        break;
                      case 14:
                        $scope.tipos.suministros1.push($scope.factXtipo.Enero[i][j].valorConIva);
                        break;
                      case 15:
                        $scope.tipos.herramientas1.push($scope.factXtipo.Enero[i][j].valorConIva);
                        break;
                      case 16:
                        $scope.tipos.otros1.push($scope.factXtipo.Enero[i][j].valorConIva);
                        break;

                    }
                  }

                }



              }
            }
          }
          for(var d=0;d<$scope.factXtipo.Febrero.length;d++){
            if($scope.factXtipo.Febrero.length==0){
              console.log('no hay detalles')
            }else{
              for(var i=0;i<$scope.factXtipo.Febrero.length;i++){

                for(var j = 0; j<$scope.factXtipo.Febrero[i].length;j++){
                  if($scope.factXtipo.Febrero[i].length==0){
                    console.log('no hay nada')
                  }else{

                    switch ($scope.factXtipo.Febrero[i][j].idProducto){
                      case 7:
                        $scope.tipos.mercaderia2.push($scope.factXtipo.Febrero[i][j].valorConIva);
                        break;
                      case 8:
                        $scope.tipos.arriendo2.push($scope.factXtipo.Febrero[i][j].valorConIva);
                        break;
                      case 9:
                        $scope.tipos.serviciosBasico2.push($scope.factXtipo.Febrero[i][j].valorConIva);
                        break;
                      case 10:
                        $scope.tipos.sueldos2.push($scope.factXtipo.Febrero[i][j].valorConIva);
                        break;
                      case 11:
                        $scope.tipos.movilizacion2.push($scope.factXtipo.Febrero[i][j].valorConIva);
                        break;
                      case 12:
                        $scope.tipos.viaticos2.push($scope.factXtipo.Febrero[i][j].valorConIva);
                        break;
                      case 13:
                        $scope.tipos.capacitacion2.push($scope.factXtipo.Febrero[i][j].valorConIva);
                        break;
                      case 14:
                        $scope.tipos.suministros2.push($scope.factXtipo.Febrero[i][j].valorConIva);
                        break;
                      case 15:
                        $scope.tipos.herramientas2.push($scope.factXtipo.Febrero[i][j].valorConIva);
                        break;
                      case 16:
                        $scope.tipos.otros2.push($scope.factXtipo.Febrero[i][j].valorConIva);
                        break;

                    }
                  }

                }



              }
            }
          }
          for(var c=0;c<$scope.factXtipo.Marzo.length;c++){
            if($scope.factXtipo.Marzo.length==0){
              console.log('no hay detalles')
            }else{
              for(var i=0;i<$scope.factXtipo.Marzo.length;i++){

                for(var j = 0; j<$scope.factXtipo.Marzo[i].length;j++){
                  if($scope.factXtipo.Marzo[i].length==0){
                    console.log('no hay nada')
                  }else{

                    switch ($scope.factXtipo.Marzo[i][j].idProducto){
                      case 7:
                        $scope.tipos.mercaderia3.push($scope.factXtipo.Marzo[i][j].valorConIva);
                        break;
                      case 8:
                        $scope.tipos.arriendo3.push($scope.factXtipo.Marzo[i][j].valorConIva);
                        break;
                      case 9:
                        $scope.tipos.serviciosBasico3.push($scope.factXtipo.Marzo[i][j].valorConIva);
                        break;
                      case 10:
                        $scope.tipos.sueldos3.push($scope.factXtipo.Marzo[i][j].valorConIva);
                        break;
                      case 11:
                        $scope.tipos.movilizacion3.push($scope.factXtipo.Marzo[i][j].valorConIva);
                        break;
                      case 12:
                        $scope.tipos.viaticos3.push($scope.factXtipo.Marzo[i][j].valorConIva);
                        break;
                      case 13:
                        $scope.tipos.capacitacion3.push($scope.factXtipo.Marzo[i][j].valorConIva);
                        break;
                      case 14:
                        $scope.tipos.suministros3.push($scope.factXtipo.Marzo[i][j].valorConIva);
                        break;
                      case 15:
                        $scope.tipos.herramientas3.push($scope.factXtipo.Marzo[i][j].valorConIva);
                        break;
                      case 16:
                        $scope.tipos.otros3.push($scope.factXtipo.Marzo[i][j].valorConIva);
                        break;

                    }
                  }

                }



              }
            }
          }
          for(var d=0;d<$scope.factXtipo.Abril.length;d++){
            if($scope.factXtipo.Abril.length==0){
              console.log('no hay detalles')
            }else{
              for(var i=0;i<$scope.factXtipo.Abril.length;i++){

                for(var j = 0; j<$scope.factXtipo.Abril[i].length;j++){
                  if($scope.factXtipo.Abril[i].length==0){
                    console.log('no hay nada')
                  }else{

                    switch ($scope.factXtipo.Abril[i][j].idProducto){
                      case 7:
                        $scope.tipos.mercaderia4.push($scope.factXtipo.Abril[i][j].valorConIva);
                        break;
                      case 8:
                        $scope.tipos.arriendo4.push($scope.factXtipo.Abril[i][j].valorConIva);
                        break;
                      case 9:
                        $scope.tipos.serviciosBasico4.push($scope.factXtipo.Abril[i][j].valorConIva);
                        break;
                      case 10:
                        $scope.tipos.sueldos4.push($scope.factXtipo.Abril[i][j].valorConIva);
                        break;
                      case 11:
                        $scope.tipos.movilizacion4.push($scope.factXtipo.Abril[i][j].valorConIva);
                        break;
                      case 12:
                        $scope.tipos.viaticos4.push($scope.factXtipo.Abril[i][j].valorConIva);
                        break;
                      case 13:
                        $scope.tipos.capacitacion4.push($scope.factXtipo.Abril[i][j].valorConIva);
                        break;
                      case 14:
                        $scope.tipos.suministros4.push($scope.factXtipo.Abril[i][j].valorConIva);
                        break;
                      case 15:
                        $scope.tipos.herramientas4.push($scope.factXtipo.Abril[i][j].valorConIva);
                        break;
                      case 16:
                        $scope.tipos.otros4.push($scope.factXtipo.Abril[i][j].valorConIva);
                        break;

                    }
                  }

                }



              }
            }
          }
          for(var d=0;d<$scope.factXtipo.Mayo.length;d++){
            if($scope.factXtipo.Mayo.length==0){
              console.log('no hay detalles')
            }else{
              for(var i=0;i<$scope.factXtipo.Mayo.length;i++){

                for(var j = 0; j<$scope.factXtipo.Mayo[i].length;j++){
                  if($scope.factXtipo.Mayo[i].length==0){
                    console.log('no hay nada')
                  }else{

                    switch ($scope.factXtipo.Mayo[i][j].idProducto){
                      case 7:
                        $scope.tipos.mercaderia5.push($scope.factXtipo.Mayo[i][j].valorConIva);
                        break;
                      case 8:
                        $scope.tipos.arriendo5.push($scope.factXtipo.Mayo[i][j].valorConIva);
                        break;
                      case 9:
                        $scope.tipos.serviciosBasico5.push($scope.factXtipo.Mayo[i][j].valorConIva);
                        break;
                      case 10:
                        $scope.tipos.sueldos5.push($scope.factXtipo.Mayo[i][j].valorConIva);
                        break;
                      case 11:
                        $scope.tipos.movilizacion5.push($scope.factXtipo.Mayo[i][j].valorConIva);
                        break;
                      case 12:
                        $scope.tipos.viaticos5.push($scope.factXtipo.Mayo[i][j].valorConIva);
                        break;
                      case 13:
                        $scope.tipos.capacitacion5.push($scope.factXtipo.Mayo[i][j].valorConIva);
                        break;
                      case 14:
                        $scope.tipos.suministros5.push($scope.factXtipo.Mayo[i][j].valorConIva);
                        break;
                      case 15:
                        $scope.tipos.herramientas5.push($scope.factXtipo.Mayo[i][j].valorConIva);
                        break;
                      case 16:
                        $scope.tipos.otros5.push($scope.factXtipo.Mayo[i][j].valorConIva);
                        break;

                    }
                  }

                }



              }
            }
          }
          for(var d=0;d<$scope.factXtipo.Junio.length;d++){
            if($scope.factXtipo.Junio.length==0){
              console.log('no hay detalles')
            }else{
              for(var i=0;i<$scope.factXtipo.Junio.length;i++){

                for(var j = 0; j<$scope.factXtipo.Junio[i].length;j++){
                  if($scope.factXtipo.Junio[i].length==0){
                    console.log('no hay nada')
                  }else{

                    switch ($scope.factXtipo.Junio[i][j].idProducto){
                      case 7:
                        $scope.tipos.mercaderia6.push($scope.factXtipo.Junio[i][j].valorConIva);
                        break;
                      case 8:
                        $scope.tipos.arriendo6.push($scope.factXtipo.Junio[i][j].valorConIva);
                        break;
                      case 9:
                        $scope.tipos.serviciosBasico6.push($scope.factXtipo.Junio[i][j].valorConIva);
                        break;
                      case 10:
                        $scope.tipos.sueldos6.push($scope.factXtipo.Junio[i][j].valorConIva);
                        break;
                      case 11:
                        $scope.tipos.movilizacion6.push($scope.factXtipo.Junio[i][j].valorConIva);
                        break;
                      case 12:
                        $scope.tipos.viaticos6.push($scope.factXtipo.Junio[i][j].valorConIva);
                        break;
                      case 13:
                        $scope.tipos.capacitacion6.push($scope.factXtipo.Junio[i][j].valorConIva);
                        break;
                      case 14:
                        $scope.tipos.suministros6.push($scope.factXtipo.Junio[i][j].valorConIva);
                        break;
                      case 15:
                        $scope.tipos.herramientas6.push($scope.factXtipo.Junio[i][j].valorConIva);
                        break;
                      case 16:
                        $scope.tipos.otros6.push($scope.factXtipo.Junio[i][j].valorConIva);
                        break;

                    }
                  }

                }



              }
            }
          }
          for(var d=0;d<$scope.factXtipo.Julio.length;d++){
            if($scope.factXtipo.Julio.length==0){
              console.log('no hay detalles')
            }else{
              for(var i=0;i<$scope.factXtipo.Julio.length;i++){

                for(var j = 0; j<$scope.factXtipo.Julio[i].length;j++){
                  if($scope.factXtipo.Junio[i].length==0){
                    console.log('no hay nada')
                  }else{

                    switch ($scope.factXtipo.Julio[i][j].idProducto){
                      case 7:
                        $scope.tipos.mercaderia7.push($scope.factXtipo.Julio[i][j].valorConIva);
                        break;
                      case 8:
                        $scope.tipos.arriendo7.push($scope.factXtipo.Julio[i][j].valorConIva);
                        break;
                      case 9:
                        $scope.tipos.serviciosBasico7.push($scope.factXtipo.Julio[i][j].valorConIva);
                        break;
                      case 10:
                        $scope.tipos.sueldos7.push($scope.factXtipo.Julio[i][j].valorConIva);
                        break;
                      case 11:
                        $scope.tipos.movilizacion7.push($scope.factXtipo.Julio[i][j].valorConIva);
                        break;
                      case 12:
                        $scope.tipos.viaticos7.push($scope.factXtipo.Julio[i][j].valorConIva);
                        break;
                      case 13:
                        $scope.tipos.capacitacion7.push($scope.factXtipo.Julio[i][j].valorConIva);
                        break;
                      case 14:
                        $scope.tipos.suministros7.push($scope.factXtipo.Julio[i][j].valorConIva);
                        break;
                      case 15:
                        $scope.tipos.herramientas7.push($scope.factXtipo.Julio[i][j].valorConIva);
                        break;
                      case 16:
                        $scope.tipos.otros7.push($scope.factXtipo.Julio[i][j].valorConIva);
                        break;

                    }
                  }

                }



              }
            }
          }
          for(var d=0;d<$scope.factXtipo.Agosto.length;d++){
            if($scope.factXtipo.Agosto.length==0){
              console.log('no hay detalles')
            }else{
              for(var i=0;i<$scope.factXtipo.Agosto.length;i++){

                for(var j = 0; j<$scope.factXtipo.Agosto[i].length;j++){
                  if($scope.factXtipo.Agosto[i].length==0){
                    console.log('no hay nada')
                  }else{

                    switch ($scope.factXtipo.Agosto[i][j].idProducto){
                      case 7:
                        $scope.tipos.mercaderia8.push($scope.factXtipo.Agosto[i][j].valorConIva);
                        break;
                      case 8:
                        $scope.tipos.arriendo8.push($scope.factXtipo.Agosto[i][j].valorConIva);
                        break;
                      case 9:
                        $scope.tipos.serviciosBasico8.push($scope.factXtipo.Agosto[i][j].valorConIva);
                        break;
                      case 10:
                        $scope.tipos.sueldos8.push($scope.factXtipo.Agosto[i][j].valorConIva);
                        break;
                      case 11:
                        $scope.tipos.movilizacion8.push($scope.factXtipo.Agosto[i][j].valorConIva);
                        break;
                      case 12:
                        $scope.tipos.viaticos8.push($scope.factXtipo.Agosto[i][j].valorConIva);
                        break;
                      case 13:
                        $scope.tipos.capacitacion8.push($scope.factXtipo.Agosto[i][j].valorConIva);
                        break;
                      case 14:
                        $scope.tipos.suministros8.push($scope.factXtipo.Agosto[i][j].valorConIva);
                        break;
                      case 15:
                        $scope.tipos.herramientas8.push($scope.factXtipo.Agosto[i][j].valorConIva);
                        break;
                      case 16:
                        $scope.tipos.otros8.push($scope.factXtipo.Agosto[i][j].valorConIva);
                        break;

                    }
                  }

                }



              }
            }
          }
          for(var d=0;d<$scope.factXtipo.Septiembre.length;d++){
            if($scope.factXtipo.Septiembre.length==0){
              console.log('no hay detalles')
            }else{
              for(var i=0;i<$scope.factXtipo.Septiembre.length;i++){

                for(var j = 0; j<$scope.factXtipo.Septiembre[i].length;j++){
                  if($scope.factXtipo.Septiembre[i].length==0){
                    console.log('no hay nada')
                  }else{

                    switch ($scope.factXtipo.Septiembre[i][j].idProducto){
                      case 7:
                        $scope.tipos.mercaderia9.push($scope.factXtipo.Septiembre[i][j].valorConIva);
                        break;
                      case 8:
                        $scope.tipos.arriendo9.push($scope.factXtipo.Septiembre[i][j].valorConIva);
                        break;
                      case 9:
                        $scope.tipos.serviciosBasico9.push($scope.factXtipo.Septiembre[i][j].valorConIva);
                        break;
                      case 10:
                        $scope.tipos.sueldos9.push($scope.factXtipo.Septiembre[i][j].valorConIva);
                        break;
                      case 11:
                        $scope.tipos.movilizacion9.push($scope.factXtipo.Septiembre[i][j].valorConIva);
                        break;
                      case 12:
                        $scope.tipos.viaticos9.push($scope.factXtipo.Septiembre[i][j].valorConIva);
                        break;
                      case 13:
                        $scope.tipos.capacitacion9.push($scope.factXtipo.Septiembre[i][j].valorConIva);
                        break;
                      case 14:
                        $scope.tipos.suministros9.push($scope.factXtipo.Septiembre[i][j].valorConIva);
                        break;
                      case 15:
                        $scope.tipos.herramientas9.push($scope.factXtipo.Septiembre[i][j].valorConIva);
                        break;
                      case 16:
                        $scope.tipos.otros9.push($scope.factXtipo.Septiembre[i][j].valorConIva);
                        break;

                    }
                  }

                }



              }
            }
          }
          for(var d=0;d<$scope.factXtipo.Octubre.length;d++){
            if($scope.factXtipo.Octubre.length==0){
              console.log('no hay detalles')
            }else{
              for(var i=0;i<$scope.factXtipo.Octubre.length;i++){

                for(var j = 0; j<$scope.factXtipo.Octubre[i].length;j++){
                  if($scope.factXtipo.Octubre[i].length==0){
                    console.log('no hay nada')
                  }else{

                    switch ($scope.factXtipo.Octubre[i][j].idProducto){
                      case 7:
                        $scope.tipos.mercaderia10.push($scope.factXtipo.Octubre[i][j].valorConIva);
                        break;
                      case 8:
                        $scope.tipos.arriendo10.push($scope.factXtipo.Octubre[i][j].valorConIva);
                        break;
                      case 9:
                        $scope.tipos.serviciosBasico10.push($scope.factXtipo.Octubre[i][j].valorConIva);
                        break;
                      case 10:
                        $scope.tipos.sueldos10.push($scope.factXtipo.Octubre[i][j].valorConIva);
                        break;
                      case 11:
                        $scope.tipos.movilizacion10.push($scope.factXtipo.Octubre[i][j].valorConIva);
                        break;
                      case 12:
                        $scope.tipos.viaticos10.push($scope.factXtipo.Octubre[i][j].valorConIva);
                        break;
                      case 13:
                        $scope.tipos.capacitacion10.push($scope.factXtipo.Octubre[i][j].valorConIva);
                        break;
                      case 14:
                        $scope.tipos.suministros10.push($scope.factXtipo.Octubre[i][j].valorConIva);
                        break;
                      case 15:
                        $scope.tipos.herramientas10.push($scope.factXtipo.Octubre[i][j].valorConIva);
                        break;
                      case 16:
                        $scope.tipos.otros10.push($scope.factXtipo.Octubre[i][j].valorConIva);
                        break;

                    }
                  }

                }



              }
            }
          }
          for(var d=0;d<$scope.factXtipo.Noviembre.length;d++){
            if($scope.factXtipo.Noviembre.length==0){
              console.log('no hay detalles')
            }else{
              for(var i=0;i<$scope.factXtipo.Noviembre.length;i++){

                for(var j = 0; j<$scope.factXtipo.Noviembre[i].length;j++){
                  if($scope.factXtipo.Noviembre[i].length==0){
                    console.log('no hay nada')
                  }else{

                    switch ($scope.factXtipo.Noviembre[i][j].idProducto){
                      case 7:
                        $scope.tipos.mercaderia11.push($scope.factXtipo.Noviembre[i][j].valorConIva);
                        break;
                      case 8:
                        $scope.tipos.arriendo11.push($scope.factXtipo.Noviembre[i][j].valorConIva);
                        break;
                      case 9:
                        $scope.tipos.serviciosBasico11.push($scope.factXtipo.Noviembre[i][j].valorConIva);
                        break;
                      case 10:
                        $scope.tipos.sueldos11.push($scope.factXtipo.Noviembre[i][j].valorConIva);
                        break;
                      case 11:
                        $scope.tipos.movilizacion11.push($scope.factXtipo.Noviembre[i][j].valorConIva);
                        break;
                      case 12:
                        $scope.tipos.viaticos11.push($scope.factXtipo.Noviembre[i][j].valorConIva);
                        break;
                      case 13:
                        $scope.tipos.capacitacion11.push($scope.factXtipo.Noviembre[i][j].valorConIva);
                        break;
                      case 14:
                        $scope.tipos.suministros11.push($scope.factXtipo.Noviembre[i][j].valorConIva);
                        break;
                      case 15:
                        $scope.tipos.herramientas11.push($scope.factXtipo.Noviembre[i][j].valorConIva);
                        break;
                      case 16:
                        $scope.tipos.otros11.push($scope.factXtipo.Noviembre[i][j].valorConIva);
                        break;

                    }
                  }

                }



              }
            }
          }
          for(var d=0;d<$scope.factXtipo.Diciembre.length;d++){
            if($scope.factXtipo.Diciembre.length==0){
              console.log('no hay detalles')
            }else{
              for(var i=0;i<$scope.factXtipo.Diciembre.length;i++){

                for(var j = 0; j<$scope.factXtipo.Diciembre[i].length;j++){
                  if($scope.factXtipo.Diciembre[i].length==0){
                    console.log('no hay nada')
                  }else{

                    switch ($scope.factXtipo.Diciembre[i][j].idProducto){
                      case 7:
                        $scope.tipos.mercaderia3.push($scope.factXtipo.Diciembre[i][j].valorConIva);
                        break;
                      case 8:
                        $scope.tipos.arriendo3.push($scope.factXtipo.Diciembre[i][j].valorConIva);
                        break;
                      case 9:
                        $scope.tipos.serviciosBasico3.push($scope.factXtipo.Diciembre[i][j].valorConIva);
                        break;
                      case 10:
                        $scope.tipos.sueldos3.push($scope.factXtipo.Diciembre[i][j].valorConIva);
                        break;
                      case 11:
                        $scope.tipos.movilizacion3.push($scope.factXtipo.Diciembre[i][j].valorConIva);
                        break;
                      case 12:
                        $scope.tipos.viaticos3.push($scope.factXtipo.Diciembre[i][j].valorConIva);
                        break;
                      case 13:
                        $scope.tipos.capacitacion3.push($scope.factXtipo.Diciembre[i][j].valorConIva);
                        break;
                      case 14:
                        $scope.tipos.suministros3.push($scope.factXtipo.Diciembre[i][j].valorConIva);
                        break;
                      case 15:
                        $scope.tipos.herramientas3.push($scope.factXtipo.Diciembre[i][j].valorConIva);
                        break;
                      case 16:
                        $scope.tipos.otros3.push($scope.factXtipo.Diciembre[i][j].valorConIva);
                        break;

                    }
                  }

                }



              }
            }
          }






        }



      }

      console.log('facturas por periodo',$scope.factXperiodo)


    }


    $scope.nuevaBusqueda= function () {

      console.log('entro e nueva busqueda')



      $scope.factXperiodo=[]
      $scope.factXtipo={
        Enero:[],
        Febrero:[],
        Marzo:[],
        Abril:[],
        Mayo:[],
        Junio:[],
        Julio:[],
        Agosto:[],
        Septiembre:[],
        Octubre:[],
        Noviembre:[],
        Diciembre:[]
      };
      $scope.factXmes=[]
      $scope.periodo='';
      $scope.sumas = {
        mercaderia:0,//7
        arriendo:0,//8
        serviciosBasico:0,//9
        sueldos:0,//10
        movilizacion:0,//11
        viaticos:0,//12
        capacitacion:0,//13
        suministros:0,//14
        herramientas:0,//15
        otros:0,//16
        mercaderia1:0,//7
        arriendo1:0,//8
        serviciosBasico1:0,//9
        sueldos1:0,//10
        movilizacion1:0,//11
        viaticos1:0,//12
        capacitacion1:0,//13
        suministros1:0,//14
        herramientas1:0,//15
        otros1:0,//16
        mercaderia2:0,//7
        arriendo2:0,//8
        serviciosBasico2:0,//9
        sueldos2:0,//10
        movilizacion2:0,//11
        viaticos2:0,//12
        capacitacion2:0,//13
        suministros2:0,//14
        herramientas2:0,//15
        otros2:0,//16
        mercaderia3:0,//7
        arriendo3:0,//8
        serviciosBasico3:0,//9
        sueldos3:0,//10
        movilizacion3:0,//11
        viaticos3:0,//12
        capacitacion3:0,//13
        suministros3:0,//14
        herramientas3:0,//15
        otros3:0,//16
        mercaderia4:0,//7
        arriendo4:0,//8
        serviciosBasico4:0,//9
        sueldos4:0,//10
        movilizacion4:0,//11
        viaticos4:0,//12
        capacitacion4:0,//13
        suministros4:0,//14
        herramientas4:0,//15
        otros4:0,//16
        mercaderia5:0,//7
        arriendo5:0,//8
        serviciosBasico5:0,//9
        sueldos5:0,//10
        movilizacion5:0,//11
        viaticos5:0,//12
        capacitacion5:0,//13
        suministros5:0,//14
        herramientas5:0,//15
        otros5:0,//16
        mercaderia6:0,//7
        arriendo6:0,//8
        serviciosBasico6:0,//9
        sueldos6:0,//10
        movilizacion6:0,//11
        viaticos6:0,//12
        capacitacion6:0,//13
        suministros6:0,//14
        herramientas6:0,//15
        otros6:0,//16
        mercaderia7:0,//7
        arriendo7:0,//8
        serviciosBasico7:0,//9
        sueldos7:0,//10
        movilizacion7:0,//11
        viaticos7:0,//12
        capacitacion7:0,//13
        suministros7:0,//14
        herramientas7:0,//15
        otros7:0,//16
        mercaderia8:0,//7
        arriendo8:0,//8
        serviciosBasico8:0,//9
        sueldos8:0,//10
        movilizacion8:0,//11
        viaticos8:0,//12
        capacitacion8:0,//13
        suministros8:0,//14
        herramientas8:0,//15
        otros8:0,//16
        mercaderia9:0,//7
        arriendo9:0,//8
        serviciosBasico9:0,//9
        sueldos9:0,//10
        movilizacion9:0,//11
        viaticos9:0,//12
        capacitacion9:0,//13
        suministros9:0,//14
        herramientas9:0,//15
        otros9:0,//16
        mercaderia10:0,//7
        arriendo10:0,//8
        serviciosBasico10:0,//9
        sueldos10:0,//10
        movilizacion10:0,//11
        viaticos10:0,//12
        capacitacion10:0,//13
        suministros10:0,//14
        herramientas10:0,//15
        otros10:0,//16
        mercaderia11:0,//7
        arriendo11:0,//8
        serviciosBasico11:0,//9
        sueldos11:0,//10
        movilizacion11:0,//11
        viaticos11:0,//12
        capacitacion11:0,//13
        suministros11:0,//14
        herramientas11:0,//15
        otros11:0,//16
        mercaderia12:0,//7
        arriendo12:0,//8
        serviciosBasico12:0,//9
        sueldos12:0,//10
        movilizacion12:0,//11
        viaticos12:0,//12
        capacitacion12:0,//13
        suministros12:0,//14
        herramientas12:0,//15
        otros12:0,//16


      }
      $scope.tipos={
        mercaderia:[],//7
        arriendo:[],//8
        serviciosBasico:[],//9
        sueldos:[],//10
        movilizacion:[],//11
        viaticos:[],//12
        capacitacion:[],//13
        suministros:[],//14
        herramientas:[],//15
        otros:[],//16
        mercaderia1:[],//7
        arriendo1:[],//8
        serviciosBasico1:[],//9
        sueldos1:[],//10
        movilizacion1:[],//11
        viaticos1:[],//12
        capacitacion1:[],//13
        suministros1:[],//14
        herramientas1:[],//15
        otros1:[],//16
        mercaderia2:[],//7
        arriendo2:[],//8
        serviciosBasico2:[],//9
        sueldos2:[],//10
        movilizacion2:[],//11
        viaticos2:[],//12
        capacitacion2:[],//13
        suministros2:[],//14
        herramientas2:[],//15
        otros2:[],//16
        mercaderia3:[],//7
        arriendo3:[],//8
        serviciosBasico3:[],//9
        sueldos3:[],//10
        movilizacion3:[],//11
        viaticos3:[],//12
        capacitacion3:[],//13
        suministros3:[],//14
        herramientas3:[],//15
        otros3:[],//16
        mercaderia4:[],//7
        arriendo4:[],//8
        serviciosBasico4:[],//9
        sueldos4:[],//10
        movilizacion4:[],//11
        viaticos4:[],//12
        capacitacion4:[],//13
        suministros4:[],//14
        herramientas4:[],//15
        otros4:[],//16
        mercaderia5:[],//7
        arriendo5:[],//8
        serviciosBasico5:[],//9
        sueldos5:[],//10
        movilizacion5:[],//11
        viaticos5:[],//12
        capacitacion5:[],//13
        suministros5:[],//14
        herramientas5:[],//15
        otros5:[],//16
        mercaderia6:[],//7
        arriendo6:[],//8
        serviciosBasico6:[],//9
        sueldos6:[],//10
        movilizacion6:[],//11
        viaticos6:[],//12
        capacitacion6:[],//13
        suministros6:[],//14
        herramientas6:[],//15
        otros6:[],//16
        mercaderia7:[],//7
        arriendo7:[],//8
        serviciosBasico7:[],//9
        sueldos7:[],//10
        movilizacion7:[],//11
        viaticos7:[],//12
        capacitacion7:[],//13
        suministros7:[],//14
        herramientas7:[],//15
        otros7:[],//16
        mercaderia8:[],//7
        arriendo8:[],//8
        serviciosBasico8:[],//9
        sueldos8:[],//10
        movilizacion8:[],//11
        viaticos8:[],//12
        capacitacion8:[],//13
        suministros8:[],//14
        herramientas8:[],//15
        otros8:[],//16
        mercaderia9:[],//7
        arriendo9:[],//8
        serviciosBasico9:[],//9
        sueldos9:[],//10
        movilizacion9:[],//11
        viaticos9:[],//12
        capacitacion9:[],//13
        suministros9:[],//14
        herramientas9:[],//15
        otros9:[],//16
        mercaderia10:[],//7
        arriendo10:[],//8
        serviciosBasico10:[],//9
        sueldos10:[],//10
        movilizacion10:[],//11
        viaticos10:[],//12
        capacitacion10:[],//13
        suministros10:[],//14
        herramientas10:[],//15
        otros10:[],//16
        mercaderia11:[],//7
        arriendo11:[],//8
        serviciosBasico11:[],//9
        sueldos11:[],//10
        movilizacion11:[],//11
        viaticos11:[],//12
        capacitacion11:[],//13
        suministros11:[],//14
        herramientas11:[],//15
        otros11:[],//16
        mercaderia12:[],//7
        arriendo12:[],//8
        serviciosBasico12:[],//9
        sueldos12:[],//10
        movilizacion12:[],//11
        viaticos12:[],//12
        capacitacion12:[],//13
        suministros12:[],//14
        herramientas12:[],//15
        otros12:[],//16

      }

    }

    $scope.sumaCategoria = function(vector,sumarTipo) {
      // console.log('lelgo vector',vector)
      // console.log('llego sumartipo',sumarTipo)
    //  console.log('llego vecto',vector)
      if(vector.length == 0){
        return sumarTipo=sumarTipo;
      }else{
        for(var i=0; i<vector.length; i++){
          sumarTipo+=vector[i];
        }
        return sumarTipo=sumarTipo;
      }
    }

    $scope.exportarGP= function(Se,De,Sv,Dv,Ss,Ds,Sa,Da,So,Do,Sves,Dves,nombre){
      var roundEd = (Math.round(Se*100)/100).toFixed(2);
      var roundV = (Math.round(Sv*100)/100).toFixed(2);
      var roundS =(Math.round(Ss*100)/100).toFixed(2);
      var rounda = (Math.round(Sa*100)/100).toFixed(2);
      var roundo= (Math.round(So*100)/100).toFixed(2);
      var roundves =(Math.round(Sves*100)/100).toFixed(2);

      var roundDe =(Math.round(De*100)/100).toFixed(2);
      var roundDv = (Math.round(Dv*100)/100).toFixed(2);
      var roundDs = (Math.round(Ds*100)/100).toFixed(2);
      var roundDa = (Math.round(Da*100)/100).toFixed(2);
      var roundDo =(Math.round(Do*100)/100).toFixed(2);
      var roundDves = (Math.round(Dves*100)/100).toFixed(2);

      var data = [
        [' -----  ','Resumen de Gastos Personales',' ------','---'],
        ['Año',$scope.periodo,'Usuario',nombre],
        ['Categoria','Total','Limite','Diferencia'],
        ['Educacion',roundEd,$scope.limites.educacion,roundDe],
        ['Vivienda',roundV,$scope.limites.vivienda,roundDv],
        ['Salud',roundS,$scope.limites.salud,roundDs],
        ['Alimentacion',rounda,$scope.limites.alimentacion,roundDa],
        ['Vestido',roundves,$scope.limites.vestido,roundDves],
        ['Otros',roundo,$scope.limites.otros,roundDo],
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

    // $scope.exportarEXCEL=function () {
    //
    //   console.log('entro a exportar')
    //     //Creamos un Elemento Temporal en forma de enlace
    //     var tmpElemento = document.createElement('a');
    //     // obtenemos la información desde el div que lo contiene en el html
    //     // Obtenemos la información de la tabla
    //     var data_type = 'data:application/vnd.ms-excel';
    //
    //     var tabla_div = document.getElementById('tblReporte');
    //     var tabla_html = tabla_div.outerHTML.replace(/ /g, '%20');
    //     tmpElemento.href = data_type + ', ' + tabla_html;
    //     //Asignamos el nombre a nuestro EXCEL
    //     tmpElemento.download = 'Nombre_De_Mi_Excel.xls';
    //     // Simulamos el click al elemento creado para descargarlo
    //     tmpElemento.click();
    //
    // }
  }]);


