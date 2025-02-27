import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Detailpage from "./pages/Detailpage/Detailpage";
import { useState } from "react";
import {
  ChosenTypeContext,
  PokemonContext,
  UnfilteredPokemonContext,
} from "./context/PokemonContext";
import Header from "./components/Header/Header";
import { Result } from "./Interfaces/IAllPokemons";

function App() {
  // Wird aus dem Fetchallpokemon hier gespeichert
  const [allPokemon, setAllPokemon] = useState<Result[] | null>(null);
  const [unfilteredPokemon, setUnfilteredPokemon] = useState<Result[] | null>(
    null
  );
  const [chosenType, setChosenType] = useState<string | null>(null);

  return (
    <>
      {/* Verbindung zwischen UseState und Context, wir geben also beides mit, Provide = Mittelsmann, gibt state an jeder "Tür" ab, reicht es durch, wir wrappen den context daher auf der obersten Ebene um alles rum */}
      <PokemonContext.Provider value={{ allPokemon, setAllPokemon }}>
        <ChosenTypeContext.Provider value={{ chosenType, setChosenType }}>
          <UnfilteredPokemonContext.Provider
            value={{ unfilteredPokemon, setUnfilteredPokemon }}
          >
            <BrowserRouter>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detailpage/:id" element={<Detailpage />} />
              </Routes>
            </BrowserRouter>
          </UnfilteredPokemonContext.Provider>
        </ChosenTypeContext.Provider>
      </PokemonContext.Provider>
    </>
  );
}

export default App;
