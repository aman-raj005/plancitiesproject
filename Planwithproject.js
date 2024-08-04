import { useState } from "react";
import Data from './Data';
import Tours from "./Tours";
import './Styling.css';

function Planwithproject() {
    const [tours, setTours] = useState(Data);

    function removetourhandler(id) {
        const newtours = tours.filter(tour => tour.id !== id);
        setTours(newtours);
    }

    if (tours.length === 0) {
        return (
            <div className="refresh">
                <h2>No Tour Available</h2>
                <button className="btn-white" onClick={() => setTours(Data)}>Refresh</button>
            </div>
        );
    }

    return (
        <div className="App">
            <Tours tours={tours} removetourhandler={removetourhandler} />
        </div>
    );
}

export default Planwithproject;
