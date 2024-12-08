const mongoose = require('mongoose');

const PortfolioPieceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    role: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    imgPath: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
        required: true,
    }
});

const PortfolioModel = mongoose.model('PortfolioPiece', PortfolioPieceSchema);
module.exports = PortfolioModel;
