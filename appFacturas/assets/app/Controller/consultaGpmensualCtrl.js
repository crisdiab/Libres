/**
 * Created by Cristian on 07/02/2017.
 */
aplicacion.controller('consultaGpmensualCtrl', [
    '$scope',
    'ConsultasFactory',
    '$http',
    '$cookies',
    'limiteFactory',
    'facturafactory',
    function ($scope,ConsultasFactory, $http,$cookies,limiteFactory,facturafactory) {

//       //variables
//       $scope.idUsuario = $cookies.get('UsuarioId')
//       $scope.Facturas=[];
//       $scope.grupo={
//         enero:{
//           nombre:'Enero',
//           vector:[],
//           detalles:{
//             alimentos:[],
//             vivienda:[],
//             educacion:[],
//             vestido:[],
//             salud:[],
//             otros:[]
//           },
//           totalMes:{
//             alimentos:0,
//             vivienda:0,
//             educacion:0,
//             vestido:0,
//             salud:0,
//             otros:0
//           }
//
//         },
//         febrero:{
//           nombre:'Febrero',
//           vector:[],
//           detalles:{
//             alimentos:[],
//             vivienda:[],
//             educacion:[],
//             vestido:[],
//             salud:[],
//             otros:[]
//           },
//           totalMes:{
//             alimentos:0,
//             vivienda:0,
//             educacion:0,
//             vestido:0,
//             salud:0,
//             otros:0
//           }
//         },
//         marzo:{
//           vector:[],
//           nombre:'Marzo',
//           detalles:{
//             alimentos:[],
//             vivienda:[],
//             educacion:[],
//             vestido:[],
//             salud:[],
//             otros:[]
//           },
//           totalMes:{
//             alimentos:0,
//             vivienda:0,
//             educacion:0,
//             vestido:0,
//             salud:0,
//             otros:0
//           }
//         },
//         abril:{
//           vector:[],
//           nombre:'Abril',
//           detalles:{
//             alimentos:[],
//             vivienda:[],
//             educacion:[],
//             vestido:[],
//             salud:[],
//             otros:[]
//           },
//           totalMes:{
//             alimentos:0,
//             vivienda:0,
//             educacion:0,
//             vestido:0,
//             salud:0,
//             otros:0
//           }
//         },
//         mayo:{
//           vector:[],
//           nombre:'Mayo',
//           detalles:{
//             alimentos:[],
//             vivienda:[],
//             educacion:[],
//             vestido:[],
//             salud:[],
//             otros:[]
//           },
//           totalMes:{
//             alimentos:0,
//             vivienda:0,
//             educacion:0,
//             vestido:0,
//             salud:0,
//             otros:0
//           }
//         },
//         junio:{
//           vector:[],
//           nombre:'Junio',
//           detalles:{
//             alimentos:[],
//             vivienda:[],
//             educacion:[],
//             vestido:[],
//             salud:[],
//             otros:[]
//           },
//           totalMes:{
//             alimentos:0,
//             vivienda:0,
//             educacion:0,
//             vestido:0,
//             salud:0,
//             otros:0
//           }
//         },
//         julio:{
//           vector:[],
//           nombre:'Julio',
//           detalles:{
//             alimentos:[],
//             vivienda:[],
//             educacion:[],
//             vestido:[],
//             salud:[],
//             otros:[]
//           },
//           totalMes:{
//             alimentos:0,
//             vivienda:0,
//             educacion:0,
//             vestido:0,
//             salud:0,
//             otros:0
//           }
//         },
//         agosto:{
//           vector:[],
//           nombre:'Agosto',
//           detalles:{
//             alimentos:[],
//             vivienda:[],
//             educacion:[],
//             vestido:[],
//             salud:[],
//             otros:[]
//           },
//           totalMes:{
//             alimentos:0,
//             vivienda:0,
//             educacion:0,
//             vestido:0,
//             salud:0,
//             otros:0
//           }
//         },
//         septiembre:{
//           vector:[],
//           nombre:'Septiembre',
//           detalles:{
//             alimentos:[],
//             vivienda:[],
//             educacion:[],
//             vestido:[],
//             salud:[],
//             otros:[]
//           },
//           totalMes:{
//             alimentos:0,
//             vivienda:0,
//             educacion:0,
//             vestido:0,
//             salud:0,
//             otros:0
//           }
//         },
//         octubre:{
//           vector:[],
//           nombre:'Octubre',
//           detalles:{
//             alimentos:[],
//             vivienda:[],
//             educacion:[],
//             vestido:[],
//             salud:[],
//             otros:[]
//           },
//           totalMes:{
//             alimentos:0,
//             vivienda:0,
//             educacion:0,
//             vestido:0,
//             salud:0,
//             otros:0
//           }
//         },
//         noviembre:{
//           vector:[],
//           nombre:'Noviembre',
//           detalles:{
//             alimentos:[],
//             vivienda:[],
//             educacion:[],
//             vestido:[],
//             salud:[],
//             otros:[]
//           },
//           totalMes:{
//             alimentos:0,
//             vivienda:0,
//             educacion:0,
//             vestido:0,
//             salud:0,
//             otros:0
//           }
//         },
//         diciembre:{
//           vector:[],
//           nombre:'Diciembre',
//           detalles:{
//             alimentos:[],
//             vivienda:[],
//             educacion:[],
//             vestido:[],
//             salud:[],
//             otros:[]
//           },
//           totalMes:{
//             alimentos:0,
//             vivienda:0,
//             educacion:0,
//             vestido:0,
//             salud:0,
//             otros:0
//           }
//         },
//       }
//       $scope.facturasenPer= [];
//
//
//
//       //funciones
//
//       $scope.agregarMesaFactura=function (facturas) {
//
//
//
//           for(var i =0;i<facturas.length;i++){
//
//             $scope.aux=$scope.entregarMes(facturas[i].fechaEmision)
//               switch($scope.aux){
//                   case '01':
//                       facturafactory
//                           .actualizar({
//                               id: facturas[i].id
//                           }, {
//                               mes : 'Enero'
//                           })
//                           .$promise
//                           .then(
//                               function (respuesta) {
//
//                               console.log('actualizo enero')
//
//                               },
//                               function (error) {
//                                   console.log(error);
//                               });
//                       break;
//                   case '02':
//                       facturafactory
//                           .actualizar({
//                               id: facturas[i].id
//                           }, {
//                               mes : 'Febrero'
//                           })
//                           .$promise
//                           .then(
//                               function (respuesta) {
//
//                                   console.log('actualizo febreo')
//
//                               },
//                               function (error) {
//                                   console.log(error);
//                               });
//                       break;
//                   case '03':
//                       facturafactory
//                           .actualizar({
//                               id: facturas[i].id
//                           }, {
//                               mes : 'Marzo'
//                           })
//                           .$promise
//                           .then(
//                               function (respuesta) {
//
//                                   console.log('actualizo marzo')
//
//                               },
//                               function (error) {
//                                   console.log(error);
//                               });
//                       break;
//                   case '04':
//                       facturafactory
//                           .actualizar({
//                               id: facturas[i].id
//                           }, {
//                               mes : 'Abril'
//                           })
//                           .$promise
//                           .then(
//                               function (respuesta) {
//
//                                   console.log('actualizo abril')
//
//                               },
//                               function (error) {
//                                   console.log(error);
//                               });
//                       break;
//                   case '05':
//                       facturafactory
//                           .actualizar({
//                               id: facturas[i].id
//                           }, {
//                               mes : 'Mayo'
//                           })
//                           .$promise
//                           .then(
//                               function (respuesta) {
//
//                                   console.log('actualizo mayo')
//
//                               },
//                               function (error) {
//                                   console.log(error);
//                               });
//                       break;
//                   case '06':
//                       facturafactory
//                           .actualizar({
//                               id: facturas[i].id
//                           }, {
//                               mes : 'Junio'
//                           })
//                           .$promise
//                           .then(
//                               function (respuesta) {
//
//                                   console.log('actualizo Junio')
//
//                               },
//                               function (error) {
//                                   console.log(error);
//                               });
//                       break;
//                   case '07':
//                       facturafactory
//                           .actualizar({
//                               id: facturas[i].id
//                           }, {
//                               mes : 'Julio'
//                           })
//                           .$promise
//                           .then(
//                               function (respuesta) {
//
//                                   console.log('actualizo lulio')
//
//                               },
//                               function (error) {
//                                   console.log(error);
//                               });
//                       break;
//                   case '08':
//                       facturafactory
//                           .actualizar({
//                               id: facturas[i].id
//                           }, {
//                               mes : 'Agosto'
//                           })
//                           .$promise
//                           .then(
//                               function (respuesta) {
//
//                                   console.log('actualizo Agosto')
//
//                               },
//                               function (error) {
//                                   console.log(error);
//                               });
//                       break;
//                   case '09':
//                       facturafactory
//                           .actualizar({
//                               id: facturas[i].id
//                           }, {
//                               mes : 'Septiembre'
//                           })
//                           .$promise
//                           .then(
//                               function (respuesta) {
//
//                                   console.log('actualizo septiembre')
//
//                               },
//                               function (error) {
//                                   console.log(error);
//                               });
//                       break;
//                   case '10':
//                       facturafactory
//                           .actualizar({
//                               id: facturas[i].id
//                           }, {
//                               mes : 'Octubre'
//                           })
//                           .$promise
//                           .then(
//                               function (respuesta) {
//
//                                   console.log('actualizo Octubre')
//
//                               },
//                               function (error) {
//                                   console.log(error);
//                               });
//                       break;
//                   case '11':
//                       facturafactory
//                           .actualizar({
//                               id: facturas[i].id
//                           }, {
//                               mes : 'Noviembre'
//                           })
//                           .$promise
//                           .then(
//                               function (respuesta) {
//
//                                   console.log('actualizo noviembre')
//
//                               },
//                               function (error) {
//                                   console.log(error);
//                               });
//                       break;
//                   case '12':
//                       facturafactory
//                           .actualizar({
//                               id: facturas[i].id
//                           }, {
//                               mes : 'Diciembre'
//                           })
//                           .$promise
//                           .then(
//                               function (respuesta) {
//
//                                   console.log('actualizo diciembre')
//
//                               },
//                               function (error) {
//                                   console.log(error);
//                               });
//                       break;
//
//               }
//
//           }
//
//       };
//       $scope.entregarMes= function(fecha){
//         $scope.splitfecha= fecha
//         $scope.year = fecha.split('-')
//         fecha= $scope.year[1];
//         console.log('mes',fecha)
//         return fecha;
//
//       };
//       $scope.FacturasXusuario= function () {
//         ConsultasFactory
//           .buscarFacturaXid({
//             idComprador: $scope.idUsuario
//           })
//           .$promise
//           .then(
//             function (respuesta) {
//               $scope.Facturas=respuesta
//               console.log('facturas por cliente',respuesta)
//               // console.log('facturas por cliente',$scope.facturas)
//               $scope.agregarMesaFactura($scope.Facturas)
//             },
//             function (error) {
//               console.log(error);
//             });
//       };
//       $scope.FacturasXusuario();
//       $scope.facturasEnPeriodo=function (facturas,periodo) {
//
//         if(periodo==''){
//           toastr.error("Debe ingresar un periodo")
//         }else{
//           //todas las factuas en un perido
//           for(var i = 0 ; i< facturas.length ; i++){
//             if(periodo==facturas[i].periodo){
//               $scope.facturasenPer.push(facturas[i]);
//
//             }
//           }
//           console.log('fac en periodo',$scope.facturasenPer)
//           //llenar facturas en mes
//
//           for(var i = 0; i<$scope.facturasenPer.length;i++){
//             switch($scope.facturasenPer[i].mes){
//               case 'Enero':
//                 $scope.grupo.enero.vector.push($scope.facturasenPer[i].facturas);
//                 console.log('vector enero', $scope.grupo.enero.vector)
//
//                   for(var i=0;i<  $scope.grupo.enero.vector.length;i++){
//                     for(var j=0;j<  $scope.grupo.enero.vector[i].length;j++){
//                       if($scope.grupo.enero.vector[i].length==0){}
//                       // switch (  $scope.grupo.enero.vector)
//                     }
//                   }
//
//                 break;
//               case 'Febrero':
//                 break;
//               case 'Marzo':
//                 break;
//               case 'Abril':
//                 break;
//               case 'Mayo':
//                 break;
//               case 'Junio':
//                 break;
//               case 'Julio':
//                 break;
//               case 'Agosto':
//                 break;
//               case 'Septiembre':
//                 break;
//               case 'Octubre':
//                 break;
//               case 'Noviembre':
//                 break;
//               case 'Diciembre':
//                 break;
//
//
//
//
//             }
//           }
//
//
//
//
//         }
//
//       }

//fin ontro









      $scope.idUsuario = $cookies.get('UsuarioId')
      $scope.Facturas=[];
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
        console.log('consultas')
        $scope.periodo='';
        $scope.sumas = {
            Alimento:0,
            Vivienda:0,
            Vestido:0,
            Salud:0,
            Educacion:0,
            Otros:0,
            Alimento1:0,
            Vivienda1:0,
            Vestido1:0,
            Salud1:0,
            Educacion1:0,
            Otros1:0,
            Alimento2:0,
            Vivienda2:0,
            Vestido2:0,
            Salud2:0,
            Educacion2:0,
            Otros2:0,
            Alimento3:0,
            Vivienda3:0,
            Vestido3:0,
            Salud3:0,
            Educacion3:0,
            Otros3:0,
            Alimento4:0,
            Vivienda4:0,
            Vestido4:0,
            Salud4:0,
            Educacion4:0,
            Otros4:0,
            Alimento5:0,
            Vivienda5:0,
            Vestido5:0,
            Salud5:0,
            Educacion5:0,
            Otros5:0,
            Alimento6:0,
            Vivienda6:0,
            Vestido6:0,
            Salud6:0,
            Educacion6:0,
            Otros6:0,
            Alimento7:0,
            Vivienda7:0,
            Vestido7:0,
            Salud7:0,
            Educacion7:0,
            Otros7:0,
            Alimento8:0,
            Vivienda8:0,
            Vestido8:0,
            Salud8:0,
            Educacion8:0,
            Otros8:0,
            Alimento9:0,
            Vivienda9:0,
            Vestido9:0,
            Salud9:0,
            Educacion9:0,
            Otros9:0,
            Alimento10:0,
            Vivienda10:0,
            Vestido10:0,
            Salud10:0,
            Educacion10:0,
            Otros10:0,
            Alimento11:0,
            Vivienda11:0,
            Vestido11:0,
            Salud11:0,
            Educacion11:0,
            Otros11:0,
            Alimento12:0,
            Vivienda12:0,
            Vestido12:0,
            Salud12:0,
            Educacion12:0,
            Otros12:0


        }
        $scope.tipos={
            alimentos1:[],
            vivienda1:[],
            vestido1:[],
            salud1:[],
            educacion1:[],
            otros1:[],
            alimentos2:[],
            vivienda2:[],
            vestido2:[],
            salud2:[],
            educacion2:[],
            otros2:[],
            alimentos3:[],
            vivienda3:[],
            vestido3:[],
            salud3:[],
            educacion3:[],
            otros3:[],
            alimentos4:[],
            vivienda4:[],
            vestido4:[],
            salud4:[],
            educacion4:[],
            otros4:[],
            alimentos5:[],
            vivienda5:[],
            vestido5:[],
            salud5:[],
            educacion5:[],
            otros5:[],
            alimentos6:[],
            vivienda6:[],
            vestido6:[],
            salud6:[],
            educacion6:[],
            otros6:[],
            alimentos7:[],
            vivienda7:[],
            vestido7:[],
            salud7:[],
            educacion7:[],
            otros7:[],
            alimentos8:[],
            vivienda8:[],
            vestido8:[],
            salud8:[],
            educacion8:[],
            otros8:[],
            alimentos9:[],
            vivienda9:[],
            vestido9:[],
            salud9:[],
            educacion9:[],
            otros9:[],
            alimentos10:[],
            vivienda10:[],
            vestido10:[],
            salud10:[],
            educacion10:[],
            otros10:[],
            alimentos11:[],
            vivienda11:[],
            vestido11:[],
            salud11:[],
            educacion11:[],
            otros11:[],
            alimentos12:[],
            vivienda12:[],
            vestido12:[],
            salud12:[],
            educacion12:[],
            otros12:[],
            alimentos:[],
            vivienda:[],
            vestido:[],
            salud:[],
            educacion:[],
            otros:[]

        }
        $scope.limites = {
            mensaje: '',
            alimentacion: 0,
            salud:0,
            vivienda:0,
            educacion:0,
            otros:0,
            vestido:0

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

      };
      $scope.entregarMes= function(fecha){
        $scope.splitfecha= fecha
        $scope.year = fecha.split('-')
        fecha= $scope.year[1];
        console.log('mes',fecha)
        return fecha;

      };
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
            },
            function (error) {
              console.log(error);
            });
      };
      $scope.FacturasXusuario();




        $scope.FacturasXPeriodo = function (facturasIn,periodo) {

            $scope.ocultarBusqueda=true;
            $scope.ocultarDetalles=false;


            if(periodo == ''){
                toastr.error('Debe ingresar un periodo')
            }else{

                for(var i=0; i<facturasIn.length; i++){
                    if(facturasIn[i].periodo==periodo){


                        $scope.factXperiodo.push(facturasIn[i]);
                        // console.log('facturas por peridoo ingresado',$scope.factXperiodo)
                        // $scope.factXtipo.push(facturasIn[i].facturas)
                        // console.log('ingresp facxtipo',$scope.factXtipo)


                    }
                }
                if($scope.factXperiodo.length==0){
                    console.log ('no hay facturas en el periodo')
                    toastr.warning('No existen facturas en el periodo ingresado')
                }else{

                    for(var k=0;k<$scope.factXperiodo.length; k++){
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
                                            case 2:
                                                $scope.tipos.alimentos1.push($scope.factXtipo.Enero[i][j].valorConIva);
                                                break;
                                            case 4:
                                                $scope.tipos.vivienda1.push($scope.factXtipo.Enero[i][j].valorConIva);
                                                break;
                                            case 5:
                                                $scope.tipos.vestido1.push($scope.factXtipo.Enero[i][j].valorConIva);
                                                break;
                                            case 1:
                                                $scope.tipos.salud1.push($scope.factXtipo.Enero[i][j].valorConIva);
                                                break;
                                            case 3:
                                                $scope.tipos.educacion1.push($scope.factXtipo.Enero[i][j].valorConIva);
                                                break;
                                            case 6:
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
                                        console.log('que mierdas hace',$scope.factXtipo.Febrero[i][j].idProducto)
                                        switch ($scope.factXtipo.Febrero[i][j].idProducto){
                                            case 2:
                                                $scope.tipos.alimentos2.push($scope.factXtipo.Febrero[i][j].valorConIva);
                                                break;
                                            case 4:
                                                $scope.tipos.vivienda2.push($scope.factXtipo.Febrero[i][j].valorConIva);
                                                break;
                                            case 5:
                                                $scope.tipos.vestido2.push($scope.factXtipo.Febrero[i][j].valorConIva);
                                                break;
                                            case 1:
                                                $scope.tipos.salud2.push($scope.factXtipo.Febrero[i][j].valorConIva);
                                                break;
                                            case 3:
                                                $scope.tipos.educacion2.push($scope.factXtipo.Febrero[i][j].valorConIva);
                                                break;
                                            case 6:
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
                                            case 2:
                                                $scope.tipos.alimentos3.push($scope.factXtipo.Marzo[i][j].valorConIva);
                                                break;
                                            case 4:
                                                $scope.tipos.vivienda3.push($scope.factXtipo.Marzo[i][j].valorConIva);
                                                break;
                                            case 5:
                                                $scope.tipos.vestido3.push($scope.factXtipo.Marzo[i][j].valorConIva);
                                                break;
                                            case 1:
                                                $scope.tipos.salud3.push($scope.factXtipo.Marzo[i][j].valorConIva);
                                                break;
                                            case 3:
                                                $scope.tipos.educacion3.push($scope.factXtipo.Marzo[i][j].valorConIva);
                                                break;
                                            case 6:
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
                                            case 2:
                                                $scope.tipos.alimentos4.push($scope.factXtipo.Abril[i][j].valorConIva);
                                                break;
                                            case 4:
                                                $scope.tipos.vivienda4.push($scope.factXtipo.Abril[i][j].valorConIva);
                                                break;
                                            case 5:
                                                $scope.tipos.vestido4.push($scope.factXtipo.Abril[i][j].valorConIva);
                                                break;
                                            case 1:
                                                $scope.tipos.salud4.push($scope.factXtipo.Abril[i][j].valorConIva);
                                                break;
                                            case 3:
                                                $scope.tipos.educacion4.push($scope.factXtipo.Abril[i][j].valorConIva);
                                                break;
                                            case 6:
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
                                            case 2:
                                                $scope.tipos.alimentos5.push($scope.factXtipo.Mayo[i][j].valorConIva);
                                                break;
                                            case 4:
                                                $scope.tipos.vivienda5.push($scope.factXtipo.Mayo[i][j].valorConIva);
                                                break;
                                            case 5:
                                                $scope.tipos.vestido5.push($scope.factXtipo.Mayo[i][j].valorConIva);
                                                break;
                                            case 1:
                                                $scope.tipos.salud5.push($scope.factXtipo.Mayo[i][j].valorConIva);
                                                break;
                                            case 3:
                                                $scope.tipos.educacion5.push($scope.factXtipo.Mayo[i][j].valorConIva);
                                                break;
                                            case 6:
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
                                            case 2:
                                                $scope.tipos.alimentos6.push($scope.factXtipo.Junio[i][j].valorConIva);
                                                break;
                                            case 4:
                                                $scope.tipos.vivienda6.push($scope.factXtipo.Junio[i][j].valorConIva);
                                                break;
                                            case 5:
                                                $scope.tipos.vestido6.push($scope.factXtipo.Junio[i][j].valorConIva);
                                                break;
                                            case 1:
                                                $scope.tipos.salud6.push($scope.factXtipo.Junio[i][j].valorConIva);
                                                break;
                                            case 3:
                                                $scope.tipos.educacion6.push($scope.factXtipo.Junio[i][j].valorConIva);
                                                break;
                                            case 6:
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
                                            case 2:
                                                $scope.tipos.alimentos7.push($scope.factXtipo.Julio[i][j].valorConIva);
                                                break;
                                            case 4:
                                                $scope.tipos.vivienda7.push($scope.factXtipo.Julio[i][j].valorConIva);
                                                break;
                                            case 5:
                                                $scope.tipos.vestido7.push($scope.factXtipo.Julio[i][j].valorConIva);
                                                break;
                                            case 1:
                                                $scope.tipos.salud7.push($scope.factXtipo.Julio[i][j].valorConIva);
                                                break;
                                            case 3:
                                                $scope.tipos.educacion7.push($scope.factXtipo.Julio[i][j].valorConIva);
                                                break;
                                            case 6:
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
                                            case 2:
                                                $scope.tipos.alimentos8.push($scope.factXtipo.Agosto[i][j].valorConIva);
                                                break;
                                            case 4:
                                                $scope.tipos.vivienda8.push($scope.factXtipo.Agosto[i][j].valorConIva);
                                                break;
                                            case 5:
                                                $scope.tipos.vestido8.push($scope.factXtipo.Agosto[i][j].valorConIva);
                                                break;
                                            case 1:
                                                $scope.tipos.salud8.push($scope.factXtipo.Agosto[i][j].valorConIva);
                                                break;
                                            case 3:
                                                $scope.tipos.educacion8.push($scope.factXtipo.Agosto[i][j].valorConIva);
                                                break;
                                            case 6:
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
                                            case 2:
                                                $scope.tipos.alimentos9.push($scope.factXtipo.Septiembre[i][j].valorConIva);
                                                break;
                                            case 4:
                                                $scope.tipos.vivienda9.push($scope.factXtipo.Septiembre[i][j].valorConIva);
                                                break;
                                            case 5:
                                                $scope.tipos.vestido9.push($scope.factXtipo.Septiembre[i][j].valorConIva);
                                                break;
                                            case 1:
                                                $scope.tipos.salud9.push($scope.factXtipo.Septiembre[i][j].valorConIva);
                                                break;
                                            case 3:
                                                $scope.tipos.educacion9.push($scope.factXtipo.Septiembre[i][j].valorConIva);
                                                break;
                                            case 6:
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
                                            case 2:
                                                $scope.tipos.alimentos10.push($scope.factXtipo.Octubre[i][j].valorConIva);
                                                break;
                                            case 4:
                                                $scope.tipos.vivienda10.push($scope.factXtipo.Octubre[i][j].valorConIva);
                                                break;
                                            case 5:
                                                $scope.tipos.vestido10.push($scope.factXtipo.Octubre[i][j].valorConIva);
                                                break;
                                            case 1:
                                                $scope.tipos.salud10.push($scope.factXtipo.Octubre[i][j].valorConIva);
                                                break;
                                            case 3:
                                                $scope.tipos.educacion10.push($scope.factXtipo.Octubre[i][j].valorConIva);
                                                break;
                                            case 6:
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
                                            case 2:
                                                $scope.tipos.alimentos11.push($scope.factXtipo.Noviembre[i][j].valorConIva);
                                                break;
                                            case 4:
                                                $scope.tipos.vivienda11.push($scope.factXtipo.Noviembre[i][j].valorConIva);
                                                break;
                                            case 5:
                                                $scope.tipos.vestido11.push($scope.factXtipo.Noviembre[i][j].valorConIva);
                                                break;
                                            case 1:
                                                $scope.tipos.salud11.push($scope.factXtipo.Noviembre[i][j].valorConIva);
                                                break;
                                            case 3:
                                                $scope.tipos.educacion11.push($scope.factXtipo.Noviembre[i][j].valorConIva);
                                                break;
                                            case 6:
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
                                            case 2:
                                                $scope.tipos.alimentos12.push($scope.factXtipo.Diciembre[i][j].valorConIva);
                                                break;
                                            case 4:
                                                $scope.tipos.vivienda12.push($scope.factXtipo.Diciembre[i][j].valorConIva);
                                                break;
                                            case 5:
                                                $scope.tipos.vestido12.push($scope.factXtipo.Diciembre[i][j].valorConIva);
                                                break;
                                            case 1:
                                                $scope.tipos.salud12.push($scope.factXtipo.Diciembre[i][j].valorConIva);
                                                break;
                                            case 3:
                                                $scope.tipos.educacion12.push($scope.factXtipo.Diciembre[i][j].valorConIva);
                                                break;
                                            case 6:
                                                $scope.tipos.otros12.push($scope.factXtipo.Diciembre[i][j].valorConIva);

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
          $scope.limites = {
            mensaje: '',
            alimentacion: 0,
            salud:0,
            vivienda:0,
            educacion:0,
            otros:0,
            vestido:0

          }
          $scope.sumas = {
            Alimento:0,
            Vivienda:0,
            Vestido:0,
            Salud:0,
            Educacion:0,
            Otros:0,
            Alimento1:0,
            Vivienda1:0,
            Vestido1:0,
            Salud1:0,
            Educacion1:0,
            Otros1:0,
            Alimento2:0,
            Vivienda2:0,
            Vestido2:0,
            Salud2:0,
            Educacion2:0,
            Otros2:0,
            Alimento3:0,
            Vivienda3:0,
            Vestido3:0,
            Salud3:0,
            Educacion3:0,
            Otros3:0,
            Alimento4:0,
            Vivienda4:0,
            Vestido4:0,
            Salud4:0,
            Educacion4:0,
            Otros4:0,
            Alimento5:0,
            Vivienda5:0,
            Vestido5:0,
            Salud5:0,
            Educacion5:0,
            Otros5:0,
            Alimento6:0,
            Vivienda6:0,
            Vestido6:0,
            Salud6:0,
            Educacion6:0,
            Otros6:0,
            Alimento7:0,
            Vivienda7:0,
            Vestido7:0,
            Salud7:0,
            Educacion7:0,
            Otros7:0,
            Alimento8:0,
            Vivienda8:0,
            Vestido8:0,
            Salud8:0,
            Educacion8:0,
            Otros8:0,
            Alimento9:0,
            Vivienda9:0,
            Vestido9:0,
            Salud9:0,
            Educacion9:0,
            Otros9:0,
            Alimento10:0,
            Vivienda10:0,
            Vestido10:0,
            Salud10:0,
            Educacion10:0,
            Otros10:0,
            Alimento11:0,
            Vivienda11:0,
            Vestido11:0,
            Salud11:0,
            Educacion11:0,
            Otros11:0,
            Alimento12:0,
            Vivienda12:0,
            Vestido12:0,
            Salud12:0,
            Educacion12:0,
            Otros12:0


          }
          $scope.tipos={
            alimentos1:[],
            vivienda1:[],
            vestido1:[],
            salud1:[],
            educacion1:[],
            otros1:[],
            alimentos2:[],
            vivienda2:[],
            vestido2:[],
            salud2:[],
            educacion2:[],
            otros2:[],
            alimentos3:[],
            vivienda3:[],
            vestido3:[],
            salud3:[],
            educacion3:[],
            otros3:[],
            alimentos4:[],
            vivienda4:[],
            vestido4:[],
            salud4:[],
            educacion4:[],
            otros4:[],
            alimentos5:[],
            vivienda5:[],
            vestido5:[],
            salud5:[],
            educacion5:[],
            otros5:[],
            alimentos6:[],
            vivienda6:[],
            vestido6:[],
            salud6:[],
            educacion6:[],
            otros6:[],
            alimentos7:[],
            vivienda7:[],
            vestido7:[],
            salud7:[],
            educacion7:[],
            otros7:[],
            alimentos8:[],
            vivienda8:[],
            vestido8:[],
            salud8:[],
            educacion8:[],
            otros8:[],
            alimentos9:[],
            vivienda9:[],
            vestido9:[],
            salud9:[],
            educacion9:[],
            otros9:[],
            alimentos10:[],
            vivienda10:[],
            vestido10:[],
            salud10:[],
            educacion10:[],
            otros10:[],
            alimentos11:[],
            vivienda11:[],
            vestido11:[],
            salud11:[],
            educacion11:[],
            otros11:[],
            alimentos12:[],
            vivienda12:[],
            vestido12:[],
            salud12:[],
            educacion12:[],
            otros12:[],
            alimentos:[],
            vivienda:[],
            vestido:[],
            salud:[],
            educacion:[],
            otros:[]

          }
          $scope.factXmes=[]

          $scope.periodo='';
          $scope.factXperiodo=[]
        }

        $scope.sumaCategoria = function(vector,sumarTipo) {
            // console.log('lelgo vector',vector)
            // console.log('llego sumartipo',sumarTipo)
            console.log('llego vecto',vector)
            if(vector.length == 0){
                return sumarTipo=sumarTipo;
            }else{
                for(var i=0; i<vector.length; i++){
                    sumarTipo+=vector[i];
                }
                return sumarTipo=sumarTipo;
            }
        }
        $scope.diferencia = function (limite,valor,tipodif) {


            if(valor>limite){
                // $scope.limites.mensaje='Excedio los limites'
                return tipodif=0;
            }else{
                // $scope.limites.mensaje='Dentro del los limites'
                tipodif=limite-valor;
                return tipodif=tipodif;
            }


        }
        $scope.exportarGP= function(Se,De,Sv,Dv,Ss,Ds,Sa,Da,So,Do,Sves,Dves,nombre){


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
    }]);


