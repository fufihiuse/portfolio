const models = require('../models');

const { PortfolioPiece } = models;

const mainPage = (req, res) => res.render('app');

module.exports = {
    mainPage,
}