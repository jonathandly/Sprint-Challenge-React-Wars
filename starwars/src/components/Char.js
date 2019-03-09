import React from 'react';

const Char = props => {

    // console.log(props.character);
    return (
            <ul>
                <li>{props.character.name}
                <p>{props.character.birth_year}</p>
                <p>{props.character.created}</p>
                <p>{props.character.edited}</p>
                <p>{props.character.eye_color}</p>
                <p><a href={props.character.films}>Films</a></p>
                <p>{props.character.gender}</p>
                <p>{props.character.hair_color}</p>
                <p>{props.character.height}</p>
                <p><a href={props.character.homeworld}>{props.character.homeworld}</a></p>
                <p>{props.character.mass}</p>
                <p>{props.character.skin_color}</p>
                <p><a href={props.character.species}>Species</a></p>
                <p><a href={props.character.starships}>Starships</a></p>
                <p><a href={props.character.url}>{props.character.url}</a></p>
                <p>{props.character.vehicles}</p></li>
            </ul>
        );
}

export default Char;