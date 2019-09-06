/**
 * Roles.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "roles",
  primaryKey: "id",
  attributes: {
    id: {
      type: "number",
      autoIncrement: true
    },
    name: {
      type: "string",
      isNotEmptyString: true,
      unique: true,
      required: true
    },
    description: {
      type: "string",
      columnType: "longtext",
      allowNull: true
    },
    created_at: {
      type: "ref",
      columnType: "datetime",
      columnName: "created_at"
    },
    updated_at: {
      type: "ref",
      columnType: "datetime",
      columnName: "updated_at"
    },
    is_deleted: {
      type: "number",
      allowNull: true,
      defaultsTo: 0
    }
  },
  beforeCreate: (values, next) => {
    values.created_at = moment().utc().format('YYYY-MM-DD HH:mm:ss');
    next();
  },
  beforeUpdate: (values, next) => {
    values.updated_at = moment().utc().format('YYYY-MM-DD HH:mm:ss');
    next();
  }
};
