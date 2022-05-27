import React, { useState, useContext, useEffect, useLayoutEffect } from "react";
import { Vizeler } from "../Helpers/Vizeler";
import { QuizContext } from "../Helpers/Context";
import { Finaller } from "../Helpers/Finaller";
import "../Tasarim/sinav.css";
import { Ogrenciler } from "../Helpers/Ogrenciler";
import AnaSayfa from "./AnaSayfa";
export default function Sinav() {
  const [currentSoru, setCurrentSoru] = useState(0);
  const [secilenCevap, setSecilenCevap] = useState("");
  const [cevaplar, setCevaplar] = useState([]);
  const [temp, setTemp] = useState(0);
  const [boolean, setBoolean] = useState(true);

  const {
    setSayfaState,
    chosenDers,
    chosenTur,
    eposta,
    tumCevaplar,
    setTumCevaplar,
    setStudentName,
    setStudentSurname,
    studentName,
    studentSurname,
    results,
    setResults,
    data,
    setData,
  } = useContext(QuizContext);

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
    if (temp === 0) {
      setCevaplar((oldarray) => [
        ...oldarray,
        {
          adi: studentName,
          ders: chosenDers,
          sinavTuru: chosenTur,
          soru: currentSoru + 1,
          ogrenciCevabı: secilenCevap,
          dogruCevap: istenilenSinav[currentSoru].cevap,
        },
      ]);
      setTemp(1);
    } else if (cevaplar[currentSoru] === undefined) {
      console.log(cevaplar[currentSoru]);

      console.log("buraya girdim");

      console.log(currentSoru + 1);
      // trueye alıp bıraktım
      setCevaplar((oldarray) => [
        ...oldarray,
        {
          adi: studentName,
          ders: chosenDers,
          sinavTuru: chosenTur,
          soru: currentSoru + 1,
          ogrenciCevabı: secilenCevap,
          dogruCevap: istenilenSinav[currentSoru].cevap,
        },
      ]);
    }
    setCurrentSoru(currentSoru + 1);
    // if (istenilenSinav[currentSoru+1].cevap === secilenCevap) {
    //  setSonuc(sonuc + 1);
    //}
    let a = 0;
    cevaplar.forEach((cevap) => {
      if (cevap.soru === currentSoru + 1) {
        cevaplar[a].adi = studentName;
        cevaplar[a].ders = chosenDers;
        cevaplar[a].sinavTuru = chosenTur;
        cevaplar[a].soru = currentSoru + 1;
        cevaplar[a].ogrenciCevabı = secilenCevap;
        cevaplar[a].dogruCevap = istenilenSinav[currentSoru].cevap;

        console.log("samet", currentSoru + 1);
      }
      a = a + 1;
    });
  };
  const prevQuestion = () => {
    setCurrentSoru(currentSoru - 1);
    console.log(currentSoru);
  };

  useEffect(() => {
    setTumCevaplar((oldarray2) => [...oldarray2, ...cevaplar]);
  }, [boolean]);

  useEffect(() => {
    if (cevaplar[0] !== undefined) {
      let a = 0;
      let b = cevaplar.length;
      console.log("useeffecy", b, a);
      cevaplar.forEach((obje) => {
        console.log(obje.ogrenciCevabı, obje.dogruCevap);

        if (obje.ogrenciCevabı === obje.dogruCevap) {
          a = a + 1;
        }
      });
      console.log(a);
      b = (a / b) * 100;
      setData((oldData) => [
        ...oldData,
        {
          adi: studentName,
          soyadi: studentSurname,
          ders: chosenDers,
          sinavTuru: chosenTur,
          puan: b,
        },
      ]);
      console.log(b);
      //setSayfaState("AfterQuiz")
    }
    
  }, [boolean]);

  const sonSoru = () => {
    setCevaplar((oldarray) => [
      ...oldarray,
      {
        adi: studentName,
        ders: chosenDers,
        sinavTuru: chosenTur,
        soru: currentSoru + 1,
        ogrenciCevabı: secilenCevap,
        dogruCevap: istenilenSinav[currentSoru].cevap,
      },
    ]);
    setBoolean(!boolean);

    //setSayfaState("AfterQuiz")
  };

  function abialoo() {
    console.log(cevaplar);
    console.log(cevaplar[currentSoru + 1]);
    console.log(currentSoru);
    console.log(tumCevaplar);
    //setSayfaState("AnaSayfa");
    
    console.log("data",data);
    console.log(cevaplar.length);
    setSayfaState("AfterQuiz");
  }
  function exit () {
    setSayfaState("AnaSayfa")
  }

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
      <button onClick={abialoo}>ab alo</button> <button onClick={exit}>Ana Sayfaya Git</button>
    </div>
  );
}
