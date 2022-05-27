import "../Tasarim/adminResults.css";
export default function AdminResultsComp(props) {
  return (
      
    <tr className="arComp">
      <td>{props.isim}</td>
      <td>{props.ders}</td>
      <td><div className="sinavButton">{props.vizeNot}{props.vizeNot==="Sınava Girilmedi"?null:<button>Sınavı Görüntüle</button>}</div></td>
      <td><div className="sinavButton">{props.finalNot}{props.finalNot==="Sınava Girilmedi"?null:<button>Sınavı Görüntüle</button>}</div></td>
     
    </tr>
  );
}
