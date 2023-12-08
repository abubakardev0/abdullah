import React from "react";

const Heading = ({ title }) => {
  title = title || "Default Title";
  return (
    <header className="w-full text-center font-semibold text-4xl">
      <h1>{title}</h1>
    </header>
  );
};

export default Heading;
