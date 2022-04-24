import React from 'react';
import ShoeSizeButtons from "./ShoeSizeButtons";
import './Product.scss';

const ShoeSizeButtonsList = ({ handleGetValue, valueList  }) => {
    return (
        <div className={`shoeSizeButtonsList`}>
            {valueList.map(item => <ShoeSizeButtons key={item} handleGetValue={handleGetValue} value={item} />)}
        </div>
    );
};

export default ShoeSizeButtonsList;