import axios from 'axios';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  
  const [pokemon, setPokemon] = useState("");
  const [pokemonData, setPokemonData] = useState([])
  const [pokemonType, setPokemonType] = useState("");
  
  const getPokemon = async () => {
      const toArray = [];
  
      try {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const res = await axios.get(url);
  
        toArray.push(res.data);
        setPokemonType(res.data.types[0].type.name);
        setPokemonData(toArray);
  
        console.log(res)
        console.log(pokemonType)
      } catch (error) {
        console.log(error)
      }
    };
    const handleChange = (e) => {
     setPokemon(e.target.value.toLowerCase())
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      getPokemon();
    }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          {/* Input que vai definir o pokemon que estamos procurando */}
          <input type='number' onChange={handleChange}  placeholder='Enter Pokemon' />
        </label>
      </form>
      {pokemonData.map((data) => {
        return(
          <div className='body'>
            <img 
              alt={data.name} 
              src={data.sprites.other.home["front_default"]}/>
              <div className='info'>
                <div className='nome'>{data.name}</div>
                <div>100</div>
                <div className='tipo'>{pokemonType}</div>
              </div>

          </div>
        )
      })}
    </div>
  );
}

export default App;
