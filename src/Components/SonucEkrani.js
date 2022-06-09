import { QuizContext } from "../Helpers/Context";
import React, { useContext } from "react";
import { Ogrenciler } from "../Helpers/Ogrenciler";
import AdminResultsComp from "./AdminResultsComp";

export default function SonucEkrani() {
  const { studentName, tumCevaplar, data, studentSurname, soruData } =
    useContext(QuizContext);
  let tempArray = [];
  let tempCevapArray = [];
  let tempCompArray = [];
  function float2int(value) {
    return value | 0;
  }
  Ogrenciler.forEach((ogrObject) => {
    if (ogrObject.ad === studentName) {
      ogrObject.dersler.forEach((dersObject) => {
        tempArray.push({
          ad: ogrObject.ad,
          soyad: ogrObject.soyad,
          ders: dersObject,
          vizeNot: "Sınava Girilmedi",
          finalNot: "Sınava Girilmedi",
        });
      });
    }
  });
  data.forEach((dataObj) => {
    tempArray.forEach((taObj) => {
      if (
        dataObj.adi === studentName &&
        dataObj.soyadi === studentSurname &&
        taObj.ad === studentName &&
        taObj.soyad === studentSurname &&
        dataObj.ders === taObj.ders
      ) {
        if (dataObj.sinavTuru === "Vize") {
          taObj.vizeNot = float2int(dataObj.puan);
        } else {
          taObj.finalNot = float2int(dataObj.puan);
        }
      }
    });
  });
  tumCevaplar.forEach((element) => {
    if (element.adi === studentName) {
      tempCevapArray.push(element);
    }
  });
  tempCompArray = tempArray.map((e) => (
    <AdminResultsComp
      ders={e.ders}
      ad={e.ad}
      soyad={e.soyad}
      vizeNot={e.vizeNot}
      finalNot={e.finalNot}
    />
  ));
  return (
    <div>
      <table className="content-table">
        <thead>
          <tr>
            <th>İsim</th>
            <th>Ders</th>
            <th>Vize</th>
            <th>Final</th>
          </tr>
        </thead>
        <tbody>{tempCompArray}</tbody>
      </table>
      {soruData}
    </div>
  );
}
