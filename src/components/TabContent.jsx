import React from 'react';

export default ({sidebar,children}) => (
    <div className="tab-item">
        <div className="sidebar">
            {sidebar}
        </div>
        <div className="content">
            {children}
        </div>
    </div>
);