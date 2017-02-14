/**
 * Limites.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  // schema: true,
  // tableName: 'limite',
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
    },
    valor:{
      type:'float',
      defaultsTo:0

    },
    periodo:{
      type:'string',
      defaultsTo:''
    },
  }
};

