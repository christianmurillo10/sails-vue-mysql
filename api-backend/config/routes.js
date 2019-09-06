/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  '/': { view: 'pages/homepage' },

  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝

  // Users Routes
  'POST /user/login': {
    cors: {
      allowOrigins: '*'
    },
    action: 'login',
    controller: 'AuthController',
  },

  'POST /user/logout': {
    cors: {
      allowOrigins: '*'
    },
    action: 'logout',
    controller: 'AuthController',
  },

  'POST /user/create': {
    cors: {
      allowOrigins: '*'
    },
    action: 'create',
    controller: 'UserController'
  },

  'PUT /user/update/:id': {
    cors: {
      allowOrigins: '*'
    },
    action: 'update',
    controller: 'UserController'
  },

  'PUT /user/delete/:id': {
    cors: {
      allowOrigins: '*'
    },
    action: 'delete',
    controller: 'UserController'
  },

  'POST /user/search': {
    cors: {
      allowOrigins: '*'
    },
    action: 'search',
    controller: 'UserController'
  },

  'GET /user': {
    cors: {
      allowOrigins: '*'
    },
    action: 'findAll',
    controller: 'UserController'
  },

  'GET /user/:id': {
    cors: {
      allowOrigins: '*'
    },
    action: 'findById',
    controller: 'UserController'
  },

  // Roles Routes
  'POST /role/create': {
    cors: {
      allowOrigins: '*'
    },
    action: 'create',
    controller: 'RoleController'
  },

  'PUT /role/update/:id': {
    cors: {
      allowOrigins: '*'
    },
    action: 'update',
    controller: 'RoleController'
  },

  'PUT /role/delete/:id': {
    cors: {
      allowOrigins: '*'
    },
    action: 'delete',
    controller: 'RoleController'
  },

  'POST /role/search': {
    cors: {
      allowOrigins: '*'
    },
    action: 'search',
    controller: 'RoleController'
  },

  'GET /role': {
    cors: {
      allowOrigins: '*'
    },
    action: 'findAll',
    controller: 'RoleController'
  },

  'GET /role/:id': {
    cors: {
      allowOrigins: '*'
    },
    action: 'findById',
    controller: 'RoleController'
  },
};
