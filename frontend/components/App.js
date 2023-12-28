import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  const [ table, setTable ] = useState([]);

  // ❗ Create effects to fetch the data and put it in state
  useEffect(() => {
    axios.all([ axios.get(urlPlanets), axios.get(urlPeople) ])
    .then(axios.spread((planets, people) => {
      // console.log(planets.data);
      // console.log(people.data);
      const newArray = [];
      for (let i = 0; i < people.data.length; i++) {
        for (let j = 0; j < planets.data.length; j++) {
          if (people.data[i].homeworld === planets.data[j].id) {
            people.data[i].homeworld = planets.data[j];
            newArray.push(people.data[i]);
          };
        };
      };
      // console.log(newArray);
      setTable(newArray);
    }))
    .catch((error) => {
      console.log(error.message);
    });
  }, []);

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
      {table.map((items, index) => (
          <Character 
            key={index}
            character={items}
          />
      ))}
    </div>
  );
};

export default App;

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
