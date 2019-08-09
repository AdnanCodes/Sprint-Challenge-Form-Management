import React from "react";

const Display = props => {
  console.log(props);
  return (
    <div>
      <button onClick={props.btn}>Show me some secret data</button>
      {props.dataStatus ? <div> Hi there</div> : null}
    </div>
  );
};

export default Display;
