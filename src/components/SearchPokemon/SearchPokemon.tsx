import React, { useContext, useState } from "react";
import "./SearchPokemon.css";
import {
  PokemonContext,
  UnfilteredPokemonContext,
} from "../../context/PokemonContext";
import { Result } from "../../Interfaces/IAllPokemons";

const SearchPokemon: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const pokemonContext = useContext(PokemonContext);
  const unfilteredContext = useContext(UnfilteredPokemonContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!query) {
      // Wenn die Suchanfrage leer ist, setze auf die ungefilterte Liste zurück
      if (unfilteredContext?.unfilteredPokemon) {
        pokemonContext?.setAllPokemon(unfilteredContext.unfilteredPokemon);
      }
    } else {
      // Filterung der Pokémon basierend auf der Suchanfrage
      const filteredObjects = unfilteredContext?.unfilteredPokemon?.filter(
        (objekt: Result) =>
          objekt.name.toLowerCase().includes(query.toLowerCase()) // Suche nach Teilstring
      );
      console.log("Gefilterte Objekte:", filteredObjects);
      pokemonContext?.setAllPokemon(filteredObjects || []);
    }
  };

  return (
    <section className="searchPokemon">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Suche nach Pokémon..."
          value={query}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setQuery(e.target.value)
          }
        />
        <button type="submit">Suchen</button>
      </form>
    </section>
  );
};

export default SearchPokemon;
