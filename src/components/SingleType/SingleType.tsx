import { useContext, useEffect, useState } from "react";
import { Result } from "../../Interfaces/IAllPokemons";
import { IType } from "../../Interfaces/IType";
import SinglePokemon from "../SinglePokemon/SinglePokemon";
import { PokemonContext } from "../../context/PokemonContext";

interface ISingleTypeProps {
  item: Result;
}

const SingleType: React.FC<ISingleTypeProps> = (props) => {
  const [singleType, setSingleType] = useState<IType | null>(null);
  // const pokemonContext = useContext(PokemonContext);
  // if (pokemonContext?.allPokemon?.name === test) {

  // }

  useEffect(() => {
    fetch(`${props.item.url}`)
      .then((res) => res.json())
      .then((data: IType) => setSingleType(data))
      .catch((err) => console.error("Error by fetching data", err));
  }, []);

  const test = singleType?.pokemon.map((item, index) => {
    console.log(item.pokemon.name);
  });

  return (
    <>
      <h3>{props.item.name}</h3>
      <p>{props.item.url}</p>
    </>
  );
};

export default SingleType;
