import { useContext, useState } from "react";
import "./SearchPokemon.css";
import {
  PokemonContext,
  UnfilteredPokemonContext,
} from "../../context/PokemonContext";

const SearchPokemon = () => {
  const [query, setQuery] = useState("");
  const pokemonContext = useContext(PokemonContext);
  const unfilteredContext = useContext(UnfilteredPokemonContext);

  // Ergebnis ist neues array
  // In React gibt es kein Submit Event
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    // Wenn query leer ist, dann nimm wieder alle Daten
    if (!query && unfilteredContext?.unfilteredPokemon) {
      pokemonContext?.setAllPokemon(unfilteredContext?.unfilteredPokemon);
      return;
    }
    if (pokemonContext?.allPokemon) {
      const filteredObjects = pokemonContext?.allPokemon.filter((objekt) =>
        objekt.name.startsWith(query.toLowerCase())
      );
      console.log(filteredObjects);
      if (filteredObjects) {
        // Hier update ich die Daten in der AppTSX für die Home Seite
        // führt dazu dass in SinglePokemon neuer fetch ausgeführt wird
        pokemonContext?.setAllPokemon(filteredObjects);
      }
    }
  };

  console.log("Suchanfrage:", query);

  return (
    <section className="searchPokemon">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Suche nach Pokémon..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Suchen</button>
      </form>
    </section>
  );
};

export default SearchPokemon;
