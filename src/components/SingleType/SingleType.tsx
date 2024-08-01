import { useContext, useEffect, useState } from "react";
import { Result } from "../../Interfaces/IAllPokemons";
import { IType } from "../../Interfaces/IType";
import {
  ChosenTypeContext,
  PokemonContext,
} from "../../context/PokemonContext";

interface ISingleTypeProps {
  item: Result;
}

const SingleType: React.FC<ISingleTypeProps> = (props) => {
  const [singleType, setSingleType] = useState<IType | null>(null);
  const pokemonContext = useContext(PokemonContext);
  const [typeClicked, setTypeClicked] = useState<IType | null>(null);
  const [valueChosen, setValueChosen] = useState<string | null>(null);
  const chosenContext = useContext(ChosenTypeContext);

  // Buttons
  useEffect(() => {
    fetch(props.item.url)
      .then((res) => res.json())
      .then((data: IType) => setSingleType(data))
      .catch((err) => console.error("Error by fetching data", err));
  }, []);

  useEffect(() => {
    chosenContext?.setChosenType(valueChosen);
  }, [chosenContext?.chosenType]);

  function filterType(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    event.preventDefault();
    console.log("Button clicked");
    const value = event.currentTarget.value;
    if (pokemonContext) {
      fetch(value)
        .then((res) => res.json())
        .then((data: IType) => {
          const typeArray = data.pokemon.map((element) => element.pokemon);
          // Wir wollen die Daten in Result Array umwandeln, um PokeContext upzudaten, wir creates neues array
          // Pokemon ist ein objekt array mit pokemon & Slot, und ich will da noch mal rein in pokemon (=> name und url. ist struktur von result)
          pokemonContext.setAllPokemon(typeArray);
          chosenContext?.setChosenType(data.name);
        })
        .catch((err) => console.error("Error by fetching data", err));
    }
  }

  return (
    <>
      <button value={props.item.url} onClick={filterType}>
        {props.item.name}
      </button>
    </>
  );
};

export default SingleType;
