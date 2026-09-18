import "./CalorieRecord.css";
import CalorieRecordDate from "./CalorieRecordDate";
import StyledRecordCell from "../common/StyledRecordCell";

function CalorieRecord(props) {
  // This is a jsx element -> equivalent to a function that returns one parent element
  let recordContent = (
    // <></> React fragment => bundle children under the same umbrella => () should return one parent
    <>
      <li>{props.meal}</li>
      <li>{props.content}</li>
    </>
  );

if(props.calories < 0){
  recordContent = (
    // keep CSS styling
    <>
      <li></li>
      <li>Invalid calories</li>
    </>
  )
}

  return (
    <ul className="record">
      <li>
        <CalorieRecordDate date={props.date}/>
      </li>
      {recordContent}
      <li className="record-calories">
        <StyledRecordCell>{props.calories}</StyledRecordCell>
      </li>
    </ul>
  );

}

export default CalorieRecord;
