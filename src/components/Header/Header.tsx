import FetchAllPokemon from "../FetchAllPokemon";
import "./Header.css";

const Header = () => {
  return (
    <section className="header">
      {/* Läd Daten, nur einmal wenn Header geladen wird, beim ersten mal Rendern, nicht nach jedem mal */}
      <FetchAllPokemon />
      <img id="logo" src="/public/Pokemon_Logo.png"></img>
    </section>
  );
};

export default Header;
