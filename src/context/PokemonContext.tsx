import { createContext } from "react";
import { Result } from "../Interfaces/IAllPokemons";

// Zwischeninterface ist notwendig
interface IPokemonContext {
  // muss übereinstimmen mit useState in App.tsx
  allPokemon: Result[] | null;
  //   brauche ich immer, React.Dispatch nimmt etwas entgegen und führt änderung im zusammenhang mit useState durch,
  // React.SetStateAction<IallPokemons | null> beschreibt, was genau die Funktion akzeptieren kann, um den State zu ändern
  setAllPokemon: React.Dispatch<React.SetStateAction<Result[] | null>>;
}
// Erstellung des Context
export const PokemonContext = createContext<IPokemonContext | null>(null);

// In UlfilteredPokemonContext werden alle Pokemons gespeichert und niemals bearbeitet
interface IUnfilteredPokemonContext {
  unfilteredPokemon: Result[] | null;
  setUnfilteredPokemon: React.Dispatch<React.SetStateAction<Result[] | null>>;
}

export const UnfilteredPokemonContext =
  createContext<IUnfilteredPokemonContext | null>(null);
