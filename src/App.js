import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

    const [pokemon, setPokemon] = useState("");
    const [pokemonData, setPokemonData] = ([])
  
    const getPokemon = async () => {
      const toArray = [];

      try {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const res = await axios.get(url);

        toArray.push(res.data);
        setPokemonData(toArray);

        console.log(res)
      } catch (error) {
        console.log(error)
      }

    };
    console.log(pokemonData)
    // Função que define os dados a APi;
    const handleChange = (e) => {
      setPokemon(e.target.value.toLowerCase())
    };
    // Função que envias os dados para a APi;
    const handleSubmit = (e) => {
      e.preventDefault();
      getPokemon();
    };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          {/* Input que vai definir o pokemon que estamos procurando */}
          <input onChange={handleChange}></input>
        </label>
      </form>
      {/* {pokemonData.map((data) => {
        return(
          <div>
            <div>{data.name}</div>
          </div>
        )
      })} */}
    </div>
  );
}

export default App;
