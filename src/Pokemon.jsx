import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

export default function Pokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(null);

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
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
      setError(error);
    }
  };

  const API = "https://pokeapi.co/api/v2/pokemon?limit=200&offset=0";

  useEffect(() => {
    fetchPokemon();
  }, []);

  if(loading){
    return(
      <div className="flex justify-center items-center text-3xl bold">
        <h1>Loading...</h1>
      </div>
    )
  }

  if(error){
    return(
      <div className="flex justify-center items-center text-3xl bold">
        <h1>{error.message}</h1>
      </div>
    )
  }

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
