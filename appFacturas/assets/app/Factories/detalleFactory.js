aplicacion.factory('detalleFactory', ['$resource', function($resource) {

  var factory = $resource(
      masterUrl+'/DetallefacturaApi/:idDetalle', {
      idDetalle: '@idDetalle'
    }, {
      actualizar: {
        method: 'PUT',
        params: {
          idProveedor: '@idProveedor'
        }
      },

      buscarFacturaXid: {
        url:masterUrl+'/DetallefacturaApi/?idFacturaProd=:idFactura',
        method: 'GET',
        isArray:true,
        params:{
          idFactura: '@idFactura'
        }
      }

    });

  return factory;


}]);

