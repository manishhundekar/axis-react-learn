import { useState } from "react";

function ContentBox(props) {
  //State Variable
  const [status, setStatus] = useState("Initial State Status");

  const handleClick = (e) => {
    console.log(props.message);
    setStatus("State Changed");
  };

  return (
    <div style={{ border: "2px solid black" }}>
      <h2>{props.message}</h2>
      <button onClick={handleClick}>CHANGE THE STATE</button>
      <h3>{status}</h3>
    </div>
  );
}

// var ContentBox = (props) => {
//     return <h2>{props.message}</h2>
// }

export default ContentBox;
