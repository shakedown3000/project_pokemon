import { Link } from "react-router-dom";
import FetchAllPokemon from "../FetchAllPokemon";
import "./Header.css";
import { useContext } from "react";
import {
  PokemonContext,
  UnfilteredPokemonContext,
} from "../../context/PokemonContext";

const Header = () => {
  const pokemonContext = useContext(PokemonContext);
  const unfilteredContext = useContext(UnfilteredPokemonContext);

  const rerenderState = () => {
    if (pokemonContext && unfilteredContext?.unfilteredPokemon) {
      pokemonContext.setAllPokemon(unfilteredContext.unfilteredPokemon);
    }
  };

  return (
    <section className="header">
      {/* Läd Daten, nur einmal wenn Header geladen wird, beim ersten mal Rendern, nicht nach jedem mal */}{" "}
      <FetchAllPokemon />
      <Link to="/" onClick={rerenderState}>
        <img id="logo" src="/Pokemon_Logo.png"></img>
      </Link>
    </section>
  );
};

export default Header;
