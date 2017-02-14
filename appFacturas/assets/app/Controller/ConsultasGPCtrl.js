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
          vector:[],
          diferencia:0
        },
        salud:{
          nombre:'Salud',
          limite:0,
          total:0,
          vector:[],
          diferencia:0
        },
        vivienda:{
          nombre:'Vivienda',
          limite:0,
          total:0,
          vector:[],
          diferencia:0
        },
        educacion:{
          nombre:'Educacion',
          limite:0,
          total:0,
          vector:[],
          diferencia:0
        },
        vestido:{
          nombre:'Vestido',
          limite:0,
          total:0,
          vector:[],
          diferencia:0
        },
        otros:{
          nombre:'Otros',
          limite:0,
          total:0,
          vector:[],
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
          toastr.error('Debe ingresar un periodo')
        }else{
          if(factura.length==0){
            toastr.warning("No existen facturas para el periodo ingresado")
          }else{
            for(var i=0;i<factura.length;i++){
              if(periodo==factura[i].periodo){
                $scope.factsXPeriodo.push(factura[i]);
              }
            }
            //ver limites

            //llenar los detalles
            for(var i=0;i< $scope.factsXPeriodo.length;i++){
              if($scope.factsXPeriodo[i].facturas.length==0){
                console.log('no hay detalles')
              }
              else{
                for(var j = 0;j<$scope.factsXPeriodo[i].facturas.length;j++){
                  switch($scope.factsXPeriodo[i].facturas[j].idProducto){
                    case 1:
                      $scope.elementos.salud.vector.push($scope.factsXPeriodo[i].facturas[j].valorConIva);
                      break;
                    case 2:
                      $scope.elementos.alimentos.vector.push($scope.factsXPeriodo[i].facturas[j].valorConIva);
                      break;
                    case 3:
                      $scope.elementos.educacion.vector.push($scope.factsXPeriodo[i].facturas[j].valorConIva);
                      break;
                    case 4:
                      $scope.elementos.vivienda.vector.push($scope.factsXPeriodo[i].facturas[j].valorConIva);
                      break;
                    case 5:
                      $scope.elementos.vestido.vector.push($scope.factsXPeriodo[i].facturas[j].valorConIva);
                      break;
                    case 6:
                      $scope.elementos.otros.vector.push($scope.factsXPeriodo[i].facturas[j].valorConIva);
                      break;

                  }
                }


              }
            }


            //sumar
            if($scope.elementos.otros.vector.length==0){
              console.log('no tiene nada');
            }else{
              for(var i =0 ; i<$scope.elementos.otros.vector.length;i++){

                $scope.elementos.otros.total+=$scope.elementos.otros.vector[i];
              }
            }
            if($scope.elementos.alimentos.vector.length==0){
              console.log('no tiene nada');
            }else{
              for(var i =0 ; i<$scope.elementos.alimentos.vector.length;i++){

                $scope.elementos.alimentos.total+=$scope.elementos.alimentos.vector[i];
              }
            }
            if($scope.elementos.educacion.vector.length==0){
              console.log('no tiene nada');
            }else{
              for(var i =0 ; i<$scope.elementos.educacion.vector.length;i++){

                $scope.elementos.educacion.total+=$scope.elementos.educacion.vector[i];
              }
            }
            if($scope.elementos.vestido.vector.length==0){
              console.log('no tiene nada');
            }else{
              for(var i =0 ; i<$scope.elementos.vestido.vector.length;i++){

                $scope.elementos.vestido.total+=$scope.elementos.vestido.vector[i];
              }
            }
            if($scope.elementos.vivienda.vector.length==0){
              console.log('no tiene nada');
            }else{
              for(var i =0 ; i<$scope.elementos.vivienda.vector.length;i++){

                $scope.elementos.vivienda.total+=$scope.elementos.vivienda.vector[i];
              }

            }
            if($scope.elementos.salud.vector.length==0){
              console.log('no tiene nada');
            }else{
              for(var i =0 ; i<$scope.elementos.salud.vector.length;i++){

                $scope.elementos.salud.total+=$scope.elementos.salud.vector[i];
              }
            }



          }
        }
        //calcular diferencia

        $scope.elementos.alimentos.diferencia=$scope.elementos.alimentos.limite - $scope.elementos.alimentos.total;
        $scope.elementos.educacion.diferencia=$scope.elementos.educacion.limite - $scope.elementos.educacion.total;
        $scope.elementos.vestido.diferencia=$scope.elementos.vestido.limite - $scope.elementos.vestido.total;
        $scope.elementos.vivienda.diferencia=$scope.elementos.vivienda.limite - $scope.elementos.vivienda.total;
        $scope.elementos.salud.diferencia=$scope.elementos.salud.limite - $scope.elementos.salud.total;



      };
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
            vector:[],
            diferencia:0
          },
          salud:{
            nombre:'Salud',
            limite:0,
            total:0,
            vector:[],
            diferencia:0
          },
          vivienda:{
            nombre:'Vivienda',
            limite:0,
            total:0,
            vector:[],
            diferencia:0
          },
          educacion:{
            nombre:'Educacion',
            limite:0,
            total:0,
            vector:[],
            diferencia:0
          },
          vestido:{
            nombre:'Vestido',
            limite:0,
            total:0,
            vector:[],
            diferencia:0
          },
          otros:{
            nombre:'Otros',
            limite:0,
            total:0,
            vector:[],
            diferencia:0}
        };
        $scope.factsXPeriodo=[];
        $scope.limitesXperiodo=[];
      }
