import RecordList from './components/calorieRecordsSection/RecordList';
import CaloriesRecordEdit from './components/edit/CaloriesRecordEdit';

function App() {
  const records = [
    {
      date: new Date(2023, 2, 1),
      meal: "Breakfast",
      content: "Eggs",
      calories: 340,
    },
    {
      date: new Date(2023, 2, 2),
      meal: "Lunch",
      content: "Chicken",
      calories: 600,
    },
    {
      date: new Date(2023, 2, 3),
      meal: "Dinner",
      content: "Cheese",
      calories: 200,
    },
    {
      date: new Date(2023, 2, 4),
      meal: "Snacks",
      content: "Chocolate",
      calories: 500,
    },
  ]

  const onFormSubmitHandler = (record) => {
    console.log(record);
  };

  return (
      <div className="App">
        <h1>Welcome to React with Almdrasa!</h1>
        <CaloriesRecordEdit onFormSubmit={onFormSubmitHandler} />
        <RecordList records={records}/>
      </div>
  );
  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
}

export default App
