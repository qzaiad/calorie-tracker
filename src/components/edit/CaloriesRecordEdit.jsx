/**
 * The "add a record" form, rendered inside the modal opened from App.jsx.
 *
 * Fully controlled form: every field reads from the `mealRecord` state and
 * updates it through its own change handler. On submit the payload is passed
 * up via `onFormSubmit`; on cancel the state is reset and `onCancel` is called
 * (the modal's open/closed state itself lives in App.jsx).
 */
import { useState } from "react";
import styles from "./CaloriesRecordEdit.module.css";


function CaloriesRecordEdit(props) {
  // console.log("Rendering CaloriesRecordEdit");
  // Reset values for every field; used to initialize and to clear the form
  // after submit/cancel. `date` is filled in separately with today's date.
  const DEFAULT_MEAL = {
    date: "",
    meal: "Breakfast",
    content: "",
    calories: "",
  }
  /**
   * useState() -> initial value of malRecord is undefined
   *            -> better: initialize it with empty object{}
   */
  const [mealRecord, setMealRecored] = useState({...DEFAULT_MEAL, date: new Date().toISOString().split("T")[0]});

  // <input type="date"> gives a "YYYY-MM-DD" string; App converts it to a
  // Date later via getDateFromString().
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
  // Meal type changed: replace only the `meal` field of the state object.
  const onMealChangeHandler = (event) => {
    // mealRecord.meal = event.target.value;
    // setMealRecored(mealRecord); // will not re-render
    // console.log('mealRecord: ', mealRecord);
    setMealRecored({
      ...mealRecord,  // spread operator
      meal: event.target.value
    });
  };

  // Food description changed (free text).
  const onContentChangeHandler = (event) => {
    // mealRecord.content = event.target.value;
    // setMealRecored(mealRecord); // will not re-render
    // console.log('mealRecord: ', mealRecord);
    setMealRecored({
      ...mealRecord, // spread operator
      content: event.target.value
    });
  };

  // Calories: keep it as a number so comparisons (e.g. `< 0` error styling)
  // work. `new_calories && Number(new_calories)` also maps "" -> "" so the
  // input isn't forced to 0 while the user is still typing.
  const onCaloriesChangeHandler = (event) => {
    let new_calories = event.target.value;
    // mealRecord.calories = new_calories;
    // setMealRecored(mealRecord); // will not re-render
    // console.log('mealRecord.calories: ', mealRecord.calories);
    setMealRecored({
      ...mealRecord,  // spread operator
      calories: new_calories && Number(new_calories),
    });
  };

  /**
   * Valid form submission: prevent the browser's native submit/reload, hand
   * the record to App, then reset the form so it's clean for next time.
   */
  const onSubmitHandler = (event) => {
    event.preventDefault();
    // console.log(mealRecord);
    props.onFormSubmit(mealRecord);
    setMealRecored({
      ...DEFAULT_MEAL,
      date: new Date().toISOString().split("T")[0]
    }); // => re-render
  }

  // Cancel: discard what was typed (reset to defaults) and close the modal.
  const onCancelHandler = () => {
    setMealRecored({
      ...DEFAULT_MEAL,
      date: new Date().toISOString().split("T")[0]
    }); // => re-render
    props.onCancel(); // Modal state is maintained in App.jsx
  }

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <label htmlFor="date">Date:</label>
      <input type="date" id="date" value={mealRecord.date} onChange={onDateChangeHandler} />
      <label htmlFor="meal">Meal:</label>
      <select id="meal" value={mealRecord.meal} onChange={onMealChangeHandler}>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Snack">Snack</option>
      </select>
      <label htmlFor="content">Content:</label>
      <input type="text" id="content" value={mealRecord.content} onChange={onContentChangeHandler} />
      <label htmlFor="calories">Calories:</label>
      {/* Negative calories get the `error` class (red outline); note how two
          CSS Module classes are concatenated with a space. */}
      <input
        type="number"
        id="calories"
        value={mealRecord.calories}
        onChange={onCaloriesChangeHandler}
        className={styles["calories-input"] + (mealRecord.calories < 0 ? ` ${styles.error}` : "")}
       />
       {/*
         * CSS class footer is not accessible by footer. The HTML element wull not use
         * CSS class footer. A randomly generated class name should be used. It is
         * accessed by styles.footer
        */}
      {/* Footer buttons: "Add Record" defaults to type="submit"; Cancel is
          type="button" so it doesn't submit the form. */}
      <div className={styles.footer}>
        <button>Add Record</button>
        <button type="button" className={styles["secondary"]} onClick={onCancelHandler}>Cancel</button>
      </div>
    </form>
  );
}

export default CaloriesRecordEdit;