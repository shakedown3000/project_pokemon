import { Link } from "react-router-dom";
import FetchAllPokemon from "../FetchAllPokemon";
import "./Header.css";

const Header = () => {
  return (
    <section className="header">
      {/* Läd Daten, nur einmal wenn Header geladen wird, beim ersten mal Rendern, nicht nach jedem mal */}
      <FetchAllPokemon />
      <Link to="/">
        <img id="logo" src="/Pokemon_Logo.png"></img>
      </Link>
    </section>
  );
};

export default Header;
