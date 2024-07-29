import "./Detailpage.css";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { IPokemonDetail } from "../../Interfaces/IPokemonDetail";
import { PokemonContext } from "../../context/PokemonContext";

const Detailpage = () => {
  const { id } = useParams<{ id?: string }>();
  const [filterPokemon, setFilterPokemon] = useState<IPokemonDetail | null>(
    null
  );
  const pokemonContext = useContext(PokemonContext);

  useEffect(() => {
    if (pokemonContext && id) {
      const found = pokemonContext.find((item) => item._id === id);
      setFilterPokemon(found !== undefined ? found : null);
    }
  }, [id, pokemonContext]);

  return <section className="detailpage"></section>;
};

export default Detailpage;
