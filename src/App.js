import ListOfFruits from "./components/answers/ListOfFruits";
import TrueFalseState from "./components/answers/TrueFalseState";
import ProfileEdit from "./components/answers/ProfileEdit";
import "./App.css";

// Browse into the components folder and start coding!
const App = () => {
  return (
    <section>
      <TrueFalseState />
      <ListOfFruits />
      <ProfileEdit />
    </section>
  );
};

export default App;
