import { useContext, useState } from "react";
import { QuizContext } from "../Helpers/Context";
import { Dersler } from "../Helpers/Dersler";
import Select from "react-select";
import { SinavSaatleri } from "../Helpers/SinavSaatleri";

export default function SinavOlusturFirst() {
  const { setSayfaState, sinavTuru, setsinavTuru, dersAdi, setDersAdi } = useContext(QuizContext);
  
  /*const now = new Date()
  let date =now.toISOString()*/

  var date = new Date();
var isoDateTime = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString();
  const turler = [
    { value: "vize", label: "Vize" },
    { value: "final", label: "Final" },
  ];
  const [tarih1, setTarih1] = useState(null);
  const tarih1Sec = (event) => {
    setTarih1(event.target.value);
  };
  const [tarih2, setTarih2] = useState(null);
  const tarih2Sec = (event) => {
    setTarih2(event.target.value);
  };

  function temp() {
    console.log(tarih1,isoDateTime);
    console.log(tarih1<isoDateTime)
  }
  function temp2 () {//hallet
    if (sinavTuru === "vize") {
        Vizeler.forEach((element) => {
          if (element.ders === dersAdi) {
            vizeBool = false;
          }
        });
        if (!vizeBool) {
          alert("Bu sınav zaten oluşturulmuş");
        }

    setSayfaState("SinavOlustur")
  }}
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
      <div>
        <label>Sınavın Bitiş Zamanı </label>
        <input type="datetime-local" onChange={tarih2Sec}></input>
      </div>
      <button onClick={temp}>Devam</button>
      <button onClick={temp2}>Sınav oluştura git</button>
    </div>
  );
}
