import { Ogrenciler } from "../Helpers/Ogrenciler";

import React, { useContext } from "react";
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
        <button onClick={vizeyeGit}>Vize</button>
        <button onClick={finaleGit}>Final</button>
      </div>
      <div className="sinavlarim">{takenLessons}</div>
      <button className="basla" onClick={sinavaBasla}>Sınava Başla</button>
    </div>
  );
}
