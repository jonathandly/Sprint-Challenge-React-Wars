import React from 'react';

import Char from './Char';

const List = props => {

    return (
        <div className="char-list-div">
            {props.chars.map(character => (

                    <Char
                        character={character}
                    />
                
                /* {props.character.name} {props.character.birthYear} {props.character.edited}
                </Char> */
            ))}
        </div>
    );
}

export default List;