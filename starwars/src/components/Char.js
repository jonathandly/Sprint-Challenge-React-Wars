import React from 'react';

const Char = props => {
    return (
            <div className="unordered">
                <ul>
                    <li className="character-list"><p>Name: {props.character.name}</p>
                    <p>Birth Year: {props.character.birth_year}</p>
                    <p>Created: {props.character.created}</p>
                    <p>Edited: {props.character.edited}</p>
                    <p>Eye Color: {props.character.eye_color}</p>
                    <p><a href={props.character.films}>Films</a></p>
                    <p>Gender: {props.character.gender}</p>
                    <p>Hair Color: {props.character.hair_color}</p>
                    <p>Height: {props.character.height}</p>
                    <p><a href={props.character.homeworld}>Homeworld</a></p>
                    <p>Mass: {props.character.mass}</p>
                    <p>Skin Color: {props.character.skin_color}</p>
                    <p><a href={props.character.species}>Species</a></p>
                    <p><a href={props.character.starships}>Starships</a></p>
                    <p><a href={props.character.url}>URL</a></p>
                    <p><a href={props.character.vehicles}>Vehicles</a></p></li>
                </ul>
            </div>
        );
}

export default Char;