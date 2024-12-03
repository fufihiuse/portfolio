const mongoose = require('mongoose');
const _ = require('underscore');

const escapeText = (text) => _.escape(text).trim();

const PortfolioPieceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        set: escapeText,
    },
    description: {
        type: String,
        required: true,
        trim: true,
        set: escapeText,
    },
    imgPath: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
});

const PortfolioModel = mongoose.model('PortfolioPiece', PortfolioPieceSchema);
module.exports = PortfolioModel;