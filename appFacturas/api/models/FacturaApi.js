/**
 * FacturaApi.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  // schema: true,
  // tableName: 'factura',
  // autoCreatedAt: false,
  // autoUpdatedAt: false,

  attributes: {
    // id: {
    //   type: 'integer',
    //   primaryKey: true,
    //   unique: true
    // },
    numeroComprobante:{
      type:'string',
      defaultsTo:'',
    },
    numFactura:{
      type:'string',
      unique: true,
      defaultsTo:''
     // required: true
    },
    fechaEmision:{
      type:'date',
      defaultsTo:''
     // required: true
    },
    periodo:{
      type:'string',
      defaultsTo:''
    },
    mes:{
      type:'string',
      defaultsTo:''
    },
    valorFactura:{
      type:'float',
      defaultsTo:''
      //required: true
    },
    idComprador:{
      model:'ClienteApi'
    },
    idProveedor:{
      model:'ProveedorApi'
    },

    alimentos:{
      type:'float',
      defaultsTo:0
    },
    salud:{
      type:'float',
      defaultsTo:0
    },
    vivienda:{
      type:'float',
      defaultsTo:0
    },
    educacion:{
      type:'float',
      defaultsTo:0
    },
    vestimenta:{
      type:'float',
      defaultsTo:0
    },
    otros:{
      type:'float',
      defaultsTo:0
    },
    totalSinIva:{
      type:'float',
      defaultsTo:0
    },
    iva:{
      type:'float',
      defaultsTo:0
    },
    mercaderia:{
      type:'float',
      defaultsTo:0
    },
    arriendo:{
      type:'float',
      defaultsTo:0
    },
    serviciosBasicos:{
      type:'float',
      defaultsTo:0
    },
    sueldos:{
      type:'float',
      defaultsTo:0
    },
    movilizacion:{
      type:'float',
      defaultsTo:0
    },
    viaticos:{
      type:'float',
      defaultsTo:0
    },
    capacitacion:{
      type:'float',
      defaultsTo:0
    },
    suministros:{
      type:'float',
      defaultsTo:0
    },
    herramientas:{
      type:'float',
      defaultsTo:0
    },
    tipoFactura:{
      type:'integer',
      defaultsTo:0
    },



  }


};

