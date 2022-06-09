import { useContext, useState } from "react";
import { QuizContext } from "../Helpers/Context";
import "../Tasarim/navBar.css";

const NavBar = () => {
  const { setSayfaState, setSoruData, sayfaState } = useContext(QuizContext);
  const [secilenButton, setSecilenButton] = useState("");

  const sinavlarPage = () => {
    if (sayfaState === "Sinav") {
      alert("Sınav sırasında bu alanı kullanamazsınız");
    } else {
      setSecilenButton("Sinavlar");
      setSayfaState("Sinavlarim");
    }
  };
  const resultPage = () => {
    if (sayfaState === "Sinav") {
      alert("Sınav sırasında bu alanı kullanamazsınız");
    } else {
      setSecilenButton("Notlarım");
      setSoruData([]);
      setSayfaState("SonucEkrani");
    }
  };
  const profil = () => {
    if (sayfaState === "Sinav") {
      alert("Sınav sırasında bu alanı kullanamazsınız");
    } else {
      setSecilenButton("Profil");
      setSayfaState("Profil");
    }
  };
  const exit = () => {
    if (sayfaState === "Sinav") {
      alert("Sınav sırasında bu alanı kullanamazsınız");
    } else {
      setSecilenButton("Cikis");
      setSayfaState("AnaSayfa");
    }
  };

  return (
    <div className="navBar">
      <div className="navBar2">
        <button
          className={secilenButton === "Sinavlar" ? "fokus2" : ""}
          onClick={sinavlarPage}
        >
          Sınavlar
        </button>
        <button
          className={secilenButton === "Notlarım" ? "fokus2" : ""}
          onClick={resultPage}
        >
          Notlarım
        </button>
        <button
          className={secilenButton === "Profil" ? "fokus2" : ""}
          onClick={profil}
        >
          Profil
        </button>
        <button
          className={secilenButton === "Cikis" ? "fokus2" : ""}
          onClick={exit}
        >
          Çıkış Yap
        </button>
      </div>
    </div>
  );
};

export default NavBar;
