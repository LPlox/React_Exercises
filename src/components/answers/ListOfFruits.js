import { useState } from "react";

const ListOfFruits = () => {
  const [fruits, setFruits] = useState(["Banana", "Apple", "Pear"]);
  const [input, setInput] = useState("");

  const addFruit = () => {
    if (input) {
      setFruits((prev) => [...prev, input]);
      setInput("");
    }
  };

  return (
    <div>
      <ul>
        {fruits.map((fruit, index) => (
          <li ley={index}>{fruit}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add a new fruit"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button onClick={addFruit}>Add fruits</button>
    </div>
  );
};

export default ListOfFruits;
