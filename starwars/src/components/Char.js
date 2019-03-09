import React from 'react';

const Char = props => {

    return (
        // <li className="char-li">
        //     {props.chars.name}
        // </li>
            <li className="char-li">{props.name}</li>
        );
}

export default Char;