/**
 * FacturacionController
 *
 * @description :: Server-side logic for managing Facturacions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


var fs = require('fs'),
  xml2js = require('xml2js');

//Estructura del controlador
//module.exports = {
//
//
//  nombrePantalla : Funcion callback
//}

module.exports = {

  //Index pantalla en la que nos permite subir nuestro archivo
  index: function (req, res) {

    res.writeHead(200, {
      'content-type': 'text/html'
    });
    res.end(
      '<form action="http://localhost:1337/Facturacion/subir2" enctype="multipart/form-data" method="post">' +
      '<input type="text" name="title"><br>' +
      '<input type="file" name="factura"  accept=".xml""><br>' +
      '<input type="submit" value="Upload">' +
      '</form>'
    )
  },

  //Pantalla de mensajes de respuesta
  subir: function (req, res) {
    //metodo para recibir como argumento con el metodo post de nuestro form

    req.file('factura').upload({
      //directorio donde se guarda nuestra factura subida y tamanio permitido
      dirname: require('path').resolve(sails.config.appPath, 'assets/facturasXml'),
      maxBytes: 10000000
    }, function (err, uploadedFiles) {


      if (err) return res.negotiate(err);



      var aux = uploadedFiles[0].fd;
      console.log('aux',aux)
      var nombreArchivo = aux.split("/")
      console.log('nombre archivo',nombreArchivo)



//Leer la factura
      var xml = fs.readFile('assets/facturasXml/' + nombreArchivo[nombreArchivo.length-1], 'utf8', function (err, data) {
        if (err) {
          console.log(err)
        }



        //Modificar archivo XML con expresiones regulares
        function formateoFactura(xml){


          xml = xml.replace( /<\?xml version="1.0" encoding="UTF-8" standalone="yes"?[^>]>/," ");

          xml = xml.replace(/<\![^>]*>/," ");

          xml = xml.replace(/]]>/," ")
          return xml;

        }
        var nuevaFactura=formateoFactura(data);
        //parse para convertir el archivo xml a objetos jason
        parser.parseString(nuevaFactura, function (err, result) {

          console.log(result)
          var cliente = datosCliente(result);
          var proveedor = datosProveedor(result);
          var factura = datosFactura(result);
          var mensaje = {
            archivo : {
              mensaje : ' '
            },
            factura: {
              mensaje: 'Si se creo o no se creo',
              id: 0
            },
            cliente: {
              mensaje: 'Si se creo o no se creo',
              id: 0
            },
            proveedor: {
              mensaje: 'Si se creo o no se creo',
              id: 0
            },

          };
                  console.log(cliente)
//                  console.log(proveedor)
//                  console.log(factura)



          crearCliente(cliente, proveedor, factura);

          //Formateo de fecha en el formato de mysql
          function formatearFecha(fecha) {
                    var splitFecha = fecha.split("/");
                    var nuevaFecha = splitFecha[2] + '-' + splitFecha[1] + '-' + splitFecha[0];

                    return nuevaFecha;
                  }

          function separarNombre(nombre){
            var splitNombre = nombre.split(" ");
            if(splitNombre.length == 1){
              nombre=splitNombre[0];

            }else{
              nombre=splitNombre[2]+" "+splitNombre[3];

            }

            return nombre;
          }
          function separarApellido(apellido){
            var splitApellido = apellido.split(" ")
           if(splitApellido.length == 1){

             apellido = " ";
           }else{

             apellido =splitApellido[0]+" "+splitApellido[1];
           }


            return apellido;
          }

          //Captura de etiquetas XML inicio

          function datosFactura(json, proveedor, cliente) {

                 var fecha = json.autorizacion.comprobante[0].factura[0].infoFactura[0].fechaEmision[0]

                 var nfact = json.autorizacion.comprobante[0].factura[0].infoTributaria[0].estab[0] +"-"+ json.autorizacion.comprobante[0].factura[0].infoTributaria[0].ptoEmi[0] +"-"+ json.autorizacion.comprobante[0].factura[0].infoTributaria[0].secuencial[0];

                 var factura = {
                   idProveedor: 0,
                   idComprador: 0,
                   fechaEmision: formatearFecha(fecha),
                   numeroComprobante: json.autorizacion.numeroAutorizacion[0],
                   valorFactura: json.autorizacion.comprobante[0].factura[0].infoFactura[0].importeTotal[0],
                   numFactura: nfact
                 }

                 return factura;

                  }
          function datosProveedor(json) {

                    var proveedor = {

                      nombre: json.autorizacion.comprobante[0].factura[0].infoTributaria[0].razonSocial[0],
                      direccion: json.autorizacion.comprobante[0].factura[0].infoTributaria[0].dirMatriz[0],
                      Ruc: json.autorizacion.comprobante[0].factura[0].infoTributaria[0].ruc[0],

                    }

                    return proveedor;
                  }
          function datosCliente(json) {

                    var name = json.autorizacion.comprobante[0].factura[0].infoFactura[0].razonSocialComprador[0];
                    var cliente = {

                      nombre: separarNombre(name),
                      apellido : separarApellido(name),
                      cedula: json.autorizacion.comprobante[0].factura[0].infoFactura[0].identificacionComprador[0]


                    }

                    return cliente;

                  }
          //Captura de etiquetas XML FIN


          //Inicio para escribir en la base de datos
          function crearCliente(cliente, proveedor, factura) {

                    ClienteApi.findOne({
                      cedula: cliente.cedula
                    }).exec(function(err, finn) {
                      if (err) {
                        return res.serverError(err);
                      }
                      if (!finn) {
                        console.log('no encontro al ususario')
                        return res.badRequest();
                      }
                        var idCliente = finn.id
                        console.log('id del cliente',idCliente)
                      sails.log('Encontro', finn);
                      crearProveedor(idCliente,proveedor,factura)
                    });
                  }

          function crearProveedor(idCliente, proveedor, factura) {
                    console.log('este proveedor me llega con el ruc',proveedor.Ruc)

                    ProveedorApi.findOrCreate({
                      Ruc: proveedor.Ruc
                    }, {
                      nombre: proveedor.nombre,
                      direccion: proveedor.direccion,
                      Ruc: proveedor.Ruc,
                    }).exec(function createFindCB(error, proveedorEncontradooCreado) {
                      if(error){
                        console.log(error);
                        return res.serverError(err);
                      }

                      console.log('What\'s cookin\' ' + proveedorEncontradooCreado);


                      var idProveedor = proveedorEncontradooCreado.id;
                      crearFactura(idCliente,idProveedor,factura)
                    });

                    }

          function crearFactura(idCliente, idProveedor, factura) {
                      FacturaApi.create({
                        idProveedor: idProveedor,
                          idComprador: idCliente,
                          fechaEmision: factura.fechaEmision,

                        valorFactura: factura.valorFactura,
                          numFactura: factura.numFactura
                      }).exec(function(err, finn) {
                        if (err) {
                          console.log('ya existe la factura')
                          return res.serverError(err);
                        }

                        sails.log('Finn\'s id is:', finn.id);
                        return res.json(finn);
                      });


                  }
          //Finn de escribir en la base de datos

          function guardarMensaje(mensajeString, id, tipo) {
                    //  'mensaje.factura' equivale a 'mensaje['factura']'
                    mensaje[tipo].mensaje = mensajeString;
                    mensaje[tipo].id = id;

                  }



                });

      });

      var parser = new xml2js.Parser();

    });









    //console.log(sails.conexionmysql);

    //



  },

  //Pantalla de pruebas
//   nombre: function (req, res) {
//     var xml = `
// <?xml version="1.0" encoding="UTF-8" ?><autorizacion>
// <estado>AUTORIZADO</estado>
// <numeroAutorizacion>1711201601200201000013425910917296832</numeroAutorizacion>
// <fechaAutorizacion class="fechaAutorizacion">17/11/2016 07:55:09.000</fechaAutorizacion>
// <ambiente>PRODUCCIÃ“N</ambiente>
// <comprobante><![CDATA[<?xml version="1.0" encoding="UTF-8"?>
// <factura id="comprobante" version="1.1.0">
// <infoTributaria>
// <ambiente>2</ambiente>
// <tipoEmision>1</tipoEmision>
// <razonSocial>ALMACENES FERROELECTRICO S A</razonSocial>
// <nombreComercial>ALMACENES FERROELECTRICO S A</nombreComercial>
// <ruc>1091729683001</ruc>
// <claveAcceso>1711201601109172968300120020100001342591234567810</claveAcceso>
// <codDoc>01</codDoc>
// <estab>002</estab>
// <ptoEmi>010</ptoEmi>
// <secuencial>000134259</secuencial>
// <dirMatriz>SUCRE 13 14 Y ROSALIA ROSALES -  Telef - 062609321</dirMatriz>
// </infoTributaria>
// <infoFactura>
// <fechaEmision>17/11/2016</fechaEmision>
// <dirEstablecimiento>SUCRE 13 14 Y ROSALIA ROSALES -  Telef - 062609321</dirEstablecimiento>
// <contribuyenteEspecial>181</contribuyenteEspecial>
// <obligadoContabilidad>SI</obligadoContabilidad>
// <tipoIdentificacionComprador>04</tipoIdentificacionComprador>
// <razonSocialComprador>PNUD</razonSocialComprador>
// <identificacionComprador>1791746791001</identificacionComprador>
// <totalSinImpuestos>2.37</totalSinImpuestos>
// <totalDescuento>0.00</totalDescuento>
// <totalConImpuestos>
// <totalImpuesto>
// <codigo>2</codigo>
// <codigoPorcentaje>0</codigoPorcentaje>
// <descuentoAdicional>0.00</descuentoAdicional>
// <baseImponible>0.00</baseImponible>
// <valor>0.00</valor>
// </totalImpuesto>
// <totalImpuesto>
// <codigo>2</codigo>
// <codigoPorcentaje>3</codigoPorcentaje>
// <descuentoAdicional>0.00</descuentoAdicional>
// <baseImponible>2.37</baseImponible>
// <valor>0.33</valor>
// </totalImpuesto>
// </totalConImpuestos>
// <propina>0.00</propina>
// <importeTotal>2.70</importeTotal>
// <moneda>DOLAR</moneda>
// <pagos>
// <pago>
// <formaPago>20</formaPago>
// <total>2.70</total>
// </pago>
// </pagos>
// </infoFactura>
// <detalles>
// <detalle>
// <codigoPrincipal>2697</codigoPrincipal>
// <codigoAuxiliar>18092697</codigoAuxiliar>
// <descripcion>CLAVO HG IDEAL FUNDA LIBRA 2 1 2</descripcion>
// <cantidad>3.00</cantidad>
// <precioUnitario>0.791000</precioUnitario>
// <descuento>0.00</descuento>
// <precioTotalSinImpuesto>2.37</precioTotalSinImpuesto>
// <impuestos>
// <impuesto>
// <codigo>2</codigo>
// <codigoPorcentaje>3</codigoPorcentaje>
// <tarifa>14.00</tarifa>
// <baseImponible>2.37</baseImponible>
// <valor>0.33</valor>
// </impuesto>
// </impuestos>
// </detalle>
// </detalles>
// <infoAdicional>
// <campoAdicional nombre="DIRECCION">Av  Amazonas 2889 y La Granja</campoAdicional>
// <campoAdicional nombre="EMAIL">miguelo42@hotmail.com</campoAdicional>
// <campoAdicional nombre="VENDEDOR">003</campoAdicional>
// </infoAdicional>
// <ds:Signature xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:etsi="http://uri.etsi.org/01903/v1.3.2#" Id="Signature620158">
// <ds:SignedInfo Id="Signature-SignedInfo367991">
// <ds:CanonicalizationMethod Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315"></ds:CanonicalizationMethod>
// <ds:SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1"></ds:SignatureMethod>
// <ds:Reference Id="SignedPropertiesID318614" Type="http://uri.etsi.org/01903#SignedProperties" URI="#Signature620158-SignedProperties46947">
// <ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"></ds:DigestMethod>
// <ds:DigestValue>8Zt7JaVCa9agYy/KPLBoyi/Yb3Q=</ds:DigestValue>
// </ds:Reference>
// <ds:Reference URI="#Certificate1990485">
// <ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"></ds:DigestMethod>
// <ds:DigestValue>JQErx50+ZSBCQQUKRar9zk7loY8=</ds:DigestValue>
// </ds:Reference>
// <ds:Reference Id="Reference-ID-413617" URI="#comprobante">
// <ds:Transforms>
// <ds:Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature"></ds:Transform>
// </ds:Transforms>
// <ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"></ds:DigestMethod>
// <ds:DigestValue>9vGvnU+uoCJFNRnu1OjGL3oU+OQ=</ds:DigestValue>
// </ds:Reference>
// </ds:SignedInfo>
// <ds:SignatureValue Id="SignatureValue635987">
// naf6OMMaC+2tkKfD5cFuVvZQZc0QKr+a8oDNhzghO22egPzhbtCmqHMxJiBdYbLMNH95k1Ca/EOp
// hpyw/eJnxoxOVNlrdzD+X5PvmDRQKYQF+jSCQiT3AwgMTcGjCXBO1PRE0jUa5YzWpmP7IePQ4066
// ZAvcq94/aLRaPH0XSG/XiwS4TrjWAhsyVNzfeo6wmNb9SfFWDoFlEv4KMJpsSlJFRuoU1uVjbkjq
// FNunusbiEkrB3yOGmtmL0o4Tt2zgVnC7xQ1dCWhmRw1ZuMNriRr9vnH4n3Lwe8n1evcUm/Og7JUJ
// P61BKssfq84uQA9AGqNw5ZbfZrnNSzml0IzvMw==
// </ds:SignatureValue>
// <ds:KeyInfo Id="Certificate1990485">
// <ds:X509Data>
// <ds:X509Certificate>
// MIIJkDCCB3igAwIBAgIETkWEtjANBgkqhkiG9w0BAQsFADCBoTELMAkGA1UEBhMCRUMxIjAgBgNV
// BAoTGUJBTkNPIENFTlRSQUwgREVMIEVDVUFET1IxNzA1BgNVBAsTLkVOVElEQUQgREUgQ0VSVElG
// SUNBQ0lPTiBERSBJTkZPUk1BQ0lPTi1FQ0lCQ0UxDjAMBgNVBAcTBVFVSVRPMSUwIwYDVQQDExxB
// QyBCQU5DTyBDRU5UUkFMIERFTCBFQ1VBRE9SMB4XDTE1MTEyMDE5NDYwN1oXDTE3MTEwNDE0NDI0
// MlowgbcxCzAJBgNVBAYTAkVDMSIwIAYDVQQKExlCQU5DTyBDRU5UUkFMIERFTCBFQ1VBRE9SMTcw
// NQYDVQQLEy5FTlRJREFEIERFIENFUlRJRklDQUNJT04gREUgSU5GT1JNQUNJT04tRUNJQkNFMQ4w
// DAYDVQQHEwVRVUlUTzE7MBEGA1UEBRMKMDAwMDA5MDUzMzAmBgNVBAMTH01BUkNPIEVMSUVDRVIg
// Q0FSVEFHRU5BIEdVRVZBUkEwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQClqu/Q99Jw
// VN5pnC/0aYhYdDvDsLLWQnFOsuyH1yOoL+DFu2XuN5iqyHoP1WbFIBeCb7Dibao1pq7QXqVxzQd5
// /kEVcdLHaaktZl/C4VROpqD1oQxMT8+kh5MEiM487e+Eu3j5xHBPNPV0bQcHeHgJlTpJW2kPXZUN
// fDEdOs8zBzMuIQgBVJCBOoVBBhHqjfnwW8TvrIgUnpubTI+rql7GPFQXf4b+MO4v94/yUmgOr3dx
// +vJL7zLxDV7BSl3TZ96TgO5X9GWmkzKHKzamyFyaXNDmcSRAOjFEerVTVVUEb8lP520yFiE4SaDx
// yzqNDsq4KCCRSYIHPmlT7NJ205THAgMBAAGjggS2MIIEsjCBkQYIKwYBBQUHAQEEgYQwgYEwPgYI
// KwYBBQUHMAGGMmh0dHA6Ly9vY3NwLmVjaS5iY2UuZWMvZWpiY2EvcHVibGljd2ViL3N0YXR1cy9v
// Y3NwMD8GCCsGAQUFBzABhjNodHRwOi8vb2NzcDEuZWNpLmJjZS5lYy9lamJjYS9wdWJsaWN3ZWIv
// c3RhdHVzL29jc3AwOwYKKwYBBAGCqDsDCgQtEytBTE1BQ0VORVMgRkVSUk9FTEVDVFJJQ08gRElT
// VFJJQUxNQUZFUlJPIFNBMB0GCisGAQQBgqg7AwsEDxMNMTA5MTcyOTY4MzAwMTAaBgorBgEEAYKo
// OwMBBAwTCjEwMDA4NjYzMjUwHQYKKwYBBAGCqDsDAgQPEw1NQVJDTyBFTElFQ0VSMBkGCisGAQQB
// gqg7AwMECxMJQ0FSVEFHRU5BMBcGCisGAQQBgqg7AwQECRMHR1VFVkFSQTAfBgorBgEEAYKoOwMF
// BBETD0dFUkVOVEUgR0VORVJBTDAgBgorBgEEAYKoOwMHBBITEENBTExFIFNVQ1JFIDEzMzQwGQYK
// KwYBBAGCqDsDCAQLEwkwNjI5NTMzNzUwFgYKKwYBBAGCqDsDCQQIEwZJYmFycmEwFwYKKwYBBAGC
// qDsDDAQJEwdFQ1VBRE9SMB0GCisGAQQBgqg7AzIEDxMNMTA5MTcyOTY4MzAwMTAgBgorBgEEAYKo
// OwMzBBITEFNPRlRXQVJFLUFSQ0hJVk8wKwYDVR0RBCQwIoEgbWFyY29hbmRyZXNjYXJ0YWdlbmFA
// aG90bWFpbC5jb20wggHfBgNVHR8EggHWMIIB0jCCAc6gggHKoIIBxoaB1WxkYXA6Ly9iY2VxbGRh
// cHN1YnAxLmJjZS5lYy9jbj1DUkwyNzUsY249QUMlMjBCQU5DTyUyMENFTlRSQUwlMjBERUwlMjBF
// Q1VBRE9SLGw9UVVJVE8sb3U9RU5USURBRCUyMERFJTIwQ0VSVElGSUNBQ0lPTiUyMERFJTIwSU5G
// T1JNQUNJT04tRUNJQkNFLG89QkFOQ08lMjBDRU5UUkFMJTIwREVMJTIwRUNVQURPUixjPUVDP2Nl
// cnRpZmljYXRlUmV2b2NhdGlvbkxpc3Q/YmFzZYY0aHR0cDovL3d3dy5lY2kuYmNlLmVjL0NSTC9l
// Y2lfYmNlX2VjX2NybGZpbGVjb21iLmNybKSBtTCBsjELMAkGA1UEBhMCRUMxIjAgBgNVBAoTGUJB
// TkNPIENFTlRSQUwgREVMIEVDVUFET1IxNzA1BgNVBAsTLkVOVElEQUQgREUgQ0VSVElGSUNBQ0lP
// TiBERSBJTkZPUk1BQ0lPTi1FQ0lCQ0UxDjAMBgNVBAcTBVFVSVRPMSUwIwYDVQQDExxBQyBCQU5D
// TyBDRU5UUkFMIERFTCBFQ1VBRE9SMQ8wDQYDVQQDEwZDUkwyNzUwCwYDVR0PBAQDAgUgMB8GA1Ud
// IwQYMBaAFBj58PvmMhyZZjkqyouyaX1JJ7/OMB0GA1UdDgQWBBTbRjasvUcD/5Pxm257oPXiI+/0
// lDAJBgNVHRMEAjAAMBkGCSqGSIb2fQdBAAQMMAobBFY4LjEDAgQQMA0GCSqGSIb3DQEBCwUAA4IC
// AQCGCsd/3DsyPaFNl4T9E5n1iYhzeFzDeEUR6dQhMyqEXVsCWcE518kxu6co2R6o+saxZMxQX0Om
// YluvRMLhnxD7W7nHXKwrgHofd6QilKXkIkPvLZOQ5Sv3MFJpk/G77GidAUQ0aliui9vxQ2WhQYOq
// 90GPdOJXvIaPYsmBTOFpy5hg7mrDDqMtFvblzdvqs3pCMWNsSk8mhZCrhKZd1vCVgFOF80/FueBy
// RuHvHxelgRh07Yn/MmX0W2zPn5ZEPsvwwXTc1p+rymwTIyRa3DrrNNgxH5WlVGIhmTmBbo784TNu
// N+HaymeGzu068/13hJ/Ta/ngmRmCHvJNTPkPhLfmwO+YWwj/BgKnVEdwzyU6Kg7AP6rv2iDG9+gZ
// 0xiMS5mwV2ZGlIi352L02UosTtISWVqF45YbqTf93lPkM/moPQdCDP0geY3iZ0x9QELYi+rM8XRj
// 0+zM6DIxkqgMRmDEBD0Vd8FCKFrRQIoY3OobWF0HTNwO48DWfvdAM4nnh9B5M/Iqo+vEeyuQgT6Q
// EbKqydyOGH76JeWk4nfzrPnJEM6uPzFHYPV3H4HZz6U0ZByF2HUrWb+RdgEKtkPIEnnkDKlUayhL
// DpNgOm/PNHDnu/kcS672QNT2RqiV8i/2ux/sBcWcdLb/4Rh2g/ixLrxbZLNMorvCkY/iezIWRbQo
// tQ==
// </ds:X509Certificate>
// </ds:X509Data>
// <ds:KeyValue>
// <ds:RSAKeyValue>
// <ds:Modulus>
// parv0PfScFTeaZwv9GmIWHQ7w7Cy1kJxTrLsh9cjqC/gxbtl7jeYqsh6D9VmxSAXgm+w4m2qNaau
// 0F6lcc0Hef5BFXHSx2mpLWZfwuFUTqag9aEMTE/PpIeTBIjOPO3vhLt4+cRwTzT1dG0HB3h4CZU6
// SVtpD12VDXwxHTrPMwczLiEIAVSQgTqFQQYR6o358FvE76yIFJ6bm0yPq6pexjxUF3+G/jDuL/eP
// 8lJoDq93cfryS+8y8Q1ewUpd02fek4DuV/RlppMyhys2pshcmlzQ5nEkQDoxRHq1U1VVBG/JT+dt
// MhYhOEmg8cs6jQ7KuCggkUmCBz5pU+zSdtOUxw==
// </ds:Modulus>
// <ds:Exponent>AQAB</ds:Exponent>
// </ds:RSAKeyValue>
// </ds:KeyValue>
// </ds:KeyInfo>
// <ds:Object Id="Signature620158-Object634237"><etsi:QualifyingProperties Target="#Signature620158"><etsi:SignedProperties Id="Signature620158-SignedProperties46947"><etsi:SignedSignatureProperties><etsi:SigningTime>2016-11-17T07:55:01-05:00</etsi:SigningTime><etsi:SigningCertificate><etsi:Cert><etsi:CertDigest><ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"></ds:DigestMethod><ds:DigestValue>dEE5HjXbOcqRCc4xITOib1QLPX4=</ds:DigestValue></etsi:CertDigest><etsi:IssuerSerial><ds:X509IssuerName>CN=AC BANCO CENTRAL DEL ECUADOR,L=QUITO,OU=ENTIDAD DE CERTIFICACION DE INFORMACION-ECIBCE,O=BANCO CENTRAL DEL ECUADOR,C=EC</ds:X509IssuerName><ds:X509SerialNumber>1313178806</ds:X509SerialNumber></etsi:IssuerSerial></etsi:Cert></etsi:SigningCertificate></etsi:SignedSignatureProperties><etsi:SignedDataObjectProperties><etsi:DataObjectFormat ObjectReference="#Reference-ID-413617"><etsi:Description>contenido comprobante</etsi:Description><etsi:MimeType>text/xml</etsi:MimeType></etsi:DataObjectFormat></etsi:SignedDataObjectProperties></etsi:SignedProperties></etsi:QualifyingProperties></ds:Object></ds:Signature></factura>]]></comprobante>
// <mensajes/>
// </autorizacion>
//
//
//
// `
//
//
//
//     function formateoFactura(xml){
//
//
//       xml = xml.replace( /<\?xml version="1.0" encoding="UTF-8" standalone="yes"?[^>]>/," ");
//
//       xml = xml.replace(/<\![^>]*>/," ");
//
//       xml = xml.replace(/]]>/," ")
//       return xml;
//
//     }
//
//     var nuevaFactura=formateoFactura(xml);
//     var parser = new xml2js.Parser();
//
//     parser.parseString(nuevaFactura, function (err, result) {
//      // console.log(result);
//      // console.log(result.autorizacion.comprobante[0].factura[0].detalles[0].detalle[2])
//
//       console.log(result.autorizacion.comprobante[0].factura[0].infoFactura[0].razonSocialComprador[0])
//       var cliente = datosCliente(result);
//       var proveedor = datosProveedor(result);
//      var factura = datosFactura(result);
//
//       console.log('este es el cliente',cliente)
// //      console.log(proveedor)
// //      console.log(factura)
//       var mensaje = {
//         factura: {
//           mensaje: 'Si se creo o no se creo',
//           id: 0
//         },
//         cliente: {
//           mensaje: 'Si se creo o no se creo',
//           id: 0
//         },
//         proveedor: {
//           mensaje: 'Si se creo o no se creo',
//           id: 0
//         }
//       };
//       var name = result.autorizacion.comprobante[0].factura[0].infoFactura[0].razonSocialComprador[0];
//       separarNombre(name);
//       //crearCliente(cliente, proveedor, factura);
//       function separarNombre(nombre){
//         var splitNombre = nombre.split(" ");
//         console.log();
//         nombre=splitNombre[2]+" "+splitNombre[3];
//         return nombre;
//       }
//       function separarApellido(apellido){
//         var splitApellido = apellido.split(" ")
//         apellido =splitApellido[0]+" "+splitApellido[1];
//         return apellido;
//       }
//       function formatearFecha(fecha) {
//         var splitFecha = fecha.split("/");
//         var nuevaFecha = splitFecha[2] + '-' + splitFecha[1] + '-' + splitFecha[0];
//
//         return nuevaFecha;
//       }
//
//
//
//       function datosFactura(json, proveedor, cliente) {
//
//         var fecha = json.autorizacion.comprobante[0].factura[0].infoFactura[0].fechaEmision[0]
//
//         var nfact = json.autorizacion.comprobante[0].factura[0].infoTributaria[0].estab[0] + json.autorizacion.comprobante[0].factura[0].infoTributaria[0].ptoEmi[0] + json.autorizacion.comprobante[0].factura[0].infoTributaria[0].secuencial[0];
//
//         var factura = {
//           idProveedor: 0,
//           idComprador: 0,
//           fechaEmision: formatearFecha(fecha),
//           numeroComprobante: json.autorizacion.numeroAutorizacion[0],
//           valorFactura: json.autorizacion.comprobante[0].factura[0].infoFactura[0].importeTotal[0],
//           numFactura: nfact
//         }
//
//         return factura;
//
//       }
//
//       function datosProveedor(json) {
//
//         var proveedor = {
//
//           nombre: json.autorizacion.comprobante[0].factura[0].infoTributaria[0].razonSocial[0],
//           direccion: json.autorizacion.comprobante[0].factura[0].infoTributaria[0].dirMatriz[0],
//           Ruc: json.autorizacion.comprobante[0].factura[0].infoTributaria[0].ruc[0],
//
//         }
//
//         return proveedor;
//       }
//
//       function datosCliente(json) {
//
//         var name = json.autorizacion.comprobante[0].factura[0].infoFactura[0].razonSocialComprador[0];
//         var cliente = {
//
//           nombre: separarNombre(name),
//           apellido : separarApellido(name),
//           cedula: json.autorizacion.comprobante[0].factura[0].infoFactura[0].identificacionComprador[0]
//
//
//         }
//
//         return cliente;
//
//       }
//
//       function crearCliente(cliente, proveedor, factura) {
//
//         var queryBusquedaCliente = 'SELECT * FROM applibres.comprador WHERE cedula=' + cliente.cedula + ';'
//
//         sails.conexionmysql.query(queryBusquedaCliente, function (err, rows) {
//           if (err) throw err;
//
// //          console.log('Busqueda del cliente, si esta o no registrado :\n');
// //          console.log(rows);
//
//           if (rows.length == 0) {
//
//             sails.conexionmysql.query('INSERT INTO comprador SET ?', cliente, function (err, clienteCreado) {
//               if (err) throw err;
//
//              // console.log('El id de Cliente Creado es:', clienteCreado.insertId);
//               //              mensaje.cliente.mensaje = 'El cliente fue creado';
//               //              mensaje.cliente.id = clienteCreado.insertId;
//
//               guardarMensaje('Se creo el cliente', clienteCreado.insertId, 'cliente');
//
//               crearProveedor(clienteCreado.insertId, proveedor, factura);
//             });
//
//           } else {
// //            console.log('El id de Cliente Encontrado es:', rows[0].id);
// //            console.log('Enviar parametros a Proveedor porque el cliente estaba registrado');
//
//             guardarMensaje('El cliente ya estaba guardado', rows[0].id, 'cliente');
//
//             crearProveedor(rows[0].id, proveedor, factura);
//             //enviar parametros
//           }
//
//         });
//
//       //   ClienteApi.findOne({
//       //     cedula:'1717465569'
//       //   }).exec(function (err, cedula){
//       //     if (err) {
//       //       return res.serverError(err);
//       //     }
//       //     if (!cedula) {
//       //       return res.notFound('Could not find Finn, sorry.');
//       //     }
//       //
//       //     console.log('encontro',cedula)
//       //     return res.json(ok);
//       //   });
//       // }
//
//       function crearProveedor(idCliente, proveedor, factura) {
//
//         var queryBusquedaProveedor = 'SELECT * FROM applibres.proveedor WHERE nombre="' + proveedor.nombre + '";'
//       //  console.log(queryBusquedaProveedor);
//
//         sails.conexionmysql.query(queryBusquedaProveedor, function (err, rows) {
//           if (err) throw err;
//
// //          console.log('Datos recibidos de la busqued de proveedor:\n');
// //          console.log(rows);
//
//           if (rows.length == 0) {
//             sails.conexionmysql.query('INSERT INTO proveedor SET ?', proveedor, function (err, proveedorCreado) {
//               if (err) throw err;
//
// //              console.log('Debemos de enviar el proveedor id creado:', proveedorCreado.insertId);
//
//               guardarMensaje('Se creo el proveedor', proveedorCreado.insertId, 'proveedor');
//
//               crearFactura(idCliente, proveedorCreado.insertId, factura);
//
//
//             });
//           } else {
// //            console.log('Debemos de enviar el proveedor id buscado:', rows[0].id);
//             guardarMensaje('El proveedor ya estaba guardado', rows[0].id, 'proveedor');
//             crearFactura(idCliente, rows[0].id, factura);
//           }
//
//         });
//
//       }
//
//       function crearFactura(idCliente, idProveedor, factura) {
//
//         var queryBusquedaFactura = 'SELECT * FROM applibres.factura WHERE numeroComprobante = ' + factura.numeroComprobante + ';'
//         sails.conexionmysql.query(queryBusquedaFactura, function (err, facturaBuscada) {
//           if (err) throw err;
//
//           //comparar si encontro o no
//           if (facturaBuscada.length == 0) {
//             //si encontro crear
//
//             factura.idComprador = idCliente;
//             factura.idProveedor = idProveedor;
//
//             sails.conexionmysql.query('INSERT INTO factura SET ?', factura, function (err, facturaCreada) {
//               if (err) throw err;
//
//               guardarMensaje('Se creo la factura', facturaCreada.id, 'factura');
//
//               return res.json(mensaje);
//
//             });
//           } else {
//
//             guardarMensaje('La factura ya existe', facturaBuscada[0].id, 'factura');
//
//             //              //si no encontro no crear enviar mensaje de creado
//             //              console.log('Debemos de enviar el proveedor id buscado:', rows[0].id);
//             //              crearFactura(idCliente,rows[0].id,factura);
//
//             return res.json(mensaje);
//
//           }
//
//         });
//
//
//       }
//
//       function guardarMensaje(mensajeString, id, tipo) {
//         //  'mensaje.factura' equivale a 'mensaje['factura']'
//         mensaje[tipo].mensaje = mensajeString;
//         mensaje[tipo].id = id;
//
//       }
//
//
//     });
//   },
//
//
// };
//   nombre: function (req, res) {
//
//
//
//
//     var xml = `
// <?xml version="1.0" encoding="UTF-8"?>
// 	<autorizacion>
// 	<estado>AUTORIZADO</estado>
// 	<numeroAutorizacion>0101201701200101100316701317912875410</numeroAutorizacion>
// 	<fechaAutorizacion>Sun Jan 01 16:58:16 PET 2017</fechaAutorizacion>
// 	<ambiente>PRODUCCION</ambiente>
// 	<comprobante><![CDATA[<?xml version="1.0" encoding="UTF-8"?><factura id="comprobante" version="1.0.0">
//   <infoTributaria>
//     <ambiente>2</ambiente><tipoEmision>1</tipoEmision><razonSocial>MEGADATOS SA</razonSocial>
//     <nombreComercial>MEGADATOS SA</nombreComercial>
//     <ruc>1791287541001</ruc>
//     <claveAcceso>0101201701179128754100120010110031670137095627213</claveAcceso><codDoc>01</codDoc>
//     <estab>001</estab>
//     <ptoEmi>011</ptoEmi>
//     <secuencial>003167013</secuencial>
//     <dirMatriz>Nunez de Vela E313 y Atahualpa Edificio torre del Puente 2do Piso</dirMatriz>
//   </infoTributaria>
//   <infoFactura>
//     <fechaEmision>01/01/2017</fechaEmision>
//     <dirEstablecimiento>Avenida Rodrigo de Chavez  Parque Empresarial Colon  Edificio Coloncorp  Torre 6  Locales 4 y 5</dirEstablecimiento>
//     <contribuyenteEspecial>0176</contribuyenteEspecial>
//     <obligadoContabilidad>SI</obligadoContabilidad>
//     <tipoIdentificacionComprador>05</tipoIdentificacionComprador>
//     <razonSocialComprador>CRISTIAN RAUL LARA BALAREZO</razonSocialComprador>
//     <identificacionComprador>1717465569</identificacionComprador>
//     <totalSinImpuestos>34.99</totalSinImpuestos>
//     <totalDescuento>0.00</totalDescuento>
//     <totalConImpuestos>
//       <totalImpuesto>
//         <codigo>2</codigo>
//         <codigoPorcentaje>3</codigoPorcentaje>
//         <baseImponible>34.99</baseImponible>
//         <valor>4.90</valor>
//       </totalImpuesto>
//     </totalConImpuestos>
//     <propina> 0.00</propina>
//     <importeTotal>39.89</importeTotal>
//     <moneda>DOLAR</moneda>
//     <pagos>
//       <pago>
//         <formaPago>20</formaPago>
//         <total>39.89</total>
//       </pago>
//     </pagos>
//   </infoFactura>
//   <detalles>
//     <detalle>
//       <codigoPrincipal>HOME1AH</codigoPrincipal>
//       <descripcion>FTTH Hogar UAV Starter 20Mbps AH.NA Consumo: JANUARY  /2017, Fecha de Activacion: 09-AUG-16 09.01.41.000000 PM</descripcion>
//       <cantidad>1</cantidad>
//       <precioUnitario>34.99</precioUnitario>
//       <descuento>0.00</descuento>
//       <precioTotalSinImpuesto>34.99</precioTotalSinImpuesto>
//       <impuestos>
//         <impuesto>
//           <codigo>2</codigo>
//           <codigoPorcentaje>3</codigoPorcentaje>
//           <tarifa>14</tarifa>
//           <baseImponible>34.99</baseImponible>
//           <valor>4.90</valor>
//         </impuesto>
//       </impuestos>
//     </detalle>
//   </detalles>
//   <infoAdicional>
//     <campoAdicional nombre="emailCliente">cristian89lara@gmail.com</campoAdicional>
//     <campoAdicional nombre="dirCliente">CALLE GERONA N24-388 Y VIZCAYA SECTOR LA FLORESTA</campoAdicional>
//     <campoAdicional nombre="telfCliente">023227944;023227944;0983500247;0992880665;0983500247;0992880665</campoAdicional>
//     <campoAdicional nombre="ciudadCliente">QUITO</campoAdicional>
//     <campoAdicional nombre="numeroCliente">003167013</campoAdicional>
//     <campoAdicional nombre="consumoCliente">ENERO</campoAdicional>
//     <campoAdicional nombre="loginCliente">md-uiocrlarab1</campoAdicional>
//     <campoAdicional nombre="contratoCliente">001-001-0094185</campoAdicional>
//   </infoAdicional>
// <ds:Signature xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:etsi="http://uri.etsi.org/01903/v1.3.2#" Id="Signature937309">
// <ds:SignedInfo Id="Signature-SignedInfo436556">
// <ds:CanonicalizationMethod Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315"/>
// <ds:SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1"/>
// <ds:Reference Id="SignedPropertiesID470572" Type="http://uri.etsi.org/01903#SignedProperties" URI="#Signature937309-SignedProperties357254">
// <ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
// <ds:DigestValue>aoBIH+3QWffSO5hM8CXovWh6JJ0=</ds:DigestValue>
// </ds:Reference>
// <ds:Reference URI="#Certificate1490403">
// <ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
// <ds:DigestValue>99A4Hxa8aoAw1NEfRuBrAZCiHdg=</ds:DigestValue>
// </ds:Reference>
// <ds:Reference Id="Reference-ID-142312" URI="#comprobante">
// <ds:Transforms>
// <ds:Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature"/>
// </ds:Transforms>
// <ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
// <ds:DigestValue>adDNJjAJgxw5JWDUTTDIFszlFhc=</ds:DigestValue>
// </ds:Reference>
// </ds:SignedInfo>
// <ds:SignatureValue Id="SignatureValue156401">
// uTrAU4TbTixwdxkM1SJrYSrgUPPJEV5xg5fnPNID+NNyM6hBJz45EOcdchTWXoRzowuWX5DwwBrK
// /DxOA5qQoXWzO10NdC4jI+X0CH+wscMf8ghVsGwCtKf9ATdcuPCv3SZpek9ak+fi9TGIi+eR+buC
// eGzKaUo57YcmzzXK3uz8jjb/0Sgqzby7hDiqBLOJMrF68E8ghy9wRxBs4LsrfL1ADE7kU9AqXwtt
// nUq92GrFHwIQ1XSYjUyX5nuSAOTtU6AHvuB36bqJVsHIf+ddxynvqTS4IauvgW1IzuDGtAwTXMf5
// ByWG3iHmIVnxJRL63X79t2QNQy/gtwBHNRNgqQ==
// </ds:SignatureValue>
// <ds:KeyInfo Id="Certificate1490403">
// <ds:X509Data>
// <ds:X509Certificate>
// MIIJqTCCCJGgAwIBAgIEVM5GKjANBgkqhkiG9w0BAQsFADCBkzELMAkGA1UEBhMCRUMxGzAZBgNV
// BAoTElNFQ1VSSVRZIERBVEEgUy5BLjEwMC4GA1UECxMnRU5USURBRCBERSBDRVJUSUZJQ0FDSU9O
// IERFIElORk9STUFDSU9OMTUwMwYDVQQDEyxBVVRPUklEQUQgREUgQ0VSVElGSUNBQ0lPTiBTVUIg
// U0VDVVJJVFkgREFUQTAeFw0xNjA2MjAyMTA5NThaFw0xODA2MjAyMTM5NThaMIGeMQswCQYDVQQG
// EwJFQzEbMBkGA1UEChMSU0VDVVJJVFkgREFUQSBTLkEuMTAwLgYDVQQLEydFTlRJREFEIERFIENF
// UlRJRklDQUNJT04gREUgSU5GT1JNQUNJT04xQDATBgNVBAUTDDIwMDYxNjE2Mjk1MTApBgNVBAMT
// IldBU0hJTkdUT04gRlJBTkNJU0NPIEJBTEFSRVpPIFBPWk8wggEiMA0GCSqGSIb3DQEBAQUAA4IB
// DwAwggEKAoIBAQDGk837JSKjYtBACiSvbhlvcf69/WU2JSkh9oHy3E5v1vgcOQqIEjXHNcpNn6BZ
// PaYN4T9Ot0by+OjbV/3Q6tKlJ5T5aZIweAmUbbj4oZchrzJqwifAlUdObamPreM5OrmOjWNkqS+y
// wsCsMlGk0Ulho9Nd34/mj2opMIYjA14R1yTOtamXcWDJjeARrbfo/KwgWP8iEDuwA3RgE2iTBNSA
// QtX3srmOdV3mwtVKsfb31Q54UFxFGFfzgimWMChzf47ke2YBe9aHuRMaZz3K0Fn+YMhPjp6vRB/g
// 1eXhH/+ltSnjUcJiIfiyGDrYKUw88dJx5Vb/syeBWI1VojXIQ64bAgMBAAGjggX2MIIF8jALBgNV
// HQ8EBAMCBeAwWQYIKwYBBQUHAQEETTBLMEkGCCsGAQUFBzABhj1odHRwOi8vb2NzcGd3LnNlY3Vy
// aXR5ZGF0YS5uZXQuZWMvZWpiY2EvcHVibGljd2ViL3N0YXR1cy9vY3NwMIHMBgNVHSAEgcQwgcEw
// QAYKKwYBBAGCpnICCTAyMDAGCCsGAQUFBwICMCQaIkNlcnRpZmljYWRvIGRlIFJlcHJlc2VudGFu
// dGUgTGVnYWwwfQYKKwYBBAGCpnICAzBvMG0GCCsGAQUFBwIBFmFodHRwczovL3d3dy5zZWN1cml0
// eWRhdGEubmV0LmVjL2xleWVzX25vcm1hdGl2YXMvUG9saXRpY2FzIGRlIENlcnRpZmljYWRvIFJl
// cHJlc2VudGFudGUgTGVnYWwucGRmMB4GCisGAQQBgqZyAwoEEBMOTUVHQURBVE9TIFMuQS4wHQYK
// KwYBBAGCpnIDCwQPEw0xNzkxMjg3NTQxMDAxMBoGCisGAQQBgqZyAwEEDBMKMTcwNDA4MzI5MjAk
// BgorBgEEAYKmcgMCBBYTFFdBU0hJTkdUT04gRlJBTkNJU0NPMBgGCisGAQQBgqZyAwMEChMIQkFM
// QVJFWk8wFAYKKwYBBAGCpnIDBAQGEwRQT1pPMB8GCisGAQQBgqZyAwUEERMPR0VSRU5URSBHRU5F
// UkFMMC8GCisGAQQBgqZyAwcEIRMfTlVORVogREUgVkVMQSBFMy0xMyBZIEFUQUhVQUxQQTAbBgor
// BgEEAYKmcgMIBA0TCzU5MzIyMjY1MDUwMBUGCisGAQQBgqZyAwkEBxMFUVVJVE8wFwYKKwYBBAGC
// pnIDDAQJEwdFQ1VBRE9SMB8GCisGAQQBgqZyAyAEERMPMDAyMDAxMDAwMDEwNTE4MBMGCisGAQQB
// gqZyAyEEBRMDUEZYMCMGA1UdEQQcMBqBGGdiYWxhcmV6b0BuZXRsaWZlLm5ldC5lYzCCAnkGA1Ud
// HwSCAnAwggJsMIICaKCCAmSgggJghj1odHRwOi8vb2NzcGd3LnNlY3VyaXR5ZGF0YS5uZXQuZWMv
// ZWpiY2EvcHVibGljd2ViL3N0YXR1cy9vY3NwhoHUbGRhcDovL2RpcmVjdC5zZWN1cml0eWRhdGEu
// bmV0LmVjL2NuPUNSTDg2LGNuPUFVVE9SSURBRCUyMERFJTIwQ0VSVElGSUNBQ0lPTiUyMFNVQiUy
// MFNFQ1VSSVRZJTIwREFUQSxvdT1FTlRJREFEJTIwREUlMjBDRVJUSUZJQ0FDSU9OJTIwREUlMjBJ
// TkZPUk1BQ0lPTixvPVNFQ1VSSVRZJTIwREFUQSUyMFMuQS4sYz1FQz9jZXJ0aWZpY2F0ZVJldm9j
// YXRpb25MaXN0P2Jhc2WGgZ5odHRwczovL2RpcmVjdC5zZWN1cml0eWRhdGEubmV0LmVjL35jcmwv
// YXV0b3JpZGFkX2RlX2NlcnRpZmljYWNpb25fc3ViX3NlY3VyaXR5X2RhdGFfZW50aWRhZF9kZV9j
// ZXJ0aWZpY2FjaW9uX2RlX2luZm9ybWFjaW9uX2N1cml0eV9kYXRhX3MuYS5fY19lY19jcmxmaWxl
// LmNybKSBpjCBozELMAkGA1UEBhMCRUMxGzAZBgNVBAoTElNFQ1VSSVRZIERBVEEgUy5BLjEwMC4G
// A1UECxMnRU5USURBRCBERSBDRVJUSUZJQ0FDSU9OIERFIElORk9STUFDSU9OMTUwMwYDVQQDEyxB
// VVRPUklEQUQgREUgQ0VSVElGSUNBQ0lPTiBTVUIgU0VDVVJJVFkgREFUQTEOMAwGA1UEAxMFQ1JM
// ODYwKwYDVR0QBCQwIoAPMjAxNjA2MjAyMTA5NThagQ8yMDE4MDYyMDIxMzk1OFowHwYDVR0jBBgw
// FoAU9y9M4HXnYqN4llsGti5xO8xsP5AwHQYDVR0OBBYEFCdhPNwONHXvBMuvGbj807e7DKitMAkG
// A1UdEwQCMAAwGQYJKoZIhvZ9B0EABAwwChsEVjguMQMCA6gwDQYJKoZIhvcNAQELBQADggEBAH4q
// qbuZVowC+mvHgyPzXAKI7xK/EiDfRChPnVCzR1F+rZKw2npYm558qnd33Eebe/A9F3AxKmeqXh7i
// 2PczGfWBaO7APV6g51ziyZstgPVV0N+R7P8iIskN8FNXGiuy48Rq9HRL/WeTZjjvwRkRKJ0lutis
// LRMaQRaUl/lxyLhRu/lbJ2LUc5LLf+gUcsD1NpXo3Z2e8C8HSD9RAA/sWcKbKGTyza2b2WcA9dlm
// SP9CzNBjEO2DRNlq5RN6CLGenJRrvW7Sg3R9L7Shz/7AHEELCJGNqRD17L0iI2XEcwUcQclRnIgP
// ohCNQXUr1AWhdkVWyn+tNOlVUaKwoTY5mZs=
// </ds:X509Certificate>
// </ds:X509Data>
// <ds:KeyValue>
// <ds:RSAKeyValue>
// <ds:Modulus>
// xpPN+yUio2LQQAokr24Zb3H+vf1lNiUpIfaB8txOb9b4HDkKiBI1xzXKTZ+gWT2mDeE/TrdG8vjo
// 21f90OrSpSeU+WmSMHgJlG24+KGXIa8yasInwJVHTm2pj63jOTq5jo1jZKkvssLArDJRpNFJYaPT
// Xd+P5o9qKTCGIwNeEdckzrWpl3FgyY3gEa236PysIFj/IhA7sAN0YBNokwTUgELV97K5jnVd5sLV
// SrH299UOeFBcRRhX84IpljAoc3+O5HtmAXvWh7kTGmc9ytBZ/mDIT46er0Qf4NXl4R//pbUp41HC
// YiH4shg62ClMPPHSceVW/7MngViNVaI1yEOuGw==
// </ds:Modulus>
// <ds:Exponent>AQAB</ds:Exponent>
// </ds:RSAKeyValue>
// </ds:KeyValue>
// </ds:KeyInfo>
// <ds:Object Id="Signature937309-Object716798"><etsi:QualifyingProperties Target="#Signature937309"><etsi:SignedProperties Id="Signature937309-SignedProperties357254"><etsi:SignedSignatureProperties><etsi:SigningTime>2017-01-01T16:57:28-05:00</etsi:SigningTime><etsi:SigningCertificate><etsi:Cert><etsi:CertDigest><ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/><ds:DigestValue>Etz6JJpRCqNNP/hHC1apTSd3jGE=</ds:DigestValue></etsi:CertDigest><etsi:IssuerSerial><ds:X509IssuerName>CN=AUTORIDAD DE CERTIFICACION SUB SECURITY DATA,OU=ENTIDAD DE CERTIFICACION DE INFORMACION,O=SECURITY DATA S.A.,C=EC</ds:X509IssuerName><ds:X509SerialNumber>1422804522</ds:X509SerialNumber></etsi:IssuerSerial></etsi:Cert></etsi:SigningCertificate></etsi:SignedSignatureProperties><etsi:SignedDataObjectProperties><etsi:DataObjectFormat ObjectReference="#Reference-ID-142312"><etsi:Description>contenido comprobante</etsi:Description><etsi:MimeType>text/xml</etsi:MimeType></etsi:DataObjectFormat></etsi:SignedDataObjectProperties></etsi:SignedProperties></etsi:QualifyingProperties></ds:Object></ds:Signature></factura>]]></comprobante>
// 	<mensajes></mensajes>
// </autorizacion>
//
//
//
// `;
//
//
//
//     function formateoFactura(xml){
//
//
//       xml = xml.replace( /<\?xml version="1.0" encoding="UTF-8" standalone="yes"?[^>]>/," ");
//
//       xml = xml.replace(/<\![^>]*>/," ");
//
//       xml = xml.replace(/]]>/," ")
//       return xml;
//
//     }
//
//     var nuevaFactura=formateoFactura(xml);
//
//
//
//     //return res.json("ok");
//
//     //console.log(sails.conexionmysql);
//
//
//     var parser = new xml2js.Parser();
//
//     parser.parseString(nuevaFactura, function (err, result) {
//       // console.log(result);
//       // console.log(result.autorizacion.comprobante[0].factura[0].detalles[0].detalle[2])
//
//       console.log(result.autorizacion.comprobante[0].factura[0].infoFactura[0].razonSocialComprador[0])
//       var cliente = datosCliente(result);
//       var proveedor = datosProveedor(result);
//       var factura = datosFactura(result);
//
//      console.log('este es el cliente',cliente)
// //      console.log(proveedor)
// //      console.log(factura)
//       var mensaje = {
//         factura: {
//           mensaje: 'Si se creo o no se creo',
//           id: 0
//         },
//         cliente: {
//           mensaje: 'Si se creo o no se creo',
//           id: 0
//         },
//         proveedor: {
//           mensaje: 'Si se creo o no se creo',
//           id: 0
//         }
//       };
//       var name = result.autorizacion.comprobante[0].factura[0].infoFactura[0].razonSocialComprador[0];
//       separarNombre(name);
//       //crearCliente(cliente, proveedor, factura);
//       function separarNombre(nombre){
//         var splitNombre = nombre.split(" ");
//         console.log();
//         nombre=splitNombre[2]+" "+splitNombre[3];
//         return nombre;
//       }
//       function separarApellido(apellido){
//         var splitApellido = apellido.split(" ")
//         console.log ()
//
//         apellido =splitApellido[0]+" "+splitApellido[1];
//         return apellido;
//       }
//
//       function formatearFecha(fecha) {
//         var splitFecha = fecha.split("/");
//         var nuevaFecha = splitFecha[2] + '-' + splitFecha[1] + '-' + splitFecha[0];
//
//         return nuevaFecha;
//       }
//
//
//
//       function datosFactura(json, proveedor, cliente) {
//
//         var fecha = json.autorizacion.comprobante[0].factura[0].infoFactura[0].fechaEmision[0]
//
//         var nfact = json.autorizacion.comprobante[0].factura[0].infoTributaria[0].estab[0] + json.autorizacion.comprobante[0].factura[0].infoTributaria[0].ptoEmi[0] + json.autorizacion.comprobante[0].factura[0].infoTributaria[0].secuencial[0];
//
//         var factura = {
//           idProveedor: 0,
//           idComprador: 0,
//           fechaEmision: formatearFecha(fecha),
//           numeroComprobante: json.autorizacion.numeroAutorizacion[0],
//           valorFactura: json.autorizacion.comprobante[0].factura[0].infoFactura[0].importeTotal[0],
//           numFactura: nfact
//         }
//
//         return factura;
//
//       }
//
//       function datosProveedor(json) {
//
//         var proveedor = {
//
//           nombre: json.autorizacion.comprobante[0].factura[0].infoTributaria[0].razonSocial[0],
//           direccion: json.autorizacion.comprobante[0].factura[0].infoTributaria[0].dirMatriz[0],
//           Ruc: json.autorizacion.comprobante[0].factura[0].infoTributaria[0].ruc[0],
//
//         }
//
//         return proveedor;
//       }
//
//       function datosCliente(json) {
//
//         var name = json.autorizacion.comprobante[0].factura[0].infoFactura[0].razonSocialComprador[0];
//         var cliente = {
//
//           nombre: separarNombre(name),
//           apellido : separarApellido(name),
//           cedula: json.autorizacion.comprobante[0].factura[0].infoFactura[0].identificacionComprador[0]
//
//
//         }
//
//         return cliente;
//
//       }
//
//       function crearCliente(cliente, proveedor, factura) {
//
//         var queryBusquedaCliente = 'SELECT * FROM applibres.comprador WHERE cedula=' + cliente.cedula + ';'
//
//         sails.conexionmysql.query(queryBusquedaCliente, function (err, rows) {
//           if (err) throw err;
//
// //          console.log('Busqueda del cliente, si esta o no registrado :\n');
// //          console.log(rows);
//
//           if (rows.length == 0) {
//
//             sails.conexionmysql.query('INSERT INTO comprador SET ?', cliente, function (err, clienteCreado) {
//               if (err) throw err;
//
//               // console.log('El id de Cliente Creado es:', clienteCreado.insertId);
//               //              mensaje.cliente.mensaje = 'El cliente fue creado';
//               //              mensaje.cliente.id = clienteCreado.insertId;
//
//               guardarMensaje('Se creo el cliente', clienteCreado.insertId, 'cliente');
//
//               crearProveedor(clienteCreado.insertId, proveedor, factura);
//             });
//
//           } else {
// //            console.log('El id de Cliente Encontrado es:', rows[0].id);
// //            console.log('Enviar parametros a Proveedor porque el cliente estaba registrado');
//
//             guardarMensaje('El cliente ya estaba guardado', rows[0].id, 'cliente');
//
//             crearProveedor(rows[0].id, proveedor, factura);
//             //enviar parametros
//           }
//
//         });
//
//       }
//
//       function crearProveedor(idCliente, proveedor, factura) {
//
//         var queryBusquedaProveedor = 'SELECT * FROM applibres.proveedor WHERE nombre="' + proveedor.nombre + '";'
//         //  console.log(queryBusquedaProveedor);
//
//         sails.conexionmysql.query(queryBusquedaProveedor, function (err, rows) {
//           if (err) throw err;
//
// //          console.log('Datos recibidos de la busqued de proveedor:\n');
// //          console.log(rows);
//
//           if (rows.length == 0) {
//             sails.conexionmysql.query('INSERT INTO proveedor SET ?', proveedor, function (err, proveedorCreado) {
//               if (err) throw err;
//
// //              console.log('Debemos de enviar el proveedor id creado:', proveedorCreado.insertId);
//
//               guardarMensaje('Se creo el proveedor', proveedorCreado.insertId, 'proveedor');
//
//               crearFactura(idCliente, proveedorCreado.insertId, factura);
//
//
//             });
//           } else {
// //            console.log('Debemos de enviar el proveedor id buscado:', rows[0].id);
//             guardarMensaje('El proveedor ya estaba guardado', rows[0].id, 'proveedor');
//             crearFactura(idCliente, rows[0].id, factura);
//           }
//
//         });
//
//       }
//
//       function crearFactura(idCliente, idProveedor, factura) {
//
//         var queryBusquedaFactura = 'SELECT * FROM applibres.factura WHERE numeroComprobante = ' + factura.numeroComprobante + ';'
//         sails.conexionmysql.query(queryBusquedaFactura, function (err, facturaBuscada) {
//           if (err) throw err;
//
//           //comparar si encontro o no
//           if (facturaBuscada.length == 0) {
//             //si encontro crear
//
//             factura.idComprador = idCliente;
//             factura.idProveedor = idProveedor;
//
//             sails.conexionmysql.query('INSERT INTO factura SET ?', factura, function (err, facturaCreada) {
//               if (err) throw err;
//
//               guardarMensaje('Se creo la factura', facturaCreada.id, 'factura');
//
//               return res.json(mensaje);
//
//             });
//           } else {
//
//             guardarMensaje('La factura ya existe', facturaBuscada[0].id, 'factura');
//
//             //              //si no encontro no crear enviar mensaje de creado
//             //              console.log('Debemos de enviar el proveedor id buscado:', rows[0].id);
//             //              crearFactura(idCliente,rows[0].id,factura);
//
//             return res.json(mensaje);
//
//           }
//
//         });
//
//
//       }
//
//       function guardarMensaje(mensajeString, id, tipo) {
//         //  'mensaje.factura' equivale a 'mensaje['factura']'
//         mensaje[tipo].mensaje = mensajeString;
//         mensaje[tipo].id = id;
//
//       }
//
//
//     });
//   },

  subir2: function (req, res) {
    //metodo para recibir como argumento con el metodo post de nuestro form

    req.file('factura').upload({
      //directorio donde se guarda nuestra factura subida y tamanio permitido
      dirname: require('path').resolve(sails.config.appPath, 'assets/facturasXml'),
      maxBytes: 10000000
    }, function (err, uploadedFiles) {


      if (err) return res.negotiate(err);



      var aux = uploadedFiles[0].fd;
      var nombreArchivo = aux.split("\\")



//Leer la factura
      var xml = fs.readFile('assets/facturasXml/' + nombreArchivo[nombreArchivo.length-1], 'utf8', function (err, data) {
        if (err) {
          return data.negotiate(err);
        }



        //Modificar archivo XML con expresiones regulares
        function formateoFactura(xml){


          xml = xml.replace( /<\?xml version="1.0" encoding="UTF-8" standalone="yes"?[^>]>/," ");

          xml = xml.replace(/<\![^>]*>/," ");

          xml = xml.replace(/]]>/," ")
          return xml;

        }
        var nuevaFactura=formateoFactura(data);
        //parse para convertir el archivo xml a objetos jason
        parser.parseString(nuevaFactura, function (err, result) {

          console.log(result)
          var cliente = datosCliente(result);
          var proveedor = datosProveedor(result);
          var factura = datosFactura(result);
          var mensaje = {
            archivo : {
              mensaje : ' '
            },
            factura: {
              mensaje: 'Si se creo o no se creo',
              id: 0
            },
            cliente: {
              mensaje: 'Si se creo o no se creo',
              id: 0
            },
            proveedor: {
              mensaje: 'Si se creo o no se creo',
              id: 0
            },

          };
          console.log(cliente)
          console.log(proveedor)
          console.log(factura)
          //Captura de etiquetas XML inicio
          function datosFactura(json, proveedor, cliente) {

            var fecha = json.autorizacion.comprobante[0].factura[0].infoFactura[0].fechaEmision[0]

            var nfact = json.autorizacion.comprobante[0].factura[0].infoTributaria[0].estab[0] +"-"+ json.autorizacion.comprobante[0].factura[0].infoTributaria[0].ptoEmi[0] +"-"+ json.autorizacion.comprobante[0].factura[0].infoTributaria[0].secuencial[0];

            var factura = {
              idProveedor: 0,
              idComprador: 0,
              fechaEmision: formatearFecha(fecha),
              numeroComprobante: json.autorizacion.numeroAutorizacion[0],
              valorFactura: json.autorizacion.comprobante[0].factura[0].infoFactura[0].importeTotal[0],
              numFactura: nfact
            }

            return factura;

          }
          function datosProveedor(json) {

            var proveedor = {

              nombre: json.autorizacion.comprobante[0].factura[0].infoTributaria[0].razonSocial[0],
              direccion: json.autorizacion.comprobante[0].factura[0].infoTributaria[0].dirMatriz[0],
              Ruc: json.autorizacion.comprobante[0].factura[0].infoTributaria[0].ruc[0],

            }

            return proveedor;
          }
          function datosCliente(json) {

            var name = json.autorizacion.comprobante[0].factura[0].infoFactura[0].razonSocialComprador[0];
            var cliente = {

              nombre: separarNombre(name),
              apellido : separarApellido(name),
              cedula: json.autorizacion.comprobante[0].factura[0].infoFactura[0].identificacionComprador[0]


            }

            return cliente;

          }
          //Captura de etiquetas XML FIN



          // crearCliente(cliente, proveedor, factura);

          //Formateo de fecha en el formato de mysql
          function formatearFecha(fecha) {
            var splitFecha = fecha.split("/");
            var nuevaFecha = splitFecha[2] + '-' + splitFecha[1] + '-' + splitFecha[0];

            return nuevaFecha;
          }
          function separarNombre(nombre){
            var splitNombre = nombre.split(" ");
            if(splitNombre.length == 1){
              nombre=splitNombre[0];

            }else{
              nombre=splitNombre[2]+" "+splitNombre[3];

            }

            return nombre;
          }
          function separarApellido(apellido){
            var splitApellido = apellido.split(" ")
            if(splitApellido.length == 1){

              apellido = " ";
            }else{

              apellido =splitApellido[0]+" "+splitApellido[1];
            }


            return apellido;
          }


          //
          // //Inicio para escribir en la base de datos
          // function crearCliente(cliente, proveedor, factura) {
          //
          //   var queryBusquedaCliente = 'SELECT * FROM applibres.comprador WHERE cedula=' + cliente.cedula + ';'
          //
          //   sails.conexionmysql.query(queryBusquedaCliente, function (err, rows) {
          //     if (err) {
          //       console.log(err);
          //
          //     };
          //
          //     console.log('Busqueda del cliente, si esta o no registrado :\n');
          //     console.log(rows);
          //
          //     if (rows.length == 0) {
          //
          //       sails.conexionmysql.query('INSERT INTO comprador SET ?', cliente, function (err, clienteCreado) {
          //         if (err) {
          //           console.log(err);
          //         }
          //
          //         console.log('El id de Cliente Creado es:', clienteCreado.insertId);
          //         //              mensaje.cliente.mensaje = 'El cliente fue creado';
          //         //              mensaje.cliente.id = clienteCreado.insertId;
          //
          //         guardarMensaje('Se creo el cliente', clienteCreado.insertId, 'cliente');
          //
          //         crearProveedor(clienteCreado.insertId, proveedor, factura);
          //       });
          //
          //     } else {
          //       console.log('El id de Cliente Encontrado es:', rows[0].id);
          //       console.log('Enviar parametros a Proveedor porque el cliente estaba registrado');
          //
          //       guardarMensaje('El cliente ya estaba guardado', rows[0].id, 'cliente');
          //
          //       crearProveedor(rows[0].id, proveedor, factura);
          //       //enviar parametros
          //     }
          //
          //   });
          //
          // }
          // function crearProveedor(idCliente, proveedor, factura) {
          //
          //   var queryBusquedaProveedor = 'SELECT * FROM applibres.proveedor WHERE nombre="' + proveedor.nombre + '";'
          //   console.log(queryBusquedaProveedor);
          //
          //   sails.conexionmysql.query(queryBusquedaProveedor, function (err, rows) {
          //     if (err)  {
          //       console.log(err);
          //     };
          //
          //     console.log('Datos recibidos de la busqued de proveedor:\n');
          //     console.log(rows);
          //
          //     if (rows.length == 0) {
          //       sails.conexionmysql.query('INSERT INTO proveedor SET ?', proveedor, function (err, proveedorCreado) {
          //         if (err) throw err;
          //
          //         console.log('Debemos de enviar el proveedor id creado:', proveedorCreado.insertId);
          //
          //         guardarMensaje('Se creo el proveedor', proveedorCreado.insertId, 'proveedor');
          //
          //         crearFactura(idCliente, proveedorCreado.insertId, factura);
          //
          //
          //       });
          //     } else {
          //       console.log('Debemos de enviar el proveedor id buscado:', rows[0].id);
          //       guardarMensaje('El proveedor ya estaba guardado', rows[0].id, 'proveedor');
          //       crearFactura(idCliente, rows[0].id, factura);
          //     }
          //
          //   });
          //
          // }
          // function crearFactura(idCliente, idProveedor, factura) {
          //
          //   var queryBusquedaFactura = 'SELECT * FROM applibres.factura WHERE numFactura = ' + factura.numFactura + ';'
          //   sails.conexionmysql.query(queryBusquedaFactura, function (err, facturaBuscada) {
          //     if (err) {
          //       console.log(err)
          //       return res.badrequest();
          //     };
          //
          //     //comparar si encontro o no
          //     if (facturaBuscada.length == 0) {
          //       //si encontro crear
          //
          //       factura.idComprador = idCliente;
          //       factura.idProveedor = idProveedor;
          //
          //       sails.conexionmysql.query('INSERT INTO factura SET ?', factura, function (err, facturaCreada) {
          //         if (err) throw err;
          //         guardarMensaje(uploadedFiles.length + ' archivo(s) subido satisfactoriamente!',0,'archivo' )
          //         guardarMensaje('Se creo la factura', facturaCreada.id, 'factura');
          //
          //         return res.json(mensaje);
          //
          //       });
          //     } else {
          //
          //       guardarMensaje('La factura ya existe', facturaBuscada[0].id, 'factura');
          //
          //       //              //si no encontro no crear enviar mensaje de creado
          //       //              console.log('Debemos de enviar el proveedor id buscado:', rows[0].id);
          //       //              crearFactura(idCliente,rows[0].id,factura);
          //       guardarMensaje(uploadedFiles.length + ' archivo(s) subido satisfactoriamente!',0,'archivo' )
          //       //return res.json(mensaje);
          //       return res.badrequest(mensaje);
          //     }
          //
          //   });
          //
          //
          // }
          // //Finn de escribir en la base de datos
          // function guardarMensaje(mensajeString, id, tipo) {
          //   //  'mensaje.factura' equivale a 'mensaje['factura']'
          //   mensaje[tipo].mensaje = mensajeString;
          //   mensaje[tipo].id = id;
          //
          // }



        });

      });

      var parser = new xml2js.Parser();

    });









    //console.log(sails.conexionmysql);

    //



  },

};
