'use strict';

var DeveloperController = require('../controllers/DeveloperController');

var routes = function routes(app) {
  app.route('/developers').get(DeveloperController.getDevelopers).post(DeveloperController.newDeveloper);
};
module.exports = routes;
//# sourceMappingURL=index.js.map