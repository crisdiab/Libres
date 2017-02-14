aplicacion.factory('perfilFactory', ['$resource', function($resource) {

  var factory = $resource(
      masterUrl+'/ClienteApi/:idCliente', {
      idCliente: '@idCliente'
    }, {
      actualizar: {
        method: 'PUT',
        params: {
          idCliente: '@idCliente'
        }
      }


    });

  return factory;


}]);
