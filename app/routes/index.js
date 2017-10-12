const DeveloperController = require('../controllers/DeveloperController');

const routes = (app) => {
  app.get('/', (req, res, next) => {
    res.send({
      message: "Welcome to the PHDevConnect Developers api, use enpoint /api/vi/developers"
    });
  });

  app.route('/developers')
    .get(DeveloperController.getDevelopers)
    .post(DeveloperController.newDeveloper);
}
module.exports = routes;
