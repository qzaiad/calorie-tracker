import { useState } from "react";
import "./CaloriesRecordEdit.css";

function CaloriesRecordEdit() {
  console.log("Rendering CaloriesRecordEdit");
  const [maxCaloriesValue, setMaxCaloriesValue] = useState(0);
  /**
   * useState() -> initial value of malRecord is undefined
   *            -> better: initialize it with empty object{}
   */
  const [mealRecord, setMealRecored] = useState({});

  const onDateChangeHandler = (event) => {
    // mealRecord.date = event.target.value;
    // setMealRecored(mealRecord); // will not re-render
    console.log('mealRecord: ', mealRecord);
    setMealRecored({
      ...setMealRecored,  // spread operator
      date: event.target.value
    });
  };

  /**
   * In order to re-render we have to call setMealRecord with a new object,
   * i.e. with an object that has a new memory address, otherwise the state
   * is updated but the component is not re-rendered
   */
  const onMealChangeHandler = (event) => {
    // mealRecord.meal = event.target.value;
    // setMealRecored(mealRecord); // will not re-render
    console.log('mealRecord: ', mealRecord);
    setMealRecored({
      ...setMealRecored,  // spread operator
      meal: event.target.value
    });
  };

  const onContentChangeHandler = (event) => {
    // mealRecord.content = event.target.value;
    // setMealRecored(mealRecord); // will not re-render
    console.log('mealRecord: ', mealRecord);
    setMealRecored({
      ...setMealRecored, // spread operator
      content: event.target.value
    });
  };

  const onCaloriesChangeHandler = (event) => {
    let max_calories = mealRecord.calories ? mealRecord.calories : 0;
    let new_calories = Number(event.target.value);
    if(max_calories < new_calories){
      max_calories = new_calories;
    }
    // mealRecord.calories = new_calories;
    // mealRecord.max_calories = max_calories;
    // setMealRecored(mealRecord); // will not re-render
    console.log('mealRecord: ', mealRecord);
    setMealRecored({
      ...setMealRecored,  // spread operator
      calories: new_calories,
      max_calories: max_calories
    });
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