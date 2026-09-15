// import './App.css'
import CalorieRecord from './components/CalorieRecord'

function App() {
  return (
      <div className="App">
        <h1>Welcome to React with Almdrasa!</h1>
        <CalorieRecord date={new Date(2023, 2, 1)} meal="Breakfast" content="Eggs" calories="340"/>
        <CalorieRecord date={new Date(2023, 2, 2)} meal="Lunch" content="Chicken" calories="600"/>
        <CalorieRecord date={new Date(2023, 2, 3)} meal="Dinner" content="Cheese" calories="200"/>
        <CalorieRecord date={new Date(2023, 2, 4)} meal="Snacks" content="Chocolate" calories="500"/>
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
