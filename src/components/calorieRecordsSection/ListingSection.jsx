/**
 * Listing section: filters the full record list to a single day and renders
 * the records for that day.
 *
 * The selected date is local component state; the date input is a controlled
 * component whose value is derived from `currentDate`.
 */
import RecordList from "./RecordList";
import styles from "./ListingSection.module.css";
import { useState, useEffect } from "react";
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
    // console.log(data["results"]);
    // console.log(data["results"][0].id.value);
    // console.log(data["results"][0].name);
    // console.log(data["results"][0].name.first);
    // console.log(data["results"][0].name.last);
    setUser({
      id: data["results"][0].id.value,
      firstName: data["results"][0].name.first,
      lastName: data["results"][0].name.last,
    });
  }

  // useEffect(() => {
  //   getUser();
  // }, [])

  return (
    <>
      <label className={styles["listing-picker-label"]} htmlFor="listingDate">Select date:</label>
      {/* Controlled input: the value must be "YYYY-MM-DD" for <input type="date">,
          hence the toISOString().split("T")[0] conversion. */}
      <input type="date" name="" id="listingDate" className={styles["listing-picker-input"]} value={currentDate.toISOString().split("T")[0]} onChange={dateChangeHandler} />
      <RecordList records={allRecords.filter(dateFilter)} />
      {/* <div>
        <p>id: {user.id}</p>
        <p>first name: {user.firstName}</p>
        <p>last name: {user.lastName}</p>
      </div> */}
    </>
  );
}

export default ListingSection;