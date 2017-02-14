/**
 * Created by Cristian on 30/01/2017.
 */
aplicacion.factory('ConsultasFactory', ['$resource', function($resource) {

    var factory = $resource(
        masterUrl+'/FacturaApi/', {

        }, {
            actualizar: {
                method: 'PUT',
                params: {
                    id: '@id'
                }
            },

            buscarFacturaXid: {
                url:masterUrl+'/FacturaApi/?idComprador=:idComprador',
                method: 'GET',
                isArray:true,
                params:{
                    idComprador: '@idComprador'
                }
            },
            buscarPorMes: {
                url:masterUrl+'/FacturaApi/?mes=:mes',
                method: 'GET',
                isArray:true,
                params:{
                    mes: '@mes'
                }
            }

        });


    return factory;


}]);