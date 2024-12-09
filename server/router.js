const controllers = require('./controllers');

const router = (app) => {
  app.get('/getPortfolioPieces', controllers.Portfolio.getPortfolioPieces);
  app.get('/', controllers.Portfolio.mainPage);
  //app.post('/createPortfolioPiece', controllers.Portfolio.makeProject);
};
module.exports = router;
