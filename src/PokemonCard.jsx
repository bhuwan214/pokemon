/* eslint-disable react/prop-types */

export default function PokemonCard({pokemonData}) {
 
    
 
 return (
<li className="pokemon-card card-demo shadow-2xl">
<figure>
<img src={pokemonData.sprites.other.dream_world.front_default} alt={pokemonData.name} />
</figure>
<h1 className="pokemon-name">{pokemonData.name}</h1>
<div className="pokemon-info pokemon-highlight">
    <p>
        {pokemonData.types.map((curType)=>curType.type.name).join(", ")}
    </p>
</div>

<div className="grid-three-cols">
    <p className="pokemon-info">
        <span>
            Height:{pokemonData.height}
        </span>
    </p>
    <p className="pokemon-info">
        <span>
            Weight:{pokemonData.weight}
        </span>
    </p>
    <p className="pokemon-info">
        <span>
            Speed:{pokemonData.stats[5].base_stat}
        </span>
    </p>
</div>

<div className="grid-three-cols second">
    <div className="pokemon-info">
        <p>{pokemonData.base_experience}</p>
        <span>
            Experience:
        </span>
    </div>
    <div className="pokemon-info">
        <p>{pokemonData.stats[1].base_stat}</p>
        <span>
            Attack:
        </span>
    </div>
    <div className="pokemon-info">

        <p>{pokemonData.abilities.map((abilityInfo)=>abilityInfo.ability.name).slice(0,1).join(", ")}</p>
        <span>
            Abilities:
        </span>
    </div>
</div>
</li>
  )
}
