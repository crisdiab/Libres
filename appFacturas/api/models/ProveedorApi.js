/**
 * ProveedorApi.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  //
  // schema: true,
  // tableName: 'proveedor',
  // autoCreatedAt: false,
  // autoUpdatedAt: false,

  attributes: {
    // id: {
    //   type: 'integer',
    //   primaryKey: true,
    //   unique: true
    // },
    nombre:{
      type:'string',
      defaultsTo:''


    },
    Ruc:{
      type:'string',
      unique: true,

    },
    direccion:{
      type:'string',
      defaultsTo:''
    },
    telefono:{
      type:'string',
      defaultsTo:''

    },
    facturas:{
      collection:'facturaapi',
      via:'idProveedor'
    }

  }

};

