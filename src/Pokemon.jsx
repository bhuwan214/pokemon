import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

export default function Pokemon() {
  const [pokemon, setPokemon] = useState([]);

  const API = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();

      const detailedPokemonData = data.results.map(async (curPokemon) => {
        const res = await fetch(curPokemon.url);
        const data = await res.json();
        return data;
      });

      const detailedResponses = await Promise.all(detailedPokemonData);
      console.log(detailedResponses);
      setPokemon(detailedResponses);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container">
      <header>
        <h1 className="text-3xl font-bold text-center p-8 text-slate-900">
          Lets catch Pokemon
        </h1>
      </header>

      <div className="grid-container">
        <ul className="cards">
            {pokemon.map((curPokemon) => {
return <PokemonCard key={curPokemon.id} pokemonData={curPokemon}/>
            })}
        </ul>
      </div>
    </div>
  );
}
