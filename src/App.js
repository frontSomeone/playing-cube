import { useState } from "react";
import Cube from "./component/playingCube";

function App() {
  const [pos, setPos] = useState(0);
  return (
    <Cube
    images = {[
      "./images/1.png",
      "./images/2.png",
      "./images/3.png",
      "./images/4.png",
      "./images/5.png",
      "./images/6.png",
    ]}
    pos = {pos}

    randomNum={() => {
    let min = Math.ceil(0);
    let max = Math.floor(5);
    let value = Math.floor(Math.random() * (max - min + 1) + min);
    setPos(value);
    }}/>
    
  );
}

export default App;
