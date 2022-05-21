import { useState } from "react";
import { Sorular } from "../Helpers/Vizeler";
import { useContext } from "react";
import { QuizContext } from "../Helpers/Context";

export default function SinavOlustur () {
    const{setSayfaState}=useContext(QuizContext);
  const [dersAdi, setDersAdi] = useState("");
  const [dersturu,setDersTuru]=useState("")
  const [soru, setSoru] = useState("");
  const [cevapA, setCevapA] = useState("");
  const [cevapB, setCevapB] = useState("");
  const [cevapC, setCevapC] = useState("");
  const [cevapD, setCevapD] = useState("");
  const [cevapE, setCevapE] = useState("");
  const [cevap, setCevap] = useState("");
 


  function soruyuEkle(){
      if(dersAdi,dersturu,soru,cevapA,cevapB,cevapC,cevapD,cevapE,cevap===""){
          alert("Lütfen Tüm Alanları Doldurun")
      }

  }
  return (
    <div>
      <label>Ders Giriniz</label>
      <input
        onChange={(e) => {
          setDersAdi(e.target.value);
        }}
      ></input>
      <label>Dersin Türünü Giriniz</label>
      <input onChange={(e)=>setDersTuru()}></input>
      <label>Soruyu Giriniz</label>
      <input onChange={(e) => setSoru(e.target.value)}></input>
      <label>Cevapları Giriniz</label>
      <input onChange={(e) => setCevapA(e.target.value)}></input>
      <input onChange={(e) => setCevapB(e.target.value)}></input>
      <input onChange={(e) => setCevapC(e.target.value)}></input>
      <input onChange={(e) => setCevapD(e.target.value)}></input>
      <input onChange={(e) => setCevapE(e.target.value)}></input>
      <label>Cevabı Giriniz</label>
      <input onChange={(e) => setCevap(e.target.value)}></input>
      <div>
        <button>Soruyu Ekle</button>
        <button>Sınavı Tamanla</button>
      </div>
    </div>
  );
}
