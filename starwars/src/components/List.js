import React from 'react';

import Char from './Char';

const List = props => {

    return (
        <div className="char-list-div">
            {props.chars.map(character => (
                <Char
                    className="character"
                    // key={props.key}
                    chars={props.chars}
                    birthYear={props.birthYear}
                    created={props.created}
                    edited={props.edited}
                    eyeColor={props.eyeColor}
                    films={props.films}
                    gender={props.gender}
                    hairColor={props.hairColor}
                    charHeight={props.charHeight}
                    homeworld={props.homeworld}
                    mass={props.mass}
                    name={props.name}
                    skinColor={props.skinColor}
                    species={props.species}
                    starships={props.starships}
                    vehicles={props.vehicles}
                    url={props.url}
                />
                /* {props.character.name} {props.character.birthYear} {props.character.edited}
                </Char> */
            ))}
        </div>
    );
}

export default List;