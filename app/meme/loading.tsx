import React from "react";

const loading = () => {
  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] text-red-500">
      <div className="spinner"></div>
    </div>
  );
};

export default loading;
