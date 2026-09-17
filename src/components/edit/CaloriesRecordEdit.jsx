import { useState } from "react";
import "./CaloriesRecordEdit.css";
import ClickCounter from "./ClickCounter";

function CaloriesRecordEdit() {
  // console.log("Rendering CaloriesRecordEdit");
  /**
   * useState() -> initial value of malRecord is undefined
   *            -> better: initialize it with empty object{}
   */
  const [mealRecord, setMealRecored] = useState({});
  const [clickCounter, setClickCounter] = useState(0);

  const onDateChangeHandler = (event) => {
    // mealRecord.date = event.target.value;
    // setMealRecored(mealRecord); // will not re-render
    // console.log('mealRecord: ', mealRecord);
    setMealRecored({
      ...mealRecord,  // spread operator
      date: event.target.value
    });
  };

  /**
   * In order to re-render we have to call setMealRecord with a new object,
   * i.e. with an object that has a new memory address, otherwise the state
   * is updated but the component is not re-rendered
   * 
   * ChatGPT: Will typing on form field update the DOM? will it be expensive?
   *  with your current React code, typing into the fields causes React to update
   *  state and re-render the component, but it does not mean the entire DOM is rebuilt.
   *  - Re-rendering this component on every keystroke is completely normal React usage.
   *  - the component may render several times
   *  - But React isn't throwing away and recreating the whole <form> DOM each time
   *  Is this expensive?  For this component: no, not meaningfully.
   *  - Re-rendering a React component ≠ rebuilding the DOM.
   *  - A re-render means React calls your component function again and creates a new
   *  - description of what the UI should look like. React then determines what DOM
   *  - changes are necessary.
   * 
   *  User types
   *      ↓
   *  Browser receives keyboard input
   *      ↓
   *  onChange fires
   *      ↓
   *  setMealRecord(...)
   *      ↓
   *  React re-renders component
   *      ↓
   *  React compares old UI description vs new UI description
   *      ↓
   *  Only necessary DOM changes are committed
   */
  const onMealChangeHandler = (event) => {
    // mealRecord.meal = event.target.value;
    // setMealRecored(mealRecord); // will not re-render
    // console.log('mealRecord: ', mealRecord);
    setMealRecored({
      ...mealRecord,  // spread operator
      meal: event.target.value
    });
  };

  const onContentChangeHandler = (event) => {
    // mealRecord.content = event.target.value;
    // setMealRecored(mealRecord); // will not re-render
    // console.log('mealRecord: ', mealRecord);
    setMealRecored({
      ...mealRecord, // spread operator
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
    // console.log('mealRecord: ', mealRecord);
    setMealRecored({
      ...mealRecord,  // spread operator
      calories: new_calories,
      max_calories: max_calories
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // console.log(event);
    // console.log({
    //   date: event.target[0].value,
    //   meal: event.target[1].value,
    //   content: event.target[2].value,
    //   calories: event.target[3].value,
    // })
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="">I got clicked {clickCounter} times</label>
      <label htmlFor="">Max. Calories {mealRecord.calories ? mealRecord.calories : 0}</label>
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
        <ClickCounter setClickCounter={setClickCounter} />
      </div>
    </form>
  );
}

export default CaloriesRecordEdit;