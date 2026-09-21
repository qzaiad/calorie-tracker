import RecordList from "./RecordList";
import styles from "./ListingSection.module.css";
import { useState } from "react";
import { getDatFromString } from "../../utils";

function ListingSection(props){
  const { allRecords } = props;
  const [currentDate, setCurrentDate] = useState(new Date()); // UTC time

  const dateChangeHandler = (event) => {
    // console.log({
    //   "event.target.value": event.target.value,
    //   "Date(event.target.value)": new Date(event.target.value),
    //   "getDatFromString(event.target.value)": getDatFromString(event.target.value)
    // });
    setCurrentDate(getDatFromString(event.target.value));
  }

  const dateFilter = (record) =>
    record.date.getDate() === currentDate.getDate() &&
    record.date.getMonth() === currentDate.getMonth() &&
    record.date.getFullYear() === currentDate.getFullYear();

  return (
    <>
      <label className={styles["listing-picker-label"]} htmlFor="listingDate">Select date:</label>
      <input type="date" name="" id="listingDate" className={styles["listing-picker-input"]} value={currentDate.toISOString().split("T")[0]} onChange={dateChangeHandler} />
      <RecordList records={allRecords.filter(dateFilter)} />
    </>
  );
}

export default ListingSection;