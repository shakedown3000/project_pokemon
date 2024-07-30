import { useEffect, useState } from "react";
import "./TypeCategorization.css";
import { Result } from "../../Interfaces/IAllPokemons";

// Alle Pokemon von ein bestimmten Type:
// https://pokeapi.co/api/v2/type/${idParams} (zb: 2)
// Alle Typs: https://pokeapi.co/api/v2/type/

interface IType {
  count: number;
  next: string;
  previous: null;
  results: Result[];
}

const TypeCategorization = () => {
  // const pokemonContext = useContext(PokemonContext);
  const [typePokemon, setTypePokemon] = useState<IType | null>(null);

  useEffect(() => {
    // Limit auf 100 gesetzt
    fetch("https://pokeapi.co/api/v2/type/")
      .then((res) => res.json())
      .then((data) => setTypePokemon(data))
      .catch((err) => console.error("Error by fetching data", err));
  }, []);

  console.log({ typePokemon });

  return (
    <div>
      <h1>Types</h1>
    </div>
  );
};

export default TypeCategorization;
