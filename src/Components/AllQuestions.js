import { useContext, useState } from "react";
import { QuizContext } from "../Helpers/Context";
import "../Tasarim/allQuestions.css";
const AllQuestions = (props) => {
  let temp = "";

  if (props.cevap === props.ogrenciCevabı) {
    temp = "correct";
  } else if (props.cevap !== props.ogrenciCevabı) {
    temp = "wrong";
  }

  return (
    <div className="allX">
      <div>
        <strong className="allQ">Soru : {props.soru}</strong>
        <div className="allAnswers">
          <label id="A" className={props.ogrenciCevabı === "A" ? temp : null}>
            A : {props.cevapA}
          </label>
          <label id="B" className={props.ogrenciCevabı === "B" ? temp : null}>
            B : {props.cevapB}
          </label>
          <label id="C" className={props.ogrenciCevabı === "C" ? temp : null}>
            C : {props.cevapC}
          </label>
          <label id="D" className={props.ogrenciCevabı === "D" ? temp : null}>
            D : {props.cevapD}
          </label>
          <label id="E" className={props.ogrenciCevabı === "E" ? temp : null}>
            E : {props.cevapE}
          </label>
          {props.cevap === props.ogrenciCevabı ? null : (
            <label>Doğru cevap : {props.cevap}</label>
          )}
        </div>
      </div>
    </div>
  );
};
export default AllQuestions;
