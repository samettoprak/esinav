import { useContext } from "react"
import { QuizContext } from "../Helpers/Context"
export default  function AdminAnaSayfa(){
    const {setSayfaState}=useContext(QuizContext);

    function sinavOlustur(){
        setSayfaState("SinavOlustur")
    }
    function tempfunc(){
        setSayfaState("AdminResults")
    }



    return(
        <div>
            <button onClick={sinavOlustur}>Sınav Oluştur</button>
            <button onClick={tempfunc}>Sonuçları Görüntüle</button>
            <button >Sınavları Görüntüle</button>

        </div>

    )

}