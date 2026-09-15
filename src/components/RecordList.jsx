import "./RecordList.css";
import CalorieRecord from './CalorieRecord'

function RecordList(props) {
  const records = props.records;
  return (
    <ul className="record-list">
      <li>
        <CalorieRecord date={records[0].date} meal={records[0].meal} content={records[0].content} calories={records[0].calories}/>
      </li>
      <li>
        <CalorieRecord date={records[1].date} meal={records[1].meal} content={records[1].content} calories={records[1].calories}/>
      </li>
      <li>
        <CalorieRecord date={records[2].date} meal={records[2].meal} content={records[2].content} calories={records[2].calories}/>
      </li>
      <li>
        <CalorieRecord date={records[3].date} meal={records[3].meal} content={records[3].content} calories={records[3].calories}/>
      </li>
    </ul>
  );
}

export default RecordList;