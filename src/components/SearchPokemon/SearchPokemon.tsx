import { useContext, useEffect, useState } from "react";
import "./SearchPokemon.css";
import { PokemonContext } from "../../context/PokemonContext";
import { IPokemonDetail } from "../../Interfaces/IPokemonDetail";

const SearchPokemon = () => {
  const [query, setQuery] = useState("");
  const pokemonContext = useContext(PokemonContext);

  // Ergebnis ist neues array
  const handleSubmit = (event: SubmitEvent) => {
    event?.preventDefault();
    const filteredObjects = pokemonContext?.allPokemon?.results.filter(
      (objekt) => objekt.name.startsWith(query)
    );
    console.log(filteredObjects);
  };

  // console.log(filterResults);

  //   if (pokemonContext?.allPokemon?.results === null) {
  //     return <h1>Loading...</h1>;
  //   }

  //   const handleSubmit = (e) => {
  //     e.preventDefault();

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
