const controllers = require('./controllers');

const router = (app) => {
    app.get('/', controllers.Portfolio.mainPage);
    app.post('/createPortfolioPiece', controllers.Portfolio.makeProject);
}
module.exports = router;