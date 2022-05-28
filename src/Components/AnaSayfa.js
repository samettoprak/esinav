import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Context";
import "../App.css";
import { Ogrenciler } from "../Helpers/Ogrenciler";
//import { Vizeler } from "../Helpers/Vizeler";

export default function AnaSayfa() {
  const { setSayfaState, eposta, setEposta, sifre, setSifre } =
    useContext(QuizContext);

  console.log(eposta);
  function kontrol() {
    Ogrenciler.forEach((ogrenci) => {
      if (ogrenci.eposta === eposta && ogrenci.sifre === sifre) {
        if (ogrenci.sifre === "admin") {
          setSayfaState("AdminAnaSayfa");
        } else {
          setSayfaState("Profil");
        }
      }
    });
  }

  return (
    <div className="Menu">
      <img className="Logo" src={require("../Helpers/tulogo.png")}></img>
      <label>Trakya Üniversitesi Sınav Uygulaması</label>
      <div className="menudiv">
      <input placeholder="e-posta"onChange={(e) => setEposta(e.target.value)}></input>
      <input placeholder="şifre" onChange={(e) => setSifre(e.target.value)} type="password"></input>
      </div>
      <button onClick={kontrol}>Giriş Yap</button>
    </div>
  );
}
