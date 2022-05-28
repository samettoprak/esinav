import { useContext, useEffect } from "react";
import { QuizContext } from "../Helpers/Context";
import { Ogrenciler } from "../Helpers/Ogrenciler";

export default function Profil() {
  const {
    studentName,
    studentSurname,
    setSayfaState,
    setStudentName,
    setStudentSurname,
    eposta,
  } = useContext(QuizContext);

  useEffect(() => {
    Ogrenciler.forEach((ogrenci) => {
      if (ogrenci.eposta === eposta) {
        setStudentName(ogrenci.ad);
        setStudentSurname(ogrenci.soyad);
      }
    });
  }, [eposta]);

  return (
    <div className="mainprofil">
      <div className="profil">
        <img className="Logo" src={require("../Helpers/profile.png")}></img>
        <label>
          {studentName} {studentSurname}{" "}
        </label>
      </div>
    </div>
  );
}
