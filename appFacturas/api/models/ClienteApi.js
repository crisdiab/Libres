/**
 * ClienteApi.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  // schema: true,
  // tableName: 'comprador',
  // autoCreatedAt: false,
  // autoUpdatedAt: false,
  // autoPK: true,
  attributes: {
//     id: {
//       type: 'integer',
//       primaryKey: true,
//       unique: true,
// //      columnName: 'id'
//     },
    nombre: {
      type: 'string',
    },
    apellido: {
      type: 'string',
      defaultsTo:'',
    },
    cedula: {
      type: 'string',
      columnName: 'cedula',
      unique: true,
    },
    facturas: {
      collection: 'facturaapi',
      via: 'idComprador'
    },
    usuario: {
      type: 'string',
      // unique: true,
      defaultsTo:'',

    },
    password: {
      type: "string",
      defaultsTo:'123456'
      // unique: true,
    },
    nivelAcceso: {
      type: "integer",
      defaultsTo:1,


    },


  }
};
