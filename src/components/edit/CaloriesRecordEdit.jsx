import { useState } from "react";
import "./CaloriesRecordEdit.css";

function CaloriesRecordEdit() {

  const [dateValue, setDateValue] = useState(0);
  const [mealValue, setMealValue] = useState(0);
  const [contentValue, setContentValue] = useState(0);
  const [caloriesValue, setCaloriesValue] = useState(0);
  const [maxCaloriesValue, setMaxCaloriesValue] = useState(0);

  const onDateChangeHandler = (event) => {
    console.log('Date: ', dateValue, " -> ", event.target.value);
    setDateValue(event.target.value);
  };

  const onMealChangeHandler = (event) => {
    console.log('Date: ', mealValue, " -> ", event.target.value);
    setMealValue(event.target.value);
  };

  const onContentChangeHandler = (event) => {
    console.log('Date: ', contentValue, " -> ", event.target.value);
    setContentValue(event.target.value);
  };

  const onCaloriesChangeHandler = (event) => {
    let new_calories = Number(event.target.value);
    if(maxCaloriesValue < new_calories){
      setMaxCaloriesValue(event.target.value);
    }
    console.log('Date: ', caloriesValue, " -> ", event.target.value);
    setCaloriesValue(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(event);
    console.log({
      date: event.target[0].value,
      meal: event.target[1].value,
      content: event.target[2].value,
      calories: event.target[3].value,
    })
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="">Max. Calories {maxCaloriesValue}</label>
      <label htmlFor="date">Date:</label>
      <input type="date" id="date" onChange={onDateChangeHandler} />
      <label htmlFor="meal">Meal:</label>
      <select id="meal"  onChange={onMealChangeHandler}>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Snack">Snack</option>
      </select>
      <label htmlFor="content">Content:</label>
      <input type="text" id="content" onChange={onContentChangeHandler} />
      <label htmlFor="calories">Calories:</label>
      <input type="number" id="calories" onChange={onCaloriesChangeHandler} />
      <div className="footer">
        <button>Add Record</button>
      </div>
    </form>
  );
}

export default CaloriesRecordEdit;