const DeveloperController = require('../controllers/DeveloperController');

const routes = (app) => {
  app.get('/', (req, res, next) => {
    res.send({
      message: "Welcome to the PHDevConnect Developers API, use endpoint /api/v1/developers"
    });
  });

  app.route('/developers')
    .get(DeveloperController.getDevelopers)
    .post(DeveloperController.newDeveloper);
}
module.exports = routes;
