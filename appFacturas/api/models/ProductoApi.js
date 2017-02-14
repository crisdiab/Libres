/**
 * Producto.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  // schema: true,
  // tableName: 'producto',
  // autoCreatedAt: false,
  // autoUpdatedAt: false,
  // autoPK: true,
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
    tipo:{
      type:'string',
      defaultsTo:''
    },
    precio :{
      type:'float',
      defaultsTo:0
    },

    productos : {
      collection:'detallefacturaapi',
      via:'idProducto'
    },



  }
};

