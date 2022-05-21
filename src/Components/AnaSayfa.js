import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Context";
import "../App.css";
import { Ogrenciler } from "../Helpers/Ogrenciler";
import { Vizeler } from "../Helpers/Vizeler";

export default function AnaSayfa() {
  const { setSayfaState ,eposta,setEposta,sifre,setSifre} = useContext(QuizContext);

  console.log(eposta);
  function kontrol() {
    Ogrenciler.forEach((ogrenci) => {
      if (ogrenci.eposta === eposta && ogrenci.sifre === sifre) {
        //console.log(Ogrenciler[0].dersler[0]) çalışıyor
        //console.log(Vizeler[0].matematik.vize[0].soru);
        console.log(eposta);
        setSayfaState("Sinavlarim");
      }
      console.log("giriş başarısız");
    });
  }

  return (
    <div className="Menu">
      <input onChange={(e) => setEposta(e.target.value)}></input>
      <input onChange={(e) => setSifre(e.target.value)}></input>
      <button onClick={kontrol}>Giriş Yap</button>
    </div>
  );
}
