import React, { Component } from 'react';
import './App.css';

import List from './components/List';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    console.log(this.state.starwarsChars);
    console.log(this.state.starwarsChars.name);
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <ul>
          {this.state.starwarsChars.map((char) => (
            <List 
            chars={this.state.starwarsChars}
            birthYear={this.state.starwarsChars.birth_year}
            created={this.state.starwarsChars.created}
            edited={this.state.starwarsChars.edited}
            eyeColor={this.state.starwarsChars.eye_color}
            films={this.state.starwarsChars.films}
            gender={this.state.starwarsChars.gender}
            hairColor={this.state.starwarsChars.hair_color}
            charHeight={this.state.starwarsChars.height}
            homeworld={this.state.starwarsChars.homeworld}
            mass={this.state.starwarsChars.mass}
            name={this.state.starwarsChars.name}
            skinColor={this.state.starwarsChars.skin_color}
            species={this.state.starwarsChars.species}
            starships={this.state.starwarsChars.starships}
            url={this.state.starwarsChars.url}
            vehicles={this.state.starwarsChars.vehicles}
            />
          ))}
          {/* {this.state.starwarsChars.name}
          </List> */}
        </ul>
      </div>
    );
  }
}

export default App;
