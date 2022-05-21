import { Ogrenciler } from "../Helpers/Ogrenciler";

import React, { useContext, useState } from "react";
import { QuizContext } from "../Helpers/Context";
import { Vizeler } from "../Helpers/Vizeler";

export default function Sinavlarim() {
  const { eposta,chosenDers,setChosenDers, setSayfaState } = useContext(QuizContext);
  

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
  function deneme() {
    console.log(chosenDers);
  }
  function vizeyeGit(){
      setSayfaState("Sınav");

      


  }
  
function finaleGit(){

}
  return (
    <div>
      <div>
        <button onClick={deneme}>Vize</button>
        <button onClick={finaleGit}>Final</button>
      </div>
      <div>{takenLessons}</div>
    </div>
  );
}
