import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Detailpage from "./pages/Detailpage/Detailpage";
import { useState } from "react";
import { IallPokemons } from "./Interfaces/IAllPokemons";
import { PokemonContext } from "./context/PokemonContext";
import Header from "./components/Header/Header";

function App() {
  const [allPokemon, setAllPokemon] = useState<IallPokemons | null>(null);

  return (
    <>
      {/* Verbindung zwischen UseState und Context, wir geben also beides mit, Provide = Mittelsmann, gibt state an jeder "Tür" ab, reicht es durch, wir wrappen den context daher auf der obersten Ebene um alles rum */}
      <PokemonContext.Provider value={{ allPokemon, setAllPokemon }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detailpage/:id" element={<Detailpage />} />
          </Routes>
        </BrowserRouter>
      </PokemonContext.Provider>
    </>
  );
}

export default App;
