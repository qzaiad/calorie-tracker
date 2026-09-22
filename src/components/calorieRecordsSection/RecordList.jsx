import CalorieRecord from './CalorieRecord'
import styles from "./RecordList.module.css"


/**
 * Renders the list of calorie records for the currently selected day.
 * Falls back to a placeholder message when there is nothing to show.
 *
 * @param {{ records?: Array }} props - Records already filtered by date by
 *   the parent (ListingSection).
 */
function RecordList(props) {
  // `props.records?.length` is truthy only for a non-empty array:
  //   non-empty -> <ul> of items
  //   empty/undefined -> placeholder message
  return (
    props.records?.length ? (
      <ul className={styles["record-list"]}>
        {
          props.records.map((record) =>
            // Negative calories are treated as invalid input and skipped here
            // (they also get error styling in the edit form).
            record.calories >= 0 && (
              <li key={record.id} className={styles["list-item"]}>
                <CalorieRecord date={record.date} meal={record.meal} content={record.content} calories={record.calories}/>
              </li>
            )
          )
        }
      </ul>
    ) : (
      <div className={styles.placeholder}>No records found for this date</div>
    )
  );
}

export default RecordList;