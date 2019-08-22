import React, { Component, useState, useEffect } from 'react';
import './App.css';

import List from './components/List';
import './components/StarWars.css';

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       starwarsChars: []
//     };
//   }
function App() {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    function getCharacters(URL) {
      fetch(URL)
        .then(res => {
          return res.json();
        })
        .then(chars => {
          setChars(chars.results);
        })
        .catch(err => {
          throw new Error(err);
        });
    }
    return getCharacters('https://swapi.co/api/people');
  }, [chars]); // Only re-run the effect if chars changes.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      
          <List 
            // chars={this.state.starwarsChars}
            chars={chars}
          />
    </div>
  );
}

//   componentDidMount() {
//     this.getCharacters('https://swapi.co/api/people/');
//   }

  // getCharacters = URL => {
  //   // feel free to research what this code is doing.
  //   // At a high level we are calling an API to fetch some starwars data from the open web.
  //   // We then take that data and resolve it our state.
  //   fetch(URL)
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(data => {
  //       this.setState({ starwarsChars: data.results });
  //     })
  //     .catch(err => {
  //       throw new Error(err);
  //     });
  // };

//   render() {
//     return (
//       <div className="App">
//         <h1 className="Header">React Wars</h1>
        
//             <List 
//               chars={this.state.starwarsChars}
//             />
        
//       </div>
//     );
//   }
// }

export default App;
