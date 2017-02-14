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
                    alimentos:{
                        vector:[],
                        total:0
                    },
                    salud:{
                        vector:[],
                        total:0
                    },
                    vivienda:{
                        vector:[],
                        total:0
                    },
                    educacion:{
                        vector:[],
                        total:0
                    },
                    vestimenta:{
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
                    alimentos:{
                        vector:[],
                        total:0
                    },
                    salud:{
                        vector:[],
                        total:0
                    },
                    vivienda:{
                        vector:[],
                        total:0
                    },
                    educacion:{
                        vector:[],
                        total:0
                    },
                    vestimenta:{
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
                    alimentos:{
                        vector:[],
                        total:0
                    },
                    salud:{
                        vector:[],
                        total:0
                    },
                    vivienda:{
                        vector:[],
                        total:0
                    },
                    educacion:{
                        vector:[],
                        total:0
                    },
                    vestimenta:{
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
                    alimentos:{
                        vector:[],
                        total:0
                    },
                    salud:{
                        vector:[],
                        total:0
                    },
                    vivienda:{
                        vector:[],
                        total:0
                    },
                    educacion:{
                        vector:[],
                        total:0
                    },
                    vestimenta:{
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
                    alimentos:{
                        vector:[],
                        total:0
                    },
                    salud:{
                        vector:[],
                        total:0
                    },
                    vivienda:{
                        vector:[],
                        total:0
                    },
                    educacion:{
                        vector:[],
                        total:0
                    },
                    vestimenta:{
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
                    alimentos:{
                        vector:[],
                        total:0
                    },
                    salud:{
                        vector:[],
                        total:0
                    },
                    vivienda:{
                        vector:[],
                        total:0
                    },
                    educacion:{
                        vector:[],
                        total:0
                    },
                    vestimenta:{
                        vector:[],
                        total:0
                    },
                    otros:{
                        vector:[],
                        total:0
                    },
                    
                }},
            Julio:{
                nombre:'Julio',
                tipo:{
                    alimentos:{
                        vector:[],
                        total:0
                    },
                    salud:{
                        vector:[],
                        total:0
                    },
                    vivienda:{
                        vector:[],
                        total:0
                    },
                    educacion:{
                        vector:[],
                        total:0
                    },
                    vestimenta:{
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
                    alimentos:{
                        vector:[],
                        total:0
                    },
                    salud:{
                        vector:[],
                        total:0
                    },
                    vivienda:{
                        vector:[],
                        total:0
                    },
                    educacion:{
                        vector:[],
                        total:0
                    },
                    vestimenta:{
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
                    alimentos:{
                        vector:[],
                        total:0
                    },
                    salud:{
                        vector:[],
                        total:0
                    },
                    vivienda:{
                        vector:[],
                        total:0
                    },
                    educacion:{
                        vector:[],
                        total:0
                    },
                    vestimenta:{
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
                    alimentos:{
                        vector:[],
                        total:0
                    },
                    salud:{
                        vector:[],
                        total:0
                    },
                    vivienda:{
                        vector:[],
                        total:0
                    },
                    educacion:{
                        vector:[],
                        total:0
                    },
                    vestimenta:{
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
                    alimentos:{
                        vector:[],
                        total:0
                    },
                    salud:{
                        vector:[],
                        total:0
                    },
                    vivienda:{
                        vector:[],
                        total:0
                    },
                    educacion:{
                        vector:[],
                        total:0
                    },
                    vestimenta:{
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
                    alimentos:{
                        vector:[],
                        total:0
                    },
                    salud:{
                        vector:[],
                        total:0
                    },
                    vivienda:{
                        vector:[],
                        total:0
                    },
                    educacion:{
                        vector:[],
                        total:0
                    },
                    vestimenta:{
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
                    alimentos:{
                        vector:[],
                        total:0
                    },
                    salud:{
                        vector:[],
                        total:0
                    },
                    vivienda:{
                        vector:[],
                        total:0
                    },
                    educacion:{
                        vector:[],
                        total:0
                    },
                    vestimenta:{
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
                    //agregar todos los alimentos a un vector
                    for(var i=0;i< $scope.factXperiodo.length;i++){
                        $scope.grupo.Total.tipo.alimentos.vector.push( $scope.factXperiodo[i].alimentos);
                        $scope.grupo.Total.tipo.salud.vector.push( $scope.factXperiodo[i].salud);
                        $scope.grupo.Total.tipo.vivienda.vector.push( $scope.factXperiodo[i].vivienda);
                        $scope.grupo.Total.tipo.educacion.vector.push( $scope.factXperiodo[i].educacion);
                        $scope.grupo.Total.tipo.vestimenta.vector.push( $scope.factXperiodo[i].vestimenta);
                        $scope.grupo.Total.tipo.otros.vector.push( $scope.factXperiodo[i].otros);
                        
                        switch ($scope.factXperiodo[i].mes) {
                            case "Enero":
                                // code
                        $scope.grupo.Enero.tipo.alimentos.vector.push( $scope.factXperiodo[i].alimentos);
                        $scope.grupo.Enero.tipo.salud.vector.push( $scope.factXperiodo[i].salud);
                        $scope.grupo.Enero.tipo.vivienda.vector.push( $scope.factXperiodo[i].vivienda);
                        $scope.grupo.Enero.tipo.educacion.vector.push( $scope.factXperiodo[i].educacion);
                        $scope.grupo.Enero.tipo.vestimenta.vector.push( $scope.factXperiodo[i].vestimenta);
                        $scope.grupo.Enero.tipo.otros.vector.push( $scope.factXperiodo[i].otros);
                                break;
                            case "Febrero":
                                // code
                        $scope.grupo.Febrero.tipo.alimentos.vector.push( $scope.factXperiodo[i].alimentos);
                        $scope.grupo.Febrero.tipo.salud.vector.push( $scope.factXperiodo[i].salud);
                        $scope.grupo.Febrero.tipo.vivienda.vector.push( $scope.factXperiodo[i].vivienda);
                        $scope.grupo.Febrero.tipo.educacion.vector.push( $scope.factXperiodo[i].educacion);
                        $scope.grupo.Febrero.tipo.vestimenta.vector.push( $scope.factXperiodo[i].vestimenta);
                        $scope.grupo.Febrero.tipo.otros.vector.push( $scope.factXperiodo[i].otros);
                                break;
                            case "Marzo":
                                // code
                        $scope.grupo.Marzo.tipo.alimentos.vector.push( $scope.factXperiodo[i].alimentos);
                        $scope.grupo.Marzo.tipo.salud.vector.push( $scope.factXperiodo[i].salud);
                        $scope.grupo.Marzo.tipo.vivienda.vector.push( $scope.factXperiodo[i].vivienda);
                        $scope.grupo.Marzo.tipo.educacion.vector.push( $scope.factXperiodo[i].educacion);
                        $scope.grupo.Marzo.tipo.vestimenta.vector.push( $scope.factXperiodo[i].vestimenta);
                        $scope.grupo.Marzo.tipo.otros.vector.push( $scope.factXperiodo[i].otros);
                                
                                break;
                            case "Abril":
                                // 
                        $scope.grupo.Abril.tipo.alimentos.vector.push( $scope.factXperiodo[i].alimentos);
                        $scope.grupo.Abril.tipo.salud.vector.push( $scope.factXperiodo[i].salud);
                        $scope.grupo.Abril.tipo.vivienda.vector.push( $scope.factXperiodo[i].vivienda);
                        $scope.grupo.Abril.tipo.educacion.vector.push( $scope.factXperiodo[i].educacion);
                        $scope.grupo.Abril.tipo.vestimenta.vector.push( $scope.factXperiodo[i].vestimenta);
                        $scope.grupo.Abril.tipo.otros.vector.push( $scope.factXperiodo[i].otros);
                                break;    
                            case "Mayo":
                                // code
                        $scope.grupo.Mayo.tipo.alimentos.vector.push( $scope.factXperiodo[i].alimentos);
                        $scope.grupo.Mayo.tipo.salud.vector.push( $scope.factXperiodo[i].salud);
                        $scope.grupo.Mayo.tipo.vivienda.vector.push( $scope.factXperiodo[i].vivienda);
                        $scope.grupo.Mayo.tipo.educacion.vector.push( $scope.factXperiodo[i].educacion);
                        $scope.grupo.Mayo.tipo.vestimenta.vector.push( $scope.factXperiodo[i].vestimenta);
                        $scope.grupo.Mayo.tipo.otros.vector.push( $scope.factXperiodo[i].otros);
                                break;
                            case "Junio":
                                // code
                        $scope.grupo.Junio.tipo.alimentos.vector.push( $scope.factXperiodo[i].alimentos);
                        $scope.grupo.Junio.tipo.salud.vector.push( $scope.factXperiodo[i].salud);
                        $scope.grupo.Junio.tipo.vivienda.vector.push( $scope.factXperiodo[i].vivienda);
                        $scope.grupo.Junio.tipo.educacion.vector.push( $scope.factXperiodo[i].educacion);
                        $scope.grupo.Junio.tipo.vestimenta.vector.push( $scope.factXperiodo[i].vestimenta);
                        $scope.grupo.Junio.tipo.otros.vector.push( $scope.factXperiodo[i].otros);
                                break;    
                            case "Julio":
                                // code
                        $scope.grupo.Julio.tipo.alimentos.vector.push( $scope.factXperiodo[i].alimentos);
                        $scope.grupo.Julio.tipo.salud.vector.push( $scope.factXperiodo[i].salud);
                        $scope.grupo.Julio.tipo.vivienda.vector.push( $scope.factXperiodo[i].vivienda);
                        $scope.grupo.Julio.tipo.educacion.vector.push( $scope.factXperiodo[i].educacion);
                        $scope.grupo.Julio.tipo.vestimenta.vector.push( $scope.factXperiodo[i].vestimenta);
                        $scope.grupo.Julio.tipo.otros.vector.push( $scope.factXperiodo[i].otros);
                                break;
                            case "Agosto":
                                // code
                        $scope.grupo.Agosto.tipo.alimentos.vector.push( $scope.factXperiodo[i].alimentos);
                        $scope.grupo.Agosto.tipo.salud.vector.push( $scope.factXperiodo[i].salud);
                        $scope.grupo.Agosto.tipo.vivienda.vector.push( $scope.factXperiodo[i].vivienda);
                        $scope.grupo.Agosto.tipo.educacion.vector.push( $scope.factXperiodo[i].educacion);
                        $scope.grupo.Agosto.tipo.vestimenta.vector.push( $scope.factXperiodo[i].vestimenta);
                        $scope.grupo.Agosto.tipo.otros.vector.push( $scope.factXperiodo[i].otros);
                                break;
                            case "Septiembre":
                                // code
                        $scope.grupo.Septiembre.tipo.alimentos.vector.push( $scope.factXperiodo[i].alimentos);
                        $scope.grupo.Septiembre.tipo.salud.vector.push( $scope.factXperiodo[i].salud);
                        $scope.grupo.Septiembre.tipo.vivienda.vector.push( $scope.factXperiodo[i].vivienda);
                        $scope.grupo.Septiembre.tipo.educacion.vector.push( $scope.factXperiodo[i].educacion);
                        $scope.grupo.Septiembre.tipo.vestimenta.vector.push( $scope.factXperiodo[i].vestimenta);
                        $scope.grupo.Septiembre.tipo.otros.vector.push( $scope.factXperiodo[i].otros);
                                break;
                            case "Octubre":
                                // code
                        $scope.grupo.Octubre.tipo.alimentos.vector.push( $scope.factXperiodo[i].alimentos);
                        $scope.grupo.Octubre.tipo.salud.vector.push( $scope.factXperiodo[i].salud);
                        $scope.grupo.Octubre.tipo.vivienda.vector.push( $scope.factXperiodo[i].vivienda);
                        $scope.grupo.Octubre.tipo.educacion.vector.push( $scope.factXperiodo[i].educacion);
                        $scope.grupo.Octubre.tipo.vestimenta.vector.push( $scope.factXperiodo[i].vestimenta);
                        $scope.grupo.Octubre.tipo.otros.vector.push( $scope.factXperiodo[i].otros);
                                break;
                            case "Noviembre":
                                // code
                        $scope.grupo.Noviembre.tipo.alimentos.vector.push( $scope.factXperiodo[i].alimentos);
                        $scope.grupo.Noviembre.tipo.salud.vector.push( $scope.factXperiodo[i].salud);
                        $scope.grupo.Noviembre.tipo.vivienda.vector.push( $scope.factXperiodo[i].vivienda);
                        $scope.grupo.Noviembre.tipo.educacion.vector.push( $scope.factXperiodo[i].educacion);
                        $scope.grupo.Noviembre.tipo.vestimenta.vector.push( $scope.factXperiodo[i].vestimenta);
                        $scope.grupo.Noviembre.tipo.otros.vector.push( $scope.factXperiodo[i].otros);
                                break;
                            case "Diciembre":
                                // code
                        $scope.grupo.Diciembre.tipo.alimentos.vector.push( $scope.factXperiodo[i].alimentos);
                        $scope.grupo.Diciembre.tipo.salud.vector.push( $scope.factXperiodo[i].salud);
                        $scope.grupo.Diciembre.tipo.vivienda.vector.push( $scope.factXperiodo[i].vivienda);
                        $scope.grupo.Diciembre.tipo.educacion.vector.push( $scope.factXperiodo[i].educacion);
                        $scope.grupo.Diciembre.tipo.vestimenta.vector.push( $scope.factXperiodo[i].vestimenta);
                        $scope.grupo.Diciembre.tipo.otros.vector.push( $scope.factXperiodo[i].otros);
                                break;    
                            default:
                                // code
                        }
                        
                    }
                    
                    //sumar los vectores
                    //alimentos
                    for(var i=0;i<$scope.grupo.Enero.tipo.alimentos.vector.length;i++){
                        $scope.grupo.Enero.tipo.alimentos.total+=$scope.grupo.Enero.tipo.alimentos.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Febrero.tipo.alimentos.vector.length;i++){
                        $scope.grupo.Febrero.tipo.alimentos.total+=$scope.grupo.Febrero.tipo.alimentos.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Marzo.tipo.alimentos.vector.length;i++){
                        $scope.grupo.Marzo.tipo.alimentos.total+=$scope.grupo.Marzo.tipo.alimentos.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Abril.tipo.alimentos.vector.length;i++){
                        $scope.grupo.Abril.tipo.alimentos.total+=$scope.grupo.Abril.tipo.alimentos.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Mayo.tipo.alimentos.vector.length;i++){
                        $scope.grupo.Mayo.tipo.alimentos.total+=$scope.grupo.Mayo.tipo.alimentos.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Junio.tipo.alimentos.vector.length;i++){
                        $scope.grupo.Junio.tipo.alimentos.total+=$scope.grupo.Junio.tipo.alimentos.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Julio.tipo.alimentos.vector.length;i++){
                        $scope.grupo.Julio.tipo.alimentos.total+=$scope.grupo.Julio.tipo.alimentos.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Agosto.tipo.alimentos.vector.length;i++){
                        $scope.grupo.Agosto.tipo.alimentos.total+=$scope.grupo.Agosto.tipo.alimentos.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Septiembre.tipo.alimentos.vector.length;i++){
                        $scope.grupo.Septiembre.tipo.alimentos.total+=$scope.grupo.Septiembre.tipo.alimentos.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Octubre.tipo.alimentos.vector.length;i++){
                        $scope.grupo.Octubre.tipo.alimentos.total+=$scope.grupo.Octubre.tipo.alimentos.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Noviembre.tipo.alimentos.vector.length;i++){
                        $scope.grupo.Noviembre.tipo.alimentos.total+=$scope.grupo.Noviembre.tipo.alimentos.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Diciembre.tipo.alimentos.vector.length;i++){
                        $scope.grupo.Diciembre.tipo.alimentos.total+=$scope.grupo.Diciembre.tipo.alimentos.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Total.tipo.alimentos.vector.length;i++){
                        $scope.grupo.Total.tipo.alimentos.total+=$scope.grupo.Total.tipo.alimentos.vector[i];
                       
                    }
                    //salud
                    for(var i=0;i<$scope.grupo.Enero.tipo.salud.vector.length;i++){
                        $scope.grupo.Enero.tipo.salud.total+=$scope.grupo.Enero.tipo.salud.vector[i];
                      
                    }
                    for(var i=0;i<$scope.grupo.Febrero.tipo.salud.vector.length;i++){
                        $scope.grupo.Febrero.tipo.salud.total+=$scope.grupo.Febrero.tipo.salud.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Marzo.tipo.salud.vector.length;i++){
                        $scope.grupo.Marzo.tipo.salud.total+=$scope.grupo.Marzo.tipo.salud.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Abril.tipo.salud.vector.length;i++){
                        $scope.grupo.Abril.tipo.salud.total+=$scope.grupo.Abril.tipo.salud.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Mayo.tipo.salud.vector.length;i++){
                        $scope.grupo.Mayo.tipo.salud.total+=$scope.grupo.Mayo.tipo.salud.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Junio.tipo.salud.vector.length;i++){
                        $scope.grupo.Junio.tipo.salud.total+=$scope.grupo.Junio.tipo.salud.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Julio.tipo.salud.vector.length;i++){
                        $scope.grupo.Julio.tipo.salud.total+=$scope.grupo.Julio.tipo.salud.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Agosto.tipo.salud.vector.length;i++){
                        $scope.grupo.Agosto.tipo.salud.total+=$scope.grupo.Agosto.tipo.salud.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Septiembre.tipo.salud.vector.length;i++){
                        $scope.grupo.Septiembre.tipo.salud.total+=$scope.grupo.Septiembre.tipo.salud.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Octubre.tipo.salud.vector.length;i++){
                        $scope.grupo.Octubre.tipo.salud.total+=$scope.grupo.Octubre.tipo.salud.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Noviembre.tipo.salud.vector.length;i++){
                        $scope.grupo.Noviembre.tipo.salud.total+=$scope.grupo.Noviembre.tipo.salud.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Diciembre.tipo.salud.vector.length;i++){
                        $scope.grupo.Diciembre.tipo.salud.total+=$scope.grupo.Diciembre.tipo.salud.vector[i];
                       
                    }
                     for(var i=0;i<$scope.grupo.Total.tipo.salud.vector.length;i++){
                        $scope.grupo.Total.tipo.salud.total+=$scope.grupo.Total.tipo.salud.vector[i];
                       
                    }
                    
                    //vivienda
                    for(var i=0;i<$scope.grupo.Enero.tipo.vivienda.vector.length;i++){
                        $scope.grupo.Enero.tipo.vivienda.total+=$scope.grupo.Enero.tipo.vivienda.vector[i];
                      
                    }
                    for(var i=0;i<$scope.grupo.Febrero.tipo.vivienda.vector.length;i++){
                        $scope.grupo.Febrero.tipo.vivienda.total+=$scope.grupo.Febrero.tipo.vivienda.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Marzo.tipo.vivienda.vector.length;i++){
                        $scope.grupo.Marzo.tipo.vivienda.total+=$scope.grupo.Marzo.tipo.vivienda.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Abril.tipo.vivienda.vector.length;i++){
                        $scope.grupo.Abril.tipo.vivienda.total+=$scope.grupo.Abril.tipo.vivienda.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Mayo.tipo.vivienda.vector.length;i++){
                        $scope.grupo.Mayo.tipo.vivienda.total+=$scope.grupo.Mayo.tipo.vivienda.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Junio.tipo.vivienda.vector.length;i++){
                        $scope.grupo.Junio.tipo.vivienda.total+=$scope.grupo.Junio.tipo.vivienda.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Julio.tipo.vivienda.vector.length;i++){
                        $scope.grupo.Julio.tipo.vivienda.total+=$scope.grupo.Julio.tipo.vivienda.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Agosto.tipo.vivienda.vector.length;i++){
                        $scope.grupo.Agosto.tipo.vivienda.total+=$scope.grupo.Agosto.tipo.vivienda.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Septiembre.tipo.vivienda.vector.length;i++){
                        $scope.grupo.Septiembre.tipo.vivienda.total+=$scope.grupo.Septiembre.tipo.vivienda.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Octubre.tipo.vivienda.vector.length;i++){
                        $scope.grupo.Octubre.tipo.vivienda.total+=$scope.grupo.Octubre.tipo.vivienda.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Noviembre.tipo.vivienda.vector.length;i++){
                        $scope.grupo.Noviembre.tipo.vivienda.total+=$scope.grupo.Noviembre.tipo.vivienda.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Diciembre.tipo.vivienda.vector.length;i++){
                        $scope.grupo.Diciembre.tipo.vivienda.total+=$scope.grupo.Diciembre.tipo.vivienda.vector[i];
                       
                    }
                     for(var i=0;i<$scope.grupo.Total.tipo.vivienda.vector.length;i++){
                        $scope.grupo.Total.tipo.vivienda.total+=$scope.grupo.Total.tipo.vivienda.vector[i];
                       
                    }
                    
                    //educacion
                     for(var i=0;i<$scope.grupo.Enero.tipo.educacion.vector.length;i++){
                        $scope.grupo.Enero.tipo.educacion.total+=$scope.grupo.Enero.tipo.educacion.vector[i];
                      
                    }
                    for(var i=0;i<$scope.grupo.Febrero.tipo.educacion.vector.length;i++){
                        $scope.grupo.Febrero.tipo.educacion.total+=$scope.grupo.Febrero.tipo.educacion.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Marzo.tipo.educacion.vector.length;i++){
                        $scope.grupo.Marzo.tipo.educacion.total+=$scope.grupo.Marzo.tipo.educacion.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Abril.tipo.educacion.vector.length;i++){
                        $scope.grupo.Abril.tipo.educacion.total+=$scope.grupo.Abril.tipo.educacion.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Mayo.tipo.educacion.vector.length;i++){
                        $scope.grupo.Mayo.tipo.educacion.total+=$scope.grupo.Mayo.tipo.educacion.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Junio.tipo.educacion.vector.length;i++){
                        $scope.grupo.Junio.tipo.educacion.total+=$scope.grupo.Junio.tipo.vivienda.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Julio.tipo.educacion.vector.length;i++){
                        $scope.grupo.Julio.tipo.educacion.total+=$scope.grupo.Julio.tipo.educacion.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Agosto.tipo.educacion.vector.length;i++){
                        $scope.grupo.Agosto.tipo.educacion.total+=$scope.grupo.Agosto.tipo.educacion.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Septiembre.tipo.educacion.vector.length;i++){
                        $scope.grupo.Septiembre.tipo.educacion.total+=$scope.grupo.Septiembre.tipo.educacion.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Octubre.tipo.educacion.vector.length;i++){
                        $scope.grupo.Octubre.tipo.educacion.total+=$scope.grupo.Octubre.tipo.educacion.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Noviembre.tipo.educacion.vector.length;i++){
                        $scope.grupo.Noviembre.tipo.educacion.total+=$scope.grupo.Noviembre.tipo.educacion.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Diciembre.tipo.educacion.vector.length;i++){
                        $scope.grupo.Diciembre.tipo.educacion.total+=$scope.grupo.Diciembre.tipo.educacion.vector[i];
                       
                    }
                     for(var i=0;i<$scope.grupo.Total.tipo.educacion.vector.length;i++){
                        $scope.grupo.Total.tipo.educacion.total+=$scope.grupo.Total.tipo.educacion.vector[i];
                       
                    }
                    
                    //vestimenta
                    
                     for(var i=0;i<$scope.grupo.Enero.tipo.vestimenta.vector.length;i++){
                        $scope.grupo.Enero.tipo.vestimenta.total+=$scope.grupo.Enero.tipo.vestimenta.vector[i];
                      
                    }
                    for(var i=0;i<$scope.grupo.Febrero.tipo.vestimenta.vector.length;i++){
                        $scope.grupo.Febrero.tipo.vestimenta.total+=$scope.grupo.Febrero.tipo.vestimenta.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Marzo.tipo.vestimenta.vector.length;i++){
                        $scope.grupo.Marzo.tipo.vestimenta.total+=$scope.grupo.Marzo.tipo.vestimenta.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Abril.tipo.vestimenta.vector.length;i++){
                        $scope.grupo.Abril.tipo.vestimenta.total+=$scope.grupo.Abril.tipo.vestimenta.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Mayo.tipo.vestimenta.vector.length;i++){
                        $scope.grupo.Mayo.tipo.vestimenta.total+=$scope.grupo.Mayo.tipo.vestimenta.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Junio.tipo.vestimenta.vector.length;i++){
                        $scope.grupo.Junio.tipo.vestimenta.total+=$scope.grupo.Junio.tipo.vestimenta.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Julio.tipo.vestimenta.vector.length;i++){
                        $scope.grupo.Julio.tipo.vestimenta.total+=$scope.grupo.Julio.tipo.vestimenta.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Agosto.tipo.vestimenta.vector.length;i++){
                        $scope.grupo.Agosto.tipo.vestimenta.total+=$scope.grupo.Agosto.tipo.vestimenta.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Septiembre.tipo.vestimenta.vector.length;i++){
                        $scope.grupo.Septiembre.tipo.vestimenta.total+=$scope.grupo.Septiembre.tipo.vestimenta.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Octubre.tipo.vestimenta.vector.length;i++){
                        $scope.grupo.Octubre.tipo.vestimenta.total+=$scope.grupo.Octubre.tipo.vestimenta.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Noviembre.tipo.vestimenta.vector.length;i++){
                        $scope.grupo.Noviembre.tipo.vestimenta.total+=$scope.grupo.Noviembre.tipo.vestimenta.vector[i];
                       
                    }
                    for(var i=0;i<$scope.grupo.Diciembre.tipo.vestimenta.vector.length;i++){
                        $scope.grupo.Diciembre.tipo.vestimenta.total+=$scope.grupo.Diciembre.tipo.vestimenta.vector[i];
                       
                    }
                     for(var i=0;i<$scope.grupo.Total.tipo.vestimenta.vector.length;i++){
                        $scope.grupo.Total.tipo.vestimenta.total+=$scope.grupo.Total.tipo.vestimenta.vector[i];
                       
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
                    alimentos:{
                        vector:[],
                        total:0
                    },
                    salud:{
                        vector:[],
                        total:0
                    },
                    vivienda:{
                        vector:[],
                        total:0
                    },
                    educacion:{
                        vector:[],
                        total:0
                    },
                    vestimenta:{
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
                    alimentos:{
                        vector:[],
                        total:0
                    },
                    salud:{
                        vector:[],
                        total:0
                    },
                    vivienda:{
                        vector:[],
                        total:0
                    },
                    educacion:{
                        vector:[],
                        total:0
                    },
                    vestimenta:{
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
                    alimentos:{
                        vector:[],
                        total:0
                    },
                    salud:{
                        vector:[],
                        total:0
                    },
                    vivienda:{
                        vector:[],
                        total:0
                    },
                    educacion:{
                        vector:[],
                        total:0
                    },
                    vestimenta:{
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
                    alimentos:{
                        vector:[],
                        total:0
                    },
                    salud:{
                        vector:[],
                        total:0
                    },
                    vivienda:{
                        vector:[],
                        total:0
                    },
                    educacion:{
                        vector:[],
                        total:0
                    },
                    vestimenta:{
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
                    alimentos:{
                        vector:[],
                        total:0
                    },
                    salud:{
                        vector:[],
                        total:0
                    },
                    vivienda:{
                        vector:[],
                        total:0
                    },
                    educacion:{
                        vector:[],
                        total:0
                    },
                    vestimenta:{
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
                    alimentos:{
                        vector:[],
                        total:0
                    },
                    salud:{
                        vector:[],
                        total:0
                    },
                    vivienda:{
                        vector:[],
                        total:0
                    },
                    educacion:{
                        vector:[],
                        total:0
                    },
                    vestimenta:{
                        vector:[],
                        total:0
                    },
                    otros:{
                        vector:[],
                        total:0
                    },
                    
                }},
            Julio:{
                nombre:'Julio',
                tipo:{
                    alimentos:{
                        vector:[],
                        total:0
                    },
                    salud:{
                        vector:[],
                        total:0
                    },
                    vivienda:{
                        vector:[],
                        total:0
                    },
                    educacion:{
                        vector:[],
                        total:0
                    },
                    vestimenta:{
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
                    alimentos:{
                        vector:[],
                        total:0
                    },
                    salud:{
                        vector:[],
                        total:0
                    },
                    vivienda:{
                        vector:[],
                        total:0
                    },
                    educacion:{
                        vector:[],
                        total:0
                    },
                    vestimenta:{
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
                    alimentos:{
                        vector:[],
                        total:0
                    },
                    salud:{
                        vector:[],
                        total:0
                    },
                    vivienda:{
                        vector:[],
                        total:0
                    },
                    educacion:{
                        vector:[],
                        total:0
                    },
                    vestimenta:{
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
                    alimentos:{
                        vector:[],
                        total:0
                    },
                    salud:{
                        vector:[],
                        total:0
                    },
                    vivienda:{
                        vector:[],
                        total:0
                    },
                    educacion:{
                        vector:[],
                        total:0
                    },
                    vestimenta:{
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
                    alimentos:{
                        vector:[],
                        total:0
                    },
                    salud:{
                        vector:[],
                        total:0
                    },
                    vivienda:{
                        vector:[],
                        total:0
                    },
                    educacion:{
                        vector:[],
                        total:0
                    },
                    vestimenta:{
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
                    alimentos:{
                        vector:[],
                        total:0
                    },
                    salud:{
                        vector:[],
                        total:0
                    },
                    vivienda:{
                        vector:[],
                        total:0
                    },
                    educacion:{
                        vector:[],
                        total:0
                    },
                    vestimenta:{
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
                    alimentos:{
                        vector:[],
                        total:0
                    },
                    salud:{
                        vector:[],
                        total:0
                    },
                    vivienda:{
                        vector:[],
                        total:0
                    },
                    educacion:{
                        vector:[],
                        total:0
                    },
                    vestimenta:{
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
                ['Mes','Alimentos','Salud','Vivienda','Educacion','Vestimenta','Otros'],
                [$scope.grupo.Enero.nombre,
                $scope.grupo.Enero.tipo.alimentos.total,
                $scope.grupo.Enero.tipo.salud.total,
                $scope.grupo.Enero.tipo.vivienda.total,
                $scope.grupo.Enero.tipo.educacion.total,
                $scope.grupo.Enero.tipo.vestimenta.total,
                $scope.grupo.Enero.tipo.otros.total],
                
                [$scope.grupo.Febrero.nombre,
                $scope.grupo.Febrero.tipo.alimentos.total,
                $scope.grupo.Febrero.tipo.salud.total,
                $scope.grupo.Febrero.tipo.vivienda.total,
                $scope.grupo.Febrero.tipo.educacion.total,
                $scope.grupo.Febrero.tipo.vestimenta.total,
                $scope.grupo.Febrero.tipo.otros.total],
                
                [$scope.grupo.Marzo.nombre,
                $scope.grupo.Marzo.tipo.alimentos.total,
                $scope.grupo.Marzo.tipo.salud.total,
                $scope.grupo.Marzo.tipo.vivienda.total,
                $scope.grupo.Marzo.tipo.educacion.total,
                $scope.grupo.Marzo.tipo.vestimenta.total,
                $scope.grupo.Marzo.tipo.otros.total],
                
                [$scope.grupo.Abril.nombre,
                $scope.grupo.Abril.tipo.alimentos.total,
                $scope.grupo.Abril.tipo.salud.total,
                $scope.grupo.Abril.tipo.vivienda.total,
                $scope.grupo.Abril.tipo.educacion.total,
                $scope.grupo.Abril.tipo.vestimenta.total,
                $scope.grupo.Abril.tipo.otros.total],
                
                [$scope.grupo.Mayo.nombre,
                $scope.grupo.Mayo.tipo.alimentos.total,
                $scope.grupo.Mayo.tipo.salud.total,
                $scope.grupo.Mayo.tipo.vivienda.total,
                $scope.grupo.Mayo.tipo.educacion.total,
                $scope.grupo.Mayo.tipo.vestimenta.total,
                $scope.grupo.Mayo.tipo.otros.total],
                
                [$scope.grupo.Junio.nombre,
                $scope.grupo.Junio.tipo.alimentos.total,
                $scope.grupo.Junio.tipo.salud.total,
                $scope.grupo.Junio.tipo.vivienda.total,
                $scope.grupo.Junio.tipo.educacion.total,
                $scope.grupo.Junio.tipo.vestimenta.total,
                $scope.grupo.Junio.tipo.otros.total],
                
                [$scope.grupo.Julio.nombre,
                $scope.grupo.Julio.tipo.alimentos.total,
                $scope.grupo.Julio.tipo.salud.total,
                $scope.grupo.Julio.tipo.vivienda.total,
                $scope.grupo.Julio.tipo.educacion.total,
                $scope.grupo.Julio.tipo.vestimenta.total,
                $scope.grupo.Julio.tipo.otros.total],
                
                [$scope.grupo.Agosto.nombre,
                $scope.grupo.Agosto.tipo.alimentos.total,
                $scope.grupo.Agosto.tipo.salud.total,
                $scope.grupo.Agosto.tipo.vivienda.total,
                $scope.grupo.Agosto.tipo.educacion.total,
                $scope.grupo.Agosto.tipo.vestimenta.total,
                $scope.grupo.Agosto.tipo.otros.total],
                
                [$scope.grupo.Septiembre.nombre,
                $scope.grupo.Septiembre.tipo.alimentos.total,
                $scope.grupo.Septiembre.tipo.salud.total,
                $scope.grupo.Septiembre.tipo.vivienda.total,
                $scope.grupo.Septiembre.tipo.educacion.total,
                $scope.grupo.Septiembre.tipo.vestimenta.total,
                $scope.grupo.Septiembre.tipo.otros.total],
                
                [$scope.grupo.Octubre.nombre,
                $scope.grupo.Octubre.tipo.alimentos.total,
                $scope.grupo.Octubre.tipo.salud.total,
                $scope.grupo.Octubre.tipo.vivienda.total,
                $scope.grupo.Octubre.tipo.educacion.total,
                $scope.grupo.Octubre.tipo.vestimenta.total,
                $scope.grupo.Octubre.tipo.otros.total],
                
                [$scope.grupo.Noviembre.nombre,
                $scope.grupo.Noviembre.tipo.alimentos.total,
                $scope.grupo.Noviembre.tipo.salud.total,
                $scope.grupo.Noviembre.tipo.vivienda.total,
                $scope.grupo.Noviembre.tipo.educacion.total,
                $scope.grupo.Noviembre.tipo.vestimenta.total,
                $scope.grupo.Noviembre.tipo.otros.total],
                
                [$scope.grupo.Diciembre.nombre,
                $scope.grupo.Diciembre.tipo.alimentos.total,
                $scope.grupo.Diciembre.tipo.salud.total,
                $scope.grupo.Diciembre.tipo.vivienda.total,
                $scope.grupo.Diciembre.tipo.educacion.total,
                $scope.grupo.Diciembre.tipo.vestimenta.total,
                $scope.grupo.Diciembre.tipo.otros.total],
                
                [$scope.grupo.Total.nombre,
                $scope.grupo.Total.tipo.alimentos.total,
                $scope.grupo.Total.tipo.salud.total,
                $scope.grupo.Total.tipo.vivienda.total,
                $scope.grupo.Total.tipo.educacion.total,
                $scope.grupo.Total.tipo.vestimenta.total,
                $scope.grupo.Total.tipo.otros.total],
                
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


