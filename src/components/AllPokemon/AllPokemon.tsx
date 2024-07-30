import { useContext } from "react";
import "./AllPokemon.css";
import { PokemonContext } from "../../context/PokemonContext";
import SinglePokemon from "../SinglePokemon/SinglePokemon";

const AllPokemon = () => {
  // muss jedes mal neu erstellt werden, bei den komponenten, die ich brauche
  const pokemonContext = useContext(PokemonContext);
  // Pokemon wurden geladen
  // console.log(pokemonContext);

  if (pokemonContext?.allPokemon === null) {
    return <h1>Loading...</h1>;
  }
  return (
    <section className="allPokemon">
      <h1>All Pokemons:</h1>
      {/* Wir gehen in den Array rein */}
      {/* Wir bilden hier die Connection zu SinglePokemon => item */}
      {pokemonContext?.allPokemon.results.map((item, index) => (
        <SinglePokemon key={index} item={item} />
      ))}
    </section>
  );
};

export default AllPokemon;
