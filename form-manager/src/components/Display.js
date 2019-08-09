import React from "react";

const Display = props => {
  return (
    <div>
      <br />
      <button onClick={props.btn}>Show me some secret data</button>
      {props.dataStatus ? (
        <div>
          {props.data.map(item => {
            return (
              <div key={item.name}>
                <div>Name: {item.name}</div>
                <div>Course: {item.course}</div>
                <div>Technique: {item.technique}</div>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Display;