/*
        $scope.idUsuario = $cookies.get('UsuarioId')
        $scope.facturas=[]
        $scope.factXperiodo=[]
        $scope.factXtipo=[];
        console.log('consultas')
        $scope.periodo='';
        $scope.sumas = {
            Alimento:0,
            Vivienda:0,
            Vestido:0,
            Salud:0,
            Educacion:0,
            Otros:0
        }
        $scope.tipos={
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
        $scope.diferenciaLimite={
            Alimento:0,
            Salud : 0,
            Vivienda : 0 ,
            Educacion : 0,
            Vestido :0,

        };
        $scope.bloquearBuscar= false;
        $scope.ocultarDetalles=true;
        $scope.ocultarBusqueda=false;
        $scope.ocultarNC=false;




        $scope.FacturasXusuario= function () {
            ConsultasFactory
                .buscarFacturaXid({
                    idComprador: $scope.idUsuario
                })
                .$promise
                .then(
                    function (respuesta) {
                        $scope.facturas=respuesta
                        // console.log('facturas por cliente',respuesta[0].idComprador.nombre)
                        // console.log('facturas por cliente',$scope.facturas)

                    },
                    function (error) {
                        console.log(error);
                    });
        }
        $scope.FacturasXusuario();
        $scope.FacturasXPeriodo = function (facturasIn,periodo) {

            $scope.ocultarBusqueda=true;
            $scope.ocultarDetalles=false;


            if(periodo == ''){
                toastr.error('Debe ingresar un periodo')
            }else{
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

                                  console.log('llego', $scope.asign)

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
                                        case 'Otros':
                                            $scope.limites.otros=$scope.limitesXperiodo[i].valor;
                                            break;
                                        case 'Vestido':
                                            $scope.limites.vestido=$scope.limitesXperiodo[i].valor;
                                            break;

                                    }
                                }
                            }
                        },
                        function (error) {
                            console.log(error);
                        });
                for(var i=0; i<facturasIn.length; i++){
                    if(facturasIn[i].periodo==periodo){

                        $scope.factXperiodo.push(facturasIn[i]);
                        $scope.factXtipo.push(facturasIn[i].facturas)
                        // console.log('ingresp facxtipo',$scope.factXtipo)


                    }
                }
            }

            console.log('facturas por periodo',$scope.factXperiodo)

          $scope.arregloCategoria(factXtipo)

        }
        $scope.nuevaBusqueda= function () {
            $scope.periodo=''
            $scope.ocultarDetalles=true;
            $scope.ocultarNC=false;
            $scope.ocultarBusqueda=false;
            $scope.factXperiodo=[];
            $scope.tipos.alimentos=[]
            $scope.tipos.vivienda=[]
            $scope.tipos.vestido=[]
            $scope.tipos.salud=[]
            $scope.tipos.educacion=[]
            $scope.tipos.otros=[]
            $scope.factXtipo=[];
            $scope.limites.alimentacion= 0
            $scope.limites.salud=0
            $scope.limites.vivienda=0
            $scope.limites.educacion=0
            $scope.limites.otros=0
            $scope.limites.vestido=0
        }
        $scope.arregloCategoria=function (detalles) {
            // $scope.ocultarNC=true;
            // $scope.ocultarDetalles=true;
            // console.log ('detalles lengt',detalles.length)
            // console.log('detalles 1',detalles[0].length)
            // console.log('detalles 2 ',detalles[0][1])
            if(detalles.length==0){
                console.log ('no hay detalles')
            }else{
                for(var i=0;i<detalles.length;i++){

                    for(var j = 0; j<detalles[i].length;j++){
                        if(detalles[i].length==0){
                            console.log('no hay nada')
                        }else{
                            switch (detalles[i][j].idProducto){
                                case 2:
                                    $scope.tipos.alimentos.push(detalles[i][j].);
                                    break;
                                case 4:
                                    $scope.tipos.vivienda.push(detalles[i][j].valorConIva);
                                    break;
                                case 5:
                                    $scope.tipos.vestido.push(detalles[i][j].valorConIva);
                                    break;
                                case 1:
                                    $scope.tipos.salud.push(detalles[i][j].valorConIva);
                                    break;
                                case 3:
                                    $scope.tipos.educacion.push(detalles[i][j].valorConIva);
                                    break;
                                case 6:
                                    $scope.tipos.otros.push(detalles[i][j].valorConIva);
                                    break;

                            }
                        }

                    }



                }
            }
            // console.log('llego detalles',detalles[1][0])

        }
        $scope.sumaCategoria = function(vector,sumarTipo) {
                // console.log('lelgo vector',vector)
                // console.log('llego sumartipo',sumarTipo)
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

        }*/
    }]);
