import { useEffect, useState } from "react";
import { Result } from "../../Interfaces/IAllPokemons";
import "./SinglePokemon.css";
import { IPokemonDetail } from "../../Interfaces/IPokemonDetail";

interface ISinglePokemonProps {
  item: Result;
}

const SinglePokemon: React.FC<ISinglePokemonProps> = (props) => {
  // console.log(props.item.url);
  const [singlePokemon, setSinglePokemon] = useState<IPokemonDetail | null>(
    null
  );

  useEffect(() => {
    // Limit auf 100 gesetzt
    fetch(props.item.url)
      .then((res) => res.json())
      .then((data) => setSinglePokemon(data))
      .catch((err) => console.error("Error by fetching data", err));
  }, []);

  // console.log(singlePokemon);

  return (
    <section className="singlePokemon">
      <p>{singlePokemon?.name}</p>
      <p>{singlePokemon?.id}</p>
      <img
        src={singlePokemon?.sprites.other?.dream_world.front_default}
        alt={singlePokemon?.name}
      />
    </section>
  );
};

export default SinglePokemon;
