import React from 'react';

const Char = props => {
    return (
            <div className="unordered">
                <ul>
                    <li><p>Name: {props.character.name}</p></li>
                    <li><p>Birth Year: {props.character.birth_year}</p></li>
                    <li><p>Created: {props.character.created}</p></li>
                    <li><p>Edited: {props.character.edited}</p></li>
                    <li><p>Eye Color: {props.character.eye_color}</p></li>
                    <li><p>Films: <a href={props.character.films[0]}>Films</a></p></li>
                    <li><p>Gender: {props.character.gender}</p></li>
                    <li><p>Hair Color: {props.character.hair_color}</p></li>
                    <li><p>Height: {props.character.height}</p></li>
                    <li><p>Homeworld: <a href={props.character.homeworld}>Homeworld</a></p></li>
                    <li><p>Mass: {props.character.mass}</p></li>
                    <li><p>Skin Color: {props.character.skin_color}</p></li>
                    <li><p>Species: <a href={props.character.species}>Species</a></p></li>
                    <li><p>Starships: <a href={props.character.starships[0]}>Starships</a></p></li>
                    <li><p>URL: <a href={props.character.url}>URL</a></p></li>
                    <li><p>Vehicles: <a href={props.character.vehicles[0]}>Vehicles</a></p></li>
                </ul>
            </div>
        );
}

export default Char;