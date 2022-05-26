import { Ogrenciler } from "../Helpers/Ogrenciler";

import React, { useContext, useEffect, useState } from "react";
import { QuizContext } from "../Helpers/Context";
import "../Tasarim/sinavlarim.css";

export default function Sinavlarim() {
  const {
    eposta,
    setChosenDers,
    setSayfaState,
    setChosenTur,
    chosenTur,
    chosenDers,
  } = useContext(QuizContext);
  const[renk,setRenk]=useState("")

  let takenLessons = [];
  Ogrenciler.forEach((ogrenci) => {
    if (ogrenci.eposta === eposta) {
      ogrenci.dersler.forEach((ders) => {
        takenLessons.push(
          <button onClick={() => setChosenDers(ders)} key={ders}>
            {ders}
          </button>
        );
      });
    }
  });
  //function deneme() {
  //  console.log(chosenDers);
  // let b="matematik"
  // console.log(Vizeler[0])
  //  Vizeler.forEach((element) => {});
  //}
  
  function vizeyeGit() {
    //setSayfaState("Sınav");
    setChosenTur("Vize");
    setRenk("amk")
    
  }

  function finaleGit() {
    setChosenTur("Final");
  }
  function sinavaBasla() {
    setSayfaState("Sinav");
    console.log(chosenDers);
    console.log(chosenTur);
  }
  return (
    <div className="sayfa">
      <div className="tur">
        <button className={chosenTur==="Vize"? "amk": ""} onClick={vizeyeGit}>Vize</button>
        <button className={chosenTur==="Final"? "amk": ""} onClick={finaleGit}>Final</button>
      </div>
      <div className="sinavlarim">{takenLessons}</div>
      <button className="basla" onClick={sinavaBasla}>Sınava Başla</button>
    </div>
  );
}
