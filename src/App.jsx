import { useState } from "react";
import "./App.css";
import AppHeading from "./components/AppHeading";
import Items from "./components/Items";
import ErrorMsg from "./components/ErrorMsg";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  let [cuurentstate, setcurrenttext] = useState([
    "roti",
    "Dal",
    "chaval",
    "chole",
    "Butter",
  ]);

  

  const OnKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodtiem = event.target.value;
      let newItem = [...cuurentstate, newFoodtiem];
      setcurrenttext(newItem);
      console.log(newFoodtiem);
    }
  };

  return (
    <Container>
      <AppHeading></AppHeading>
      <FoodInput handleKeyDown={OnKeyDown}></FoodInput>
      
      <ErrorMsg array={cuurentstate}></ErrorMsg>
      <Items array={cuurentstate}></Items>
    </Container>
  );
}

export default App;
