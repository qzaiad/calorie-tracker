import "./CalorieRecord.css";
import CalorieRecordDate from "./CalorieRecordDate";
import StyledRecordCell from "../common/StyledRecordCell";

function CalorieRecord(props) {
  if(props.calories < 0){
    return null;  // nothing is rendered
  }

  return (
    <ul className="record">
      <li>
        <CalorieRecordDate date={props.date}/>
      </li>
      <li>{props.meal}</li>
      <li>{props.content}</li>
      <li className="record-calories">
        <StyledRecordCell>{props.calories}</StyledRecordCell>
      </li>
    </ul>
  );

}

export default CalorieRecord;
