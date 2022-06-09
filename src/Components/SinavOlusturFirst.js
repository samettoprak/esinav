import { useContext, useState } from "react";
import { QuizContext } from "../Helpers/Context";
import Select from "react-select";
import { Vizeler } from "../Helpers/Vizeler";
import { Finaller } from "../Helpers/Finaller";
import { Dersler } from "../Helpers/Dersler";
import "../Tasarim/sinavOlusturFirst.css";

export default function SinavOlusturFirst() {
  const {
    setSayfaState,
    sinavTuru,
    setsinavTuru,
    dersAdi,
    setDersAdi,
    setTempSinavSaat,
  } = useContext(QuizContext);

  let vizeBool = true;
  let finalBool = true;

  var date = new Date();
  var isoDateTime = new Date(
    date.getTime() - date.getTimezoneOffset() * 60000
  ).toISOString();

  const turler = [
    { value: "Vize", label: "Vize" },
    { value: "Final", label: "Final" },
  ];

  const [tarih1, setTarih1] = useState("");
  const tarih1Sec = (event) => {
    setTarih1(event.target.value);
  };
  const [tarih2, setTarih2] = useState("");
  const tarih2Sec = (event) => {
    setTarih2(event.target.value);
  };

  function Devam() {
    if (tarih1 >= tarih2) {
      alert("Sınav Zamanı Yanlış Ayarlandı");
    } else {
      if (sinavTuru === "Vize") {
        Vizeler.forEach((element) => {
          if (element.ders === dersAdi) {
            vizeBool = false;
          }
        });
        if (!vizeBool) {
          vizeBool = true;
          alert("Bu sınav zaten oluşturulmuş");
        } else {
          setTempSinavSaat({
            ders: dersAdi,
            sinavTuru: sinavTuru,
            baslamaZamani: tarih1,
            bitisZamani: tarih2,
          });
          setSayfaState("SinavOlustur");
        }
      } else if (sinavTuru === "Final") {
        Finaller.forEach((element) => {
          if (element.ders === dersAdi) {
            finalBool = false;
          }
        });
        if (!finalBool) {
          finalBool = true;
          alert("Bu sınav zaten oluşturulmuş");
        } else {
          setTempSinavSaat({
            ders: dersAdi,
            sinavTuru: sinavTuru,
            baslamaZamani: tarih1,
            bitisZamani: tarih2,
          });
          setSayfaState("SinavOlustur");
        }
      }
    }
  }
  return (
    <div className="sinavOlusturFirst">
      <div className="sofDers">
        <label>Ders Giriniz</label>
        <Select
          options={Dersler}
          onChange={(e) => {
            setDersAdi(e.value);
          }}
        ></Select>
      </div>
      <div className="sofTur">
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
      <div className="sofSaat">
        <label>Sınavın Başlangıç Zamanı : </label>
        <input type="datetime-local" onChange={tarih1Sec}></input>
      </div>
      <div className="sofSaat">
        <label>Sınavın Bitiş Zamanı : </label>
        <input type="datetime-local" onChange={tarih2Sec}></input>
      </div>
      <div className="sinavFirstButton">
        <button onClick={Devam}>Devam</button>
      </div>
    </div>
  );
}
