/**
 * Renders a record's date as a compact month / day / year badge.
 */
import styles from "./CalorieRecordDate.module.css";
import StyledRecordCell from "../common/StyledRecordCell";

// Short month names indexed by the 0-based month returned by Date getters.
const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]

function CalorieRecordDate(props) {
  // const month = props.date.toLocaleString("default", { month: "long" });
  // const day = props.date.getDate();
  // const year = props.date.getFullYear();

  // UTC getters: the date is read in UTC so it renders the same day the
  // record was created regardless of the viewer's local time zone.
  const month = MONTHS[props.date.getUTCMonth()];
  const day = props.date.getUTCDate();
  const year = props.date.getUTCFullYear();
  
  return (
    <StyledRecordCell>
      <div className={styles["record-date-month"]}>{month}</div>
      <div className={styles["record-date-day"]}>{day}</div>
      <div className={styles["record-date-year"]}>{year}</div>
    </StyledRecordCell>
  );
}

export default CalorieRecordDate