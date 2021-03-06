import { useEffect, useState } from "react";
import { Vizeler } from "../Helpers/Vizeler";
import { Finaller } from "../Helpers/Finaller";
import { useContext } from "react";
import { QuizContext } from "../Helpers/Context";
import Select from "react-select";
import AllQuestions from "./AllQuestions";
import "../Tasarim/sinavOlustur.css";
import { SinavSaatleri } from "../Helpers/SinavSaatleri";

export default function SinavOlustur() {
  const { setSayfaState, dersAdi, sinavTuru, tempSinavSaat } =
    useContext(QuizContext);

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
  let vizeBool = true;
  let finalBool = true;

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
      dersAdi === "" ||
      cevapA === "" ||
      cevapB === "" ||
      cevapC === "" ||
      cevapE === "" ||
      cevapD === "" ||
      cevap === ""
    ) {
      alert("L??tfen T??m Alanlar?? doldurunuz");
    } else {
      if (sinavTuru === "Vize") {
        Vizeler.forEach((element) => {
          if (element.ders === dersAdi) {
            vizeBool = false;
          }
        });
        if (!vizeBool) {
          alert("Bu s??nav zaten olu??turulmu??");
        } else {
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

          setCevapA("");
          setCevapB("");
          setCevapC("");
          setCevapD("");
          setCevapE("");
        }
      } else if (sinavTuru === "Final") {
        Finaller.forEach((element) => {
          if (element.ders === dersAdi) {
            finalBool = false;
          }
        });
        if (!finalBool) {
          alert("Bu s??nav zaten olu??turulmu??");
        } else {
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
          setCevapA("");
          setCevapB("");
          setCevapC("");
          setCevapD("");
          setCevapE("");
        }
      } else {
        alert("S??nav T??r??n?? Se??iniz");
      }
    }
  }

  function sinaviTamamla() {
    SinavSaatleri.push(tempSinavSaat);

    if (tempVize[0] === undefined && tempFinal[0] === undefined) {
      alert("S??nav Olu??turulamad??.");
    } else {
      if (sinavTuru === "Vize") {
        Vizeler.push(...tempVize);
        alert("S??nav olu??turuldu");
        settempVize([]);
        setSayfaState("Profil");
      } else if (sinavTuru === "Final") {
        Finaller.push(...tempFinal);
        alert("S??nav olu??turuldu");
        settempFinal([]);
        setSayfaState("Profil");
      }
    }
  }

  return (
    <div className="olustur">
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
        <label>Cevab?? Se??iniz</label>
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
        <button onClick={sinaviTamamla}>S??nav?? Tamamla</button>
      </div>
      {questionArray}
    </div>
  );
}
