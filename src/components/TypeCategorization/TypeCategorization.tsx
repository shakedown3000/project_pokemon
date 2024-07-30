import { useEffect, useState } from "react";
import "./TypeCategorization.css";
import { Result } from "../../Interfaces/IAllPokemons";
import { Link } from "react-router-dom";
import SingleType from "../SingleType/SingleType";

// Alle Pokemon von ein bestimmten Type:
// https://pokeapi.co/api/v2/type/${idParams} (zb: 2)
// Alle Typs: https://pokeapi.co/api/v2/type/

interface ITypeCategorization {
  count: number;
  next: string;
  previous: null;
  results: Result[];
}

const TypeCategorization = () => {
  // const pokemonContext = useContext(PokemonContext);
  // muss gleich sein mit data.results (also Results[])
  const [typePokemon, setTypePokemon] = useState<Result[] | null>(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/type/")
      .then((res) => res.json())
      .then((data: ITypeCategorization) => setTypePokemon(data.results))
      .catch((err) => console.error("Error by fetching data", err));
  }, []);

  // Alle Pokemon von ein bestimmten Type:
  // https://pokeapi.co/api/v2/type/${idParams} (zb: 2)

  return (
    <div>
      <h2>Types</h2>
      {/* <Link to={`/detailpage/${singlePokemon?.name}`}>!!! */}
      {typePokemon?.map((typeObject, index) => (
        <SingleType key={index} item={typeObject}>
          <p>{typeObject.name}</p>
          <p></p>
        </SingleType>
      ))}
    </div>
  );
};

export default TypeCategorization;
