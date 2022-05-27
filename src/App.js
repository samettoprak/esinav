import "./App.css";
import React, { useState } from "react";
import { QuizContext } from "./Helpers/Context";
import AnaSayfa from "./Components/AnaSayfa";
import Sinav from "./Components/Sinav";
import SonucEkrani from "./Components/SonucEkrani";
import Sinavlarim from "./Components/Sinavlarim";
import SinavOlustur from "./Components/SinavOlustur";
import AdminAnaSayfa from "./Components/AdminAnaSayfa";
import Profil from "./Components/Profil";
import AfterQuiz from "./Components/AfterQuiz";
import AdminResults from "./Components/AdminResults";

function App() {
  const [sayfaState, setSayfaState] = useState("AnaSayfa");
  const [sonuc, setSonuc] = useState(0);
  const [eposta, setEposta] = useState("");
  const [sifre, setSifre] = useState("");
  const [chosenDers, setChosenDers] = useState("");
  const [chosenTur, setChosenTur] = useState("");
  const [tumCevaplar, setTumCevaplar] = useState([]);
  const [studentName, setStudentName] = useState("");
  const [studentSurname, setStudentSurname] = useState("");
  const [results, setResults] = useState([]);
  const [data, setData] = useState([]);

  return (
    <div className="App">
      <QuizContext.Provider
        value={{
          sayfaState,
          setSayfaState,
          sonuc,
          setSonuc,
          eposta,
          setEposta,
          sifre,
          setSifre,
          chosenDers,
          setChosenDers,
          chosenTur,
          setChosenTur,
          tumCevaplar,
          setTumCevaplar,
          studentName,
          setStudentName,
          studentSurname,
          setStudentSurname,
          results,
          setResults,
          data,
          setData,
        }}
      >
        {sayfaState === "AnaSayfa" && <AnaSayfa />}
        {sayfaState === "Sinav" && <Sinav />}
        {sayfaState === "SonucEkrani" && <SonucEkrani />}
        {sayfaState === "Sinavlarim" && <Sinavlarim />}
        {sayfaState === "SinavOlustur" && <SinavOlustur />}
        {sayfaState === "AdminAnaSayfa" && <AdminAnaSayfa />}
        {sayfaState === "Profil" && <Profil />}
        {sayfaState==="AfterQuiz" && <AfterQuiz/>}
        {sayfaState==="AdminResults" && <AdminResults/>}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
