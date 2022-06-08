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
import AdminResults from "./Components/AdminResults";
import NavBar from "./Components/NavBar"
import AdminNavBar from "./Components/AdminNavBar"
import SinavOlusturFirst from "./Components/SinavOlusturFirst";

function App() {
  const [sayfaState, setSayfaState] = useState("AnaSayfa");
  const [eposta, setEposta] = useState("");
  const [sifre, setSifre] = useState("");
  const [chosenDers, setChosenDers] = useState("");
  const [chosenTur, setChosenTur] = useState("");
  const [tumCevaplar, setTumCevaplar] = useState([]);
  const [studentName, setStudentName] = useState("");
  const [studentSurname, setStudentSurname] = useState("");
  const [results, setResults] = useState([]);
  const [data, setData] = useState([]);
  const [tempAllQuestionsArray,setTempAllQuestionsArray]=useState([])
  const [soruData, setSoruData] = useState([]);
  const [dersAdi, setDersAdi] = useState("");
  const [sinavTuru, setsinavTuru] = useState("");
  const [tempSinavSaat, setTempSinavSaat] = useState([]);
  

  return (
    <div className="App">
      
      
      <QuizContext.Provider
        value={{
          tempSinavSaat, setTempSinavSaat,sinavTuru, setsinavTuru,sayfaState,setSayfaState,eposta,setEposta,sifre,setSifre,chosenDers,setChosenDers,chosenTur,setChosenTur,tumCevaplar,setTumCevaplar,studentName,setStudentName,studentSurname,setStudentSurname,results,setResults,data,setData,tempAllQuestionsArray,setTempAllQuestionsArray,soruData, setSoruData,dersAdi, setDersAdi
        }}
      >
        {(sayfaState==="AnaSayfa" || eposta==="admin")?null: <NavBar></NavBar>}
        {(eposta==="admin" && sayfaState!=="AnaSayfa")?<AdminNavBar></AdminNavBar>:null}
        {sayfaState === "AnaSayfa" && <AnaSayfa />}
        {sayfaState === "Sinav" && <Sinav />}
        {sayfaState === "SonucEkrani" && <SonucEkrani />}
        {sayfaState === "Sinavlarim" && <Sinavlarim />}
        {sayfaState === "SinavOlustur" && <SinavOlustur />}
        {sayfaState === "AdminAnaSayfa" && <AdminAnaSayfa />}
        {sayfaState === "Profil" && <Profil />}
        {sayfaState==="AdminResults" && <AdminResults/>}
        {sayfaState==="SinavOlusturFirst" && <SinavOlusturFirst/>}

      </QuizContext.Provider>
    </div>
  );
}

export default App;
