import AllPokemon from "../../components/AllPokemon/AllPokemon";
import SearchPokemon from "../../components/SearchPokemon/SearchPokemon";
import TypeCategorization from "../../components/TypeCategorization/TypeCategorization";
import "./Home.css";

const Home = () => {
  return (
    <>
      <SearchPokemon />
      <TypeCategorization />
      <AllPokemon />
      <section className="home"></section>
    </>
  );
};

export default Home;
