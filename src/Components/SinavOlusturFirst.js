import { useContext, useState } from "react";
import { QuizContext } from "../Helpers/Context";
import { Dersler } from "../Helpers/Dersler";
import Select from "react-select";
import { Vizeler } from "../Helpers/Vizeler";
import { Finaller } from "../Helpers/Finaller";


export default function SinavOlusturFirst() {
  const { setSayfaState, sinavTuru, setsinavTuru, dersAdi, setDersAdi, tempSinavSaat,setTempSinavSaat } =
    useContext(QuizContext);

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

  function temp() {
    console.log(tarih1, isoDateTime,tarih2,tempSinavSaat);
    console.log(tarih1 < isoDateTime);
  }
  function Devam() {
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
          ders:dersAdi,
          sinavTuru:sinavTuru,
          baslamaZamani:tarih1,
          bitisZamani:tarih2
        })
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
          ders:dersAdi,
          sinavTuru:sinavTuru,
          baslamaZamani:tarih1,
          bitisZamani:tarih2
        })
        setSayfaState("SinavOlustur");
      }
    }
  }
  return (
    <div>
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
        <label>Sınavın Başlangıç Zamanı </label>
        <input type="datetime-local" onChange={tarih1Sec}></input>
      </div>
      <div className="sinavFirst">
        <label>Sınavın Bitiş Zamanı </label>
        <input type="datetime-local" onChange={tarih2Sec}></input>
      </div>
      <div className="sinavFirstButton">
        <button onClick={temp}>temp</button>
        <button onClick={Devam}>Sınav oluştura git</button>
      </div>
    </div>
  );
}
