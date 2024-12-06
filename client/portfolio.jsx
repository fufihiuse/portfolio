const React = require('react');
const { useState, useEffect } = React;
const { createRoot } = require('react-dom/client');

const PortfolioList = (props) => {
    const [portfolioPieces, setPortfolioPieces] = useState(props.portfolioPieces);

    useEffect(() => {
        const loadPortfolioPieces = async () => {
            const response = await fetch('/getPortfolioPieces');
            const data = await response.json();
            setPortfolioPieces(data.portfolioPieces);
        };
        loadPortfolioPieces();
    });

    if (portfolioPieces.length === 0) {
        return (
            <div className='portfolioPieces'>
                <h1>Error retrieving data from server!</h1>
            </div>
        );
    }

    const portfolioNodes = portfolioPieces.map(piece => {
        return (
            <div key={piece.id} className='project flex flex-col w-1/4'>
                <img src={'/assets/img/' + piece.imgPath} alt={"Picture of portfolio piece " + piece.title} className="projectPic w-1/16 rounded-lg" />
                <h3 className='projectTitle text-3xl'>{piece.title}</h3>
                <h3 className='projectDesc'>{piece.description}</h3>
                <a href={piece.link} target="_blank" className='rounded-full bg-cyan-500 block'>Check it Out</a>
            </div >
        );
    });

    return (
        <div className="projectList grid grid-cols-2 place-items-center">
            {portfolioNodes}
        </div>
    );
};

const App = () => {
    return (
        <div id="projects">
            <PortfolioList portfolioPieces={[]} />
        </div>
    )
};

const init = () => {
    const root = createRoot(document.querySelector('#app'));

    root.render(<App />)
};

window.onload = init;