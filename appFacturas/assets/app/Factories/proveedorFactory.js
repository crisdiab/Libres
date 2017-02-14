aplicacion.factory('proveedorFactory', ['$resource', function($resource) {

  var factory = $resource(
      masterUrl+'/ProveedorApi/:idProveedor', {
    idProveedor: '@idProveedor'
    }, {
      actualizar: {
        method: 'PUT',
        params: {
          idProveedor: '@idProveedor'
        }
      },
      buscarXIdProveedor: {
        url:masterUrl+'/CategoriaProveedor?idProveedor=:idProveedor',
        method: 'GET',
        isArray:true,
        params:{
          idProveedor: '@idProveedor'
        }
      }
    });

  return factory;


}]);

