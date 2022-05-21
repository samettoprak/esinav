import { QuizContext } from "../Helpers/Context";
import React ,{useContext} from "react";
import { Vizeler } from "../Helpers/Vizeler";

export default function SonucEkrani(){
    const{sonuc}=useContext(QuizContext)


    return(
        <div>
            <h1>{sonuc}/{Vizeler.length}</h1>

        </div>
        
    )
}