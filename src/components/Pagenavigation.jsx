import React from "react";

function Pagenavigation({ pageNo, handlePrev, handleNext }) {
  return (
    <div className="bg-gray-400 text-white p-4 flex justify-center">
      <div
        onClick={handlePrev}
        className="px-8 hover:cursor-pointer hover:scale-150 duration-300"
      >
        <i className="fa-solid fa-arrow-left"></i>
      </div>
      <div>{pageNo}</div>
      <div
        onClick={handleNext}
        className="px-8 hover:cursor-pointer hover:scale-150 duration-300"
      >
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
}

export default Pagenavigation;
