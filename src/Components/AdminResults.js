import { useContext } from "react";
import { QuizContext } from "../Helpers/Context";
import { Dersler } from "../Helpers/Dersler";
import { Ogrenciler } from "../Helpers/Ogrenciler";
import AdminResultsComp from "./AdminResultsComp";
import "../Tasarim/adminResults.css";

export default function AdminResults() {
  const { data, setSayfaState } = useContext(QuizContext);

  let temp = [];
  let tempCompArray = [];
  let tempData = [];

  let tempArray = [];
  Ogrenciler.forEach((ogrObject) => {
    Dersler.forEach((dersObject) => {
      tempArray.push({
        ad: ogrObject.ad,
        soyad: ogrObject.soyad,
        ders: dersObject.value,
        vizeNot: "Sınava Girilmedi",
        finalNot: "Sınava Girilmedi",
      });
    });
  });

  data.forEach((dataObject) => {
    tempArray.forEach((taObject) => {
      if (
        dataObject.adi === taObject.ad &&
        dataObject.soyadi === taObject.soyad &&
        dataObject.ders === taObject.ders
      ) {
        if (dataObject.sinavTuru === "Vize") {
          taObject.vizeNot = dataObject.puan;
        } else {
          taObject.finalNot = dataObject.puan;
        }
      }
    });
  });
  function tempfunc() {
    console.log(tempArray);
    console.log(data);
    setSayfaState("AnaSayfa");
  }
  tempCompArray = tempArray.map((e) => (
    <AdminResultsComp
      ders={e.ders}
      isim={e.ad + " " + e.soyad}
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

      <button onClick={tempfunc}>click me </button>
    </div>
  );
}
