import React, { useState, useContext } from "react";
import { Vizeler } from "../Helpers/Vizeler";
import { QuizContext } from "../Helpers/Context";


export default function Sinav(props) {
  const [currentSoru, setCurrentSoru] = useState(0);
  const [secilenCevap, setSecilenCevap] = useState("");
  const { sonuc, setSonuc, setSayfaState } =
    useContext(QuizContext);
  const nextQuestion = () => {
    if (Vizeler[currentSoru].cevap === secilenCevap) {
      setSonuc(sonuc + 1);
    }
    setCurrentSoru(currentSoru + 1);
    
  };

  const sonSoru = () => {
    if (Vizeler[currentSoru].cevap === secilenCevap) {
        setSonuc(sonuc + 1);
      }
    setSayfaState("SonucEkrani");
  };

  return (
    <div className="Quiz">
      <h1>{Vizeler[0].matematik.vize[currentSoru].soru}</h1>
      <div className="cevaplar">
        <button onClick={() => setSecilenCevap("A")}>
          {Vizeler[0].matematik.vize[currentSoru].cevapA}
        </button>
        <button onClick={() => setSecilenCevap("B")}>
          {Vizeler[0].matematik.vize[currentSoru].cevapB}
        </button>
        <button onClick={() => setSecilenCevap("C")}>
          {Vizeler[0].matematik.vize[currentSoru].cevapC}
        </button>
        <button onClick={() => setSecilenCevap("D")}>
          {Vizeler[0].matematik.vize[currentSoru].cevapD}
        </button>
        <button onClick={() => setSecilenCevap("E")}>
          {Vizeler[0].matematik.vize[currentSoru].cevapE}
        </button>
      </div>
      {currentSoru === Vizeler[0].matematik.vize[currentSoru].length - 1 ? (
        <button onClick={sonSoru}>Sınavı Bitir</button>
      ) : (
        <button onClick={nextQuestion}>Sıradaki Soru</button>
      )}
    </div>
  );
}
