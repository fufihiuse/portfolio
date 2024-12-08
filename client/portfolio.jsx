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
            <div key={piece.id} className='project flex flex-col w-2/3 content-center items-center border-0 rounded-2xl p-2 py-4 drop-shadow-lg transition duration-200 bg-gradient-to-tl from-violet-800 to-violet-900'>
                <img src={'/assets/img/' + piece.imgPath} alt={"Picture of portfolio piece " + piece.title} className="projectPic w-2/3 rounded-2xl drop-shadow-sm" />
                <h2 className='projectTitle text-3xl font-bold'>{piece.title}</h2>
                <h3 className='projectRole text-xl font-semibold'>{piece.role}</h3>
                <p className='projectDesc text-center py-2'>{piece.description}</p>
                <a href={piece.link} target="_blank" className='rounded-full text-center p-1 text-lg text-slate-200 font-semibold bg-orange-400 drop-shadow-lg hover:drop-shadow-2xl transition duration-100 hover:scale-105 block min-w-1/4 px-3'>Check it Out</a>
            </div >
        );
    });

    return (
        <div className="projectList grid grid-cols-1 md:grid-cols-2 justify-items-center items-start gap-y-5">
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