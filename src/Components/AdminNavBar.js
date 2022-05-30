import { useContext } from "react";
import { QuizContext } from "../Helpers/Context";
import "../Tasarim/navBar.css";

const NavBar = () => {
  const { setSayfaState , eposta,setEposta } = useContext(QuizContext);

  const sinavlarPage=()=>{
    setSayfaState("SinavOlustur")

}
const resultPage = ()=>{
    setSayfaState("AdminResults")
}

const profil = ()=>{
  setSayfaState("Profil")
}

const exit = ()=>{
    setEposta("")
    setSayfaState("AnaSayfa")
}


  return (
    <div className="navBar">
      <div className="navBar2">
        <button onClick={sinavlarPage}>Sınav Oluştur</button>
        <button onClick={resultPage}>Sonuçlar</button>
        <button onClick={profil}>Profil</button>
        <button onClick={exit}>Çıkış Yap</button>
      </div>
    </div>
  );
};

export default NavBar;
