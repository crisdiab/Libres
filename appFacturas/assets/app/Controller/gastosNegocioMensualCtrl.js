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
      $scope.Facturas=[];
        $scope.factXperiodo=[]
        
      
        console.log('consultas')
        $scope.periodo='';
     
       
        $scope.grupo={
            Enero:{
                nombre:'Enero',
         tipo:{
                    mercaderia:{
                        vector:[],
                        total:0
                    },
                    arriendo:{
                        vector:[],
                        total:0
                    },
                    serviciosBasicos:{
                        vector:[],
                        total:0
                    },
                    sueldos:{
                        vector:[],
                        total:0
                    },
                    movilizacion:{
                        vector:[],
                        total:0
                    },
                     viaticos:{
                        vector:[],
                        total:0
                    },
                    capacitacion:{
                        vector:[],
                        total:0
                    },
                    suministros:{
                        vector:[],
                        total:0
                    },
                     herramientas:{
                        vector:[],
                        total:0
                    },
                    otros:{
                        vector:[],
                        total:0
                    },
                    
                }
            },
            Febrero:{
                nombre:'Febrero',
                tipo:{
                    mercaderia:{
                        vector:[],
                        total:0
                    },
                    arriendo:{
                        vector:[],
                        total:0
                    },
                    serviciosBasicos:{
                        vector:[],
                        total:0
                    },
                    sueldos:{
                        vector:[],
                        total:0
                    },
                    movilizacion:{
                        vector:[],
                        total:0
                    },
                     viaticos:{
                        vector:[],
                        total:0
                    },
                    capacitacion:{
                        vector:[],
                        total:0
                    },
                    suministros:{
                        vector:[],
                        total:0
                    },
                     herramientas:{
                        vector:[],
                        total:0
                    },
                    otros:{
                        vector:[],
                        total:0
                    },
                    
                }
            },
            Marzo:{
                nombre:'Marzo',
                tipo:{
                    mercaderia:{
                        vector:[],
                        total:0
                    },
                    arriendo:{
                        vector:[],
                        total:0
                    },
                    serviciosBasicos:{
                        vector:[],
                        total:0
                    },
                    sueldos:{
                        vector:[],
                        total:0
                    },
                    movilizacion:{
                        vector:[],
                        total:0
                    },
                     viaticos:{
                        vector:[],
                        total:0
                    },
                    capacitacion:{
                        vector:[],
                        total:0
                    },
                    suministros:{
                        vector:[],
                        total:0
                    },
                     herramientas:{
                        vector:[],
                        total:0
                    },
                    otros:{
                        vector:[],
                        total:0
                    },
                    
                }
            },     
            Abril:{
                nombre:'Abril',
            tipo:{
                    mercaderia:{
                        vector:[],
                        total:0
                    },
                    arriendo:{
                        vector:[],
                        total:0
                    },
                    serviciosBasicos:{
                        vector:[],
                        total:0
                    },
                    sueldos:{
                        vector:[],
                        total:0
                    },
                    movilizacion:{
                        vector:[],
                        total:0
                    },
                     viaticos:{
                        vector:[],
                        total:0
                    },
                    capacitacion:{
                        vector:[],
                        total:0
                    },
                    suministros:{
                        vector:[],
                        total:0
                    },
                     herramientas:{
                        vector:[],
                        total:0
                    },
                    otros:{
                        vector:[],
                        total:0
                    },
                    
                }
            },
            Mayo:{
                nombre:'Mayo',
               tipo:{
                    mercaderia:{
                        vector:[],
                        total:0
                    },
                    arriendo:{
                        vector:[],
                        total:0
                    },
                    serviciosBasicos:{
                        vector:[],
                        total:0
                    },
                    sueldos:{
                        vector:[],
                        total:0
                    },
                    movilizacion:{
                        vector:[],
                        total:0
                    },
                     viaticos:{
                        vector:[],
                        total:0
                    },
                    capacitacion:{
                        vector:[],
                        total:0
                    },
                    suministros:{
                        vector:[],
                        total:0
                    },
                     herramientas:{
                        vector:[],
                        total:0
                    },
                    otros:{
                        vector:[],
                        total:0
                    },
                    
                }
            },
            Junio:{nombre:'Junio',
                tipo:{
                    mercaderia:{
                        vector:[],
                        total:0
                    },
                    arriendo:{
                        vector:[],
                        total:0
                    },
                    serviciosBasicos:{
                        vector:[],
                        total:0
                    },
                    sueldos:{
                        vector:[],
                        total:0
                    },
                    movilizacion:{
                        vector:[],
                        total:0
                    },
                     viaticos:{
                        vector:[],
                        total:0
                    },
                    capacitacion:{
                        vector:[],
                        total:0
                    },
                    suministros:{
                        vector:[],
                        total:0
                    },
                     herramientas:{
                        vector:[],
                        total:0
                    },
                    otros:{
                        vector:[],
                        total:0
                    },
                    
                }
              
            },
            Julio:{
                nombre:'Julio',
             tipo:{
                    mercaderia:{
                        vector:[],
                        total:0
                    },
                    arriendo:{
                        vector:[],
                        total:0
                    },
                    serviciosBasicos:{
                        vector:[],
                        total:0
                    },
                    sueldos:{
                        vector:[],
                        total:0
                    },
                    movilizacion:{
                        vector:[],
                        total:0
                    },
                     viaticos:{
                        vector:[],
                        total:0
                    },
                    capacitacion:{
                        vector:[],
                        total:0
                    },
                    suministros:{
                        vector:[],
                        total:0
                    },
                     herramientas:{
                        vector:[],
                        total:0
                    },
                    otros:{
                        vector:[],
                        total:0
                    },
                    
                }
            },
            Agosto:{
                nombre:'Agosto',
             tipo:{
                    mercaderia:{
                        vector:[],
                        total:0
                    },
                    arriendo:{
                        vector:[],
                        total:0
                    },
                    serviciosBasicos:{
                        vector:[],
                        total:0
                    },
                    sueldos:{
                        vector:[],
                        total:0
                    },
                    movilizacion:{
                        vector:[],
                        total:0
                    },
                     viaticos:{
                        vector:[],
                        total:0
                    },
                    capacitacion:{
                        vector:[],
                        total:0
                    },
                    suministros:{
                        vector:[],
                        total:0
                    },
                     herramientas:{
                        vector:[],
                        total:0
                    },
                    otros:{
                        vector:[],
                        total:0
                    },
                    
                }
            },
            Septiembre:{
                nombre:'Septiembre',
              tipo:{
                    mercaderia:{
                        vector:[],
                        total:0
                    },
                    arriendo:{
                        vector:[],
                        total:0
                    },
                    serviciosBasicos:{
                        vector:[],
                        total:0
                    },
                    sueldos:{
                        vector:[],
                        total:0
                    },
                    movilizacion:{
                        vector:[],
                        total:0
                    },
                     viaticos:{
                        vector:[],
                        total:0
                    },
                    capacitacion:{
                        vector:[],
                        total:0
                    },
                    suministros:{
                        vector:[],
                        total:0
                    },
                     herramientas:{
                        vector:[],
                        total:0
                    },
                    otros:{
                        vector:[],
                        total:0
                    },
                    
                }
            },
            Octubre:{
                nombre:'Octubre',
                tipo:{
                    mercaderia:{
                        vector:[],
                        total:0
                    },
                    arriendo:{
                        vector:[],
                        total:0
                    },
                    serviciosBasicos:{
                        vector:[],
                        total:0
                    },
                    sueldos:{
                        vector:[],
                        total:0
                    },
                    movilizacion:{
                        vector:[],
                        total:0
                    },
                     viaticos:{
                        vector:[],
                        total:0
                    },
                    capacitacion:{
                        vector:[],
                        total:0
                    },
                    suministros:{
                        vector:[],
                        total:0
                    },
                     herramientas:{
                        vector:[],
                        total:0
                    },
                    otros:{
                        vector:[],
                        total:0
                    },
                    
                }
            },
            Noviembre:{
                nombre:'Noviembre',
              tipo:{
                    mercaderia:{
                        vector:[],
                        total:0
                    },
                    arriendo:{
                        vector:[],
                        total:0
                    },
                    serviciosBasicos:{
                        vector:[],
                        total:0
                    },
                    sueldos:{
                        vector:[],
                        total:0
                    },
                    movilizacion:{
                        vector:[],
                        total:0
                    },
                     viaticos:{
                        vector:[],
                        total:0
                    },
                    capacitacion:{
                        vector:[],
                        total:0
                    },
                    suministros:{
                        vector:[],
                        total:0
                    },
                     herramientas:{
                        vector:[],
                        total:0
                    },
                    otros:{
                        vector:[],
                        total:0
                    },
                    
                }
            },
            Diciembre:{
                nombre:'Diciembre',
                tipo:{
                    mercaderia:{
                        vector:[],
                        total:0
                    },
                    arriendo:{
                        vector:[],
                        total:0
                    },
                    serviciosBasicos:{
                        vector:[],
                        total:0
                    },
                    sueldos:{
                        vector:[],
                        total:0
                    },
                    movilizacion:{
                        vector:[],
                        total:0
                    },
                     viaticos:{
                        vector:[],
                        total:0
                    },
                    capacitacion:{
                        vector:[],
                        total:0
                    },
                    suministros:{
                        vector:[],
                        total:0
                    },
                     herramientas:{
                        vector:[],
                        total:0
                    },
                    otros:{
                        vector:[],
                        total:0
                    },
                    
                }
            },
            Total:{
                nombre:'Total',
                tipo:{
                    mercaderia:{
                        vector:[],
                        total:0
                    },
                    arriendo:{
                        vector:[],
                        total:0
                    },
                    serviciosBasicos:{
                        vector:[],
                        total:0
                    },
                    sueldos:{
                        vector:[],
                        total:0
                    },
                    movilizacion:{
                        vector:[],
                        total:0
                    },
                     viaticos:{
                        vector:[],
                        total:0
                    },
                    capacitacion:{
                        vector:[],
                        total:0
                    },
                    suministros:{
                        vector:[],
                        total:0
                    },
                     herramientas:{
                        vector:[],
                        total:0
                    },
                    otros:{
                        vector:[],
                        total:0
                    },
                    
                }
            }
            
        }
        $scope.mostrar=true;
      

    
      $scope.FacturasXusuario= function () {
        ConsultasFactory
          .buscarFacturaXid({
            idComprador: $scope.idUsuario
          })
          .$promise
          .then(
            function (respuesta) {
              $scope.Facturas=respuesta
              console.log('facturas por cliente',respuesta)
              // console.log('facturas por cliente',$scope.facturas)
             
            },
            function (error) {
              console.log(error);
            });
      };
      $scope.FacturasXusuario();
        $scope.FacturasXPeriodo = function (facturas,periodo) {
            $scope.mostrar=false;
            if(periodo==''){
                toastr.warning('Debe ingresar un periodo')
                $scope.nuevaBusqueda();
            }else{
                for(var i = 0; i<facturas.length;i++){
                    if(facturas[i].periodo==periodo&&facturas[i].tipoFactura==2){
                         $scope.factXperiodo.push(facturas[i])
                    }
                }
                console.log('facturas por periodo', $scope.factXperiodo)
                
                if( $scope.factXperiodo.length==0){
                    console.log('no hay facturas en periodo')
                    toastr.warning("No hay facturas en el periodo")
                     $scope.nuevaBusqueda();
                }else{
                    //agregar todos los mercaderia a un vector
                    for(var i=0;i< $scope.factXperiodo.length;i++){
                        $scope.grupo.Total.tipo.mercaderia.vector.push( $scope.factXperiodo[i].mercaderia);
                        $scope.grupo.Total.tipo.arriendo.vector.push( $scope.factXperiodo[i].arriendo);
                        $scope.grupo.Total.tipo.serviciosBasicos.vector.push( $scope.factXperiodo[i].serviciosBasicos);
                        $scope.grupo.Total.tipo.sueldos.vector.push( $scope.factXperiodo[i].sueldos);
                        $scope.grupo.Total.tipo.movilizacion.vector.push( $scope.factXperiodo[i].movilizacion);
                        $scope.grupo.Total.tipo.otros.vector.push( $scope.factXperiodo[i].otros);
                          $scope.grupo.Total.tipo.viaticos.vector.push( $scope.factXperiodo[i].viaticos);
                        $scope.grupo.Total.tipo.capacitacion.vector.push( $scope.factXperiodo[i].capacitacion);
                        $scope.grupo.Total.tipo.suministros.vector.push( $scope.factXperiodo[i].suministros);
                        $scope.grupo.Total.tipo.herramientas.vector.push( $scope.factXperiodo[i].herramientas);
                        
                        switch ($scope.factXperiodo[i].mes) {
                            case "Enero":
                                // code
                        $scope.grupo.Enero.tipo.mercaderia.vector.push( $scope.factXperiodo[i].mercaderia);
                        $scope.grupo.Enero.tipo.arriendo.vector.push( $scope.factXperiodo[i].arriendo);
                        $scope.grupo.Enero.tipo.serviciosBasicos.vector.push( $scope.factXperiodo[i].serviciosBasicos);
                        $scope.grupo.Enero.tipo.sueldos.vector.push( $scope.factXperiodo[i].sueldos);
                        $scope.grupo.Enero.tipo.movilizacion.vector.push( $scope.factXperiodo[i].movilizacion);
                        $scope.grupo.Enero.tipo.otros.vector.push( $scope.factXperiodo[i].otros);
                          $scope.grupo.Enero.tipo.viaticos.vector.push( $scope.factXperiodo[i].viaticos);
                        $scope.grupo.Enero.tipo.capacitacion.vector.push( $scope.factXperiodo[i].capacitacion);
                        $scope.grupo.Enero.tipo.suministros.vector.push( $scope.factXperiodo[i].suministros);
                        $scope.grupo.Enero.tipo.herramientas.vector.push( $scope.factXperiodo[i].herramientas);
                                break;
                            case "Febrero":
                                // code
                        $scope.grupo.Febrero.tipo.mercaderia.vector.push( $scope.factXperiodo[i].mercaderia);
                        $scope.grupo.Febrero.tipo.arriendo.vector.push( $scope.factXperiodo[i].arriendo);
                        $scope.grupo.Febrero.tipo.serviciosBasicos.vector.push( $scope.factXperiodo[i].serviciosBasicos);
                        $scope.grupo.Febrero.tipo.sueldos.vector.push( $scope.factXperiodo[i].sueldos);
                        $scope.grupo.Febrero.tipo.movilizacion.vector.push( $scope.factXperiodo[i].movilizacion);
                        $scope.grupo.Febrero.tipo.otros.vector.push( $scope.factXperiodo[i].otros);
                          $scope.grupo.Febrero.tipo.viaticos.vector.push( $scope.factXperiodo[i].viaticos);
                        $scope.grupo.Febrero.tipo.capacitacion.vector.push( $scope.factXperiodo[i].capacitacion);
                        $scope.grupo.Febrero.tipo.suministros.vector.push( $scope.factXperiodo[i].suministros);
                        $scope.grupo.Febrero.tipo.herramientas.vector.push( $scope.factXperiodo[i].herramientas);
                                break;
                            case "Marzo":
                                // code
                        $scope.grupo.Marzo.tipo.mercaderia.vector.push( $scope.factXperiodo[i].mercaderia);
                        $scope.grupo.Marzo.tipo.arriendo.vector.push( $scope.factXperiodo[i].arriendo);
                        $scope.grupo.Marzo.tipo.serviciosBasicos.vector.push( $scope.factXperiodo[i].serviciosBasicos);
                        $scope.grupo.Marzo.tipo.sueldos.vector.push( $scope.factXperiodo[i].sueldos);
                        $scope.grupo.Marzo.tipo.movilizacion.vector.push( $scope.factXperiodo[i].movilizacion);
                        $scope.grupo.Marzo.tipo.otros.vector.push( $scope.factXperiodo[i].otros);
                          $scope.grupo.Marzo.tipo.viaticos.vector.push( $scope.factXperiodo[i].viaticos);
                        $scope.grupo.Marzo.tipo.capacitacion.vector.push( $scope.factXperiodo[i].capacitacion);
                        $scope.grupo.Marzo.tipo.suministros.vector.push( $scope.factXperiodo[i].suministros);
                        $scope.grupo.Marzo.tipo.herramientas.vector.push( $scope.factXperiodo[i].herramientas);
                                
                                break;
                            case "Abril":
                                // 
                        $scope.grupo.Abril.tipo.mercaderia.vector.push( $scope.factXperiodo[i].mercaderia);
                        $scope.grupo.Abril.tipo.arriendo.vector.push( $scope.factXperiodo[i].arriendo);
                        $scope.grupo.Abril.tipo.serviciosBasicos.vector.push( $scope.factXperiodo[i].serviciosBasicos);
                        $scope.grupo.Abril.tipo.sueldos.vector.push( $scope.factXperiodo[i].sueldos);
                        $scope.grupo.Abril.tipo.movilizacion.vector.push( $scope.factXperiodo[i].movilizacion);
                        $scope.grupo.Abril.tipo.otros.vector.push( $scope.factXperiodo[i].otros);
                          $scope.grupo.Abril.tipo.viaticos.vector.push( $scope.factXperiodo[i].viaticos);
                        $scope.grupo.Abril.tipo.capacitacion.vector.push( $scope.factXperiodo[i].capacitacion);
                        $scope.grupo.Abril.tipo.suministros.vector.push( $scope.factXperiodo[i].suministros);
                        $scope.grupo.Abril.tipo.herramientas.vector.push( $scope.factXperiodo[i].herramientas);
                                break;    
                            case "Mayo":
                                // code
                        $scope.grupo.Mayo.tipo.mercaderia.vector.push( $scope.factXperiodo[i].mercaderia);
                        $scope.grupo.Mayo.tipo.arriendo.vector.push( $scope.factXperiodo[i].arriendo);
                        $scope.grupo.Mayo.tipo.serviciosBasicos.vector.push( $scope.factXperiodo[i].serviciosBasicos);
                        $scope.grupo.Mayo.tipo.sueldos.vector.push( $scope.factXperiodo[i].sueldos);
                        $scope.grupo.Mayo.tipo.movilizacion.vector.push( $scope.factXperiodo[i].movilizacion);
                        $scope.grupo.Mayo.tipo.otros.vector.push( $scope.factXperiodo[i].otros);
                          $scope.grupo.Mayo.tipo.viaticos.vector.push( $scope.factXperiodo[i].viaticos);
                        $scope.grupo.Mayo.tipo.capacitacion.vector.push( $scope.factXperiodo[i].capacitacion);
                        $scope.grupo.Mayo.tipo.suministros.vector.push( $scope.factXperiodo[i].suministros);
                        $scope.grupo.Mayo.tipo.herramientas.vector.push( $scope.factXperiodo[i].herramientas);
                                break;
                            case "Junio":
                                // code
                        $scope.grupo.Junio.tipo.mercaderia.vector.push( $scope.factXperiodo[i].mercaderia);
                        $scope.grupo.Junio.tipo.arriendo.vector.push( $scope.factXperiodo[i].arriendo);
                        $scope.grupo.Junio.tipo.serviciosBasicos.vector.push( $scope.factXperiodo[i].serviciosBasicos);
                        $scope.grupo.Junio.tipo.sueldos.vector.push( $scope.factXperiodo[i].sueldos);
                        $scope.grupo.Junio.tipo.movilizacion.vector.push( $scope.factXperiodo[i].movilizacion);
                        $scope.grupo.Junio.tipo.otros.vector.push( $scope.factXperiodo[i].otros);
                          $scope.grupo.Junio.tipo.viaticos.vector.push( $scope.factXperiodo[i].viaticos);
                        $scope.grupo.Junio.tipo.capacitacion.vector.push( $scope.factXperiodo[i].capacitacion);
                        $scope.grupo.Junio.tipo.suministros.vector.push( $scope.factXperiodo[i].suministros);
                        $scope.grupo.Junio.tipo.herramientas.vector.push( $scope.factXperiodo[i].herramientas);
                                break;    
                            case "Julio":
                                // code
                        $scope.grupo.Julio.tipo.mercaderia.vector.push( $scope.factXperiodo[i].mercaderia);
                        $scope.grupo.Julio.tipo.arriendo.vector.push( $scope.factXperiodo[i].arriendo);
                        $scope.grupo.Julio.tipo.serviciosBasicos.vector.push( $scope.factXperiodo[i].serviciosBasicos);
                        $scope.grupo.Julio.tipo.sueldos.vector.push( $scope.factXperiodo[i].sueldos);
                        $scope.grupo.Julio.tipo.movilizacion.vector.push( $scope.factXperiodo[i].movilizacion);
                        $scope.grupo.Julio.tipo.otros.vector.push( $scope.factXperiodo[i].otros);
                          $scope.grupo.Julio.tipo.viaticos.vector.push( $scope.factXperiodo[i].viaticos);
                        $scope.grupo.Julio.tipo.capacitacion.vector.push( $scope.factXperiodo[i].capacitacion);
                        $scope.grupo.Julio.tipo.suministros.vector.push( $scope.factXperiodo[i].suministros);
                        $scope.grupo.Julio.tipo.herramientas.vector.push( $scope.factXperiodo[i].herramientas);
                                break;
                            case "Agosto":
                                // code
                        $scope.grupo.Agosto.tipo.mercaderia.vector.push( $scope.factXperiodo[i].mercaderia);
                        $scope.grupo.Agosto.tipo.arriendo.vector.push( $scope.factXperiodo[i].arriendo);
                        $scope.grupo.Agosto.tipo.serviciosBasicos.vector.push( $scope.factXperiodo[i].serviciosBasicos);
                        $scope.grupo.Agosto.tipo.sueldos.vector.push( $scope.factXperiodo[i].sueldos);
                        $scope.grupo.Agosto.tipo.movilizacion.vector.push( $scope.factXperiodo[i].movilizacion);
                        $scope.grupo.Agosto.tipo.otros.vector.push( $scope.factXperiodo[i].otros);
                          $scope.grupo.Agosto.tipo.viaticos.vector.push( $scope.factXperiodo[i].viaticos);
                        $scope.grupo.Agosto.tipo.capacitacion.vector.push( $scope.factXperiodo[i].capacitacion);
                        $scope.grupo.Agosto.tipo.suministros.vector.push( $scope.factXperiodo[i].suministros);
                        $scope.grupo.Agosto.tipo.herramientas.vector.push( $scope.factXperiodo[i].herramientas);
                                break;
                            case "Septiembre":
                                // code
                        $scope.grupo.Septiembre.tipo.mercaderia.vector.push( $scope.factXperiodo[i].mercaderia);
                        $scope.grupo.Septiembre.tipo.arriendo.vector.push( $scope.factXperiodo[i].arriendo);
                        $scope.grupo.Septiembre.tipo.serviciosBasicos.vector.push( $scope.factXperiodo[i].serviciosBasicos);
                        $scope.grupo.Septiembre.tipo.sueldos.vector.push( $scope.factXperiodo[i].sueldos);
                        $scope.grupo.Septiembre.tipo.movilizacion.vector.push( $scope.factXperiodo[i].movilizacion);
                        $scope.grupo.Septiembre.tipo.otros.vector.push( $scope.factXperiodo[i].otros);
                          $scope.grupo.Septiembre.tipo.viaticos.vector.push( $scope.factXperiodo[i].viaticos);
                        $scope.grupo.Septiembre.tipo.capacitacion.vector.push( $scope.factXperiodo[i].capacitacion);
                        $scope.grupo.Septiembre.tipo.suministros.vector.push( $scope.factXperiodo[i].suministros);
                        $scope.grupo.Septiembre.tipo.herramientas.vector.push( $scope.factXperiodo[i].herramientas);
                                break;
                            case "Octubre":
                                // code
                        $scope.grupo.Octubre.tipo.mercaderia.vector.push( $scope.factXperiodo[i].mercaderia);
                        $scope.grupo.Octubre.tipo.arriendo.vector.push( $scope.factXperiodo[i].arriendo);
                        $scope.grupo.Octubre.tipo.serviciosBasicos.vector.push( $scope.factXperiodo[i].serviciosBasicos);
                        $scope.grupo.Octubre.tipo.sueldos.vector.push( $scope.factXperiodo[i].sueldos);
                        $scope.grupo.Octubre.tipo.movilizacion.vector.push( $scope.factXperiodo[i].movilizacion);
                        $scope.grupo.Octubre.tipo.otros.vector.push( $scope.factXperiodo[i].otros);
                          $scope.grupo.Octubre.tipo.viaticos.vector.push( $scope.factXperiodo[i].viaticos);
                        $scope.grupo.Octubre.tipo.capacitacion.vector.push( $scope.factXperiodo[i].capacitacion);
                        $scope.grupo.Octubre.tipo.suministros.vector.push( $scope.factXperiodo[i].suministros);
                        $scope.grupo.Octubre.tipo.herramientas.vector.push( $scope.factXperiodo[i].herramientas);
                                break;
                            case "Noviembre":
                                // code
                        $scope.grupo.Noviembre.tipo.mercaderia.vector.push( $scope.factXperiodo[i].mercaderia);
                        $scope.grupo.Noviembre.tipo.arriendo.vector.push( $scope.factXperiodo[i].arriendo);
                        $scope.grupo.Noviembre.tipo.serviciosBasicos.vector.push( $scope.factXperiodo[i].serviciosBasicos);
                        $scope.grupo.Noviembre.tipo.sueldos.vector.push( $scope.factXperiodo[i].sueldos);
                        $scope.grupo.Noviembre.tipo.movilizacion.vector.push( $scope.factXperiodo[i].movilizacion);
                        $scope.grupo.Noviembre.tipo.otros.vector.push( $scope.factXperiodo[i].otros);
                          $scope.grupo.Noviembre.tipo.viaticos.vector.push( $scope.factXperiodo[i].viaticos);
                        $scope.grupo.Noviembre.tipo.capacitacion.vector.push( $scope.factXperiodo[i].capacitacion);
                        $scope.grupo.Noviembre.tipo.suministros.vector.push( $scope.factXperiodo[i].suministros);
                        $scope.grupo.Noviembre.tipo.herramientas.vector.push( $scope.factXperiodo[i].herramientas);
                                break;
                            case "Diciembre":
                                // code
                        $scope.grupo.Diciembre.tipo.mercaderia.vector.push( $scope.factXperiodo[i].mercaderia);
                        $scope.grupo.Diciembre.tipo.arriendo.vector.push( $scope.factXperiodo[i].arriendo);
                        $scope.grupo.Diciembre.tipo.serviciosBasicos.vector.push( $scope.factXperiodo[i].serviciosBasicos);
                        $scope.grupo.Diciembre.tipo.sueldos.vector.push( $scope.factXperiodo[i].sueldos);
                        $scope.grupo.Diciembre.tipo.movilizacion.vector.push( $scope.factXperiodo[i].movilizacion);
                        $scope.grupo.Diciembre.tipo.otros.vector.push( $scope.factXperiodo[i].otros);
                          $scope.grupo.Diciembre.tipo.viaticos.vector.push( $scope.factXperiodo[i].viaticos);
                        $scope.grupo.Diciembre.tipo.capacitacion.vector.push( $scope.factXperiodo[i].capacitacion);
                        $scope.grupo.Diciembre.tipo.suministros.vector.push( $scope.factXperiodo[i].suministros);
                        $scope.grupo.Diciembre.tipo.herramientas.vector.push( $scope.factXperiodo[i].herramientas);
                                break;    
                            default:
                                // code
                        }
                        
                    }
                    
                    //sumar los vectores
                    //mercaderia
                    for(var i=0;i<$scope.grupo.Enero.tipo.mercaderia.vector.length;i++){
                        $scope.grupo.Enero.tipo.mercaderia.total+=$scope.grupo.Enero.tipo.mercaderia.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Febrero.tipo.mercaderia.vector.length;i++){
                        $scope.grupo.Febrero.tipo.mercaderia.total+=$scope.grupo.Febrero.tipo.mercaderia.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Marzo.tipo.mercaderia.vector.length;i++){
                        $scope.grupo.Marzo.tipo.mercaderia.total+=$scope.grupo.Marzo.tipo.mercaderia.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Abril.tipo.mercaderia.vector.length;i++){
                        $scope.grupo.Abril.tipo.mercaderia.total+=$scope.grupo.Abril.tipo.mercaderia.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Mayo.tipo.mercaderia.vector.length;i++){
                        $scope.grupo.Mayo.tipo.mercaderia.total+=$scope.grupo.Mayo.tipo.mercaderia.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Junio.tipo.mercaderia.vector.length;i++){
                        $scope.grupo.Junio.tipo.mercaderia.total+=$scope.grupo.Junio.tipo.mercaderia.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Julio.tipo.mercaderia.vector.length;i++){
                        $scope.grupo.Julio.tipo.mercaderia.total+=$scope.grupo.Julio.tipo.mercaderia.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Agosto.tipo.mercaderia.vector.length;i++){
                        $scope.grupo.Agosto.tipo.mercaderia.total+=$scope.grupo.Agosto.tipo.mercaderia.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Septiembre.tipo.mercaderia.vector.length;i++){
                        $scope.grupo.Septiembre.tipo.mercaderia.total+=$scope.grupo.Septiembre.tipo.mercaderia.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Octubre.tipo.mercaderia.vector.length;i++){
                        $scope.grupo.Octubre.tipo.mercaderia.total+=$scope.grupo.Octubre.tipo.mercaderia.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Noviembre.tipo.mercaderia.vector.length;i++){
                        $scope.grupo.Noviembre.tipo.mercaderia.total+=$scope.grupo.Noviembre.tipo.mercaderia.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Diciembre.tipo.mercaderia.vector.length;i++){
                        $scope.grupo.Diciembre.tipo.mercaderia.total+=$scope.grupo.Diciembre.tipo.mercaderia.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Total.tipo.mercaderia.vector.length;i++){
                        $scope.grupo.Total.tipo.mercaderia.total+=$scope.grupo.Total.tipo.mercaderia.vector[i];
                       
                    }
                    //arriendo
                    for(var i=0;i<$scope.grupo.Enero.tipo.arriendo.vector.length;i++){
                        $scope.grupo.Enero.tipo.arriendo.total+=$scope.grupo.Enero.tipo.arriendo.vector[i];
                      
                    }
                    for(var i=0;i<$scope.grupo.Febrero.tipo.arriendo.vector.length;i++){
                        $scope.grupo.Febrero.tipo.arriendo.total+=$scope.grupo.Febrero.tipo.arriendo.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Marzo.tipo.arriendo.vector.length;i++){
                        $scope.grupo.Marzo.tipo.arriendo.total+=$scope.grupo.Marzo.tipo.arriendo.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Abril.tipo.arriendo.vector.length;i++){
                        $scope.grupo.Abril.tipo.arriendo.total+=$scope.grupo.Abril.tipo.arriendo.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Mayo.tipo.arriendo.vector.length;i++){
                        $scope.grupo.Mayo.tipo.arriendo.total+=$scope.grupo.Mayo.tipo.arriendo.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Junio.tipo.arriendo.vector.length;i++){
                        $scope.grupo.Junio.tipo.arriendo.total+=$scope.grupo.Junio.tipo.arriendo.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Julio.tipo.arriendo.vector.length;i++){
                        $scope.grupo.Julio.tipo.arriendo.total+=$scope.grupo.Julio.tipo.arriendo.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Agosto.tipo.arriendo.vector.length;i++){
                        $scope.grupo.Agosto.tipo.arriendo.total+=$scope.grupo.Agosto.tipo.arriendo.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Septiembre.tipo.arriendo.vector.length;i++){
                        $scope.grupo.Septiembre.tipo.arriendo.total+=$scope.grupo.Septiembre.tipo.arriendo.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Octubre.tipo.arriendo.vector.length;i++){
                        $scope.grupo.Octubre.tipo.arriendo.total+=$scope.grupo.Octubre.tipo.arriendo.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Noviembre.tipo.arriendo.vector.length;i++){
                        $scope.grupo.Noviembre.tipo.arriendo.total+=$scope.grupo.Noviembre.tipo.arriendo.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Diciembre.tipo.arriendo.vector.length;i++){
                        $scope.grupo.Diciembre.tipo.arriendo.total+=$scope.grupo.Diciembre.tipo.arriendo.vector[i];
                       
                    }
                     for(var i=0;i<$scope.grupo.Total.tipo.arriendo.vector.length;i++){
                        $scope.grupo.Total.tipo.arriendo.total+=$scope.grupo.Total.tipo.arriendo.vector[i];
                       
                    }
                    
                    //serviciosBasicos
                    for(var i=0;i<$scope.grupo.Enero.tipo.serviciosBasicos.vector.length;i++){
                        $scope.grupo.Enero.tipo.serviciosBasicos.total+=$scope.grupo.Enero.tipo.serviciosBasicos.vector[i];
                      
                    }
                    for(var i=0;i<$scope.grupo.Febrero.tipo.serviciosBasicos.vector.length;i++){
                        $scope.grupo.Febrero.tipo.serviciosBasicos.total+=$scope.grupo.Febrero.tipo.serviciosBasicos.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Marzo.tipo.serviciosBasicos.vector.length;i++){
                        $scope.grupo.Marzo.tipo.serviciosBasicos.total+=$scope.grupo.Marzo.tipo.serviciosBasicos.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Abril.tipo.serviciosBasicos.vector.length;i++){
                        $scope.grupo.Abril.tipo.serviciosBasicos.total+=$scope.grupo.Abril.tipo.serviciosBasicos.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Mayo.tipo.serviciosBasicos.vector.length;i++){
                        $scope.grupo.Mayo.tipo.serviciosBasicos.total+=$scope.grupo.Mayo.tipo.serviciosBasicos.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Junio.tipo.serviciosBasicos.vector.length;i++){
                        $scope.grupo.Junio.tipo.serviciosBasicos.total+=$scope.grupo.Junio.tipo.serviciosBasicos.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Julio.tipo.serviciosBasicos.vector.length;i++){
                        $scope.grupo.Julio.tipo.serviciosBasicos.total+=$scope.grupo.Julio.tipo.serviciosBasicos.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Agosto.tipo.serviciosBasicos.vector.length;i++){
                        $scope.grupo.Agosto.tipo.serviciosBasicos.total+=$scope.grupo.Agosto.tipo.serviciosBasicos.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Septiembre.tipo.serviciosBasicos.vector.length;i++){
                        $scope.grupo.Septiembre.tipo.serviciosBasicos.total+=$scope.grupo.Septiembre.tipo.serviciosBasicos.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Octubre.tipo.serviciosBasicos.vector.length;i++){
                        $scope.grupo.Octubre.tipo.serviciosBasicos.total+=$scope.grupo.Octubre.tipo.serviciosBasicos.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Noviembre.tipo.serviciosBasicos.vector.length;i++){
                        $scope.grupo.Noviembre.tipo.serviciosBasicos.total+=$scope.grupo.Noviembre.tipo.serviciosBasicos.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Diciembre.tipo.serviciosBasicos.vector.length;i++){
                        $scope.grupo.Diciembre.tipo.serviciosBasicos.total+=$scope.grupo.Diciembre.tipo.serviciosBasicos.vector[i];
                       
                    }
                     for(var i=0;i<$scope.grupo.Total.tipo.serviciosBasicos.vector.length;i++){
                        $scope.grupo.Total.tipo.serviciosBasicos.total+=$scope.grupo.Total.tipo.serviciosBasicos.vector[i];
                       
                    }
                    
                    //sueldos
                     for(var i=0;i<$scope.grupo.Enero.tipo.sueldos.vector.length;i++){
                        $scope.grupo.Enero.tipo.sueldos.total+=$scope.grupo.Enero.tipo.sueldos.vector[i];
                      
                    }
                    for(var i=0;i<$scope.grupo.Febrero.tipo.sueldos.vector.length;i++){
                        $scope.grupo.Febrero.tipo.sueldos.total+=$scope.grupo.Febrero.tipo.sueldos.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Marzo.tipo.sueldos.vector.length;i++){
                        $scope.grupo.Marzo.tipo.sueldos.total+=$scope.grupo.Marzo.tipo.sueldos.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Abril.tipo.sueldos.vector.length;i++){
                        $scope.grupo.Abril.tipo.sueldos.total+=$scope.grupo.Abril.tipo.sueldos.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Mayo.tipo.sueldos.vector.length;i++){
                        $scope.grupo.Mayo.tipo.sueldos.total+=$scope.grupo.Mayo.tipo.sueldos.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Junio.tipo.sueldos.vector.length;i++){
                        $scope.grupo.Junio.tipo.sueldos.total+=$scope.grupo.Junio.tipo.serviciosBasicos.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Julio.tipo.sueldos.vector.length;i++){
                        $scope.grupo.Julio.tipo.sueldos.total+=$scope.grupo.Julio.tipo.sueldos.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Agosto.tipo.sueldos.vector.length;i++){
                        $scope.grupo.Agosto.tipo.sueldos.total+=$scope.grupo.Agosto.tipo.sueldos.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Septiembre.tipo.sueldos.vector.length;i++){
                        $scope.grupo.Septiembre.tipo.sueldos.total+=$scope.grupo.Septiembre.tipo.sueldos.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Octubre.tipo.sueldos.vector.length;i++){
                        $scope.grupo.Octubre.tipo.sueldos.total+=$scope.grupo.Octubre.tipo.sueldos.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Noviembre.tipo.sueldos.vector.length;i++){
                        $scope.grupo.Noviembre.tipo.sueldos.total+=$scope.grupo.Noviembre.tipo.sueldos.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Diciembre.tipo.sueldos.vector.length;i++){
                        $scope.grupo.Diciembre.tipo.sueldos.total+=$scope.grupo.Diciembre.tipo.sueldos.vector[i];
                       
                    }
                     for(var i=0;i<$scope.grupo.Total.tipo.sueldos.vector.length;i++){
                        $scope.grupo.Total.tipo.sueldos.total+=$scope.grupo.Total.tipo.sueldos.vector[i];
                       
                    }
                    
                    //movilizacion
                    
                     for(var i=0;i<$scope.grupo.Enero.tipo.movilizacion.vector.length;i++){
                        $scope.grupo.Enero.tipo.movilizacion.total+=$scope.grupo.Enero.tipo.movilizacion.vector[i];
                      
                    }
                    for(var i=0;i<$scope.grupo.Febrero.tipo.movilizacion.vector.length;i++){
                        $scope.grupo.Febrero.tipo.movilizacion.total+=$scope.grupo.Febrero.tipo.movilizacion.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Marzo.tipo.movilizacion.vector.length;i++){
                        $scope.grupo.Marzo.tipo.movilizacion.total+=$scope.grupo.Marzo.tipo.movilizacion.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Abril.tipo.movilizacion.vector.length;i++){
                        $scope.grupo.Abril.tipo.movilizacion.total+=$scope.grupo.Abril.tipo.movilizacion.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Mayo.tipo.movilizacion.vector.length;i++){
                        $scope.grupo.Mayo.tipo.movilizacion.total+=$scope.grupo.Mayo.tipo.movilizacion.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Junio.tipo.movilizacion.vector.length;i++){
                        $scope.grupo.Junio.tipo.movilizacion.total+=$scope.grupo.Junio.tipo.movilizacion.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Julio.tipo.movilizacion.vector.length;i++){
                        $scope.grupo.Julio.tipo.movilizacion.total+=$scope.grupo.Julio.tipo.movilizacion.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Agosto.tipo.movilizacion.vector.length;i++){
                        $scope.grupo.Agosto.tipo.movilizacion.total+=$scope.grupo.Agosto.tipo.movilizacion.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Septiembre.tipo.movilizacion.vector.length;i++){
                        $scope.grupo.Septiembre.tipo.movilizacion.total+=$scope.grupo.Septiembre.tipo.movilizacion.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Octubre.tipo.movilizacion.vector.length;i++){
                        $scope.grupo.Octubre.tipo.movilizacion.total+=$scope.grupo.Octubre.tipo.movilizacion.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Noviembre.tipo.movilizacion.vector.length;i++){
                        $scope.grupo.Noviembre.tipo.movilizacion.total+=$scope.grupo.Noviembre.tipo.movilizacion.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Diciembre.tipo.movilizacion.vector.length;i++){
                        $scope.grupo.Diciembre.tipo.movilizacion.total+=$scope.grupo.Diciembre.tipo.movilizacion.vector[i];
                       
                    }
                     for(var i=0;i<$scope.grupo.Total.tipo.movilizacion.vector.length;i++){
                        $scope.grupo.Total.tipo.movilizacion.total+=$scope.grupo.Total.tipo.movilizacion.vector[i];
                       
                    }
                    //otros
                    for(var i=0;i<$scope.grupo.Enero.tipo.otros.vector.length;i++){
                        $scope.grupo.Enero.tipo.otros.total+=$scope.grupo.Enero.tipo.otros.vector[i];
                      
                    }
                    for(var i=0;i<$scope.grupo.Febrero.tipo.otros.vector.length;i++){
                        $scope.grupo.Febrero.tipo.otros.total+=$scope.grupo.Febrero.tipo.otros.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Marzo.tipo.otros.vector.length;i++){
                        $scope.grupo.Marzo.tipo.otros.total+=$scope.grupo.Marzo.tipo.otros.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Abril.tipo.otros.vector.length;i++){
                        $scope.grupo.Abril.tipo.otros.total+=$scope.grupo.Abril.tipo.otros.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Mayo.tipo.otros.vector.length;i++){
                        $scope.grupo.Mayo.tipo.otros.total+=$scope.grupo.Mayo.tipo.otros.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Junio.tipo.otros.vector.length;i++){
                        $scope.grupo.Junio.tipo.otros.total+=$scope.grupo.Junio.tipo.otros.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Julio.tipo.otros.vector.length;i++){
                        $scope.grupo.Julio.tipo.otros.total+=$scope.grupo.Julio.tipo.otros.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Agosto.tipo.otros.vector.length;i++){
                        $scope.grupo.Agosto.tipo.otros.total+=$scope.grupo.Agosto.tipo.otros.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Septiembre.tipo.otros.vector.length;i++){
                        $scope.grupo.Septiembre.tipo.otros.total+=$scope.grupo.Septiembre.tipo.otros.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Octubre.tipo.otros.vector.length;i++){
                        $scope.grupo.Octubre.tipo.otros.total+=$scope.grupo.Octubre.tipo.otros.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Noviembre.tipo.otros.vector.length;i++){
                        $scope.grupo.Noviembre.tipo.otros.total+=$scope.grupo.Noviembre.tipo.otros.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Diciembre.tipo.otros.vector.length;i++){
                        $scope.grupo.Diciembre.tipo.otros.total+=$scope.grupo.Diciembre.tipo.otros.vector[i];
                       
                    }
                     for(var i=0;i<$scope.grupo.Total.tipo.otros.vector.length;i++){
                        $scope.grupo.Total.tipo.otros.total+=$scope.grupo.Total.tipo.otros.vector[i];
                       
                    }
                    
                     //viaticos
                    for(var i=0;i<$scope.grupo.Enero.tipo.viaticos.vector.length;i++){
                        $scope.grupo.Enero.tipo.viaticos.total+=$scope.grupo.Enero.tipo.viaticos.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Febrero.tipo.viaticos.vector.length;i++){
                        $scope.grupo.Febrero.tipo.viaticos.total+=$scope.grupo.Febrero.tipo.viaticos.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Marzo.tipo.viaticos.vector.length;i++){
                        $scope.grupo.Marzo.tipo.viaticos.total+=$scope.grupo.Marzo.tipo.viaticos.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Abril.tipo.viaticos.vector.length;i++){
                        $scope.grupo.Abril.tipo.viaticos.total+=$scope.grupo.Abril.tipo.viaticos.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Mayo.tipo.viaticos.vector.length;i++){
                        $scope.grupo.Mayo.tipo.viaticos.total+=$scope.grupo.Mayo.tipo.viaticos.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Junio.tipo.viaticos.vector.length;i++){
                        $scope.grupo.Junio.tipo.viaticos.total+=$scope.grupo.Junio.tipo.viaticos.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Julio.tipo.viaticos.vector.length;i++){
                        $scope.grupo.Julio.tipo.viaticos.total+=$scope.grupo.Julio.tipo.viaticos.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Agosto.tipo.viaticos.vector.length;i++){
                        $scope.grupo.Agosto.tipo.viaticos.total+=$scope.grupo.Agosto.tipo.viaticos.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Septiembre.tipo.viaticos.vector.length;i++){
                        $scope.grupo.Septiembre.tipo.viaticos.total+=$scope.grupo.Septiembre.tipo.viaticos.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Octubre.tipo.viaticos.vector.length;i++){
                        $scope.grupo.Octubre.tipo.viaticos.total+=$scope.grupo.Octubre.tipo.viaticos.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Noviembre.tipo.viaticos.vector.length;i++){
                        $scope.grupo.Noviembre.tipo.viaticos.total+=$scope.grupo.Noviembre.tipo.viaticos.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Diciembre.tipo.viaticos.vector.length;i++){
                        $scope.grupo.Diciembre.tipo.viaticos.total+=$scope.grupo.Diciembre.tipo.viaticos.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Total.tipo.viaticos.vector.length;i++){
                        $scope.grupo.Total.tipo.viaticos.total+=$scope.grupo.Total.tipo.viaticos.vector[i];
                       
                    }
                     //capacitacion
                    for(var i=0;i<$scope.grupo.Enero.tipo.capacitacion.vector.length;i++){
                        $scope.grupo.Enero.tipo.capacitacion.total+=$scope.grupo.Enero.tipo.capacitacion.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Febrero.tipo.capacitacion.vector.length;i++){
                        $scope.grupo.Febrero.tipo.capacitacion.total+=$scope.grupo.Febrero.tipo.capacitacion.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Marzo.tipo.capacitacion.vector.length;i++){
                        $scope.grupo.Marzo.tipo.capacitacion.total+=$scope.grupo.Marzo.tipo.capacitacion.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Abril.tipo.capacitacion.vector.length;i++){
                        $scope.grupo.Abril.tipo.capacitacion.total+=$scope.grupo.Abril.tipo.capacitacion.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Mayo.tipo.capacitacion.vector.length;i++){
                        $scope.grupo.Mayo.tipo.capacitacion.total+=$scope.grupo.Mayo.tipo.capacitacion.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Junio.tipo.capacitacion.vector.length;i++){
                        $scope.grupo.Junio.tipo.capacitacion.total+=$scope.grupo.Junio.tipo.capacitacion.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Julio.tipo.capacitacion.vector.length;i++){
                        $scope.grupo.Julio.tipo.capacitacion.total+=$scope.grupo.Julio.tipo.capacitacion.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Agosto.tipo.capacitacion.vector.length;i++){
                        $scope.grupo.Agosto.tipo.capacitacion.total+=$scope.grupo.Agosto.tipo.capacitacion.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Septiembre.tipo.capacitacion.vector.length;i++){
                        $scope.grupo.Septiembre.tipo.capacitacion.total+=$scope.grupo.Septiembre.tipo.capacitacion.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Octubre.tipo.capacitacion.vector.length;i++){
                        $scope.grupo.Octubre.tipo.capacitacion.total+=$scope.grupo.Octubre.tipo.capacitacion.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Noviembre.tipo.capacitacion.vector.length;i++){
                        $scope.grupo.Noviembre.tipo.capacitacion.total+=$scope.grupo.Noviembre.tipo.capacitacion.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Diciembre.tipo.capacitacion.vector.length;i++){
                        $scope.grupo.Diciembre.tipo.capacitacion.total+=$scope.grupo.Diciembre.tipo.capacitacion.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Total.tipo.capacitacion.vector.length;i++){
                        $scope.grupo.Total.tipo.capacitacion.total+=$scope.grupo.Total.tipo.capacitacion.vector[i];
                       
                    }
                     //suministros
                    for(var i=0;i<$scope.grupo.Enero.tipo.suministros.vector.length;i++){
                        $scope.grupo.Enero.tipo.suministros.total+=$scope.grupo.Enero.tipo.suministros.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Febrero.tipo.suministros.vector.length;i++){
                        $scope.grupo.Febrero.tipo.suministros.total+=$scope.grupo.Febrero.tipo.suministros.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Marzo.tipo.suministros.vector.length;i++){
                        $scope.grupo.Marzo.tipo.suministros.total+=$scope.grupo.Marzo.tipo.suministros.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Abril.tipo.suministros.vector.length;i++){
                        $scope.grupo.Abril.tipo.suministros.total+=$scope.grupo.Abril.tipo.suministros.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Mayo.tipo.suministros.vector.length;i++){
                        $scope.grupo.Mayo.tipo.suministros.total+=$scope.grupo.Mayo.tipo.suministros.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Junio.tipo.suministros.vector.length;i++){
                        $scope.grupo.Junio.tipo.suministros.total+=$scope.grupo.Junio.tipo.suministros.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Julio.tipo.suministros.vector.length;i++){
                        $scope.grupo.Julio.tipo.suministros.total+=$scope.grupo.Julio.tipo.suministros.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Agosto.tipo.suministros.vector.length;i++){
                        $scope.grupo.Agosto.tipo.suministros.total+=$scope.grupo.Agosto.tipo.suministros.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Septiembre.tipo.suministros.vector.length;i++){
                        $scope.grupo.Septiembre.tipo.suministros.total+=$scope.grupo.Septiembre.tipo.suministros.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Octubre.tipo.suministros.vector.length;i++){
                        $scope.grupo.Octubre.tipo.suministros.total+=$scope.grupo.Octubre.tipo.suministros.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Noviembre.tipo.suministros.vector.length;i++){
                        $scope.grupo.Noviembre.tipo.suministros.total+=$scope.grupo.Noviembre.tipo.suministros.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Diciembre.tipo.suministros.vector.length;i++){
                        $scope.grupo.Diciembre.tipo.suministros.total+=$scope.grupo.Diciembre.tipo.suministros.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Total.tipo.suministros.vector.length;i++){
                        $scope.grupo.Total.tipo.suministros.total+=$scope.grupo.Total.tipo.suministros.vector[i];
                       
                    }
                     //herramientas
                    for(var i=0;i<$scope.grupo.Enero.tipo.herramientas.vector.length;i++){
                        $scope.grupo.Enero.tipo.herramientas.total+=$scope.grupo.Enero.tipo.herramientas.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Febrero.tipo.herramientas.vector.length;i++){
                        $scope.grupo.Febrero.tipo.herramientas.total+=$scope.grupo.Febrero.tipo.herramientas.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Marzo.tipo.herramientas.vector.length;i++){
                        $scope.grupo.Marzo.tipo.herramientas.total+=$scope.grupo.Marzo.tipo.herramientas.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Abril.tipo.herramientas.vector.length;i++){
                        $scope.grupo.Abril.tipo.herramientas.total+=$scope.grupo.Abril.tipo.herramientas.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Mayo.tipo.herramientas.vector.length;i++){
                        $scope.grupo.Mayo.tipo.herramientas.total+=$scope.grupo.Mayo.tipo.herramientas.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Junio.tipo.herramientas.vector.length;i++){
                        $scope.grupo.Junio.tipo.herramientas.total+=$scope.grupo.Junio.tipo.herramientas.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Julio.tipo.herramientas.vector.length;i++){
                        $scope.grupo.Julio.tipo.herramientas.total+=$scope.grupo.Julio.tipo.herramientas.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Agosto.tipo.herramientas.vector.length;i++){
                        $scope.grupo.Agosto.tipo.herramientas.total+=$scope.grupo.Agosto.tipo.herramientas.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Septiembre.tipo.herramientas.vector.length;i++){
                        $scope.grupo.Septiembre.tipo.herramientas.total+=$scope.grupo.Septiembre.tipo.herramientas.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Octubre.tipo.herramientas.vector.length;i++){
                        $scope.grupo.Octubre.tipo.herramientas.total+=$scope.grupo.Octubre.tipo.herramientas.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Noviembre.tipo.herramientas.vector.length;i++){
                        $scope.grupo.Noviembre.tipo.herramientas.total+=$scope.grupo.Noviembre.tipo.herramientas.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Diciembre.tipo.herramientas.vector.length;i++){
                        $scope.grupo.Diciembre.tipo.herramientas.total+=$scope.grupo.Diciembre.tipo.herramientas.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Total.tipo.herramientas.vector.length;i++){
                        $scope.grupo.Total.tipo.herramientas.total+=$scope.grupo.Total.tipo.herramientas.vector[i];
                       
                    }
                   
                }
            }
            
            
            
        }

        $scope.nuevaBusqueda= function () {

          console.log('entro e nueva busqueda')
         
            $scope.mostrar=true;
          $scope.periodo='';
          $scope.factXperiodo=[];
              $scope.grupo={
            Enero:{
                nombre:'Enero',
         tipo:{
                    mercaderia:{
                        vector:[],
                        total:0
                    },
                    arriendo:{
                        vector:[],
                        total:0
                    },
                    serviciosBasicos:{
                        vector:[],
                        total:0
                    },
                    sueldos:{
                        vector:[],
                        total:0
                    },
                    movilizacion:{
                        vector:[],
                        total:0
                    },
                     viaticos:{
                        vector:[],
                        total:0
                    },
                    capacitacion:{
                        vector:[],
                        total:0
                    },
                    suministros:{
                        vector:[],
                        total:0
                    },
                     herramientas:{
                        vector:[],
                        total:0
                    },
                    otros:{
                        vector:[],
                        total:0
                    },
                    
                }
            },
            Febrero:{
                nombre:'Febrero',
                tipo:{
                    mercaderia:{
                        vector:[],
                        total:0
                    },
                    arriendo:{
                        vector:[],
                        total:0
                    },
                    serviciosBasicos:{
                        vector:[],
                        total:0
                    },
                    sueldos:{
                        vector:[],
                        total:0
                    },
                    movilizacion:{
                        vector:[],
                        total:0
                    },
                     viaticos:{
                        vector:[],
                        total:0
                    },
                    capacitacion:{
                        vector:[],
                        total:0
                    },
                    suministros:{
                        vector:[],
                        total:0
                    },
                     herramientas:{
                        vector:[],
                        total:0
                    },
                    otros:{
                        vector:[],
                        total:0
                    },
                    
                }
            },
            Marzo:{
                nombre:'Marzo',
                tipo:{
                    mercaderia:{
                        vector:[],
                        total:0
                    },
                    arriendo:{
                        vector:[],
                        total:0
                    },
                    serviciosBasicos:{
                        vector:[],
                        total:0
                    },
                    sueldos:{
                        vector:[],
                        total:0
                    },
                    movilizacion:{
                        vector:[],
                        total:0
                    },
                     viaticos:{
                        vector:[],
                        total:0
                    },
                    capacitacion:{
                        vector:[],
                        total:0
                    },
                    suministros:{
                        vector:[],
                        total:0
                    },
                     herramientas:{
                        vector:[],
                        total:0
                    },
                    otros:{
                        vector:[],
                        total:0
                    },
                    
                }
            },     
            Abril:{
                nombre:'Abril',
            tipo:{
                    mercaderia:{
                        vector:[],
                        total:0
                    },
                    arriendo:{
                        vector:[],
                        total:0
                    },
                    serviciosBasicos:{
                        vector:[],
                        total:0
                    },
                    sueldos:{
                        vector:[],
                        total:0
                    },
                    movilizacion:{
                        vector:[],
                        total:0
                    },
                     viaticos:{
                        vector:[],
                        total:0
                    },
                    capacitacion:{
                        vector:[],
                        total:0
                    },
                    suministros:{
                        vector:[],
                        total:0
                    },
                     herramientas:{
                        vector:[],
                        total:0
                    },
                    otros:{
                        vector:[],
                        total:0
                    },
                    
                }
            },
            Mayo:{
                nombre:'Mayo',
               tipo:{
                    mercaderia:{
                        vector:[],
                        total:0
                    },
                    arriendo:{
                        vector:[],
                        total:0
                    },
                    serviciosBasicos:{
                        vector:[],
                        total:0
                    },
                    sueldos:{
                        vector:[],
                        total:0
                    },
                    movilizacion:{
                        vector:[],
                        total:0
                    },
                     viaticos:{
                        vector:[],
                        total:0
                    },
                    capacitacion:{
                        vector:[],
                        total:0
                    },
                    suministros:{
                        vector:[],
                        total:0
                    },
                     herramientas:{
                        vector:[],
                        total:0
                    },
                    otros:{
                        vector:[],
                        total:0
                    },
                    
                }
            },
            Junio:{nombre:'Junio',
                tipo:{
                    mercaderia:{
                        vector:[],
                        total:0
                    },
                    arriendo:{
                        vector:[],
                        total:0
                    },
                    serviciosBasicos:{
                        vector:[],
                        total:0
                    },
                    sueldos:{
                        vector:[],
                        total:0
                    },
                    movilizacion:{
                        vector:[],
                        total:0
                    },
                     viaticos:{
                        vector:[],
                        total:0
                    },
                    capacitacion:{
                        vector:[],
                        total:0
                    },
                    suministros:{
                        vector:[],
                        total:0
                    },
                     herramientas:{
                        vector:[],
                        total:0
                    },
                    otros:{
                        vector:[],
                        total:0
                    },
                    
                }
              
            },
            Julio:{
                nombre:'Julio',
             tipo:{
                    mercaderia:{
                        vector:[],
                        total:0
                    },
                    arriendo:{
                        vector:[],
                        total:0
                    },
                    serviciosBasicos:{
                        vector:[],
                        total:0
                    },
                    sueldos:{
                        vector:[],
                        total:0
                    },
                    movilizacion:{
                        vector:[],
                        total:0
                    },
                     viaticos:{
                        vector:[],
                        total:0
                    },
                    capacitacion:{
                        vector:[],
                        total:0
                    },
                    suministros:{
                        vector:[],
                        total:0
                    },
                     herramientas:{
                        vector:[],
                        total:0
                    },
                    otros:{
                        vector:[],
                        total:0
                    },
                    
                }
            },
            Agosto:{
                nombre:'Agosto',
             tipo:{
                    mercaderia:{
                        vector:[],
                        total:0
                    },
                    arriendo:{
                        vector:[],
                        total:0
                    },
                    serviciosBasicos:{
                        vector:[],
                        total:0
                    },
                    sueldos:{
                        vector:[],
                        total:0
                    },
                    movilizacion:{
                        vector:[],
                        total:0
                    },
                     viaticos:{
                        vector:[],
                        total:0
                    },
                    capacitacion:{
                        vector:[],
                        total:0
                    },
                    suministros:{
                        vector:[],
                        total:0
                    },
                     herramientas:{
                        vector:[],
                        total:0
                    },
                    otros:{
                        vector:[],
                        total:0
                    },
                    
                }
            },
            Septiembre:{
                nombre:'Septiembre',
              tipo:{
                    mercaderia:{
                        vector:[],
                        total:0
                    },
                    arriendo:{
                        vector:[],
                        total:0
                    },
                    serviciosBasicos:{
                        vector:[],
                        total:0
                    },
                    sueldos:{
                        vector:[],
                        total:0
                    },
                    movilizacion:{
                        vector:[],
                        total:0
                    },
                     viaticos:{
                        vector:[],
                        total:0
                    },
                    capacitacion:{
                        vector:[],
                        total:0
                    },
                    suministros:{
                        vector:[],
                        total:0
                    },
                     herramientas:{
                        vector:[],
                        total:0
                    },
                    otros:{
                        vector:[],
                        total:0
                    },
                    
                }
            },
            Octubre:{
                nombre:'Octubre',
                tipo:{
                    mercaderia:{
                        vector:[],
                        total:0
                    },
                    arriendo:{
                        vector:[],
                        total:0
                    },
                    serviciosBasicos:{
                        vector:[],
                        total:0
                    },
                    sueldos:{
                        vector:[],
                        total:0
                    },
                    movilizacion:{
                        vector:[],
                        total:0
                    },
                     viaticos:{
                        vector:[],
                        total:0
                    },
                    capacitacion:{
                        vector:[],
                        total:0
                    },
                    suministros:{
                        vector:[],
                        total:0
                    },
                     herramientas:{
                        vector:[],
                        total:0
                    },
                    otros:{
                        vector:[],
                        total:0
                    },
                    
                }
            },
            Noviembre:{
                nombre:'Noviembre',
              tipo:{
                    mercaderia:{
                        vector:[],
                        total:0
                    },
                    arriendo:{
                        vector:[],
                        total:0
                    },
                    serviciosBasicos:{
                        vector:[],
                        total:0
                    },
                    sueldos:{
                        vector:[],
                        total:0
                    },
                    movilizacion:{
                        vector:[],
                        total:0
                    },
                     viaticos:{
                        vector:[],
                        total:0
                    },
                    capacitacion:{
                        vector:[],
                        total:0
                    },
                    suministros:{
                        vector:[],
                        total:0
                    },
                     herramientas:{
                        vector:[],
                        total:0
                    },
                    otros:{
                        vector:[],
                        total:0
                    },
                    
                }
            },
            Diciembre:{
                nombre:'Diciembre',
                tipo:{
                    mercaderia:{
                        vector:[],
                        total:0
                    },
                    arriendo:{
                        vector:[],
                        total:0
                    },
                    serviciosBasicos:{
                        vector:[],
                        total:0
                    },
                    sueldos:{
                        vector:[],
                        total:0
                    },
                    movilizacion:{
                        vector:[],
                        total:0
                    },
                     viaticos:{
                        vector:[],
                        total:0
                    },
                    capacitacion:{
                        vector:[],
                        total:0
                    },
                    suministros:{
                        vector:[],
                        total:0
                    },
                     herramientas:{
                        vector:[],
                        total:0
                    },
                    otros:{
                        vector:[],
                        total:0
                    },
                    
                }
            },
            Total:{
                nombre:'Total',
                tipo:{
                    mercaderia:{
                        vector:[],
                        total:0
                    },
                    arriendo:{
                        vector:[],
                        total:0
                    },
                    serviciosBasicos:{
                        vector:[],
                        total:0
                    },
                    sueldos:{
                        vector:[],
                        total:0
                    },
                    movilizacion:{
                        vector:[],
                        total:0
                    },
                     viaticos:{
                        vector:[],
                        total:0
                    },
                    capacitacion:{
                        vector:[],
                        total:0
                    },
                    suministros:{
                        vector:[],
                        total:0
                    },
                     herramientas:{
                        vector:[],
                        total:0
                    },
                    otros:{
                        vector:[],
                        total:0
                    },
                    
                }
            }
            
        }
           
        }

      
        $scope.exportarGP= function(){


            var data = [
                [' -----  ','Resumen de Gastos Personales Mensual',' ------','---'],
                ['Periodo',$scope.periodo,'Usuario',$scope.Facturas[0].idComprador.nombre+' ' + $scope.Facturas[0].idComprador.apellido ],
                ['Mes','mercaderia','arriendo','serviciosBasicos','sueldos','movilizacion','Otros'],
                [$scope.grupo.Enero.nombre,
                $scope.grupo.Enero.tipo.mercaderia.total,
                $scope.grupo.Enero.tipo.arriendo.total,
                $scope.grupo.Enero.tipo.serviciosBasicos.total,
                $scope.grupo.Enero.tipo.sueldos.total,
                $scope.grupo.Enero.tipo.movilizacion.total,
                $scope.grupo.Enero.tipo.otros.total,
                
                 $scope.grupo.Enero.tipo.viaticos.total,
                $scope.grupo.Enero.tipo.capacitacion.total,
                $scope.grupo.Enero.tipo.suministros.total,
                $scope.grupo.Enero.tipo.herramientas.total,],
                
                [$scope.grupo.Febrero.nombre,
                $scope.grupo.Febrero.tipo.mercaderia.total,
                $scope.grupo.Febrero.tipo.arriendo.total,
                $scope.grupo.Febrero.tipo.serviciosBasicos.total,
                $scope.grupo.Febrero.tipo.sueldos.total,
                $scope.grupo.Febrero.tipo.movilizacion.total,
                $scope.grupo.Febrero.tipo.otros.total,
                 $scope.grupo.Febrero.tipo.viaticos.total,
                $scope.grupo.Febrero.tipo.capacitacion.total,
                $scope.grupo.Febrero.tipo.suministros.total,
                $scope.grupo.Febrero.tipo.herramientas.total,],
                
                [$scope.grupo.Marzo.nombre,
                $scope.grupo.Marzo.tipo.mercaderia.total,
                $scope.grupo.Marzo.tipo.arriendo.total,
                $scope.grupo.Marzo.tipo.serviciosBasicos.total,
                $scope.grupo.Marzo.tipo.sueldos.total,
                $scope.grupo.Marzo.tipo.movilizacion.total,
                $scope.grupo.Marzo.tipo.otros.total,
                 $scope.grupo.Marzo.tipo.viaticos.total,
                $scope.grupo.Marzo.tipo.capacitacion.total,
                $scope.grupo.Marzo.tipo.suministros.total,
                $scope.grupo.Marzo.tipo.herramientas.total,],
                
                [$scope.grupo.Abril.nombre,
                $scope.grupo.Abril.tipo.mercaderia.total,
                $scope.grupo.Abril.tipo.arriendo.total,
                $scope.grupo.Abril.tipo.serviciosBasicos.total,
                $scope.grupo.Abril.tipo.sueldos.total,
                $scope.grupo.Abril.tipo.movilizacion.total,
                $scope.grupo.Abril.tipo.otros.total,
                 $scope.grupo.Abril.tipo.viaticos.total,
                $scope.grupo.Abril.tipo.capacitacion.total,
                $scope.grupo.Abril.tipo.suministros.total,
                $scope.grupo.Abril.tipo.herramientas.total,],
                
                [$scope.grupo.Mayo.nombre,
                $scope.grupo.Mayo.tipo.mercaderia.total,
                $scope.grupo.Mayo.tipo.arriendo.total,
                $scope.grupo.Mayo.tipo.serviciosBasicos.total,
                $scope.grupo.Mayo.tipo.sueldos.total,
                $scope.grupo.Mayo.tipo.movilizacion.total,
                $scope.grupo.Mayo.tipo.otros.total,
                 $scope.grupo.Mayo.tipo.viaticos.total,
                $scope.grupo.Mayo.tipo.capacitacion.total,
                $scope.grupo.Mayo.tipo.suministros.total,
                $scope.grupo.Mayo.tipo.herramientas.total,],
                
                [$scope.grupo.Junio.nombre,
                $scope.grupo.Junio.tipo.mercaderia.total,
                $scope.grupo.Junio.tipo.arriendo.total,
                $scope.grupo.Junio.tipo.serviciosBasicos.total,
                $scope.grupo.Junio.tipo.sueldos.total,
                $scope.grupo.Junio.tipo.movilizacion.total,
                $scope.grupo.Junio.tipo.otros.total,
                 $scope.grupo.Junio.tipo.viaticos.total,
                $scope.grupo.Junio.tipo.capacitacion.total,
                $scope.grupo.Junio.tipo.suministros.total,
                $scope.grupo.Junio.tipo.herramientas.total,
                 ],
                
                [$scope.grupo.Julio.nombre,
                $scope.grupo.Julio.tipo.mercaderia.total,
                $scope.grupo.Julio.tipo.arriendo.total,
                $scope.grupo.Julio.tipo.serviciosBasicos.total,
                $scope.grupo.Julio.tipo.sueldos.total,
                $scope.grupo.Julio.tipo.movilizacion.total,
                $scope.grupo.Julio.tipo.otros.total,
                 $scope.grupo.Julio.tipo.viaticos.total,
                $scope.grupo.Julio.tipo.capacitacion.total,
                $scope.grupo.Julio.tipo.suministros.total,
                $scope.grupo.Julio.tipo.herramientas.total,],
                
                [$scope.grupo.Agosto.nombre,
                $scope.grupo.Agosto.tipo.mercaderia.total,
                $scope.grupo.Agosto.tipo.arriendo.total,
                $scope.grupo.Agosto.tipo.serviciosBasicos.total,
                $scope.grupo.Agosto.tipo.sueldos.total,
                $scope.grupo.Agosto.tipo.movilizacion.total,
                $scope.grupo.Agosto.tipo.otros.total,
                 $scope.grupo.Agosto.tipo.viaticos.total,
                $scope.grupo.Agosto.tipo.capacitacion.total,
                $scope.grupo.Agosto.tipo.suministros.total,
                $scope.grupo.Agosto.tipo.herramientas.total,],
                
                [$scope.grupo.Septiembre.nombre,
                $scope.grupo.Septiembre.tipo.mercaderia.total,
                $scope.grupo.Septiembre.tipo.arriendo.total,
                $scope.grupo.Septiembre.tipo.serviciosBasicos.total,
                $scope.grupo.Septiembre.tipo.sueldos.total,
                $scope.grupo.Septiembre.tipo.movilizacion.total,
                $scope.grupo.Septiembre.tipo.otros.total,
                 $scope.grupo.Septiembre.tipo.viaticos.total,
                $scope.grupo.Septiembre.tipo.capacitacion.total,
                $scope.grupo.Septiembre.tipo.suministros.total,
                $scope.grupo.Septiembre.tipo.herramientas.total,],
                
                [$scope.grupo.Octubre.nombre,
                $scope.grupo.Octubre.tipo.mercaderia.total,
                $scope.grupo.Octubre.tipo.arriendo.total,
                $scope.grupo.Octubre.tipo.serviciosBasicos.total,
                $scope.grupo.Octubre.tipo.sueldos.total,
                $scope.grupo.Octubre.tipo.movilizacion.total,
                $scope.grupo.Octubre.tipo.otros.total,
                 $scope.grupo.Octubre.tipo.viaticos.total,
                $scope.grupo.Octubre.tipo.capacitacion.total,
                $scope.grupo.Octubre.tipo.suministros.total,
                $scope.grupo.Octubre.tipo.herramientas.total,],
                
                [$scope.grupo.Noviembre.nombre,
                $scope.grupo.Noviembre.tipo.mercaderia.total,
                $scope.grupo.Noviembre.tipo.arriendo.total,
                $scope.grupo.Noviembre.tipo.serviciosBasicos.total,
                $scope.grupo.Noviembre.tipo.sueldos.total,
                $scope.grupo.Noviembre.tipo.movilizacion.total,
                $scope.grupo.Noviembre.tipo.otros.total,
                 $scope.grupo.Noviembre.tipo.viaticos.total,
                $scope.grupo.Noviembre.tipo.capacitacion.total,
                $scope.grupo.Noviembre.tipo.suministros.total,
                $scope.grupo.Noviembre.tipo.herramientas.total,],
                
                [$scope.grupo.Diciembre.nombre,
                $scope.grupo.Diciembre.tipo.mercaderia.total,
                $scope.grupo.Diciembre.tipo.arriendo.total,
                $scope.grupo.Diciembre.tipo.serviciosBasicos.total,
                $scope.grupo.Diciembre.tipo.sueldos.total,
                $scope.grupo.Diciembre.tipo.movilizacion.total,
                $scope.grupo.Diciembre.tipo.otros.total,
                 $scope.grupo.Diciembre.tipo.viaticos.total,
                $scope.grupo.Diciembre.tipo.capacitacion.total,
                $scope.grupo.Diciembre.tipo.suministros.total,
                $scope.grupo.Diciembre.tipo.herramientas.total,],
                
                [$scope.grupo.Total.nombre,
                $scope.grupo.Total.tipo.mercaderia.total,
                $scope.grupo.Total.tipo.arriendo.total,
                $scope.grupo.Total.tipo.serviciosBasicos.total,
                $scope.grupo.Total.tipo.sueldos.total,
                $scope.grupo.Total.tipo.movilizacion.total,
                $scope.grupo.Total.tipo.otros.total,
                 $scope.grupo.Total.tipo.viaticos.total,
                $scope.grupo.Total.tipo.capacitacion.total,
                $scope.grupo.Total.tipo.suministros.total,
                $scope.grupo.Total.tipo.herramientas.total,],
                
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


