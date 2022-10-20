import './css/App.css';
import Car from "./components/Car";
import Football from "./components/Football"
import Garage from "./components/Garage";
import MyForm from "./components/MyForm";

function App() {
  const cars = [
    { id: 1, name: "Audi" },
    { id: 2, name: "BMW" },
    { id: 3, name: "Toyota" }
  ]

  return (
    <div className="App">
      <Car brand="Ford" />
      <Football />
      <Garage cars={cars} />
      <Garage cars={[]} />
      <MyForm />
    </div>
  );
}

export default App;
