import "./Detailpage.css";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { IPokemonDetail } from "../../Interfaces/IPokemonDetail";
import SinglePokemon from "../../components/SinglePokemon/SinglePokemon";

const Detailpage = () => {
  // Object Deconstruction (auspacken)
  const { id } = useParams<{ id?: string }>();
  const [filterPokemon, setFilterPokemon] = useState<IPokemonDetail | null>(
    null
  );
  console.log(id);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => setFilterPokemon(data))
      .catch((err) => console.error("Error by fetching data", err));
  }, []);

  console.log(filterPokemon);
  return (
    <section className="detailpage">
      <h1>{filterPokemon?.name}</h1>
    </section>
  );
};

export default Detailpage;
