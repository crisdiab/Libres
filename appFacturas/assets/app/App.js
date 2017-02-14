




var aplicacion = angular.module('ordenadorfacturas',[
  'ui.router',
  'ui.bootstrap',
  'ngResource',
  'angularFileUpload',
  'xeditable',
  'ngAnimate',
  'ngCookies'
]);

aplicacion.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {


  $urlRouterProvider.otherwise("/inicio");


  $stateProvider
    .state('login', {
    url: "/login",
    templateUrl: "rutas/login.html",
    controller:'LoginCtrl',
    data: {
      nivelAcceso: 0,
      loginRequerido: false
    }
  })
    .state('facturaPapel', {
    url: "/facturapapel",
    templateUrl: "rutas/FacturaPapel.html",
    controller : 'FacturaPapelCtrl',
    data: {
      nivelAcceso: 1,
      loginRequerido: true
    }
  })
      //sdf
    .state('facturaXML', {
    url: "/facturaxml",
    templateUrl: "rutas/FacturaXML.html",
    controller:'FacturaXMLCtrl',
    data: {
      nivelAcceso: 1,
      loginRequerido: true
    }
  })
    .state('consultar', {
      url: "/consultar",
      templateUrl: "rutas/Consultar.html",
    controller:'ConsultarCtrl',
    data: {
      nivelAcceso: 1,
      loginRequerido: true
    }
    })
    .state('proveedor', {
    url: "/proveedor",
    templateUrl: "rutas/proveedor.html",
    controller:'ProveedorCtrl',
    data: {
      nivelAcceso: 1,
      loginRequerido: true
    }
  })
    .state('cliente', {
    url: "/registrarse",
    templateUrl: "rutas/cliente.html",
    controller:'ClienteCtrl',
    data: {
      nivelAcceso: 0,
      loginRequerido: false
    }
  })
    .state('productoCategoria', {
    url: "/prodcat",
    templateUrl: "rutas/productoCategoria.html",
    controller:'ProdCatCtrl',
    data: {
      nivelAcceso: 1,
      loginRequerido: true
    }
  })
    .state('inicio', {
    url: "/inicio",
    templateUrl: "rutas/inicio.html",
    controller:'inicioCtrl',
    data: {
      nivelAcceso: 1,
      loginRequerido: true
    }
  })
    .state('detalleFactura', {
    url: "/detfac/:idFactura",
    templateUrl: "rutas/detalleFactura.html",
    controller:'detalleFacturaCtrl',
    data: {
      nivelAcceso: 1,
      loginRequerido: true
    }
  })
    .state('perfil', {
    url: "/perfil",
    templateUrl: "rutas/perfil.html",
    controller:'perfilCtrl',
    data: {
      nivelAcceso: 1,
      loginRequerido: true
    }
  })
    .state('admin', {
      url: "/admin",
      templateUrl: "rutas/Admin.html",
      controller:'limiteCtrl',
      data: {
        nivelAcceso: 2,
        loginRequerido: true
      }
    })
    .state('consultarLimites', {
      url: "/limites",
      templateUrl: "rutas/consultarLimites.html",
      controller:'consultarLimitesCtrl',
      data: {
        nivelAcceso: 1,
        loginRequerido: true
      }
    })
    .state('consultarGastos', {
      url: "/gastos",
      templateUrl: "rutas/ConsultarGastos.html",
      controller:'consultarGastos',
      data: {
        nivelAcceso: 1,
        loginRequerido: true
      }
    })
      .state('consultasgp', {
        url: "/consultasgp",
        templateUrl: "rutas/ConsultasGP.html",
        controller:'ConsultasGPCtrl',
        data: {
          nivelAcceso: 1,
          loginRequerido: true
        }
      })
      .state('consultasgpmensual', {
        url: "/gpmensual",
        templateUrl: "rutas/consultaGPmensual.html",
        controller:'consultaGpmensualCtrl',
        data: {
          nivelAcceso: 1,
          loginRequerido: true
        }
      })
    .state('detalleGp', {
      url: "/detallegp",
      templateUrl: "rutas/detalleGastosP.html",
      controller:'detalleGastosPctrl',
      data: {
        nivelAcceso: 1,
        loginRequerido: true
      }
    })
    .state('gnegociosmensual', {
      url: "/gnmensual",
      templateUrl: "rutas/gastosNegocioMensual.html",
      controller:'gastosNegocioMensualCtrl',
      data: {
        nivelAcceso: 1,
        loginRequerido: true
      }
    })
    .state('gndetalle', {
      url: "/gndetalle",
      templateUrl: "rutas/gastosNegocioDetalle.html",
      controller:'gastosNegocioDetalleCtrl',
      data: {
        nivelAcceso: 1,
        loginRequerido: true
      }
    })
    .state('facturasGN', {
      url: "/fgn",
      templateUrl: "rutas/FacturasGN.html",
      controller:'FacturasGnCtrl',
      data: {
        nivelAcceso: 1,
        loginRequerido: true
      }
    })
    .state('facturasGP', {
      url: "/fgp",
      templateUrl: "rutas/FacturasGP.html",
      controller:'FacturasGpCtrl',
      data: {
        nivelAcceso: 1,
        loginRequerido: true
      }
    })


  ;


}]);

aplicacion.run(function ($rootScope, $cookies, $state)  {
  console.log('entro run');

  $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {

    var requiereLogin = toState.data.loginRequerido;
    var nivelAcceso = toState.data.nivelAcceso;

    if (requiereLogin) {
      console.log('Si require Login');
      if ($cookies.get('UsuarioId')) {
        console.log('hizo Login');

        console.log(nivelAcceso);
        if (nivelAcceso == 1 && $cookies.get('UsuarioTipo') == 1) {
          console.log('puede entrar')

          //                    event.preventDefault();
          //                    return $state.go('user')
        } else {
          if (nivelAcceso == 2 && $cookies.get('UsuarioTipo') == 2) {
            console.log('puede entrar')
          } else {
            event.preventDefault();
            return $state.go('login')
          }

        }


      } else {
        console.log('No ha hecho Login');
        event.preventDefault();
        return $state.go('login')
      }
    } else {
      console.log('No requiere login');
    }

  });

});
