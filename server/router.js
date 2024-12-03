const controllers = require('./controllers');

const router = (app) => {
    app.get('/', controllers.Portfolio.mainPage);
}
module.exports = router;