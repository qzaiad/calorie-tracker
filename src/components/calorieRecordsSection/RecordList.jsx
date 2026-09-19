import CalorieRecord from './CalorieRecord'
import styles from "./RecordList.module.css"


function RecordList(props) {
  return (
    <ul className={styles.record_list}>
      {
        props.records.map((record) =>
          record.calories >= 0 && (
            <li key={record.id} className={styles.record_item}>
              <CalorieRecord date={record.date} meal={record.meal} content={record.content} calories={record.calories}/>
            </li>
          )
        )
      }
    </ul>
  );
}

export default RecordList;