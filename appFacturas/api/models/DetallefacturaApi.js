/**
 * Detallefactura.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  // schema: true,
  // tableName: 'detallefactura',
  // autoCreatedAt: false,
  // autoUpdatedAt: false,
  // autoPK: true,
  attributes: {
    // id: {
    //   type: 'integer',
    //   primaryKey: true,
    //   unique: true
    // },
    cantidad:{
      type:'integer',
      defaultsTo:''
    },
    valorSinIva:{
      type:'float',
      defaultsTo:0
    },
    valorConIva:{
      type:'float',
      defaultsTo:0
    },
    valor:{
      type : 'float',
      defaultsTo:0
    },

    idProducto:{
      model:'ProductoApi'
    },
    idFacturaProd:{
      model: 'FacturaApi'
    }
  }
};

