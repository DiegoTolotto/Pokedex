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

        toArray.push(res.data)
        setPokemonData(toArray)
      } catch (error) {
        console.log(error)
      }

    }
    // Função que define os dados a APi;
    const handleSubmit = (e) => {
      setPokemon(e.target.value.toLowerCase())
    }
    // Função que envias os dados para a APi;
    const handleChange = (e) => {
      e.preventDefault();
      getPokemon();
    }

  return (
    <div className="App">
      <form onChange={handleSubmit}>
        <label>
          {/* Input que vai definir o pokemon que estamos procurando */}
          <input onChange={handleChange}></input>
        </label>
      </form>
    </div>
  );
}

export default App;
