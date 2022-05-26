import { useContext, useEffect } from "react";
import { QuizContext } from "../Helpers/Context";
import { Ogrenciler } from "../Helpers/Ogrenciler";

export default function Profil() {
  const { studentName, studentSurname,setSayfaState,setStudentName,setStudentSurname,eposta } = useContext(QuizContext);

  useEffect(()=>{Ogrenciler.forEach((ogrenci) => {
    if (ogrenci.eposta === eposta) {
      setStudentName(ogrenci.ad);
      setStudentSurname(ogrenci.soyad);
    }
  });},[eposta])
  


  const sinavlarPage=()=>{
      setSayfaState("Sinavlarim")

  }
  const resultPage = ()=>{
      setSayfaState("Results")
  }

  return (
    <div>
      <label>{studentName} {studentSurname}
  
      </label>
      <button onClick={sinavlarPage}>Sınavlar</button>
      <button onClick={resultPage}>Notlarım</button>
    </div>
  );
}
