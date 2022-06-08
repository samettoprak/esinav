import { Ogrenciler } from "../Helpers/Ogrenciler";
import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Context";
import "../Tasarim/sinavlarim.css";
import { SinavSaatleri } from "../Helpers/SinavSaatleri";


export default function Sinavlarim() {
  const {
    eposta,
    setChosenDers,
    setSayfaState,
    setChosenTur,
    chosenTur,
    chosenDers,
    studentName,
    studentSurname,
    tumCevaplar,
  } = useContext(QuizContext);

  let temp = false;
  let temp2 = false;

  var date = new Date();
  var isoDateTime = new Date(
    date.getTime() - date.getTimezoneOffset() * 60000
  ).toISOString();

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

  function vizeyeGit() {
    console.log(SinavSaatleri)
    setChosenTur("Vize");
    console.log(tumCevaplar);
  }

  function finaleGit() {
    setChosenTur("Final");
  }
  function sinavaBasla() {
    tumCevaplar.forEach((tcObj) => {
      if (
        tcObj.adi === studentName &&
        tcObj.soyadi === studentSurname &&
        tcObj.ders === chosenDers &&
        tcObj.sinavTuru === chosenTur
      ) {
        temp2 = true;
      }
    });

    if (!temp2) {
      console.log(SinavSaatleri);
      SinavSaatleri.forEach((element) => {
        if (
          element.ders === chosenDers &&
          element.sinavTuru === chosenTur &&
          element.baslamaZamani < isoDateTime &&
          isoDateTime < element.bitisZamani
        ) {
          console.log(element.baslamaZamani, isoDateTime, element.bitisZamani);
          temp = true;
          console.log(temp);
        }
      });
      if (temp) {
        setSayfaState("Sinav");
        temp = false;
      } else {
        alert("Bu sınav şuan açık değil");
        console.log(isoDateTime);
      }
    } else {
      alert("Kullanıcı bu sınava önceden girmiş.");
      temp2=false
    }
  }
  return (
    <div className="sayfa">
      <div className="tur">
        <button
          className={chosenTur === "Vize" ? "fokus" : ""}
          onClick={vizeyeGit}
        >
          Vize
        </button>
        <button
          className={chosenTur === "Final" ? "fokus" : ""}
          onClick={finaleGit}
        >
          Final
        </button>
      </div>
      <div className="sinavlarim">{takenLessons}</div>
      <button className="basla" onClick={sinavaBasla}>
        Sınava Başla
      </button>
    </div>
  );
}
