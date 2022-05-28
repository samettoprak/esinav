import { useContext } from "react";
import { QuizContext } from "../Helpers/Context";
import "../Tasarim/navBar.css";

const NavBar = () => {
  const { setSayfaState } = useContext(QuizContext);

  const sinavlarPage=()=>{
    setSayfaState("Sinavlarim")

}
const resultPage = ()=>{
    setSayfaState("Results")
}

const exit = ()=>{
    setSayfaState("AnaSayfa")
}


  return (
    <div className="navBar">
      <div className="navBar2">
        <button onClick={sinavlarPage}>Sınavlar</button>
        <button onClick={resultPage}>Notlarım</button>
        <button onClick={exit}>Çıkış Yap</button>
      </div>
    </div>
  );
};

export default NavBar;
