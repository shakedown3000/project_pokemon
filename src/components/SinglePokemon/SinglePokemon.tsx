import { useContext, useEffect, useState } from "react";
import { Result } from "../../Interfaces/IAllPokemons";
import "./SinglePokemon.css";
import { IPokemonDetail } from "../../Interfaces/IPokemonDetail";
import { Link } from "react-router-dom";
import { PokemonContext } from "../../context/PokemonContext";

interface ISinglePokemonProps {
  item: Result;
}

const SinglePokemon: React.FC<ISinglePokemonProps> = (props) => {
  // console.log(props.item.url);
  const [singlePokemon, setSinglePokemon] = useState<IPokemonDetail | null>(
    null
  );

  const pokemonContext = useContext(PokemonContext);

  useEffect(() => {
    // Limit auf 100 gesetzt
    fetch(props.item.url)
      .then((res) => res.json())
      .then((data) => setSinglePokemon(data))
      .catch((err) => console.error("Error by fetching data", err));
    // Ich aktualisiere immer wenn sich allPokemon ändert den UseEffect
  }, [pokemonContext?.allPokemon]);

  return (
    <section className="singlePokemon">
      <Link to={`/detailpage/${singlePokemon?.name}`}>
        <p>{singlePokemon?.name}</p>
        <p>{singlePokemon?.id}</p>
        <img
          src={singlePokemon?.sprites.other?.dream_world.front_default}
          alt={singlePokemon?.name}
        />
      </Link>
    </section>
  );
};

export default SinglePokemon;
