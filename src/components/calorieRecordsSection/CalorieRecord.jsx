import {useState} from "react";
import "./CalorieRecord.css";
import CalorieRecordDate from "./CalorieRecordDate";
import StyledRecordCell from "../common/StyledRecordCell";

function CalorieRecord(props) {
  const [currentCalories, setCurrentCalories] = useState(props.calories);
  const calorieClickHandler = () => {
    setCurrentCalories(currentCalories + 10);
    console.log("calorieClickHandler:currentCalories", currentCalories)
  }
  console.log("On Rendering: currentCalories", currentCalories)
  return (
    <ul className="record">
      <li>
        <CalorieRecordDate date={props.date}/>
      </li>
      <li>{props.meal}</li>
      <li>{props.content}</li>
      <li className="record-calories" onClick={calorieClickHandler}>
        <StyledRecordCell>{currentCalories}</StyledRecordCell>
      </li>
    </ul>
  );

  // return (
  //   React.createElement(
  //     'ul',
  //     {className: "record"},
  //     React.createElement(
  //       'li',
  //       {},
  //       React.createElement(CalorieRecordDate, {date: props.date},)
  //     ),
  //     React.createElement('li', {}, props.meal,),
  //     React.createElement('li', {}, props.content,),
  //     React.createElement(
  //       'li',
  //       {className: "record-calories"},
  //       React.createElement(StyledRecordCell, {}, props.calories)
  //     ),
  //   )
  // );
  
}

export default CalorieRecord;
