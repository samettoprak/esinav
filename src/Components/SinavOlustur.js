import { useEffect, useState } from "react";
import { Vizeler } from "../Helpers/Vizeler";
import { Finaller } from "../Helpers/Finaller";
import { useContext } from "react";
import { QuizContext } from "../Helpers/Context";
import "../Tasarim/sinavOlustur.css";
import Select from "react-select";
import AllQuestions from "./AllQuestions";
import { Dersler } from "../Helpers/Dersler";

export default function SinavOlustur() {
  const { setSayfaState } = useContext(QuizContext);
  const [dersAdi, setDersAdi] = useState("");
  const [sinavTuru, setsinavTuru] = useState("");
  const [soru, setSoru] = useState("");
  const [cevapA, setCevapA] = useState("");
  const [cevapB, setCevapB] = useState("");
  const [cevapC, setCevapC] = useState("");
  const [cevapD, setCevapD] = useState("");
  const [cevapE, setCevapE] = useState("");
  const [cevap, setCevap] = useState("");
  const [dizia, setDizia] = useState([]);
  const [dizib, setDizib] = useState([]);

  function a() {
    //kontrol 
    console.log(Vizeler);
    console.log(Finaller);
    console.log(
      dersAdi,
      sinavTuru,
      cevap,
      cevapA,
      cevapB,
      cevapC,
      cevapD,
      cevapE,
      soru
    );
    console.log(dizia);
    console.log(dizib);
  }
  const turler = [
    { value: "vize", label: "Vize" },
    { value: "final", label: "Final" },
  ];
  const cevaplar = [
    { value: "A", label: "A" },
    { value: "B", label: "B" },
    { value: "C", label: "C" },
    { value: "D", label: "D" },
    { value: "E", label: "E" },
  ];

  useEffect(()=>{setDizib(
    dizia.map((i) => (
      <AllQuestions
        key={i.soru}
        soru={i.soru}
        cevapA={i.cevapA}
        cevapB={i.cevapB}
        cevapC={i.cevapC}
        cevapD={i.cevapD}
        cevapE={i.cevapE}
        cevap={i.cevap}
      ></AllQuestions>
    ))
  );},[dizia])

  function soruyuEkle() {
    if (sinavTuru === "vize") {

      setDizia((oldarray) => [
        ...oldarray,
        {
          ders: dersAdi,
          soru: soru,
          cevapA: cevapA,
          cevapB: cevapB,
          cevapC: cevapC,
          cevapD: cevapD,
          cevapE: cevapE,
          cevap: cevap,
        },
      ]);
      
      
    } else if (sinavTuru === "final") {
      Finaller.push({
        ders: dersAdi,
        soru: soru,
        cevapA: cevapA,
        cevapB: cevapB,
        cevapC: cevapC,
        cevapD: cevapD,
        cevapE: cevapE,
        cevap: cevap,
      });
    } else {
      alert("Tüm alanları Doldurunuz");
    }
  }

  function ebe() {
    setSayfaState("AnaSayfa");
  }

  return (
    <div>
      <div></div>
      <div>
        <label>Ders Giriniz</label>
        <Select
          options={Dersler}
          onChange={(e) => {
            setDersAdi(e.value);
          }}
        ></Select>
      </div>
      <div>
        <label>Sınavın Türünü Seçiniz</label>
        <div>
          <Select
            options={turler}
            onChange={(e) => {
              setsinavTuru(e.value);
            }}
          ></Select>
        </div>
      </div>
      <div>
        <label className="cevap">Soruyu Giriniz</label>
        <input onChange={(e) => setSoru(e.target.value)}></input>
      </div>
      <div className="cevaplar">
        <label>Cevapları Giriniz</label>
        <input onChange={(e) => setCevapA(e.target.value)}></input>
        <input onChange={(e) => setCevapB(e.target.value)}></input>
        <input onChange={(e) => setCevapC(e.target.value)}></input>
        <input onChange={(e) => setCevapD(e.target.value)}></input>
        <input onChange={(e) => setCevapE(e.target.value)}></input>
      </div>
      <div className="cevap">
        <label>Cevabı Seçiniz</label>
        <Select
          options={cevaplar}
          placeholder=""
          onChange={(e) => {
            setCevap(e.value);
          }}
        />
      </div>
      <div>
        <button onClick={a}>Soruyu Ekle</button>
        <button onClick={soruyuEkle}>Sınavı Tamanla</button>
        <button onClick={ebe}>Çıkış Yap</button>
      </div>
      {dizib}
    </div>
  );
}
