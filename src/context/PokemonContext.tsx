import { createContext } from "react";
import { IallPokemons } from "../Interfaces/IAllPokemons";

interface IPokemonContext {
  // muss übereinstimmen mit useState in App.tsx
  allPokemon: IallPokemons | null;
  //   brauche ich immer, React.Dispatch nimmt etwas entgegen und führt änderung im zusammenhang mit useState durch,
  // React.SetStateAction<IallPokemons | null> beschreibt, was genau die Funktion akzeptieren kann, um den State zu ändern
  setAllPokemon: React.Dispatch<React.SetStateAction<IallPokemons | null>>;
}
// Erstellung des Context
export const PokemonContext = createContext<IPokemonContext | null>(null);
