import { useState } from "react";
import "./App.css";

const App = () => {
  // // PART 1 The right way of updating a counter
  // const [counter, setCounter] = useState(100);
  // const increase = () => {
  //   setCounter((prevCounter) => prevCounter + 1);
  // };

  // // PART 2 Change username
  // const [user, setUser] = useState({
  //   name: "john",
  //   email: "john@doe.com",
  //   images: [],
  // });
  // const [input, setInput] = useState("");
  // const changeUser = () => {
  //   setUser((prev) => ({ ...prev, name: input }));
  // };

  // console.count("updated");

  // // PART 3 Change multiple lines in useState
  // const [profile, setProfile] = useState({
  //   name: "",
  //   surname: "",
  //   username: "",
  //   email: "",
  //   country: "",
  //   city: "",
  //   address: "",
  // });

  // const handleChange = (e) => {
  //   // console.log(e.target.value);
  //   setProfile((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  return (
    <div className="App">
      <h1>useState</h1>
      {/* PART 1 */}
      {/* <p>{counter}</p>
      <button onClick={increase}>Increase</button> */}

      {/* PART 2 */}
      {/* <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        placeholder="change your username"
      />
      <p>{user.name}</p>
      <button onClick={changeUser}>save</button> */}

      {/* PART 3 */}
      {/* {Object.values(profile).map((info, index) => (
        <p key={index}>{info}</p>
      ))}

      <input
        type="text"
        name="name"
        onChange={handleChange}
        placeholder="name"
      />
      <input
        type="text"
        name="surname"
        onChange={handleChange}
        placeholder="surname"
      />
      <input
        type="text"
        name="username"
        onChange={handleChange}
        placeholder="username"
      />
      <input
        type="text"
        name="email"
        onChange={handleChange}
        placeholder="email"
      />
      <input
        type="text"
        name="country"
        onChange={handleChange}
        placeholder="country"
      />
      <input
        type="text"
        name="city"
        onChange={handleChange}
        placeholder="city"
      />
      <input
        type="text"
        name="address"
        onChange={handleChange}
        placeholder="address"
      /> */}
    </div>
  );
};

export default App;
