import styles from "./CalorieRecord.module.css";
import CalorieRecordDate from "./CalorieRecordDate";
import StyledRecordCell from "../common/StyledRecordCell";

/**
 * Presentational row for a single calorie record: date, meal, content,
 * calories. Purely props-driven — no state of its own.
 */
function CalorieRecord(props) {
  return (
    // Nested <ul> keeps the row's cells laid out by the record grid styles.
    <ul className={styles.record}>
      <li>
        <CalorieRecordDate date={props.date}/>
      </li>
      <li>{props.meal}</li>
      <li>{props.content}</li>
      <li className={styles["record-calories"]}>
        {/* StyledRecordCell wraps the number in the shared badge/pill style. */}
        <StyledRecordCell>{props.calories}</StyledRecordCell>
      </li>
    </ul>
  );

}

export default CalorieRecord;
