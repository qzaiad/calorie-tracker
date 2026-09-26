/**
 * Listing section: filters the full record list to a single day and renders
 * the records for that day.
 *
 * The selected date is local component state; the date input is a controlled
 * component whose value is derived from `currentDate`.
 */
import RecordList from "./RecordList";
import styles from "./ListingSection.module.css";
import { useState } from "react";
import { getDateFromString } from "../../utils";

function ListingSection(props){
  const { allRecords } = props;
  const [currentDate, setCurrentDate] = useState(new Date()); // UTC time
  const [user, setUser] = useState({}); // changing state will re-render ->> will call getUser() -> changes user -> re-render....loop

  /**
   * Fires when the user picks a day in the date input.
   * `event.target.value` is a "YYYY-MM-DD" string -> convert to a Date.
   */
  const dateChangeHandler = (event) => {
    // console.log({
    //   "event.target.value": event.target.value,
    //   "Date(event.target.value)": new Date(event.target.value),
    //   "getDateFromString(event.target.value)": getDateFromString(event.target.value)
    // });
    setCurrentDate(getDateFromString(event.target.value));
  }

  /**
   * Predicate used with Array.filter: keeps only records whose day, month and
   * year all match the selected date. Comparing the three parts separately
   * avoids time-of-day mismatches (getTime() would also compare hours/min/sec).
   */
  const dateFilter = (record) =>
    record.date.getDate() === currentDate.getDate() &&
    record.date.getMonth() === currentDate.getMonth() &&
    record.date.getFullYear() === currentDate.getFullYear();

  const getUser = async () => {
    console.log("Making a new HTTP request");

    const response = await fetch("https://randomuser.me/api/");

    const data = await response.json();
    setUser({
      id: data.id,
      firstName: data["first_name"],
      lastName: data["last_name"],
    });
  }

  // getUser(); // this will cause an endless loop of sending HTTP-REQs and re-render. Website might block us

  return (
    <>
      <label className={styles["listing-picker-label"]} htmlFor="listingDate">Select date:</label>
      {/* Controlled input: the value must be "YYYY-MM-DD" for <input type="date">,
          hence the toISOString().split("T")[0] conversion. */}
      <input type="date" name="" id="listingDate" className={styles["listing-picker-input"]} value={currentDate.toISOString().split("T")[0]} onChange={dateChangeHandler} />
      <RecordList records={allRecords.filter(dateFilter)} />
      <div>
        <p>user.id</p>
        <p>user.firstName</p>
        <p>user.lastName</p>
      </div>
    </>
  );
}

export default ListingSection;