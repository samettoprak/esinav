export default function AfterQuizComp(props) {
  let temp1 = "Sınava Girilmedi";
  let temp2 = "Sınava Girilmedi";
  if (props.sinavTuru === "Vize") {
    temp1 = props.puan
  }
  else if (props.sinavTuru==="Final"){
      temp2 =props.puan
  }

  return(
  <div>
   
    <div>
      <label>{props.ders}</label>
      <label>{temp1}</label>
      <label>{temp2}</label>
    </div>
  </div>)
}
