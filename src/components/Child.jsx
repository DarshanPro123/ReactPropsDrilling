import React from "react";

const Child = ({ choosemsg }) => {
  const msg = "Darshan Panchal";
  return (
    <>
      <div>
        <button onClick={() => choosemsg(msg)}>Click Me</button>
      </div>
    </>
  );
};

export default Child;
