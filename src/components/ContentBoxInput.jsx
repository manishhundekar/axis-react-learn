import { useState } from "react";

function ContentBoxInput(props) {

  const [data, setData] = useState("Axis")
  
  const handleChange = (e) => {
    console.log(e.target.value)
    setData(e.target.value)
  }

  return <div style={{border: '2px solid black'}}>
      <input type="text" value={data} onChange={handleChange} />
  </div>;
}

export default ContentBoxInput