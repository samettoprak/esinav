import { useContext } from "react";
import { QuizContext } from "../Helpers/Context";
import { Ogrenciler } from "../Helpers/Ogrenciler";
import AfterQuizComp from "./AfterQuizComp";

export default function AfterQuiz() {
  const { data, eposta,setSayfaState } = useContext(QuizContext);

  let name = "";
  let surname = "";
  let temp = [];
  let tempCompArray = [];

  const exit = ()=>{
      setSayfaState("Sinavlarim")

  }
  Ogrenciler.forEach((ogrenci) => {
    if (ogrenci.eposta === eposta) {
      name = ogrenci.ad;
      surname = ogrenci.soyad;
    }
  });

  data.forEach((obje) => {
    if (obje.adi === name && obje.soyadi === surname) {
      temp.push({
        ders: obje.ders,
        sinavTuru: obje.sinavTuru,
        puan: obje.puan,
      });
    }
  });
  tempCompArray= temp.map((i) => (
    <AfterQuizComp ders={i.ders} sinavTuru={i.sinavTuru} puan={i.puan}></AfterQuizComp>
  ));

  return (
    <div>
      <label>Sonuçlar</label>
      {tempCompArray}
      <button onClick={exit}>tıkla</button>
    </div>
  );
}
