import { useState } from "react";

const TrueFalseState = () => {
  const [boolean, setBoolean] = useState(false);
  console.log(boolean);
  return (
    <>
      {/* These above and below are empty element (jsx Fragments). 
      Use these when you really dont see any other html element fitting */}
      <div>{boolean.toString()}</div>
      <button onClick={() => setBoolean((current) => !current)}>
        Change State
      </button>
    </>
  );
};

export default TrueFalseState;
