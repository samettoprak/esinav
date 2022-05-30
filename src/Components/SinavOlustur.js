import { useEffect, useState } from "react";
import { Vizeler } from "../Helpers/Vizeler";
import { Finaller } from "../Helpers/Finaller";
import { useContext } from "react";
import { QuizContext } from "../Helpers/Context";
import { Dersler } from "../Helpers/Dersler";
import Select from "react-select";
import AllQuestions from "./AllQuestions";
import "../Tasarim/sinavOlustur.css";

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
  const [tempVize, settempVize] = useState([]); //vizeler
  const [questionArray, setquestionArray] = useState([]); // sorular
  const [tempFinal, settempFinal] = useState([]); //finaller

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

  useEffect(() => {
    setquestionArray(
      tempVize.map((i) => (
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
    );
  }, [tempVize]);

  useEffect(() => {
    setquestionArray(
      tempFinal.map((i) => (
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
    );
  }, [tempFinal]);

  function soruyuEkle() {
    if (
      dersAdi ==="" ||
      cevapA === "" ||
      cevapB === "" ||
      cevapC === "" ||
      cevapE === "" ||
      cevapD === "" ||
      cevap === ""
    ) {
      alert("Lütfen Tüm Alanları doldurunuz");
    } else {
      if (sinavTuru === "vize") {
        settempVize((oldarray) => [
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
        document.getElementById("inputA").value = "";
        document.getElementById("inputB").value = "";
        document.getElementById("inputC").value = "";
        document.getElementById("inputD").value = "";
        document.getElementById("inputE").value = "";
        document.getElementById("inputSoru").value = "";
        setCevap("");
        setCevapA("");
        setCevapB("");
        setCevapC("");
        setCevapD("");
        setCevapE("");
      } else if (sinavTuru === "final") {
        settempFinal((oldarray) => [
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
        document.getElementById("inputA").value = "";
        document.getElementById("inputB").value = "";
        document.getElementById("inputC").value = "";
        document.getElementById("inputD").value = "";
        document.getElementById("inputE").value = "";
        document.getElementById("inputSoru").value = "";
      } else {
        alert("Sınav Türünü Seçiniz");
      }
    }
  }

  function sinaviTamamla() {
    console.log(tempFinal, tempVize);
    if (tempVize[0] === undefined && tempFinal[0] === undefined) {
      alert("Sınav Oluşturulamadı.");
    } else {
      if (sinavTuru === "vize") {
        Vizeler.push(...tempVize);
        alert("Sınav oluşturuldu");
        settempVize([]);
      } else if (sinavTuru === "final") {
        Finaller.push(...tempFinal);
        alert("Sınav oluşturuldu");
        settempFinal([]);
      }
    }
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
      <div className="cevaplar">
        <label>Soru</label>
        <input
          placeholder="Soruyu Giriniz"
          id="inputSoru"
          onChange={(e) => setSoru(e.target.value)}
        ></input>
      </div>
      <div className="cevaplar">
        <label>Cevaplar</label>
        <input
          id="inputA"
          placeholder="A"
          onChange={(e) => setCevapA(e.target.value)}
        ></input>
        <input
          id="inputB"
          placeholder="B"
          onChange={(e) => setCevapB(e.target.value)}
        ></input>
        <input
          id="inputC"
          placeholder="C"
          onChange={(e) => setCevapC(e.target.value)}
        ></input>
        <input
          id="inputD"
          placeholder="D"
          onChange={(e) => setCevapD(e.target.value)}
        ></input>
        <input
          id="inputE"
          placeholder="E"
          onChange={(e) => setCevapE(e.target.value)}
        ></input>
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
        <button onClick={soruyuEkle}>Soruyu Ekle</button>
        <button onClick={sinaviTamamla}>Sınavı Tamanla</button>
      </div>
      {questionArray}
    </div>
  );
}
