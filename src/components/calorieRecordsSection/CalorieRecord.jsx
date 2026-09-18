import "./CalorieRecord.css";
import CalorieRecordDate from "./CalorieRecordDate";
import StyledRecordCell from "../common/StyledRecordCell";

function CalorieRecord(props) {
  return (
    <ul className="record">
      <li>
        <CalorieRecordDate date={props.date}/>
      </li>
      {
        props.calories < 0 ? (
          // keep CSS styling
        <>
          <li></li>
          <li>Invalid calories</li>
        </>
        ) : (
          // <></> React fragment => bundle children under the same umbrella => () should return one parent
          <>
            <li>{props.meal}</li>
            <li>{props.content}</li>
          </>
        )
      }
      <li className="record-calories">
        <StyledRecordCell>{props.calories}</StyledRecordCell>
      </li>
    </ul>
  );

}

export default CalorieRecord;
