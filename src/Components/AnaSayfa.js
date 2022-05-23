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
          setSayfaState("SinavOlustur");
          console.log("qswdasda");
        } else {
          console.log(eposta);
          setSayfaState("Sinavlarim");
        }
      }
      
    });
    alert("Hatal şifre-eposta")
  }

  return (
    <div className="Menu">
      <img className="Logo" src={require("../Helpers/tulogo.png")}></img>
      <label>Trakya Üniversitesi Sınav Uygulaması</label>
      <label>e-posta giriniz</label>
      <input onChange={(e) => setEposta(e.target.value)}></input>
      <label>Şifre giriniz</label>
      <input onChange={(e) => setSifre(e.target.value)} type="password"></input>
      <button onClick={kontrol}>Giriş Yap</button>
    </div>
  );
}
