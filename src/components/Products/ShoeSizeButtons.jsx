import React from 'react';

const ShoeSizeButtons = ({ handleGetValue, value }) => {
    return (
        <button className="shoeSizeButton mr-5" onClick={handleGetValue} value={value}>{value}</button>
    );
};

export default ShoeSizeButtons;