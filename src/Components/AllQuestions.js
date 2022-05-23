import "../Tasarim/allQuestions.css"
const AllQuestions = (props) => {
  return (
    <div className="all">
      <strong className="allQ">Soru : {props.soru}</strong>
      <div className="allAnswers">
      <label>A : {props.cevapA}</label>
      <label>B : {props.cevapB}</label>
      <label>C : {props.cevapC}</label>
      <label>D : {props.cevapD}</label>
      <label>E : {props.cevapE}</label>
      <label>Doğru cevap : {props.cevap}</label>
      </div>
    </div>
  );
};
export default AllQuestions;
