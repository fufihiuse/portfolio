const models = require('../models');

const { PortfolioPiece } = models;

const mainPage = (req, res) => res.render('app');

const makeProject = async (req, res) => {
    if (!req.body.title || !req.body.role || !req.body.description || !req.body.imgPath || !req.body.link) {
        return res.status(400).json({ error: 'All values are required!' });
    }

    const portfolioPieceData = {
        title: req.body.title,
        role: req.body.role,
        description: req.body.description,
        imgPath: req.body.imgPath,
        link: req.body.link,
    };

    try {
        const newPortfolioPiece = new PortfolioPiece(portfolioPieceData);
        await newPortfolioPiece.save();
        return res.status(201).json({ newPortfolioPiece });
    } catch (err) {
        console.log(err);
        if (err.code === 11000) {
            return res.status(400).json({ error: 'Piece already exists!' });
        }
        return res.status(500).json({ error: 'An error occured making portfolio piece!' });
    }
};

const getPortfolioPieces = async (req, res) => {
    try {
        const docs = await PortfolioPiece.find({}).sort({ date: -1 }).lean().exec();

        return res.json({ portfolioPieces: docs });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Error retrieving project from database!' });
    }
};

module.exports = {
    mainPage,
    makeProject,
    getPortfolioPieces,
};
