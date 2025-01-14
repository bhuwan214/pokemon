
export default function PokemonCard({pokemonData}) {
 
    
 
 return (
<li className="pokemon-card card-demo">
<figure>
<img src={pokemonData.sprites.other.dream_world.front_default} alt="" />
</figure>
<h1>{pokemonData.name}</h1>
<span>
    
</span>
</li>
  )
}
