import { useContext, useEffect } from "react";
import {
  PokemonContext,
  UnfilteredPokemonContext,
} from "../context/PokemonContext";
import { IallPokemons } from "../Interfaces/IAllPokemons";

const FetchAllPokemon = () => {
  // Wichtig!
  const pokemonContext = useContext(PokemonContext);
  const unfilteredContext = useContext(UnfilteredPokemonContext);

  useEffect(() => {
    // Limit auf 100 gesetzt
    fetch("https://pokeapi.co/api/v2/pokemon?&offset=0")
      .then((res) => res.json())
      .then((data: IallPokemons) => {
        // Daten reinschreiben, Daten zu diesem Zeitpunkt noch identisch
        pokemonContext?.setAllPokemon(data.results);
        unfilteredContext?.setUnfilteredPokemon(data.results);
      })
      .catch((err) => console.error("Error by fetching data", err));
  }, []);
  return <></>;
  console.log(pokemonContext);
};

export default FetchAllPokemon;
