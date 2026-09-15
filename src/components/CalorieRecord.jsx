import "./CalorieRecord.css";
import CalorieRecordDate from "./CalorieRecordDate";

function CalorieRecord(props) {
  return (
    <ul className="record">
      <li>
        <CalorieRecordDate date={props.date}/>
      </li>
      <li>{props.meal}</li>
      <li>{props.content}</li>
      <li className="record-calories">{props.calories}</li>
    </ul>
  );
}
// function CalorieRecord(props) {
  // const month = props.date.toLocaleString("default", { month: "long" });
  // const day = props.date.getDate();
  // const year = props.date.getFullYear();

//   return (
//     <ul className="record">
//       <li className="record-date">
//         <div>{month}</div>
//         <div>{day}</div>
//         <div>{year}</div>
//       </li>
//       <li>{props.meal}</li>
//       <li>{props.content}</li>
//       <li className="record-calories">{props.calories}</li>
//     </ul>
//   );
// }

export default CalorieRecord;
