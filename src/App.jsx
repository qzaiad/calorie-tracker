import { useState } from 'react';
import RecordList from './components/calorieRecordsSection/RecordList';
import CaloriesRecordEdit from './components/edit/CaloriesRecordEdit';

function App() {
  const INITIAL_RECORDS = [
    {
      id: 1,
      date: new Date(2023, 2, 1),
      meal: "Breakfast",
      content: "Eggs",
      calories: -340,
    },
    {
      id: 2,
      date: new Date(2023, 2, 2),
      meal: "Lunch",
      content: "Chicken",
      calories: 600,
    },
    {
      id: 3,
      date: new Date(2023, 2, 3),
      meal: "Dinner",
      content: "Cheese",
      calories: 200,
    },
    {
      id: 4,
      date: new Date(2023, 2, 4),
      meal: "Snacks",
      content: "Chocolate",
      calories: 500,
    },
  ]
  
  const [records, setRecords] = useState(INITIAL_RECORDS);
  const [nextId, setNextId] = useState(INITIAL_RECORDS.length + 1)

  const onFormSubmitHandler = (record) => {
    // console.log(record);
    const formattedRecord = {
      ...record,
      date: new Date(record.date),
      // very bad idea, because an element might be deleted/added/reorded and uniqueness is not guaranteed
      id: nextId,
    }
    // console.log(formattedRecord);
    setNextId(lastUsedId => lastUsedId + 1)
    setRecords(prevRecords => [formattedRecord, ...prevRecords]);
  };

  return (
      <div className="App">
        <h1>Welcome to React with Almdrasa!</h1>
        <CaloriesRecordEdit onFormSubmit={onFormSubmitHandler} />
        <RecordList records={records}/>
      </div>
  );
}

export default App
