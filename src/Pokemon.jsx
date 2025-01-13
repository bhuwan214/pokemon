import { useEffect, useState } from "react"


 export default function Pokemon() {
   const [pokemon,setPokemon]=useState([]);

  const API = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"

    useEffect(()=>{
        fetchPokemon();
    },[])
  
 const  fetchPokemon=async()=>{
        try {
            const res= await fetch(API)
            const data = await res.json();

        const detailedPokemonData =data.results.map(async(curPokemon)=>{
            const res =await fetch(curPokemon.url)
            const data = await res.json()
            return data ;
        })     

        const detailedResponses =await Promise.all(detailedPokemonData)
        console.log(detailedResponses)
        setPokemon(detailedResponses)

           } catch (error) {
             console.log(error.message)
           }
    }
    
    return (
      <div className="container">
  
  <h1 className="text-3xl font-bold text-center p-4 text-slate-900">
      Lets catch Pokemon
    </h1>
  
  

  
      </div>
   
    )
}
