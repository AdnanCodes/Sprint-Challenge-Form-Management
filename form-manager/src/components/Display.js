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
                <br />
                Name: {item.name} <br />
                Course: {item.course} <br />
                Technique: {item.technique} <br />
                <br />
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Display;
