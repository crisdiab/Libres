aplicacion.factory('limiteFactory', ['$resource', function($resource) {

  var factory = $resource(
      masterUrl+'/Limites/:idLimite', {
      idLimite: '@idLimite'
    }, {
      actualizar: {
        method: 'PUT',
        params: {
          idLimite: '@idLimite'
        }
      },
      buscarXperiodo: {
        url:masterUrl+'/Limites/?periodo=:periodo',
        method: 'GET',
        isArray:true,
        params:{
          periodo: '@periodo'
        }
      }

    });

  return factory;


}]);
