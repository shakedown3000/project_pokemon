import AllPokemon from "../../components/AllPokemon/AllPokemon";
import SearchPokemon from "../../components/SearchPokemon/SearchPokemon";
import "./Home.css";

const Home = () => {
  return (
    <>
      <SearchPokemon />
      <AllPokemon />
      <section className="home"></section>
    </>
  );
};

export default Home;
