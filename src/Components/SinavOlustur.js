import { useState } from "react";
import { Vizeler } from "../Helpers/Vizeler";
import { Finaller } from "../Helpers/Finaller";
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
    let a = Vizeler.length
    let gecici = [
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
    ];
    if (sinavTuru === "vize") {
      Vizeler.push({
        ders: dersAdi,
        soru: soru,
        cevapA: cevapA,
        cevapB: cevapB,
        cevapC: cevapC,
        cevapD: cevapD,
        cevapE: cevapE,
        cevap: cevap,
      })
    }
    else if (sinavTuru === "final") {
      Finaller.push({
        ders: dersAdi,
        soru: soru,
        cevapA: cevapA,
        cevapB: cevapB,
        cevapC: cevapC,
        cevapD: cevapD,
        cevapE: cevapE,
        cevap: cevap,
      })
    }
    else {
      alert("Tüm alanları Doldurunuz");
    }
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
    console.log(Vizeler)
    console.log(Finaller)
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
  }
  function ebe(){
    setSayfaState("AnaSayfa")
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
        <button onClick={ebe}></button>
        
      </div>
    </div>
  );
}
