/**
 * Created by Cristian on 30/01/2017.
 */
aplicacion.controller('ConsultasGPCtrl', [
    '$scope',
'ConsultasFactory',
    '$http',
    '$cookies',
    'limiteFactory',
    function ($scope,ConsultasFactory, $http,$cookies,limiteFactory) {

  //varibales

      $scope.idUsuario = $cookies.get('UsuarioId')
      $scope.facturas=[];
      $scope.elementos={
        alimentos:{
          nombre:'Alimentos',
          limite:0,
          total:0,
          vector:[0],
          diferencia:0
        },
        salud:{
          nombre:'Salud',
          limite:0,
          total:0,
          vector:[0],
          diferencia:0
        },
        vivienda:{
          nombre:'Vivienda',
          limite:0,
          total:0,
          vector:[0],
          diferencia:0
        },
        educacion:{
          nombre:'Educacion',
          limite:0,
          total:0,
          vector:[0],
          diferencia:0
        },
        vestido:{
          nombre:'Vestido',
          limite:0,
          total:0,
          vector:[0],
          diferencia:0
        },
        otros:{
          nombre:'Otros',
          limite:0,
          total:0,
          vector:[0],
          diferencia:0}
      };
      $scope.factsXPeriodo=[];
      $scope.limitesXperiodo=[];
      $scope.periodo='2017';
      $scope.ocultar=false;





      //funciones

      $scope.llenarLimites=function (periodo) {
        limiteFactory
          .buscarXperiodo({
            periodo: periodo
          })
          .$promise
          .then(
            function (respuesta) {

              $scope.limitesXperiodo=respuesta;
              console.log('llego estos limites del perido', $scope.limitesXperiodo);
              //asignar los limites
              for(var i = 0; i<$scope.limitesXperiodo.length;i++){
                switch ($scope.limitesXperiodo[i].nombre){
                  case 'Educacion':
                    $scope.elementos.educacion.limite=$scope.limitesXperiodo[i].valor;
                    break;
                  case 'Vivienda':
                    $scope.elementos.vivienda.limite=$scope.limitesXperiodo[i].valor;
                    break;
                  case 'Alimentacion':
                    $scope.elementos.alimentos.limite=$scope.limitesXperiodo[i].valor;
                    break;
                  case 'Salud':
                    $scope.elementos.salud.limite=$scope.limitesXperiodo[i].valor;
                    break;
                  case 'Vestido':
                    $scope.elementos.vestido.limite=$scope.limitesXperiodo[i].valor;
                    break;

                }
              }

              // if($scope.limitesXperiodo.length==0){
              //   console.log('error limites x periodo',$scope.limitesXperiodo)
              // }else{
              //   for(var i =0; i<$scope.limitesXperiodo.length;i++){
              //     $scope.asign=$scope.limitesXperiodo[i].nombre;
              //
              //     console.log('llego', $scope.asign)
              //
              //     switch ($scope.asign){
              //       case 'Salud':
              //         $scope.limites.salud=$scope.limitesXperiodo[i].valor;
              //
              //         break;
              //       case 'Alimentacion':
              //         $scope.limites.alimentacion=$scope.limitesXperiodo[i].valor;
              //         break;
              //       case 'Educacion':
              //         $scope.limites.educacion=$scope.limitesXperiodo[i].valor;
              //         break;
              //       case 'Vivienda':
              //         $scope.limites.vivienda=$scope.limitesXperiodo[i].valor;
              //         break;
              //       case 'Otros':
              //         $scope.limites.otros=$scope.limitesXperiodo[i].valor;
              //         break;
              //       case 'Vestido':
              //         $scope.limites.vestido=$scope.limitesXperiodo[i].valor;
              //         break;
              //
              //     }
              //   }
              // }
            },
            function (error) {
              console.log(error);
            });
      };


      $scope.facturasUser=function () {

        ConsultasFactory
          .buscarFacturaXid({
            idComprador: $scope.idUsuario
          })
          .$promise
          .then(
            function (respuesta) {
              $scope.facturas=respuesta;
              console.log('facturas',$scope.facturas)


            },
            function (error) {
              console.log(error);
            });
      };
      $scope.facturasUser();
      $scope.facturasPorPeriodo=function (factura,periodo) {
        $scope.llenarLimites(periodo);
        
      
        $scope.ocultar=true;
        
       
        if(periodo==''){
          toastr.warning('Debe ingresar un periodo')
        }else{
          if(factura.length==0){
            toastr.warning('No existen facturas para ese periodo')
          }else{
            
            
            //guardar elementos
            for(var i =0;i<factura.length;i++){
              if(factura[i].periodo==periodo&& factura[i].tipoFactura==1){
                $scope.factsXPeriodo.push(factura[i])
              }
               
            }
            console.log('facts perido',$scope.factsXPeriodo)
            if($scope.factsXPeriodo.length==0){
              console.log('no hay facturas de este tipo')
            }else{
              
              for(var i =0 ; i<$scope.factsXPeriodo.length;i++){
                
                $scope.elementos.alimentos.vector.push($scope.factsXPeriodo[i].alimentos)
                $scope.elementos.educacion.vector.push($scope.factsXPeriodo[i].educacion)
                $scope.elementos.salud.vector.push($scope.factsXPeriodo[i].salud)
                $scope.elementos.vivienda.vector.push($scope.factsXPeriodo[i].vivienda)
                $scope.elementos.vestido.vector.push($scope.factsXPeriodo[i].vestimenta)
                $scope.elementos.otros.vector.push($scope.factsXPeriodo[i].otros)
              }
            }
            
            //sumar
            for(var i=0; i<$scope.elementos.alimentos.vector.length;i++){
              $scope.elementos.alimentos.total+=$scope.elementos.alimentos.vector[i];
            }
            for(var i=0; i<$scope.elementos.educacion.vector.length;i++){
              $scope.elementos.educacion.total+=$scope.elementos.educacion.vector[i];
              
            }
            for(var i=0; i<$scope.elementos.salud.vector.length;i++){
              $scope.elementos.salud.total+=$scope.elementos.salud.vector[i];
              
            }
            for(var i=0; i<$scope.elementos.vivienda.vector.length;i++){
              $scope.elementos.vivienda.total+=$scope.elementos.vivienda.vector[i];
              
            }
           
            for(var i=0; i<$scope.elementos.vestido.vector.length;i++){
             
              $scope.elementos.vestido.total+=$scope.elementos.vestido.vector[i];
              
            }
            for(var i=0; i<$scope.elementos.otros.vector.length;i++){
              $scope.elementos.otros.total+=$scope.elementos.otros.vector[i];
              
            }
            
            
            //calcular diferencia
           
        // $scope.elementos.alimentos.diferencia=$scope.elementos.alimentos.limite - $scope.elementos.alimentos.total;
        // $scope.elementos.educacion.diferencia=$scope.elementos.educacion.limite - $scope.elementos.educacion.total;
        // $scope.elementos.vestido.diferencia=$scope.elementos.vestido.limite - $scope.elementos.vestido.total;
        // $scope.elementos.vivienda.diferencia=$scope.elementos.vivienda.limite - $scope.elementos.vivienda.total;
        // $scope.elementos.salud.diferencia=$scope.elementos.salud.limite - $scope.elementos.salud.total;
            
            
          }
          
        }

 

      };
      $scope.calcularDiferencia=function(elementos){
        console.log('llego elementost2',elementos.alimentos.limite)
        console.log('llego elemento total',elementos.alimentos.total)
         $scope.elementos.alimentos.diferencia=elementos.alimentos.limite - elementos.alimentos.total;
        $scope.elementos.educacion.diferencia=elementos.educacion.limite - elementos.educacion.total;
        $scope.elementos.vestido.diferencia=elementos.vestido.limite - elementos.vestido.total;
        $scope.elementos.vivienda.diferencia=elementos.vivienda.limite - elementos.vivienda.total;
        $scope.elementos.salud.diferencia=elementos.salud.limite - elementos.salud.total;
            
      }
     
      
      $scope.exportarGP= function(){


        var data = [
          [' -----  ','Resumen de Gastos Personales',' ------','---'],
          [''],
          ['Periodo',$scope.periodo,'Usuario',$scope.facturas[0].idComprador.nombre + ''+ $scope.facturas[0].idComprador.apellido ],
          [''],
          ['Categoria','Total','Limite','Diferencia'],
          ['Educacion',$scope.elementos.educacion.total,$scope.elementos.educacion.limite,$scope.elementos.educacion.diferencia],
          ['Vivienda',$scope.elementos.vivienda.total,$scope.elementos.vivienda.limite,$scope.elementos.vivienda.diferencia],
          ['Salud',$scope.elementos.salud.total,$scope.elementos.salud.limite,$scope.elementos.salud.diferencia],
          ['Alimentacion',$scope.elementos.alimentos.total,$scope.elementos.alimentos.limite,$scope.elementos.alimentos.diferencia],
          ['Vestido',$scope.elementos.vestido.total,$scope.elementos.vestido.limite,$scope.elementos.vestido.diferencia],
          ['Otros',$scope.elementos.otros.total,$scope.elementos.otros.limite,$scope.elementos.otros.diferencia],
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
      $scope.limpiarTodo= function () {
        $scope.ocultar=false;
        $scope.elementos={
        alimentos:{
          nombre:'Alimentos',
          limite:0,
          total:0,
          vector:[0],
          diferencia:0
        },
        salud:{
          nombre:'Salud',
          limite:0,
          total:0,
          vector:[0],
          diferencia:0
        },
        vivienda:{
          nombre:'Vivienda',
          limite:0,
          total:0,
          vector:[0],
          diferencia:0
        },
        educacion:{
          nombre:'Educacion',
          limite:0,
          total:0,
          vector:[0],
          diferencia:0
        },
        vestido:{
          nombre:'Vestido',
          limite:0,
          total:0,
          vector:[0],
          diferencia:0
        },
        otros:{
          nombre:'Otros',
          limite:0,
          total:0,
          vector:[0],
          diferencia:0}
      };
        $scope.factsXPeriodo=[];
        $scope.limitesXperiodo=[];
      }

    }]);
