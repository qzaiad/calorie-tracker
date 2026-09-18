import "./RecordList.css";
import CalorieRecord from './CalorieRecord'

function RecordList(props) {
  return (
    <ul className="record-list">
      {
        props.records.map((record) => (
            <li key={record.key}>
              <CalorieRecord date={record.date} meal={record.meal} content={record.content} calories={record.calories}/>
            </li>
        )
        )
      }
    </ul>
  );
}

export default RecordList;