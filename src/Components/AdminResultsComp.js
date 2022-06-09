import { useContext, useEffect, useState } from "react";
import { QuizContext } from "../Helpers/Context";
import "../Tasarim/adminResults.css";
import { Vizeler } from "../Helpers/Vizeler";
import { Finaller } from "../Helpers/Finaller";
import AllQuestions from "./AllQuestions";

export default function AdminResultsComp(props) {
  const { tumCevaplar, setSoruData } = useContext(QuizContext);

  const [tempAnswersArray, setTempAnswersArray] = useState([]);
  const [tempQuestionArray, setTempQuestionArray] = useState([]);
  let temp = [];

  function openQueVize() {
    setTempQuestionArray([]);
    setTempAnswersArray([]);
    tumCevaplar.forEach((tumCevaplarObj) => {
      if (
        tumCevaplarObj.adi === props.ad &&
        tumCevaplarObj.soyadi === props.soyad &&
        tumCevaplarObj.ders === props.ders &&
        tumCevaplarObj.sinavTuru === "Vize"
      ) {
        tempAnswersArray.push(tumCevaplarObj);
      }
    });

    Vizeler.forEach((vizelerObj) => {
      if (vizelerObj.ders === props.ders) {
        tempQuestionArray.push(vizelerObj);
      }
    });
    for (let index = 0; index < tempAnswersArray.length; index++) {
      temp.push({
        soru: tempQuestionArray[index].soru,
        cevapA: tempQuestionArray[index].cevapA,
        cevapB: tempQuestionArray[index].cevapB,
        cevapC: tempQuestionArray[index].cevapC,
        cevapD: tempQuestionArray[index].cevapD,
        cevapE: tempQuestionArray[index].cevapE,
        cevap: tempAnswersArray[index].dogruCevap,
        ogrenciCevabı: tempAnswersArray[index].ogrenciCevabı,
      });
    }
    setSoruData(
      temp.map((i) => (
        <AllQuestions
          key={i.soru}
          soru={i.soru}
          cevapA={i.cevapA}
          cevapB={i.cevapB}
          cevapC={i.cevapC}
          cevapD={i.cevapD}
          cevapE={i.cevapE}
          cevap={i.cevap}
          ogrenciCevabı={i.ogrenciCevabı}
          nope={"nope"}
        ></AllQuestions>
      ))
    );
  }

  function openQueFinal() {
    setTempQuestionArray([]);
    setTempAnswersArray([]);
    tumCevaplar.forEach((tumCevaplarObj) => {
      if (
        tumCevaplarObj.adi === props.ad &&
        tumCevaplarObj.soyadi === props.soyad &&
        tumCevaplarObj.ders === props.ders &&
        tumCevaplarObj.sinavTuru === "Final"
      ) {
        tempAnswersArray.push(tumCevaplarObj);
      }
    });

    Finaller.forEach((finallerObj) => {
      if (finallerObj.ders === props.ders) {
        tempQuestionArray.push(finallerObj);
      }
    });
    for (let index = 0; index < tempAnswersArray.length; index++) {
      temp.push({
        soru: tempQuestionArray[index].soru,
        cevapA: tempQuestionArray[index].cevapA,
        cevapB: tempQuestionArray[index].cevapB,
        cevapC: tempQuestionArray[index].cevapC,
        cevapD: tempQuestionArray[index].cevapD,
        cevapE: tempQuestionArray[index].cevapE,
        cevap: tempAnswersArray[index].dogruCevap,
        ogrenciCevabı: tempAnswersArray[index].ogrenciCevabı,
      });
    }

    setSoruData(
      temp.map((i) => (
        <AllQuestions
          key={i.soru}
          soru={i.soru}
          cevapA={i.cevapA}
          cevapB={i.cevapB}
          cevapC={i.cevapC}
          cevapD={i.cevapD}
          cevapE={i.cevapE}
          cevap={i.cevap}
          ogrenciCevabı={i.ogrenciCevabı}
          nope={"nope"}
        ></AllQuestions>
      ))
    );
  }

  return (
    <tr className="arComp">
      <td>{props.ad + " " + props.soyad}</td>
      <td>{props.ders}</td>
      <td>
        <div className="sinavButton">
          {props.vizeNot}
          {props.vizeNot === "Sınava Girilmedi" ? null : (
            <button onClick={openQueVize}>Sınavı Görüntüle</button>
          )}
        </div>
      </td>
      <td>
        <div className="sinavButton">
          {props.finalNot}
          {props.finalNot === "Sınava Girilmedi" ? null : (
            <button onClick={openQueFinal}>Sınavı Görüntüle</button>
          )}
        </div>
      </td>
    </tr>
  );
}
