import React from 'react';

import Char from './Char';

const List = props => {

    return (
        <div className="char-list-div">
            {props.chars.map(character => (
                    <Char
                        character={character}
                    />
            ))}
        </div>
    );
}

export default List;