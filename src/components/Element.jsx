import React from 'react';

const Element = ({ id, cordX, cordY }) => {

    return (
        <li>rząd x{cordX}, miejsce y{cordY}, id: {id}</li>
    );
}

export default Element;