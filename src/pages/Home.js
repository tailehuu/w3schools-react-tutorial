import Car from "../components/Car";
import Football from "../components/Football";
import Garage from "../components/Garage";
import MyForm from "../components/MyForm";

const Home = () => {
  const cars = [
    { id: 1, name: "Audi" },
    { id: 2, name: "BMW" },
    { id: 3, name: "Toyota" }
  ]

  return (
    <>
      <h1>Home</h1>

      <Car brand="Ford" />

      <Football />

      <Garage cars={cars} />

      <Garage cars={[]} />

      <MyForm />
    </>
  )
}

export default Home
