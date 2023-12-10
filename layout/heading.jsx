import React from "react";

const Heading = ({ title }) => {
  title = title || "Default Title";
  return (
    <h1 className="w-full text-center font-semibold text-4xl  ">{title}</h1>
  );
};

export default Heading;
