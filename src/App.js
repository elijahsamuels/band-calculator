import "./App.css";
import Calculator from "./components/calculator.js";

function App() {

	const d = new Date();
	let year = d.getFullYear();
	
  return (
    <div className="App">
      <Calculator />

      <div>©{year} < a href="mailto:elijahsamuels@gmail.com">Elijah Samuels</a>
    </div>
	</div> 
  );
}

export default App;