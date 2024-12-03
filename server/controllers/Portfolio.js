const { description } = require('commander');
const models = require('../models');

const { PortfolioPiece } = models;

const mainPage = (req, res) => res.render('app');

const makeProject = async (req, res) => {
    if (!req.body.title || !req.body.description || !req.body.imgPath || !req.body.link) {
        return res.status(400).json({ error: 'All values are required!' });
    }

    const portfolioPieceData = {
        title: req.body.title,
        description: req.body.description,
        imgPath: req.body.imgPath,
        link: req.body.link,
    };

    try {
        const newPortfolioPiece = new PortfolioPiece(portfolioPieceData);
        await newPortfolioPiece.save();
        return res.status(201).json({ name: newPortfolioPiece.title });
    } catch (err) {
        console.log(err);
        if (err.code === 11000) {
            return res.status(400).json({ error: 'Piece already exists!' });
        }
        return res.status(500).json({ error: 'An error occured making portfolio piece!' });
    }
};

module.exports = {
    mainPage,
    makeProject,
}