import { useContext, useState } from "react";
import "./AllPokemon.css";
import {
  ChosenTypeContext,
  PokemonContext,
} from "../../context/PokemonContext";
import SinglePokemon from "../SinglePokemon/SinglePokemon";

const AllPokemon = () => {
  // muss jedes mal neu erstellt werden, bei den komponenten, die ich brauche
  const pokemonContext = useContext(PokemonContext);
  const chosenContext = useContext(ChosenTypeContext);
  const [typeSelected, setTypeSelected] = useState(null);
  const selection = () => setTypeSelected(chosenContext?.chosenType?);

  if (pokemonContext?.allPokemon === null) {
    return <h1>Loading...</h1>;
  }
  return (
    <section className="allPokemon">
      <h1>Pokemons:</h1>
      <h2>You chose: {typeSelected}</h2>
      {/* Wir gehen in den Array rein */}
      {/* Wir bilden hier die Connection zu SinglePokemon => item */}
      {pokemonContext?.allPokemon.map((item, index) => (
        <SinglePokemon key={index} item={item} />
      ))}
    </section>
  );
};

export default AllPokemon;
