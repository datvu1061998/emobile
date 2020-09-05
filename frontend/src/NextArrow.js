import React from 'react';

function NextArrow(props) {
    const {arrow} = props;
    return (
        <i>
            <i className={`fas ${arrow || 'fa-chevron-right'}`} onClick={props.onClick}></i>
        </i>
    );
}

export default NextArrow;