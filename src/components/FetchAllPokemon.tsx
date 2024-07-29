import { useContext, useEffect } from "react";
import { PokemonContext } from "../context/PokemonContext";

const FetchAllPokemon = () => {
  // Wichtig!
  const pokemonContext = useContext(PokemonContext);
  //   console.log(pokemonContext);

  useEffect(() => {
    // Limit auf 100 gesetzt
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
      .then((res) => res.json())
      .then((data) => pokemonContext?.setAllPokemon(data))
      .catch((err) => console.error("Error by fetching data", err));
  }, []);
  return <></>;
  console.log(pokemonContext);
};

export default FetchAllPokemon;
