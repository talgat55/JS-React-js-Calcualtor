import React from 'react';

export default ({title, description, id}) => (
    <li>
        <div>
        <h3>
            {title}
        </h3>
        <p>
            {description}
        </p>
        </div>
        <div className="number">
            {parseInt(id) +1}
        </div>

    </li>

);