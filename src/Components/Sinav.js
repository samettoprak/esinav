import React, { useState, useContext, useEffect } from "react";
import { Vizeler } from "../Helpers/Vizeler";
import { QuizContext } from "../Helpers/Context";
import { Finaller } from "../Helpers/Finaller";
import "../Tasarim/sinav.css";
import { SinavSaatleri } from "../Helpers/SinavSaatleri";
export default function Sinav() {
  const [currentSoru, setCurrentSoru] = useState(0);
  const [secilenCevap, setSecilenCevap] = useState("");
  const [cevaplar, setCevaplar] = useState([]);
  const [temp, setTemp] = useState(0);
  const [boolean, setBoolean] = useState(true);
  let tempTarih = "";

  const {
    setSayfaState,
    chosenDers,
    chosenTur,
    setTumCevaplar,
    studentName,
    studentSurname,
    setData,
  } = useContext(QuizContext);

  SinavSaatleri.forEach((element) => {
    if (element.ders === chosenDers && element.sinavTuru === chosenTur) {
      tempTarih = element.bitisZamani;
    }
  });

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
    var date = new Date();
    var isoDateTime = new Date(
      date.getTime() - date.getTimezoneOffset() * 60000
    ).toISOString();

    if (temp === 0) {
      setCevaplar((oldarray) => [
        ...oldarray,
        {
          adi: studentName,
          soyadi: studentSurname,
          ders: chosenDers,
          sinavTuru: chosenTur,
          soru: currentSoru + 1,
          ogrenciCevabı: secilenCevap,
          dogruCevap: istenilenSinav[currentSoru].cevap,
        },
      ]);
      setTemp(1);
    } else if (cevaplar[currentSoru] === undefined) {
      setCevaplar((oldarray) => [
        ...oldarray,
        {
          adi: studentName,
          soyadi: studentSurname,
          ders: chosenDers,
          sinavTuru: chosenTur,
          soru: currentSoru + 1,
          ogrenciCevabı: secilenCevap,
          dogruCevap: istenilenSinav[currentSoru].cevap,
        },
      ]);
    }
    setCurrentSoru(currentSoru + 1);
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

    if (isoDateTime > tempTarih) {
      let tempInt = currentSoru;
      alert("Sinav Süresi Doldu");
      for (tempInt; tempInt < istenilenSinav.length; tempInt++) {
        setCevaplar((oldarray) => [
          ...oldarray,
          {
            adi: studentName,
            soyadi: studentSurname,
            ders: chosenDers,
            sinavTuru: chosenTur,
            soru: tempInt + 1,
            ogrenciCevabı: "",
            dogruCevap: istenilenSinav[currentSoru].cevap,
          },
        ]);
      }
      setBoolean(!boolean);
    }
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
      console.log("useeffect", b, a);
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
      setSayfaState("Profil");
    }
  }, [boolean]);

  const sonSoru = () => {
    setCevaplar((oldarray) => [
      ...oldarray,
      {
        adi: studentName,
        soyadi: studentSurname,
        ders: chosenDers,
        sinavTuru: chosenTur,
        soru: currentSoru + 1,
        ogrenciCevabı: secilenCevap,
        dogruCevap: istenilenSinav[currentSoru].cevap,
      },
    ]);
    setBoolean(!boolean);
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
      <div className="a">
        {currentSoru > 0 && (
          <button className="aButton" onClick={prevQuestion}>
            Önceki Soru
          </button>
        )}

        {currentSoru === 0 && (
          <button className="aButton" onClick={nextQuestion}>
            Sıradaki Soru
          </button>
        )}
        {currentSoru > 0 && currentSoru !== istenilenSinav.length - 1 && (
          <button className="aButton" onClick={nextQuestion}>
            Sıradaki Soru
          </button>
        )}

        {currentSoru === istenilenSinav.length - 1 && (
          <button className="aButton" onClick={sonSoru}>
            Sınavı Bitir
          </button>
        )}
      </div>
    </div>
  );
}
