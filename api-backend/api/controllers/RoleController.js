/**
 * RoleController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  /**
   * Create role
   * @param req
   * @param res
   * @returns {Promise<void>}
   * @routes POST /role/create
   */
  create : (req, res) => {
    const params = req.body;
    let tasks, criteria, initialValues, data;

    // Validators
    if (_.isUndefined(params))
      return res.badRequest({ err: "Invalid Parameter: [params]" });
    if (_.isEmpty(params))
      return res.badRequest({ err: "Empty Parameter: [params]" });

    tasks = {
      save: async (cb) => {
        // Validators
        if (_.isEmpty(params.name)) return res.json({status: 200, message: "Name is required.", result: false});

        // Pre-setting variables
        criteria = { name: params.name };
        initialValues = _.pick(params, ['name', 'description']);
        // Execute find query
        data = await Roles.find(criteria).intercept((err) => { return cb(err); });
        if (!_.isEmpty(data)) {
          return res.json({status: 200, message: "Role already exist.", result: false});
        } else {
          // Execute create query
          data = await Roles.create(initialValues).fetch().intercept((err) => { return cb(err); });
          return cb(null, data);
        }
      }
    };

    // Execute tasks
    async.auto(tasks, async (err, results) => {
      if (err) {
        console.log("\033[31m", "ROLE_CREATE:", JSON.stringify(err), "\033[0m");
        return res.badRequest({
          status: 401,
          err: err,
          message: "Failed creating role."
        });
      }

      return res.json({
        status: 200,
        message: "Successfully created role.",
        result: _.omit(results.save, ['is_deleted'])
      });
    });
  },

  /**
   * Update role
   * @route PUT /role/update/:id
   * @param req
   * @param res
   * @returns {never}
   */
  update : (req, res) => {
    const params = req.body;
    let tasks, criteria, initialValues, data;

    if (_.isUndefined(params))
      return res.badRequest({ err: "Invalid Parameter: [params]" });
    if (_.isEmpty(params))
      return res.badRequest({ err: "Empty Parameter: [params]" });

    tasks = {
      save: async (cb) => {
        // Pre-setting variables
        criteria = {id: req.params.id};
        initialValues = _.pick(params, ['name', 'description']);
        // Execute update query
        data = await Roles.update(criteria, initialValues).fetch().intercept((err) => { return cb(err); });
        if (_.isEmpty(data)) {
          return res.json({status: 200, message: "Role doesn't exist.", result: false});
        } else {
          return cb(null, data[0]);
        }
      },
    };

    // Execute tasks
    async.auto(tasks, async (err, results) => {
      if (err) {
        console.log("\033[31m", "ROLE_UPDATE:", JSON.stringify(err), "\033[0m");
        return res.badRequest({
          status: 401,
          err: err,
          message: "Failed updating role."
        });
      }

      return res.json({
        status: 200,
        message: "Successfully updated role.",
        result: results.save
      });
    });
  },

  /**
   * Delete role
   * @route PUT /role/delete/:id
   * @param req
   * @param res
   * @returns {never}
   */
  delete : (req, res) => {
    let tasks, criteria, initialValues, data;

    tasks = {
      save: async (cb) => {
        // Pre-setting variables
        criteria = {id: req.params.id};
        initialValues = {is_deleted: 1};
        // Execute update query
        data = await Roles.update(criteria, initialValues).fetch().intercept((err) => { return cb(err); });
        if (_.isEmpty(data)) {
          return res.json({status: 200, message: "Role doesn't exist.", result: false});
        } else {
          return cb(null, data[0]);
        }
      },
    };

    // Execute tasks
    async.auto(tasks, async (err, results) => {
      if (err) {
        console.log("\033[31m", "ROLE_DELETE:", JSON.stringify(err), "\033[0m");
        return res.badRequest({
          status: 401,
          err: err,
          message: "Failed deleting role."
        });
      }

      return res.json({
        status: 200,
        message: "Successfully deleted role.",
        result: results.save
      });
    });
  },

  /**
   * Search roles
   * @route POST /role/search/
   * @param req
   * @param res
   * @returns {never}
   */
  search : (req, res) => {
    const params = req.body;
    let tasks, query;

    if (_.isUndefined(params))
      return res.badRequest({ err: "Invalid Parameter: [params]" });
    if (_.isEmpty(params))
      return res.badRequest({ err: "Empty Parameter: [params]" });

    tasks = {
      find: async (cb) => {
        // Pre-setting variables
        query = `SELECT id, name, description, created_at, updated_at FROM roles WHERE name LIKE "%${params.value}%";`;
        // Execute native query
        await Roles
          .getDatastore()
          .sendNativeQuery(query, (err, result) => {
            if (err) return cb(err);
            if (_.isEmpty(result.rows)) return res.json({status: 200, message: "No Data Found.", result: false});
            return cb(null, result.rows);
          });
      },
    };

    // Execute tasks
    async.auto(tasks, (err, results) => {
      if (err) {
        console.log("\033[31m", "ROLE_SEARCH:", JSON.stringify(err), "\033[0m");
        return res.badRequest({
          status: 401,
          err: err,
          message: "Failed search data."
        });
      }

      return res.json({
        status: 200,
        message: "Successfully searched data.",
        result: results.find
      });
    });
  },

  /**
   * Find all roles
   * @route GET /role
   * @param req
   * @param res
   * @returns {never}
   */
  findAll : (req, res) => {
    // const params = req.body;
    let tasks, data, criteria;

    tasks = {
      findAll: async (cb) => {
        // Pre-setting variables
        criteria = { select: ["id", "name", "description", "created_at", "updated_at"]};
        // Execute find query
        data = await Roles.find(criteria).where({'is_deleted' : 0}).intercept((err) => { return cb(err); });
        return cb(null, data);
      },
    };

    // Execute tasks
    async.auto(tasks, (err, results) => {
      if (err) {
        console.log("\033[31m", "ROLE_FINDALL:", JSON.stringify(err), "\033[0m");
        return res.badRequest({
          status: 401,
          err: err,
          message: "Failed find all data."
        });
      }

      return res.json({
        status: 200,
        message: "Successfully find all data.",
        result: results.findAll
      });
    });
  },

  /**
   * Find role by id
   * @route GET /role/:id
   * @param req
   * @param res
   * @returns {never}
   */
  findById : (req, res) => {
    let tasks, data;

    tasks = {
      findById: async (cb) => {
        // Execute findOne query
        data = await Roles.findOne({id: req.params.id}).intercept((err) => { return cb(err); });
        if (data.is_deleted) return cb({error: "Role already deleted."});
        return cb(null, data);
      },
    };

    // Execute tasks
    async.auto(tasks, (err, results) => {
      if (err) {
        console.log("\033[31m", "ROLE_FIND_BY_ID:", JSON.stringify(err), "\033[0m");
        return res.badRequest({
          status: 401,
          err: err,
          message: "Failed to find role."
        });
      }

      return res.json({
        status: 200,
        message: "Successfully find role.",
        result: _.omit(results.findById, ['is_deleted'])
      });
    });
  },
};

