import "./App.css";
import React, { useState } from "react";
import AnaSayfa from "./Components/AnaSayfa";
import Sinav from "./Components/Sinav";
import SonucEkrani from "./Components/SonucEkrani";
import { QuizContext } from "./Helpers/Context";
import Sinavlarim from "./Components/Sinavlarim";
import SinavOlustur from "./Components/SinavOlustur";
function App() {
  const [sayfaState, setSayfaState] = useState("AnaSayfa");
  const [sonuc,setSonuc]=useState(0)
  const [eposta, setEposta] = useState("");
  const [sifre, setSifre] = useState("");
  const [chosenDers, setChosenDers] = useState("");
  const [chosenTur, setChosenTur] = useState("");

  return (
    <div className="App">
      <QuizContext.Provider value={{sayfaState,setSayfaState,sonuc,setSonuc,eposta,setEposta,sifre,setSifre,chosenDers,setChosenDers,chosenTur,setChosenTur}}>
      {sayfaState === "AnaSayfa" && <AnaSayfa />}
      {sayfaState === "Sinav" && <Sinav />}
      {sayfaState === "SonucEkrani" && <SonucEkrani />}
      {sayfaState === "Sinavlarim" && <Sinavlarim />}
      {sayfaState === "SinavOlustur" && <SinavOlustur />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
