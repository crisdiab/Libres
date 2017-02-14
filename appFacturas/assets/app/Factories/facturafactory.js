aplicacion.factory('facturafactory', ['$resource', function($resource) {

  var factory = $resource(
      masterUrl+'/FacturaApi/:id', {
      id: '@id'
    }, {
      actualizar: {
        method: 'PUT',
        params: {
          id: '@id'
        }
      },
      facturaXid: {
        url:masterUrl+'/FacturaApi/?idComprador=:idUsuario',
        method: 'GET',
        isArray:true,
        params:{
          idUsuario: '@idUsuario'
        }
      },
      porPeriodo:{
        url : masterUrl+'/FacturaApi/?periodo=:periodo',
        method: 'GET',
        isArray: true,
        params: {

          periodo : '@periodo',


        }
      },
        porMes:{
          url : masterUrl+'/FacturaApi/?mes=:mes',
          method: 'GET',
          isArray: true,
          params: {

            mes : '@mes',


          }
        }


    });

  return factory;


}]);

