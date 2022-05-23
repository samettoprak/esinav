import { useState } from "react";
import { Sorular } from "../Helpers/Vizeler";
import { useContext } from "react";
import { QuizContext } from "../Helpers/Context";
import "../Tasarim/sinavOlustur.css";
import Select from "react-select";

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

  function soruyuEkle() {
    
  }
  const dersler = [
    {
      value: "matematik",
      label: "Matematik",
    },
    {
      value: "fizik",
      label: "Fizik",
    },
    {
      value: "java",
      label: "Java",
    },
  ];
  const turler = [
    {
      value: "vize",
      label: "Vize",
    },
    {
      value: "final",
      label: "Final",
    },
  ];
  const cevaplar = [
    {
      value: "A",
      label: "A",
    },
    {
      value: "B",
      label: "B",
    },
    {
      value: "C",
      label: "C",
    },
    {
      value: "D",
      label: "D",
    },
    {
      value: "E",
      label: "E",
    },
  ];
  function a() {
    console.log(dersAdi, sinavTuru,cevap,cevapA,cevapB,cevapC,cevapD,cevapE,soru);
  }

  return (
    <div>
      <div></div>
      <div>
        <label>Ders Giriniz</label>
        <Select
          options={dersler}
          onChange={(e) => {
            setDersAdi(e.value);
          }}
        ></Select>
      </div>
      <div>
        <label>Dersin Türünü Seçiniz</label>
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
      </div>
    </div>
  );
}
