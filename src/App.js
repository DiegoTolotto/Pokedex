import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

    const [pokemon, setPokemon] = useState([]);
    const [pokemonData, setPokemonData] = ([])

    const getPokemon = async () => {
      const toArray = []

      try {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const res = await axios.get(url)

        toArray.push(res)
        setPokemonData(toArray)
      } catch (error) {
        console.log(error)
      }

    }

  return (
    <div className="App">
      <form onChange={handleSubmit}>
        <label>
          <input onChange={handleChange}></input>
        </label>
      </form>
    </div>
  );
}

export default App;
