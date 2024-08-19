import { useState } from "react";
import "./App.css";
import Child from "./components/Child";

function App() {
  const [name, setName] = useState("Darshan");

  const choosemsg = (msg) => {
    setName(name === "Darshan" ? msg : "Darshan");
  };
  return (
    <>
      <div className="container">
        {" "}
        Hello My name is <span>{name}</span> <Child choosemsg={choosemsg} />
      </div>
    </>
  );
}

export default App;
