const DeveloperController = require('../controllers/DeveloperController');

const routes = (app) => {
  app.route('/developers')
    .get(DeveloperController.getDevelopers)
    .post(DeveloperController.newDeveloper);
}
module.exports = routes;
