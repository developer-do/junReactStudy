import React from "react";

const Map = () => {
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number, index) => (
    <li key={index}>{number}</li>
  ));

  return <ul>{listItems}</ul>;
};

export default Map;
