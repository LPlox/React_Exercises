import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0);
  const increase = () => {
    setCounter((prev) => prev + 1);
  };
  // useEffect(() => {
  //   console.count("mounted");
  // }, []);
  // useEffect(() => {
  //   console.count("useEffect runs!");
  // }, [counter]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  console.count("component updated!");

  return (
    <div className="App">
      <h1>useEffect</h1>
      <p>{counter}</p>
      <button onClick={increase}>Increase</button>
    </div>
  );
};

export default App;
