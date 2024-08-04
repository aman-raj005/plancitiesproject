import React, { useState } from 'react';
import "./Styling.css"

function Cards({ id, info, price, name, image, removetourhandler }) {
    const [readmore, setReadmore] = useState(false);

    const description = readmore ? info : `${info.substring(0, 100)}....`;

    function readmorehandler() {
        setReadmore(!readmore);
    }

    return (
        <div className="Cards">
            <img src={image} className="image" alt="image_not_found" />
            <div className="tour-info">
                <div className="Tour-details">
                    <h4 className="Tour-price">
                    ₹ {price}
                    </h4>
                    <h4 className="Tour-price-name">
                        {name}
                    </h4>
                </div>
                <div className="description">
                    {description}
                    <span className="read-more" onClick={readmorehandler}>
                        {readmore ? `Show Less` : `Read More`}
                    </span>
                </div>
            </div>
            <button className="btn-red" onClick={() => removetourhandler(id)}>
                Not Interested
            </button>
        </div>
    );
}

export default Cards;
