import React from "react";

function Catagory({ catagories, filterCatagory }) {
  return (
    <div>
      {catagories.map((catagory) => {
        return (
          <button key={catagory} onClick={() => filterCatagory(catagory)}>
            {catagory}
          </button>
        );
      })}
    </div>
  );
}

export default Catagory;
