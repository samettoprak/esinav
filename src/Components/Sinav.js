import React, { useState, useContext } from "react";
import { Vizeler } from "../Helpers/Vizeler";
import { QuizContext } from "../Helpers/Context";
import { Finaller } from "../Helpers/Finaller";
import "../Tasarim/sinav.css";
export default function Sinav() {
  const [currentSoru, setCurrentSoru] = useState(0);
  const [secilenCevap, setSecilenCevap] = useState("");
  const { sonuc, setSonuc, setSayfaState, chosenDers, chosenTur } =
    useContext(QuizContext);

  let istenilenSinav = [];

  if (chosenTur === "Vize") {
    for (let i = 0; i < Vizeler.length; i++) {
      if (Vizeler[i].ders === chosenDers) {
        istenilenSinav.push(Vizeler[i]);
      }
    }
  } else if (chosenTur === "Final") {
    for (let i = 0; i < Finaller.length; i++) {
      if (Finaller[i].ders === chosenDers) {
        istenilenSinav.push(Finaller[i]);
      }
    }
  }

  const nextQuestion = () => {
    if (istenilenSinav[currentSoru].cevap === secilenCevap) {
      setSonuc(sonuc + 1);
    }
    setCurrentSoru(currentSoru + 1);
  };
  const prevQuestion = () => {
    
    setCurrentSoru(currentSoru - 1);
  };

  const sonSoru = () => {
    if (Vizeler[currentSoru].cevap === secilenCevap) {
      setSonuc(sonuc + 1);
    }
    setSayfaState("SonucEkrani");
  };

  return (
    <div className="sinav">
      <h1 className="soru">{istenilenSinav[currentSoru].soru}</h1>
      <div className="cevap">
        <button onClick={() => setSecilenCevap("A")}>
          {istenilenSinav[currentSoru].cevapA}
        </button>
        <button onClick={() => setSecilenCevap("B")}>
          {istenilenSinav[currentSoru].cevapB}
        </button>
        <button onClick={() => setSecilenCevap("C")}>
          {istenilenSinav[currentSoru].cevapC}
        </button>
        <button onClick={() => setSecilenCevap("D")}>
          {istenilenSinav[currentSoru].cevapD}
        </button>
        <button onClick={() => setSecilenCevap("E")}>
          {istenilenSinav[currentSoru].cevapE}
        </button>
      </div>
      {currentSoru === 0 && (
        <button onClick={nextQuestion}>Sıradaki Soru</button>
      )}
      {currentSoru > 0 && currentSoru !== istenilenSinav.length - 1 && (
        <button onClick={nextQuestion}>Sıradaki Soru</button>
      )}
      {currentSoru > 0 && <button onClick={prevQuestion}>önceki Soru</button>}

      {currentSoru === istenilenSinav.length - 1 && (
        <button onClick={sonSoru}>Sınavı Bitir</button>
      )}
    </div>
  );
}
