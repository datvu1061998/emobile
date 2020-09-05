import React from 'react';

function PrevArrow(props) {
    const {arrow} = props;
    return (
        <i>
            <i className={`fas ${arrow || 'fas fa-chevron-left'}`} onClick={props.onClick}></i>
        </i>
    );
}

export default PrevArrow;