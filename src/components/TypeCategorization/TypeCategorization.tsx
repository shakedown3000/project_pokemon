import { useEffect, useState } from "react";
import "./TypeCategorization.css";
import { IallPokemons, Result } from "../../Interfaces/IAllPokemons";
import SingleType from "../SingleType/SingleType";

// interface ITypeCategorization {
//   count: number;
//   next: string;
//   previous: null;
//   results: Result[];
// }

const TypeCategorization = () => {
  const [typePokemon, setTypePokemon] = useState<Result[] | null>(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/type/")
      .then((res) => res.json())
      .then((data: IallPokemons) => setTypePokemon(data.results))
      .catch((err) => console.error("Error by fetching data", err));
  }, []);

  return (
    <div>
      <h2>Types</h2>
      {/* <Link to={`/detailpage/${singlePokemon?.name}`}>!!! */}
      {typePokemon?.map((typeObject, index) => (
        <SingleType key={index} item={typeObject}></SingleType>
      ))}
    </div>
  );
};

export default TypeCategorization;
