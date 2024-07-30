import "./Detailpage.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IPokemonDetail } from "../../Interfaces/IPokemonDetail";

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
      <img src={filterPokemon?.sprites.other?.dream_world.front_default}></img>
      <h1>{filterPokemon?.name}</h1>
      <p>{filterPokemon?.id}</p>

      <div>
        <h2>Types</h2>
        {/* Überprüft, ob filterPokemon und dessen types vorhanden sind */}
        {filterPokemon?.types.length ? (
          <div className="types-container">
            {/* Mappt die Typen auf separate divs */}
            {filterPokemon.types.map((typeInfo, index) => (
              <div key={index} className="type-item">
                {typeInfo.type.name}
              </div>
            ))}
          </div>
        ) : (
          <p>No types available</p> // Falls keine Typen vorhanden sind
        )}
      </div>
    </section>
  );
};

export default Detailpage;
